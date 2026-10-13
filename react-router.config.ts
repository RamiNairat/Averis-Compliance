import type { Config } from "@react-router/dev/config";

// Static site: every public route is prerendered to its own HTML file at build
// time, so direct visits and refreshes on /services, /about, etc. are served
// real pages by the host instead of falling through to a 404.
export default {
  appDirectory: "src",
  ssr: false,
  prerender: [
    "/",
    "/services",
    "/sample-review",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    // Rendered by the catch-all route; copied to 404.html in scripts/postbuild.mjs.
    "/404",
  ],
} satisfies Config;
