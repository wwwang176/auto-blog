import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_SLUGS } from './lib/config';
const posts = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/posts' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    categories: z.array(z.enum(CATEGORY_SLUGS)).min(1),
    hero: image(),
    heroCredit: z.string().optional(),
    heroCreditUrl: z.string().url().optional(),
    banner: image().optional(),
    bannerCredit: z.string().optional(),
    bannerCreditUrl: z.string().url().optional(),
    description: z.string(),
    sample: z.boolean().optional(),
  }),
});
export const collections = { posts };
