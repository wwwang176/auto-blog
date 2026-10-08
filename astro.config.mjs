import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import yaml from 'js-yaml';

const SITE = 'https://autopost.wwwang.tw';

// 建置時讀文章 frontmatter：給 sitemap 加 lastmod，並找出沒有文章的分類
function readPosts() {
  const dir = './src/content/posts';
  const now = Date.now();
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && existsSync(`${dir}/${e.name}/index.md`))
    .map((e) => {
      const m = readFileSync(`${dir}/${e.name}/index.md`, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
      return m ? yaml.load(m[1]) : null;
    })
    .filter((d) => d && d.slug && d.date && new Date(d.date).getTime() <= now);
}
const posts = readPosts();
const lastmod = new Map(posts.map((d) => [`${SITE}/posts/${d.slug}/`, new Date(d.updated ?? d.date).toISOString()]));
const usedCats = new Set(posts.flatMap((d) => d.categories ?? []));

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // 0 篇的分類頁不放進 sitemap（頁面本身也有 noindex）
      filter: (page) => {
        const m = page.match(/\/category\/([^/]+)\/$/);
        return !m || usedCats.has(m[1]);
      },
      serialize: (item) => {
        const lm = lastmod.get(item.url);
        if (lm) item.lastmod = lm;
        return item;
      },
    }),
  ],
});
