# returnfast-app — Shopify Embedded App (React Router v7)

Shopify Embedded App built with React Router v7, using a Laravel backend for OAuth and API.

## Architecture

```
Shopify Admin (iframe)
  │
  └── Remix App (React Router v7)
        │
        ├── Local: fixed Cloudflare named tunnel (shopify-local.cyanprobe.com)
        ├── Dev: stable dev app domain
        └── Prod: stable production app domain

Laravel Backend ← separate process, the auth & API server
  ├── GET /auth               → Shopify OAuth entry
  ├── GET /auth/callback      → Shopify OAuth callback
  └── /api/shopify/*          → Shopify API (JWT-protected)
```

Shopify's public entrypoint is always the Remix app domain. Remix forwards OAuth callbacks, webhooks, and `/api/shopify/*` requests to Laravel using `LARAVEL_API_URL`.

## Shopify App Environments

| Environment | Shopify App | Config | Deploy |
|---|---|---|---|
| local | ReturnFast Local (`https://shopify-local.cyanprobe.com`) | `shopify.app.toml` | `npm run deploy` or `make dev-local` during dev |
| dev | ReturnFast Dev (`https://dev-app.returnfast.net`) | `shopify.app.dev.toml` | `make deploy-dev` |
| prod | ReturnFast (`https://app.returnfast.net`) | `shopify.app.prod.toml` | `make deploy-prod` |

Rules:
- `shopify.app.toml` is local only and must never point to dev or prod.
- Dev/prod deploy commands must pass explicit `--config`.
- Prod deploy must use `make deploy-prod`; it requires the exact confirmation phrase `deploy ReturnFast prod`.
- Webhook `uri` values stay relative in Shopify config.
- Shopify OAuth redirects always target Remix `/auth/callback`. Do not add Laravel `/auth/callback` URLs directly to Shopify redirect allowlists.

## Startup Sequence

Start services in order:

### 1. Laravel Backend

```bash
cd /Users/cyan/Desktop/lb/returnfast/returnfast
php artisan serve --port=8001
```

Config: `.env` — key variables:
- `SHOPIFY_API_KEY` — from Shopify Partners
- `SHOPIFY_API_SECRET` — from Shopify Partners
- `REMIX_URL` — must match the current Remix app URL for the same environment

For each environment, these values must point to the same Shopify app/backend/database boundary:
- Remix `SHOPIFY_API_KEY`
- Laravel Shopify API key / secret
- Remix `LARAVEL_API_URL`
- Laravel `REMIX_URL`
- Database credentials

Do not mix local frontend with dev/prod Laravel, and do not let Laravel validate session tokens for a different Shopify app.

### 2. Local Shopify App Dev (Remix + Fixed Tunnel)

```bash
cd /Users/cyan/Desktop/lb/returnfast/returnfast-app
make dev-local
```

This starts:
- Cloudflare named tunnel → `https://shopify-local.cyanprobe.com`
- Shopify CLI proxy using `--tunnel-url https://shopify-local.cyanprobe.com:3000`
- React Router dev server

### 3. Sync Local Laravel URL

Local Laravel should use the fixed Remix URL:

```bash
# Edit /Users/cyan/Desktop/lb/returnfast/returnfast/.env
REMIX_URL=https://shopify-local.cyanprobe.com

# Then restart Laravel
cd /Users/cyan/Desktop/lb/returnfast/returnfast
php artisan optimize:clear && php artisan serve --port=8001
```

### 4. Run DB Migrations (first time only)

```bash
cd /Users/cyan/Desktop/lb/returnfast/returnfast
php artisan migrate
```

### Quick-Start Checklist

| Step | Command | Check |
|------|---------|-------|
| 1. MySQL running | `docker ps` (if using Docker) | Port 3306 |
| 2. Laravel started | `php artisan serve --port=8001` | Port 8001 |
| 3. Shopify dev started | `make dev-local` | fixed `shopify-local.cyanprobe.com` tunnel |
| 4. REMIX_URL synced | edit `.env` | `https://shopify-local.cyanprobe.com` |
| 5. Laravel restarted | `php artisan optimize:clear && php artisan serve --port=8001` | Port 8001 |

## Auth Flow: ReturnFast JWT From Shopify Session Token

The app uses Shopify runtime session tokens only as exchange credentials. Laravel
issues scoped ReturnFast JWTs, and Shopify access tokens stay only in Laravel.

### Normal Auth

```
Shopify Admin (iframe)
  │ App Bridge session token
  ▼
app.tsx AuthProvider / extension runtime
  │ sessionStorage lookup by returnfast:{shop}:admin|customer:access
  │ cache miss or expired → sessionToken.get()/idToken()
  ▼
Laravel
  │ POST /api/shopify/admin/session/exchange
  │ POST /api/shopify/customer/session/exchange
  ▼
ReturnFast JWT { typ:returnfast_shopify_access, scope:shopify_admin|shopify_customer }
  ▼
Direct Laravel API calls with Authorization: Bearer <returnfast_jwt>
```

Remix is not a business API gateway. Keep OAuth callback proxy support only.

### First-time Install (OAuth, one-time)

Only used when a merchant first installs the app (acquires permanent `access_token`):
1. `/auth/login` form → Laravel `GET /auth` → Shopify OAuth
2. Shopify callback → `/auth/callback` (Remix) → Laravel `GET /auth/callback`
3. Laravel stores `access_token` in `shops` table, redirects back

The ReturnFast JWT is stored in `sessionStorage`, never in `localStorage` or cookies.

## Key Files

| File | Role |
|------|------|
| `app/routes/app.tsx` | App layout + AuthProvider (session token exchange, AuthContext) |
| `app/routes/app._index.tsx` | Dashboard page (client-side fetch via apiFetch) |
| `app/routes/app.settings.tsx` | Embedded settings page (default return toggle + reconnect) |
| `app/shared/shopify-auth/token-manager.ts` | sessionStorage token cache, refresh lock, exchange |
| `app/shared/shopify-auth/api-client.ts` | Direct Laravel API client with bearer JWT and one retry |
| `extensions/returnfast-admin-order/src/OrderReturnToggle.tsx` | Admin order detail return toggle extension |
| `extensions/returnfast-customer-account/src/returnPermission.ts` | Customer extension permission exchange/check |
| `app/routes/auth.login/route.tsx` | First-time install form (OAuth) |
| `app/routes/auth.callback.tsx` | OAuth callback proxy to Laravel |
| `app/lib/laravel-api.ts` | Embedded App admin API wrapper around shared ReturnFast JWT client |
| `app/lib/laravel.server.ts` | Server-side fetchApi (for webhooks) |
| `app/shopify.server.ts` | Shopify API key export |
| `shopify.app.toml` | App config (redirect URLs, scopes) |
| `vite.config.ts` | Vite/React Router config |

**⚠️ Naming gotcha:** Files matching `*.client.*` are treated as client-only by Vite. Do NOT name a module `foo.client.ts` if it needs to be imported during SSR — use `foo-api.ts` instead.

## Known Issues & Fixes

### React Router v7: no `json` export

React Router v7 removed the `json` helper from `react-router`. Use plain `Response` objects:
```ts
new Response(JSON.stringify({ error: "..." }), { status: 400, headers: { "Content-Type": "application/json" } });
```

### File named `*.client.*` is client-only

Vite treats `foo.client.ts` as client-only and stubs it during SSR (exports become undefined → "is not a function" errors). Rename to avoid the `.client.` segment.

### REMIX_URL points at the wrong environment

`REMIX_URL`, Remix `SHOPIFY_API_KEY`, Remix `LARAVEL_API_URL`, Laravel Shopify credentials, and database credentials must all belong to the same environment. If OAuth or session token exchange fails, first check for cross-environment config mixing.

### 404 on Login button click

React Router's `<Form>` intercepts external URL submissions. Use native `<form>` when `action` is cross-origin.

### shops table not found

```bash
cd /Users/cyan/Desktop/lb/returnfast/returnfast && php artisan migrate
```

### JWTSubject error

`Shop` model must implement `Tymon\JWTAuth\Contracts\JWTSubject` and `Illuminate\Contracts\Auth\Authenticatable`.

## Tunnel URL Management

Local development uses the fixed Cloudflare named tunnel at `https://shopify-local.cyanprobe.com`.

Dev and prod use stable deployed domains and do not use Shopify CLI tunnel workflows.

The manifest at `.shopify/dev-bundle/manifest.json` is auto-updated by the CLI during local development.
