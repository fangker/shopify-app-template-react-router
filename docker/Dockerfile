# syntax=docker/dockerfile:1.6
# returnhelper-app · Shopify 嵌入应用(Node 20 + React Router v7)
# 用于 K8s deployment:returnhelper-app
ARG NODE_VERSION=20.19-alpine

# ─── stage 1: deps(完整,含 dev 依赖,build 阶段需要) ───────────────
FROM node:${NODE_VERSION} AS deps

WORKDIR /app

# 只拷贝 package 文件,最大化层缓存
COPY package.json package-lock.json* ./

RUN npm ci --include=dev --no-audit --no-fund

# ─── stage 2: build ────────────────────────────────────────────────
FROM deps AS build

WORKDIR /app

COPY . .

# react-router build 产物落到 build/{client,server}
RUN npm run build

# ─── stage 3: prod deps(去掉 dev) ─────────────────────────────────
FROM node:${NODE_VERSION} AS prod-deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev --no-audit --no-fund \
 && npm cache clean --force

# ─── stage 4: runtime ──────────────────────────────────────────────
FROM node:${NODE_VERSION} AS runtime

ARG APP_ENV=production

# 必备工具
RUN apk add --no-cache curl tini wget

ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

WORKDIR /app

# 应用代码
COPY --chown=node:node . .

# prod 依赖覆盖 dev
COPY --chown=node:node --from=prod-deps /app/node_modules ./node_modules

# build 产物
COPY --chown=node:node --from=build /app/build ./build

USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://127.0.0.1:3000/up || exit 1

ENTRYPOINT ["/sbin/tini", "--", "/usr/local/bin/entrypoint.sh"]
CMD ["npm", "run", "docker-start"]