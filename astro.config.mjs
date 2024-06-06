import { defineConfig } from "astro/config";
import aws from "astro-sst";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://juhoniinikoski.com",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: aws(),
});
