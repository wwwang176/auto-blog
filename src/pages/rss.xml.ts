import rss from '@astrojs/rss';
import { getPublished, postUrl } from '../lib/posts';
import { SITE } from '../lib/config';
export async function GET(ctx: any) {
  const posts = await getPublished();
  return rss({
    title: SITE.title, description: SITE.description, site: ctx.site,
    items: posts.slice(0, 50).map((p) => ({
      title: p.data.title, pubDate: p.data.date, description: p.data.description,
      link: postUrl(p.data.slug), categories: p.data.categories,
    })),
    customData: '<language>zh-TW</language>',
  });
}
