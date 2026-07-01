# returnhelper-app — Shopify Embedded App (React Router v7)

Shopify Embedded App built with React Router v7, using a Laravel backend for OAuth and API.

## Architecture

```
Shopify Admin (iframe)
  │
  └── Cloudflare Tunnel (trycloudflare.com)
        │
        └── Shopify CLI Proxy (port 57xxx)
              │
              ├── React Router Dev Server (port 57xxx)
              │     └── Remix App (React Router v7)
              │
              └── Shopify Admin API (GraphiQL on port 3457)

Laravel Backend (port 8001) ← separate process, the auth & API server
  ├── GET /auth               → Shopify OAuth entry
  ├── GET /auth/callback      → Shopify OAuth callback
  └── /api/shopify/*          → Shopify API (JWT-protected)
```

## Startup Sequence

Start services in order:

### 1. Laravel Backend

```bash
cd /Users/cyan/Desktop/lb/returnhelper
php artisan serve --port=8001
```

Config: `.env` — key variables:
- `SHOPIFY_API_KEY` — from Shopify Partners
- `SHOPIFY_API_SECRET` — from Shopify Partners
- `REMIX_URL` — **must match current Cloudflare tunnel URL** (set by `shopify app dev`)

### 2. Shopify App Dev (Remix + Tunnel)

```bash
cd /Users/cyan/Desktop/lb/returnhelper-app
shopify app dev
```

This starts:
- Cloudflare tunnel → unique `*.trycloudflare.com` URL
- Shopify CLI proxy
- React Router dev server

Output includes:
```
Preview URL: https://admin.shopify.com/store/cyantest-iu8nhgtf/apps/764c1374370c09e9e25003ac8235bf2b?dev-console=show
Using URL: https://xxx-xxx-xxx.trycloudflare.com
```

### 3. Update REMIX_URL in Laravel

Every `shopify app dev` restart generates a **new tunnel URL**. Must update:

```bash
# Edit /Users/cyan/Desktop/lb/returnhelper/.env
REMIX_URL=https://<new-tunnel-url>.trycloudflare.com

# Then restart Laravel
cd /Users/cyan/Desktop/lb/returnhelper
php artisan optimize:clear && php artisan serve --port=8001
```

### 4. Run DB Migrations (first time only)

```bash
cd /Users/cyan/Desktop/lb/returnhelper
php artisan migrate
```

### Quick-Start Checklist

| Step | Command | Check |
|------|---------|-------|
| 1. MySQL running | `docker ps` (if using Docker) | Port 3306 |
| 2. Laravel started | `php artisan serve --port=8001` | Port 8001 |
| 3. Shopify dev started | `shopify app dev` | Port 57xxx, tunnel URL |
| 4. REMIX_URL synced | edit `.env` | matches tunnel URL |
| 5. Laravel restarted | `php artisan optimize:clear && php artisan serve --port=8001` | Port 8001 |

## Auth Flow: App Bridge Session Token

The app uses Shopify App Bridge Session Tokens (NOT cookies). Two distinct flows:

### Normal Auth (every page load)

```
Shopify Admin (iframe)
  │ App Bridge injects session token (JWT signed by Shopify)
  ▼
app.tsx AuthProvider (client)
  │ const shopify = useAppBridge()   // from @shopify/app-bridge-react
  │ const sessionToken = await shopify.getSessionToken()
  │ POST /api/auth/token { session_token }
  ▼
api.auth.token.tsx (Remix action)
  │ POST http://127.0.0.1:8001/api/shopify/auth/exchange { session_token }
  ▼
Laravel ShopifyAuthController::exchange()
  │ verifies Shopify session token signature (against Shopify public keys)
  │ looks up shop by `dest` claim
  │ returns { data: { token: "<laravel_jwt>" } }
  ▼
Remix returns { token } → stored in memory (laravel-api.ts)
  ▼
Subsequent API calls via apiFetch() → Authorization: Bearer <laravel_jwt>
```

API calls from the browser go through Remix proxy routes (browser can't reach Laravel directly):
- `POST /api/auth/token` → Laravel `/api/shopify/auth/exchange` (no auth)
- `/api/shopify/*` → Laravel `/api/shopify/*` (forwards `Authorization` header)

### First-time Install (OAuth, one-time)

Only used when a merchant first installs the app (acquires permanent `access_token`):
1. `/auth/login` form → Laravel `GET /auth` → Shopify OAuth
2. Shopify callback → `/auth/callback` (Remix) → Laravel `GET /auth/callback`
3. Laravel stores `access_token` in `shops` table, redirects back

The JWT is stored in memory only (`laravel-api.ts`), never in `localStorage` or cookies.

## Key Files

| File | Role |
|------|------|
| `app/routes/app.tsx` | App layout + AuthProvider (session token exchange, AuthContext) |
| `app/routes/app._index.tsx` | Dashboard page (client-side fetch via apiFetch) |
| `app/routes/api.auth.token.tsx` | POST proxy: session token → Laravel JWT |
| `app/routes/api.shopify.$.tsx` | Catch-all proxy: `/api/shopify/*` → Laravel (with auth) |
| `app/routes/auth.login/route.tsx` | First-time install form (OAuth) |
| `app/routes/auth.callback.tsx` | OAuth callback proxy to Laravel |
| `app/lib/laravel-api.ts` | Client API: in-memory JWT, exchangeSessionToken, apiFetch |
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

### REMIX_URL out of sync with tunnel

Every `shopify app dev` restart generates a new tunnel URL. Update `REMIX_URL` in `/Users/cyan/Desktop/lb/returnhelper/.env` and restart Laravel, or the OAuth redirect lands on a dead URL.

### 404 on Login button click

React Router's `<Form>` intercepts external URL submissions. Use native `<form>` when `action` is cross-origin.

### shops table not found

```bash
cd /Users/cyan/Desktop/lb/returnhelper && php artisan migrate
```

### JWTSubject error

`Shop` model must implement `Tymon\JWTAuth\Contracts\JWTSubject` and `Illuminate\Contracts\Auth\Authenticatable`.

## Tunnel URL Management

Each `shopify app dev` restart generates a new tunnel URL. Must update:
1. `REMIX_URL` in `/Users/cyan/Desktop/lb/returnhelper/.env`
2. Restart Laravel (`php artisan optimize:clear && php artisan serve --port=8001`)

The manifest at `.shopify/dev-bundle/manifest.json` is auto-updated by the CLI.
