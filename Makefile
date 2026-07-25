# returnfast-app Makefile
#
# 本地开发:
#   make dev   跑 Shopify CLI dev(本地需要 cloudflared tunnel)
#
# Docker 镜像:
#   make docker_push_dev        构建并推送 dev 镜像
#   make docker_push_prod       构建并推送 prod 镜像(VERSION=1.2.3)
#   make docker_build_dev       仅构建不推送
#   make docker_build_prod      仅构建不推送

ROOT := $(CURDIR)

REGISTRY    := registry.cn-hangzhou.aliyuncs.com
REGISTRY_NS := rx-prod
IMAGE       := $(REGISTRY)/$(REGISTRY_NS)/returnfast-app
VERSION     ?= latest

.PHONY: dev docker_build_dev docker_push_dev docker_build_prod docker_push_prod

## ───── 本地开发 ────────────────────────────────────────────────────

## Shopify CLI dev(启动 Cloudflare Tunnel + shopify app dev)
dev:
	@cloudflared --config config.yaml tunnel run shopify-local & \
	tunnel_pid=$$!; \
	trap "kill $$tunnel_pid 2>/dev/null" INT TERM; \
	shopify app dev --tunnel-url https://shopify-local.cyanprobe.com:3000; \
	status=$$?; \
	kill $$tunnel_pid 2>/dev/null; \
	exit $$status

## ───── Docker 镜像(生产部署) ─────────────────────────────────────

docker_build_dev:
	docker build --progress=plain -t $(IMAGE):dev -f docker/Dockerfile .

docker_push_dev: docker_build_dev
	docker push $(IMAGE):dev
	@echo "✓ pushed: $(IMAGE):dev"

docker_build_prod:
	docker build --progress=plain -t $(IMAGE):$(VERSION) -f docker/Dockerfile .

docker_push_prod: docker_build_prod
	docker push $(IMAGE):$(VERSION)
	@echo "✓ pushed: $(IMAGE):$(VERSION)"