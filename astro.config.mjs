import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://autopost.wwwang.tw',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
