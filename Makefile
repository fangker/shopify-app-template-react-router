.PHONY: dev

dev:
	@cloudflared --config config.yaml tunnel run shopify-local & \
	tunnel_pid=$$!; \
	trap "kill $$tunnel_pid 2>/dev/null" INT TERM; \
	shopify app dev --tunnel-url https://shopify-local.cyanprobe.com:3000; \
	status=$$?; \
	kill $$tunnel_pid 2>/dev/null; \
	exit $$status
