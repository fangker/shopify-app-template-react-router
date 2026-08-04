import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const directory = dirname(fileURLToPath(import.meta.url));
const extensionRoot = resolve(directory, "..");
const tomlPath = resolve(extensionRoot, "shopify.extension.toml");
const outputPath = resolve(extensionRoot, "src/portalConfig.generated.ts");
const portalUrls = {
  local: "http://localhost:5173",
  dev: "https://dev-customer.returnfast.net",
  prod: "https://customer.returnfast.net",
};

const environment = process.argv[2];
const requestedUrl = environment ? portalUrls[environment] : undefined;

if (environment && !requestedUrl) {
  throw new Error(
    `Unknown portal config environment "${environment}". Expected one of: ${Object.keys(portalUrls).join(", ")}`,
  );
}

let toml = readFileSync(tomlPath, "utf8");

if (requestedUrl) {
  toml = upsertCustomerPortalUrl(toml, requestedUrl);
  writeFileSync(tomlPath, toml);
}

const match = toml.match(
  /^\[extensions\.returnfast\][\s\S]*?^customer_portal_url\s*=\s*"([^"]+)"/m,
);

if (!match?.[1]) {
  throw new Error(
    "Missing [extensions.returnfast].customer_portal_url in shopify.extension.toml",
  );
}

const url = match[1].trim();
try {
  new URL(url);
} catch {
  throw new Error(`Invalid customer_portal_url in shopify.extension.toml: ${url}`);
}

writeFileSync(
  outputPath,
  `export const RETURNFAST_CUSTOMER_PORTAL_URL = ${JSON.stringify(url)};\n`,
);

function upsertCustomerPortalUrl(toml, url) {
  const replacement = `customer_portal_url = ${JSON.stringify(url)}`;

  if (/^\[extensions\.returnfast\]/m.test(toml)) {
    if (/^\[extensions\.returnfast\][\s\S]*?^customer_portal_url\s*=\s*"[^"]*"/m.test(toml)) {
      return toml.replace(
        /^(\[extensions\.returnfast\][\s\S]*?)^customer_portal_url\s*=\s*"[^"]*"/m,
        `$1${replacement}`,
      );
    }

    return toml.replace(
      /^(\[extensions\.returnfast\]\n)/m,
      `$1${replacement}\n`,
    );
  }

  return toml.replace(
    /^(\[\[extensions\.targeting\]\])/m,
    `[extensions.returnfast]\n${replacement}\n\n$1`,
  );
}
