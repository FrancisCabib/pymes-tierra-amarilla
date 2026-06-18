import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

const site = process.env.PUBLIC_SITE_URL || 'https://www.pymestierramarilla.cl'

export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.zyrosite.com',
      },
    ],
  },
})
