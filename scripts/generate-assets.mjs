import fs from 'node:fs'
import path from 'node:path'

const root = 'public/images'

const pymes = [
  'granalla-norte', 'sabores-caseros', 'melca31', 'trainingmaq',
  'hostal-atacama', 'agua-purificada', 'lpach', 'el-morro',
  'fire', 'neomarc', 'tlt', 'moyano',
]

const pymeLabels = {
  'granalla-norte': 'Granalla Norte',
  'sabores-caseros': 'Sabores Caseros',
  melca31: 'Melca31',
  trainingmaq: 'Trainingmaq',
  'hostal-atacama': 'Hostal Atacama',
  'agua-purificada': 'Agua Purificada',
  lpach: "L'Pach",
  'el-morro': 'El Morro',
  fire: 'Fire',
  neomarc: 'Neomarc',
  tlt: 'TLT Ingeniería',
  moyano: 'Moyano',
}

const noticias = [
  { file: 'forede-2025', label: 'FOREDE 2025', color: '#0A4A7A' },
  { file: 'taller-corfo', label: 'Taller Corfo', color: '#1B6B4A' },
  { file: 'taller-carola', label: 'Cluster Minero', color: '#7A4A0A' },
  { file: 'taller-pucobre', label: 'Taller Pucobre', color: '#4A1B7A' },
]

const gallery = ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4']

const logoSvg = (label) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" role="img" aria-label="${label}">
  <rect width="200" height="80" rx="8" fill="#F8F9FA"/>
  <text x="100" y="46" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#002D56">${label}</text>
</svg>`

const newsSvg = (label, color) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color}"/>
      <stop offset="100%" stop-color="#002D56"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#g)"/>
  <text x="400" y="260" text-anchor="middle" font-family="system-ui,sans-serif" font-size="36" font-weight="700" fill="#F5B800">${label}</text>
</svg>`

const gallerySvg = (index) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="Galería ${index}">
  <rect width="400" height="300" fill="#E8EDF2"/>
  <circle cx="200" cy="120" r="40" fill="#002D56" opacity="0.15"/>
  <rect x="120" y="180" width="160" height="12" rx="6" fill="#002D56" opacity="0.2"/>
  <rect x="140" y="205" width="120" height="8" rx="4" fill="#002D56" opacity="0.12"/>
  <text x="200" y="250" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" fill="#6B7280">Comunidad PYMES ${index}</text>
</svg>`

const heroSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" role="img" aria-label="Tierra Amarilla">
  <defs>
    <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1a3a5c"/>
      <stop offset="60%" stop-color="#8B7355"/>
      <stop offset="100%" stop-color="#C4A574"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#sky)"/>
  <polygon points="0,700 480,520 960,640 1440,480 1920,600 1920,1080 0,1080" fill="#5C4A32" opacity="0.7"/>
  <polygon points="0,780 640,620 1280,720 1920,660 1920,1080 0,1080" fill="#3D3225" opacity="0.8"/>
  <text x="960" y="540" text-anchor="middle" font-family="system-ui,sans-serif" font-size="48" font-weight="700" fill="#F5B800" opacity="0.3">Tierra Amarilla</text>
</svg>`

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#002D56"/>
  <text x="120" y="320" font-family="system-ui,sans-serif" font-size="120" font-weight="800" fill="#F5B800">P</text>
  <text x="220" y="320" font-family="system-ui,sans-serif" font-size="48" font-weight="700" fill="white">ymes Tierramarilla</text>
  <text x="220" y="380" font-family="system-ui,sans-serif" font-size="24" fill="#F5B800">Agrupación PYMES Tierra Amarilla</text>
</svg>`

const dirs = [`${root}/pymes`, `${root}/noticias`, `${root}/gallery`]
dirs.forEach((d) => fs.mkdirSync(d, { recursive: true }))

fs.writeFileSync(`${root}/hero-bg.svg`, heroSvg)
fs.writeFileSync(`${root}/og-default.svg`, ogSvg)

pymes.forEach((name) => {
  fs.writeFileSync(`${root}/pymes/${name}.svg`, logoSvg(pymeLabels[name]))
})

noticias.forEach(({ file, label, color }) => {
  fs.writeFileSync(`${root}/noticias/${file}.svg`, newsSvg(label, color))
})

gallery.forEach((name, i) => {
  fs.writeFileSync(`${root}/gallery/${name}.svg`, gallerySvg(i + 1))
})

console.log('Assets generated')
