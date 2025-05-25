// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';
import vercelStatic from "@astrojs/vercel/static";


// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [mdx()]
});