import type { MetaDescriptor } from "react-router";
import { site } from "../site";

type PageMeta = {
  path: string;
  title?: string;
  description?: string;
  noindex?: boolean;
};

export function pageMeta({ path, title, description = site.description, noindex }: PageMeta): MetaDescriptor[] {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — Amazon Compliance Document Review`;
  const url = `${site.url}${path}`;
  const image = `${site.url}/og-image.png`;

  return [
    { title: fullTitle },
    { name: "description", content: description },
    ...(noindex ? [{ name: "robots", content: "noindex" }] : [{ tagName: "link", rel: "canonical", href: url }]),
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: site.name },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Averis Compliance: Amazon compliance document review" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}
