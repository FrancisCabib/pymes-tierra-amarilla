export type Noticia = {
  slug: string
  title: string
  date: string
  image: string
  excerpt: string
  content?: string
  source?: string
  readTime?: string
}

export type Pyme = {
  slug: string
  name: string
  description: string
  logo: string
  rubro: string
  website?: string
  phone?: string
  whatsapp?: string
}

export type InstitucionalBlock = {
  title: string
  content: string
  icon: 'identity' | 'mission' | 'vision'
}

export type SiteConfig = {
  name: string
  tagline: string
  description: string
  whatsapp: string
  whatsappLink: string
  facebook: string
  facebookLink: string
  email: string
  address: string
  youtubeId: string
  developer: {
    name: string
    url: string
  }
}

export type WPPost = {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  date: string
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>
  }
}

export type WPPyme = {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  acf?: {
    descripcion?: string
    logo?: string | { url: string }
    rubro?: string
    sitio_web?: string
    telefono?: string
    whatsapp?: string
  }
}
