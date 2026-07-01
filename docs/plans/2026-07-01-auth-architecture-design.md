# Shopify App 认证架构设计

## 背景

returnfast 是一个 Shopify 退换货管理 App，采用前后端分离架构：

- **Remix** — 纯 UI 层，嵌入 Shopify Admin iframe
- **Laravel** — 业务中心，持有所有敏感数据和凭据

## 架构总览

```
Shopify Admin (iframe)
        │
        ▼
┌─────────────────────────────┐
│         Remix (UI)          │
│                             │
│  App Bridge → session_token │
│  React Router loader/action │
│  httpOnly cookie (JWT)      │
└──────────┬──────────────────┘
           │ Authorization: Bearer <JWT>
           ▼
┌─────────────────────────────┐
│      Laravel API Server     │
│                             │
│  ├─ JWT Guard (shopify)     │
│  ├─ /api/shopify/*          │
│  ├─ /auth, /auth/callback   │
│  └─ /webhooks/*             │
│                             │
│  MySQL:                     │
│  ├─ shops                   │
│  ├─ access_token            │
│  └─ ...                     │
└─────────────────────────────┘
```

**关键原则：** Access Token 仅由 Laravel 持有，Remix 永远不接触。

## 1. 认证流程

### 1.1 OAuth 安装（首次）

```
商家点击 App → iframe 加载 Remix
        │
        ▼
Remix loader 检测无 JWT cookie
        │
        ▼
重定向到 Laravel /auth?shop=xxx.myshopify.com
        │
        ▼
Laravel 构建 Shopify OAuth URL → 302 跳转
        │
        ▼
商家在 Shopify 确认授权
        │
        ▼
Shopify 回调 Laravel /auth/callback?code=xxx&shop=xxx
        │
        ▼
Laravel:
  ├─ 用 code 换取 access_token (offline)
  ├─ 存储 shops 表 (shop_domain, access_token, shopify_shop_id...)
  ├─ 签发 Laravel JWT (sub=shop_id, 有效期 24h)
  └─ 重定向回 Remix，httpOnly cookie 携带 JWT
```

### 1.2 后续请求认证

```
Remix loader/action 发起请求
        │
        ▼
取出 httpOnly cookie 中的 Laravel JWT
        │
        ▼
fetch(LARAVEL_API + /api/shopify/*)
       headers: { Authorization: Bearer <JWT> }
        │
        ▼
Laravel JWT Middleware:
  ├─ 验证 JWT 签名
  ├─ 解析 shop_id
  └─ 注入当前店铺上下文
        │
        ▼
Controller 执行业务逻辑
```

### 1.3 Token 过期处理

```
Laravel JWT 过期 → API 返回 401
        │
        ▼
Remix loader 检测 401
        │
        ▼
用 Shopify session token (App Bridge 提供) 调 /api/shopify/auth/exchange
        │
        ▼
Laravel:
  ├─ 验签 Shopify session token
  ├─ 解析 dest (shop domain)
  ├─ 查 shops 表找到对应 access_token
  ├─ 签发新 Laravel JWT
  └─ 返回新 JWT + set-cookie
        │
        ▼
Remix 重试原请求
```

### 1.4 App 卸载

```
Shopify → POST /webhooks/app/uninstalled
        │
        ▼
Laravel:
  ├─ 验证 HMAC 签名
  ├─ 标记 shops.uninstalled_at
  └─ 返回 200 OK
```

## 2. API 端点设计

### 2.1 认证端点（Laravel Web 路由）

| 方法 | 路径 | 用途 |
|------|------|------|
| GET | `/auth` | OAuth 入口，跳转 Shopify 授权页 |
| GET | `/auth/callback` | OAuth 回调，换 access_token + 签发 JWT |

### 2.2 业务端点（Laravel API 路由，前缀 /api/shopify）

| 方法 | 路径 | 用途 | 认证 |
|------|------|------|------|
| POST | `/api/shopify/auth/exchange` | 用 Shopify session token 换 Laravel JWT | 无 |
| GET | `/api/shopify/me` | 获取当前店铺信息 | Laravel JWT |

### 2.3 Webhook 端点（Laravel Web 路由）

| 方法 | 路径 | 用途 |
|------|------|------|
| POST | `/webhooks/app/uninstalled` | 商家卸载 App |

## 3. 数据库

### shops 表

```sql
CREATE TABLE shops (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    shop_domain     VARCHAR(255) NOT NULL UNIQUE,
    access_token    TEXT NOT NULL,
    shopify_shop_id BIGINT,
    email           VARCHAR(255),
    myshopify_domain VARCHAR(255),
    plan            VARCHAR(50) DEFAULT 'free',
    installed_at    DATETIME NOT NULL,
    uninstalled_at  DATETIME NULL,
    created_at      DATETIME,
    updated_at      DATETIME
);
```

Access Token 明文存储，依靠数据库访问控制 + HTTPS 保护。

## 4. Remix 路由结构

| 路由 | 用途 |
|------|------|
| `app.tsx` | 布局 + 全局 loader 检测 JWT |
| `auth.login/route.tsx` | 无 JWT 时重定向到 Laravel /auth |
| `_index.tsx` | 仪表盘，展示店铺授权信息和状态 |
| `settings.tsx` | 授权设置页 |

### loader 示例

```ts
// app/routes/app.tsx
export async function loader({ request }: LoaderFunctionArgs) {
  const jwt = getCookie(request, 'laravel_jwt');
  if (!jwt) throw redirect('/auth/login');

  const res = await fetch(`${LARAVEL_API}/api/shopify/me`, {
    headers: { Authorization: `Bearer ${jwt}` },
  });

  if (res.status === 401) throw redirect('/auth/login');

  return defer({ shop: res.json() });
}
```

## 5. 安全边界

- **Access Token** 仅存在于 Laravel 数据库和内存中，永不进入 Remix 环境
- **Laravel JWT** 存储在 httpOnly cookie 中，前端 JS 无法读取
- **Shopify session token** 由 App Bridge 管理，仅用于换取 Laravel JWT
- **Webhook** HMAC 签名在 Laravel 侧验证
- CSRF 防护：Remix 内置 + Laravel 侧校验

## 6. 第一阶段范围（仅授权）

- [x] Laravel OAuth 安装流程 (/auth, /auth/callback)
- [x] Laravel API: session token 交换 JWT (/api/shopify/auth/exchange)
- [x] Laravel API: 店铺信息接口 (/api/shopify/me)
- [x] Laravel Webhook: app/uninstalled
- [x] Laravel shops 表 migration + model
- [x] Remix App Bridge 初始化（移除 @shopify/shopify-app-react-router 认证）
- [x] Remix JWT cookie 检测 + 自动重定向 OAuth
- [x] Remix 仪表盘页面展示授权信息

## 7. 部署说明

- Remix 地址配置为 Shopify Partners 中的 Application URL
- Laravel 地址不对外暴露，仅 Remix 服务端和 Shopify Webhook/OAuth 回调可访问
- 两者通过内部网络或 HTTPS 通信