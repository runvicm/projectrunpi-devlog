import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("/view/:slug", "routes/ViewLog.tsx"),

  route("/api/status", "routes/api/status.ts"),
  route("/api/devloglist", "routes/api/devloglist.ts"),
  route('/api/view/:slug', 'routes/api/viewdevlog.ts'),
  route('/api/add/view/:slug', 'routes/api/addview.ts'),


] satisfies RouteConfig;
