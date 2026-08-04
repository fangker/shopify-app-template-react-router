# returnfast-app Makefile
#
# 本地开发:
#   make dev-local   跑 Shopify CLI dev(本地需要 cloudflared tunnel)
#   make dev         dev-local 的兼容别名
#
# Docker 镜像:
#   make docker_push_dev        构建并推送 dev 镜像
#   make docker_push_prod       构建并推送 prod 镜像(VERSION=1.2.3)
#   make docker_build_dev       仅构建不推送
#   make docker_build_prod      仅构建不推送

ROOT := $(CURDIR)
SHOPIFY := npm exec shopify --

REGISTRY    := registry.cn-hangzhou.aliyuncs.com
REGISTRY_NS := rx-prod
IMAGE       := $(REGISTRY)/$(REGISTRY_NS)/returnfast-app
VERSION     ?= latest

.PHONY: dev dev-local deploy-dev deploy-prod docker_build_dev docker_push_dev docker_build_prod docker_push_prod

## ───── 本地开发 ────────────────────────────────────────────────────

dev: dev-local

## Shopify CLI dev(启动 Cloudflare Tunnel + shopify app dev)
dev-local:
	@cloudflared --config config.yaml tunnel run shopify-local & \
	tunnel_pid=$$!; \
	trap "kill $$tunnel_pid 2>/dev/null" INT TERM; \
	$(SHOPIFY) app dev --tunnel-url https://shopify-local.cyanprobe.com:3000; \
	status=$$?; \
	kill $$tunnel_pid 2>/dev/null; \
	exit $$status

deploy-dev:
	$(SHOPIFY) app deploy --config dev

deploy-prod:
	@echo "Target config: prod"
	@echo "Required phrase: deploy ReturnFast prod"
	@echo "Current branch: $$(git branch --show-current)"
	@echo "Working tree:"
	@git status --short
	@echo "Prod config summary:"
	@grep -E '^(client_id|name|application_url) = ' shopify.app.prod.toml
	@printf "Type confirmation phrase: "; \
	read phrase; \
	if [ "$$phrase" != "deploy ReturnFast prod" ]; then \
		echo "Aborted."; \
		exit 1; \
	fi
	$(SHOPIFY) app deploy --config prod

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
