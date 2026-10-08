import { getPublished, postUrl } from '../lib/posts';
import { SITE } from '../lib/config';
// 給總編輯查重用：只含已發布文章
export async function GET() {
  const posts = await getPublished();
  const body = posts.map((p) => ({
    slug: p.data.slug, title: p.data.title,
    date: p.data.date.toISOString(), updated: p.data.updated?.toISOString() ?? null,
    categories: p.data.categories, author: p.data.author, description: p.data.description,
    url: SITE.url + postUrl(p.data.slug),
  }));
  return new Response(JSON.stringify({ generated: new Date().toISOString(), count: body.length, posts: body }, null, 2),
    { headers: { 'Content-Type': 'application/json' } });
}
