#!/bin/bash
set -e

# 1. 端口(可被 K8s env 覆盖)
export PORT="${PORT:-3000}"
export HOST="${HOST:-0.0.0.0}"

# 2. Laravel 后端健康检查(可选,如 SHOPIFY_API_URL 已设置)
if [ -n "$LARAVEL_BACKEND_URL" ]; then
    echo "[entrypoint] Laravel backend: $LARAVEL_BACKEND_URL"
fi

# 3. Shopify CLI / tunnel 由 K8s 侧不跑(本地 dev 才需要)
#    生产镜像只跑 react-router-serve

exec "$@"