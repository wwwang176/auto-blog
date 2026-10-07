// 網站設定與類別（新增類別只要在這裡加一行）
export const SITE = {
  title: 'AI 新知站',
  description: '用白話文帶你看懂 AI 新知、工具、開源套件與新模型。',
  url: 'https://autopost.wwwang.tw',
  lang: 'zh-Hant-TW',
  pageSize: 12,
};
export const CATEGORIES = [
  { slug: 'new-models', name: '新模型發布' },
  { slug: 'ai-tools', name: 'AI 工具推薦' },
  { slug: 'open-source', name: '開源套件' },
  { slug: 'industry', name: '產業動態' },
  { slug: 'tutorials', name: '入門教學' },
] as const;
export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [string, ...string[]];
export const catName = (s: string) => CATEGORIES.find((c) => c.slug === s)?.name ?? s;
