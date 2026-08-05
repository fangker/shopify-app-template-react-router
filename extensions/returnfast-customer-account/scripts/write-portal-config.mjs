import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { syncExtensionConfig } from "../../../scripts/sync-extension-config.mjs";

const scriptPath = resolve(fileURLToPath(import.meta.url));
const invokedPath = process.argv[1] ? resolve(process.argv[1]) : undefined;

if (invokedPath === scriptPath) {
  syncExtensionConfig(process.argv[2]);
}
