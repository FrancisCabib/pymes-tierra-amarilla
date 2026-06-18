import { getCollection } from 'astro:content'
import type { Noticia, Pyme, WPPost, WPPyme } from './types'
import { localNoticias, localPymes } from './content'

const WP_URL = import.meta.env.PUBLIC_WP_URL

const markdownToHtml = (md: string): string =>
  md
    .split('\n\n')
    .filter(Boolean)
    .map((p) => `<p>${p.trim()}</p>`)
    .join('')

const stripHtml = (html: string): string =>
  html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()

const getWpImage = (post: WPPost): string =>
  post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '/images/placeholder-news.jpg'

const mapWpPost = (post: WPPost): Noticia => ({
  slug: post.slug,
  title: stripHtml(post.title.rendered),
  date: post.date.split('T')[0],
  image: getWpImage(post),
  excerpt: stripHtml(post.excerpt.rendered),
  content: post.content.rendered,
  source: 'WordPress',
  readTime: '3 min read',
})

const getAcfLogo = (acf?: WPPyme['acf']): string => {
  if (!acf?.logo) return '/images/placeholder-logo.png'
  if (typeof acf.logo === 'string') return acf.logo
  return acf.logo.url
}

const mapWpPyme = (item: WPPyme): Pyme => ({
  slug: item.slug,
  name: stripHtml(item.title.rendered),
  description: item.acf?.descripcion ?? stripHtml(item.content.rendered),
  logo: getAcfLogo(item.acf),
  rubro: item.acf?.rubro ?? 'Servicios',
  website: item.acf?.sitio_web,
  phone: item.acf?.telefono,
  whatsapp: item.acf?.whatsapp,
})

const fetchWp = async <T>(endpoint: string): Promise<T[] | null> => {
  if (!WP_URL || WP_URL.includes('tu-wordpress.com')) return null

  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/${endpoint}`, {
      headers: { Accept: 'application/json' },
    })
    if (!res.ok) return null
    return (await res.json()) as T[]
  } catch {
    return null
  }
}

export const getNoticias = async (limit?: number): Promise<Noticia[]> => {
  const wpPosts = await fetchWp<WPPost>(
    `posts?per_page=${limit ?? 20}&_embed=wp:featuredmedia&orderby=date&order=desc`
  )

  if (wpPosts?.length) {
    return wpPosts.map(mapWpPost).slice(0, limit)
  }

  try {
    const collection = await getCollection('noticias')
    if (collection.length) {
      return collection
        .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
        .slice(0, limit)
        .map((entry) => ({
          slug: entry.id.replace(/\.md$/, ''),
          title: entry.data.title,
          date: entry.data.date.toISOString().split('T')[0],
          image: entry.data.image,
          excerpt: entry.data.excerpt,
          content: markdownToHtml(entry.body ?? ''),
          source: entry.data.source,
          readTime: entry.data.readTime,
        }))
    }
  } catch {
    // collections not configured yet
  }

  return limit ? localNoticias.slice(0, limit) : localNoticias
}

export const getNoticiaBySlug = async (slug: string): Promise<Noticia | undefined> => {
  const noticias = await getNoticias()
  return noticias.find((n) => n.slug === slug)
}

export const getPymes = async (): Promise<Pyme[]> => {
  const wpPymes = await fetchWp<WPPyme>('pyme?per_page=100')

  if (wpPymes?.length) {
    return wpPymes.map(mapWpPyme)
  }

  try {
    const collection = await getCollection('pymes')
    if (collection.length) {
      return collection.map((entry) => ({
        slug: entry.id.replace(/\.json$/, ''),
        name: entry.data.name,
        description: entry.data.description,
        logo: entry.data.logo,
        rubro: entry.data.rubro,
        website: entry.data.website,
        phone: entry.data.phone,
        whatsapp: entry.data.whatsapp,
      }))
    }
  } catch {
    // collections not configured yet
  }

  return localPymes
}

export const getPymeRubros = async (): Promise<string[]> => {
  const pymes = await getPymes()
  return [...new Set(pymes.map((p) => p.rubro))].sort()
}
