import type { LoaderFunctionArgs } from "react-router";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const API_URL = (context as any)?.cloudflare?.env?.API_URL;
  const API_KEY = (context as any)?.cloudflare?.env?.API_KEY;

  try {
    const res = await fetch(`${API_URL}/api/devlog/list`, {
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
      }
    });
    
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null
  }
}
