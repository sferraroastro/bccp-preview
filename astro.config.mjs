import { defineConfig } from "astro/config";

const site = process.env.SITE_URL ?? "https://bccp.berkeley.edu";
const base = process.env.SITE_BASE ?? "/";
const basePath = base.replace(/\/$/, "");

function prefixPublicImages() {
  return (tree) => {
    const walk = (node) => {
      if (node && node.type === "image" && typeof node.url === "string" && node.url.startsWith("/images/")) {
        node.url = `${basePath}${node.url}`;
      }

      if (node && Array.isArray(node.children)) {
        node.children.forEach(walk);
      }
    };

    walk(tree);
  };
}

export default defineConfig({
  site,
  base,
  markdown: {
    remarkPlugins: [prefixPublicImages]
  }
});
