export const siteConfig = {
  name: 'Pymes Tierramarilla',
  tagline: 'Agrupación PYMES Tierra Amarilla',
  description:
    'Agrupación de pequeñas y medianas empresas de Tierra Amarilla, Atacama. Fortalecemos el ecosistema emprendedor local y conectamos a nuestras PYMES con oportunidades de desarrollo.',
  whatsapp: '+56 9 9036 3499',
  whatsappLink: 'https://api.whatsapp.com/send/?phone=56990363499&text&type=phone_number&app_absent=0',
  facebook: 'pymestierraamarilla',
  facebookLink: 'https://www.facebook.com/pymestierraamarilla',
  email: 'pymestierraamarilla@gmail.com',
  address: 'Tierra Amarilla, Región de Atacama, Chile',
  youtubeId: 'YOUR_YOUTUBE_VIDEO_ID',
  developer: {
    name: 'El Arca',
    url: 'https://www.pymestierramarilla.cl/el-arca',
  },
} as const

export const institucional = {
  intro: {
    title: 'El Corazón Emprendedor de Tierra Amarilla',
    text: 'Las PYMEs de Tierra Amarilla son clave para el crecimiento económico y social de la región. A través de su esfuerzo, están generando empleo, fortaleciendo la comunidad y contribuyendo al desarrollo sostenible.',
  },
  blocks: [
    {
      title: 'Nuestra Identidad',
      icon: 'identity' as const,
      content:
        'Somos un grupo de empresarios y emprendedores comprometidos con el desarrollo económico y social de Tierra Amarilla. Nuestra agrupación nace del deseo de fortalecer el tejido productivo local, generando redes de colaboración que beneficien a todas las PYMES de la comuna y a la comunidad en general.',
    },
    {
      title: 'Misión',
      icon: 'mission' as const,
      content:
        'Fortalecer el ecosistema emprendedor de Tierra Amarilla mediante la creación de redes colaborativas, la capacitación continua y la innovación, para que nuestras PYMES sean más competitivas y sostenibles en el tiempo.',
    },
    {
      title: 'Visión',
      icon: 'vision' as const,
      content:
        'Ser referentes en el crecimiento e integración industrial de las PYMES locales, posicionando a Tierra Amarilla como un polo emprendedor en la Región de Atacama y motor clave del desarrollo sostenible del territorio.',
    },
  ],
  gallery: [
    '/images/gallery/gallery-1.svg',
    '/images/gallery/gallery-2.svg',
    '/images/gallery/gallery-3.svg',
    '/images/gallery/gallery-4.svg',
  ],
}
