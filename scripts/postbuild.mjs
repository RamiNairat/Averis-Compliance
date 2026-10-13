// The catch-all route is prerendered at /404. Static hosts (Vercel included)
// serve /404.html for unknown paths, so copy it there.
import { copyFileSync, existsSync } from "node:fs";

const source = "build/client/404/index.html";
if (!existsSync(source)) {
  console.error(`postbuild: ${source} is missing. Is "/404" in react-router.config.ts prerender?`);
  process.exit(1);
}
copyFileSync(source, "build/client/404.html");
console.log("postbuild: wrote build/client/404.html");
