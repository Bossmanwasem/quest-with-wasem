// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const recaps = defineCollection({
  schema: z.object({
    campaignId: z.string(),                 // e.g., "acroterra"
    date: z.string().datetime(),            // ISO date string
    title: z.string(),                      // session header
  }),
});

export const collections = { recaps };
