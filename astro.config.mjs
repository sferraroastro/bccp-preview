import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://bccp.berkeley.edu",
  base: process.env.SITE_BASE ?? "/"
});
