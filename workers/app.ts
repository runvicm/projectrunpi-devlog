/// <reference types="@cloudflare/workers-types" />
import { createRequestHandler } from "react-router";

declare global {
  interface CloudflareEnvironment extends Env {}
}

type Env = Record<string, unknown>;

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
} satisfies ExportedHandler<CloudflareEnvironment>;