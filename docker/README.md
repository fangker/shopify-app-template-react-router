# returnfast-app · Shopify 嵌入应用镜像构建

镜像命名:

| 镜像 | Registry |
|---|---|
| `returnfast-app` | `registry.cn-hangzhou.aliyuncs.com/rx-prod/returnfast-app` |

## 构建/推送示例

```bash
make docker_push_dev    # 构建并推送 :dev
make docker_push_prod VERSION=1.2.3
```

## 在 K8s 中使用

`returnfast-app` Deployment 拉 `returnfast-app:dev`。容器跑 `react-router-serve ./build/server/index.js`,端口 3000。

生产环境**不需要** Cloudflare Tunnel(那是本地 dev 用);K8s 直接暴露 Service 给 Shopify 后台 iFrame 嵌入。

详见 [`../../returnfast-context/ops/deployment-guide.md`](../../returnfast-context/ops/deployment-guide.md)。