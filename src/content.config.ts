import { defineCollection, z } from 'astro:content'

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    excerpt: z.string(),
    source: z.string().optional(),
    readTime: z.string().optional(),
  }),
})

const pymes = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    logo: z.string(),
    rubro: z.string(),
    website: z.string().url().optional(),
    phone: z.string().optional(),
    whatsapp: z.string().optional(),
  }),
})

export const collections = { noticias, pymes }
