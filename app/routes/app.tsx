import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { LoaderFunctionArgs } from "react-router";
import { Outlet, useLoaderData, useRouteError } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { AppProvider } from "@shopify/shopify-app-react-router/react";

import { apiKey } from "../shopify.server";
import {
  clearToken,
  adminTokenManager,
} from "../lib/laravel-api";

interface AuthContextValue {
  token: string | null;
  isLoading: boolean;
  error: string | null;
  retry: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  token: null,
  isLoading: true,
  error: null,
  retry: () => {},
});

export function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}

export const loader = async (_args: LoaderFunctionArgs) => {
  return { apiKey };
};

declare global {
  interface Window {
    shopify?: {
      idToken: () => Promise<string>;
    };
  }
}

/** SSR/首屏渲染稳定骨架,hydrate 后才挂 Polaris UI(自定义元素会破坏 hydration)。
 *  注意:AppProvider 必须始终渲染(SSR 也要),App Bridge 脚本要在首屏 HTML 里才能连上 Shopify 父窗口。 */
function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
function waitForAppBridge(timeoutMs = 10000): Promise<Window["shopify"]> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Not in browser"));
      return;
    }
    if (window.shopify) {
      resolve(window.shopify);
      return;
    }
    const start = Date.now();
    const interval = setInterval(() => {
      if (window.shopify) {
        clearInterval(interval);
        resolve(window.shopify);
      } else if (Date.now() - start > timeoutMs) {
        clearInterval(interval);
        reject(new Error("App Bridge 加载超时"));
      }
    }, 100);
  });
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const performExchange = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const appBridge = await waitForAppBridge();
      if (!appBridge?.idToken) throw new Error("App Bridge idToken unavailable");
      const jwt = await adminTokenManager.getAccessToken();
      setToken(jwt);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
      clearToken();
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    performExchange();
  }, [performExchange]);

  if (isLoading) {
    return (
      <AuthContext.Provider
        value={{ token: null, isLoading: true, error: null, retry: performExchange }}
      >
        {children}
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(255,255,255,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <s-spinner size="large" />
        </div>
      </AuthContext.Provider>
    );
  }

  if (error || !token) {
    return (
      <s-page heading="Authentication Error">
        <s-section>
          <s-card>
            <s-stack direction="block" gap="base">
              <s-paragraph>无法通过 Shopify 认证。{error}</s-paragraph>
              <s-button onClick={performExchange}>重试</s-button>
            </s-stack>
          </s-card>
        </s-section>
      </s-page>
    );
  }

  return (
    <AuthContext.Provider
      value={{ token, isLoading, error, retry: performExchange }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default function App() {
  const { apiKey } = useLoaderData<typeof loader>();
  const hydrated = useHydrated();

  return (
    <AppProvider embedded apiKey={apiKey}>
      {hydrated ? (
        <>
          <s-app-nav>
            <s-link href="/app">Home</s-link>
            <s-link href="/app/settings">Settings</s-link>
          </s-app-nav>
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        </>
      ) : (
        <div style={{ padding: "2rem" }}>Loading…</div>
      )}
    </AppProvider>
  );
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs: any) => {
  return boundary.headers(headersArgs);
};
