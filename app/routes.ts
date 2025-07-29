import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/puck-editor", "routes/puck-editor.tsx"),
  route("/puck-preview", "routes/puck-preview.tsx"),
] satisfies RouteConfig;
