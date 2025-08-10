import { defineCollection, z } from 'astro:content';

const recaps = defineCollection({
  schema: z.object({
    campaignId: z.string(),          // e.g. "acroterra"
    date: z.string().datetime(),     // ISO date: 2025-08-11
    title: z.string(),               // recap header
  }),
});

export const collections = { recaps };
