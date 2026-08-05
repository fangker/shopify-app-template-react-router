import { useEffect, useState } from "react";
import type { LoaderFunctionArgs } from "react-router";

import { adminApiClient, adminTokenManager } from "../lib/laravel-api";
import { defaultLaravelApiUrl } from "../shared/shopify-auth/config";

interface SettingsData {
  defaultReturnEnabled: boolean;
  connection: {
    connected: boolean;
    reconnectRequired: boolean;
    shopDomain: string;
    shopifyShopId: number | null;
  };
}

export const loader = async (_args: LoaderFunctionArgs) => {
  return null;
};

export default function Settings() {
  const [settings, setSettings] = useState<SettingsData | null>(null);
  const [defaultReturnEnabled, setDefaultReturnEnabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await adminApiClient.request<SettingsData>(
        "/api/shopify/admin/settings",
      );
      setSettings(data);
      setDefaultReturnEnabled(data.defaultReturnEnabled);
    } catch (err) {
      setError(err instanceof Error ? err.message : "settings-load-failed");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("reauthorized") === "1") {
      adminTokenManager.clearToken();
      url.searchParams.delete("reauthorized");
      window.history.replaceState({}, "", url.toString());
    }
    load();
  }, []);

  async function save() {
    setSaving(true);
    setError(null);
    try {
      const data = await adminApiClient.request<SettingsData>(
        "/api/shopify/admin/settings",
        {
          method: "PUT",
          body: JSON.stringify({ defaultReturnEnabled }),
        },
      );
      setSettings(data);
      setDefaultReturnEnabled(data.defaultReturnEnabled);
    } catch (err) {
      setError(err instanceof Error ? err.message : "settings-save-failed");
    } finally {
      setSaving(false);
    }
  }

  function reconnect() {
    const shop = settings?.connection.shopDomain ?? adminTokenManager.getShopDomain();
    if (!shop) {
      setError("shop-domain-unavailable");
      return;
    }
    window.location.href = `${adminApiClientBaseUrl()}/auth?shop=${encodeURIComponent(
      shop,
    )}&return_to=/app/settings`;
  }

  return (
    <s-page heading="Settings">
      <s-section heading="Return entry">
        <s-card>
          <s-stack direction="block" gap="base">
            {loading ? (
              <s-spinner size="large" />
            ) : (
              <>
                <s-checkbox
                  label="Enable customer return by default"
                  checked={defaultReturnEnabled}
                  onChange={(event) =>
                    setDefaultReturnEnabled(
                      Boolean(
                        (event.currentTarget as unknown as { checked?: boolean })
                          .checked,
                      ),
                    )
                  }
                />
                {settings && (
                  <s-paragraph>
                    Store: {settings.connection.shopDomain} ·{" "}
                    {settings.connection.connected
                      ? "Connected"
                      : "Reconnect required"}
                  </s-paragraph>
                )}
                <s-stack direction="inline" gap="base">
                  <s-button onClick={save} disabled={saving}>
                    Save
                  </s-button>
                  <s-button variant="secondary" onClick={reconnect}>
                    Reconnect Shopify
                  </s-button>
                </s-stack>
              </>
            )}
            {error && <s-paragraph>{error}</s-paragraph>}
          </s-stack>
        </s-card>
      </s-section>
    </s-page>
  );
}

function adminApiClientBaseUrl(): string {
  return defaultLaravelApiUrl();
}
