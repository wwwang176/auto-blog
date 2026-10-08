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

// 作者（frontmatter 的 author 填 id；沒填就是 DEFAULT_AUTHOR；填了不在清單裡的 id 會建置失敗）
export const AUTHORS = [
  {
    id: 'xiaobian', name: '小編', slug: 'xiaobian',
    bio: 'AI 新知站編輯部。每篇文章都以 AI 協作產出，並回到原始來源查證、附上引用；查不到的內容不發布。',
  },
] as const;
export const AUTHOR_IDS = AUTHORS.map((a) => a.id) as [string, ...string[]];
export const DEFAULT_AUTHOR = 'xiaobian';
export const getAuthor = (id: string) => AUTHORS.find((a) => a.id === id)!;
export const authorUrl = (id: string) => `/author/${getAuthor(id).slug}/`;
