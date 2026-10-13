// Local preview of the production build that behaves like Vercel's static
// hosting: directory index files, vercel.json redirects, trailing-slash
// removal and 404.html for unknown paths. Usage: npm run build && npm run preview
import { createReadStream, existsSync, readFileSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = "build/client";
const port = Number(process.env.PORT ?? 4173);
const { redirects = [] } = JSON.parse(readFileSync("vercel.json", "utf8"));

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".json": "application/json",
};

function isFile(path) {
  return existsSync(path) && statSync(path).isFile();
}

function send(res, status, file) {
  res.writeHead(status, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(res);
}

createServer((req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  let path = decodeURIComponent(url.pathname);

  const redirect = redirects.find((r) => r.source === path);
  if (redirect) {
    res.writeHead(redirect.permanent ? 308 : 307, { Location: redirect.destination });
    return res.end();
  }
  if (path.length > 1 && path.endsWith("/")) {
    res.writeHead(308, { Location: path.slice(0, -1) + url.search });
    return res.end();
  }

  path = normalize(path).replace(/^([/\\])+/, "");
  const candidates = [join(root, path), join(root, path, "index.html")];
  const file = candidates.find(isFile);
  if (file) return send(res, 200, file);
  send(res, 404, join(root, "404.html"));
}).listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
