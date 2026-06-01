import type { ActionFunctionArgs } from 'react-router';

export const loader = async ({ params, context }: ActionFunctionArgs) => {
  const API_URL = (context as any)?.cloudflare?.env?.API_URL;
  const API_KEY = (context as any)?.cloudflare?.env?.API_KEY;
  const slug = params.slug;

  try {
    const res = await fetch(`${API_URL}/api/devlog/view/${slug}`, {
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