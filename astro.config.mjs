// @ts-check
import mdx from "@astrojs/mdx";
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';


import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: "https://www.barbierinotes.com",
  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});