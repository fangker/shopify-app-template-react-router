import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export const environments = {
  local: {
    customerPortalUrl: "http://localhost:5173",
    laravelApiUrl: "https://api-local.returnfast.net",
  },
  dev: {
    customerPortalUrl: "https://dev-customer.returnfast.net",
    laravelApiUrl: "https://dev-api.returnfast.net",
  },
  prod: {
    customerPortalUrl: "https://customer.returnfast.net",
    laravelApiUrl: "https://api.returnfast.net",
  },
};

export function syncExtensionConfig(environment = undefined) {
  const config = environment ? environments[environment] : undefined;

  if (environment && !config) {
    throw new Error(
      `Unknown extension config environment "${environment}". Expected one of: ${Object.keys(environments).join(", ")}`,
    );
  }

  const customerConfig = syncToml(
    "extensions/returnfast-customer-account/shopify.extension.toml",
    config
      ? {
          customer_portal_url: config.customerPortalUrl,
          laravel_api_url: config.laravelApiUrl,
        }
      : {},
  );
  const adminConfig = syncToml(
    "extensions/returnfast-admin-order/shopify.extension.toml",
    config ? { laravel_api_url: config.laravelApiUrl } : {},
  );

  const customerPortalUrl = readReturnFastSetting(
    customerConfig.toml,
    "customer_portal_url",
  );
  const customerApiUrl = readReturnFastSetting(customerConfig.toml, "laravel_api_url");
  const adminApiUrl = readReturnFastSetting(adminConfig.toml, "laravel_api_url");

  validateUrl("customer_portal_url", customerPortalUrl);
  validateUrl("customer laravel_api_url", customerApiUrl);
  validateUrl("admin laravel_api_url", adminApiUrl);

  if (environment && customerApiUrl !== adminApiUrl) {
    throw new Error(
      `Extension API URLs are out of sync: customer=${customerApiUrl}, admin=${adminApiUrl}`,
    );
  }

  writeFileSync(
    resolve(repoRoot, "extensions/returnfast-customer-account/src/portalConfig.generated.ts"),
    [
      `export const RETURNFAST_CUSTOMER_PORTAL_URL = ${JSON.stringify(customerPortalUrl)};`,
      `export const RETURNFAST_LARAVEL_API_URL = ${JSON.stringify(customerApiUrl)};`,
      "",
    ].join("\n"),
  );
}

function syncToml(relativePath, settings) {
  const path = resolve(repoRoot, relativePath);
  let toml = readFileSync(path, "utf8");

  for (const [key, value] of Object.entries(settings)) {
    toml = upsertReturnFastSetting(toml, key, value);
  }

  if (Object.keys(settings).length > 0) {
    writeFileSync(path, toml);
  }

  return { path, toml };
}

function readReturnFastSetting(toml, key) {
  const match = toml.match(
    new RegExp(`^\\[extensions\\.returnfast\\][\\s\\S]*?^${key}\\s*=\\s*"([^"]+)"`, "m"),
  );
  if (!match?.[1]) {
    throw new Error(`Missing [extensions.returnfast].${key} in shopify.extension.toml`);
  }
  return match[1].trim();
}

function validateUrl(key, url) {
  try {
    new URL(url);
  } catch {
    throw new Error(`Invalid ${key} in shopify.extension.toml: ${url}`);
  }
}

function upsertReturnFastSetting(toml, key, url) {
  const header = "[extensions.returnfast]";
  const replacement = `${key} = ${JSON.stringify(url)}`;

  if (!toml.includes(header)) {
    return toml.replace(
      /^(\[\[extensions\.targeting\]\])/m,
      `${header}\n${replacement}\n\n$1`,
    );
  }

  return toml.replace(
    /^(\[extensions\.returnfast\]\n)([\s\S]*?)(?=^\[|\z)/m,
    (_match, sectionHeader, body) => {
      const lines = String(body)
        .split("\n")
        .filter((line) => !new RegExp(`^${key}\\s*=`).test(line));
      const firstBlank = lines.findIndex((line) => line.trim() === "");
      if (firstBlank >= 0) {
        lines.splice(firstBlank, 0, replacement);
      } else {
        lines.push(replacement);
      }

      return `${sectionHeader}${lines.join("\n")}`;
    },
  );
}

if (import.meta.url === `file://${process.argv[1]}`) {
  syncExtensionConfig(process.argv[2]);
}
