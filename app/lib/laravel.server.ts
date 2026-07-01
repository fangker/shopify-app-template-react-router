const LARAVEL_API_URL = process.env.LARAVEL_API_URL || "http://127.0.0.1:8001";

export async function fetchApi(request: Request, path: string, init?: RequestInit) {
  const cookie = request.headers.get("Cookie") || "";

  const res = await fetch(`${LARAVEL_API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Cookie: cookie,
      ...init?.headers,
    },
  });

  if (res.status === 401) {
    return null;
  }

  const json = await res.json();
  return json.data ?? json;
}

export { LARAVEL_API_URL };