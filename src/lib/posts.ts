import { getCollection } from 'astro:content';
// 排除未來日期（排程發文：到時間的下一次建置才會出現）
export async function getPublished() {
  const now = Date.now();
  return (await getCollection('posts', (p) => p.data.date.getTime() <= now))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
export const postUrl = (slug: string) => `/posts/${slug}/`;
export const fmtDate = (d: Date) =>
  d.toLocaleDateString('zh-TW', { timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit', day: '2-digit' });
