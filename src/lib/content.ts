import type { Noticia, Pyme } from './types'

export const localNoticias: Noticia[] = [
  {
    slug: 'pymes-tierra-amarilla-forede-2025',
    title: '¡Las PYMES de Tierra Amarilla dijeron presente en la FOREDE 2025!',
    date: '2025-10-16',
    image: '/images/noticias/forede-2025.svg',
    excerpt:
      'Emprendedores de Tierra Amarilla participaron activamente en EXPO FOREDE 2025, gracias al apoyo de Compañía Minera Pucobre, mostrando sus servicios ante la gran minería.',
    content:
      '<p>Emprendedores de Tierra Amarilla y Paipote participaron activamente en EXPO FOREDE 2025, gracias al apoyo de Compañía Minera Pucobre, que gestionó su presencia en este encuentro clave de vinculación empresarial.</p><p>Marcelo Rojas Morales, presidente de la Agrupación de Pymes de Tierra Amarilla, destacó la importancia de esta participación como una gran vitrina para las PYMES locales ante la gran minería.</p>',
    source: 'EL ARCA',
    readTime: '1 min read',
  },
  {
    slug: 'taller-corfo-red-proveedores',
    title: 'Taller de Corfo: Red Proveedores fortalece a las PYMES locales',
    date: '2025-09-20',
    image: '/images/noticias/taller-corfo.svg',
    excerpt:
      'Veinticinco pymes de Tierra Amarilla finalizaron la etapa de diagnóstico del programa Red Proveedores de Corfo y Distrito Candelaria.',
    content:
      '<p>Con el objetivo de transformar a las micro y pequeñas empresas locales en actores estratégicos de la cadena productiva regional, se llevó a cabo el cierre de la Etapa de Diagnóstico del Programa Red Proveedores de Corfo.</p><p>Este análisis servirá como hoja de ruta para la Etapa de Implementación programada para 2026.</p>',
    source: 'EL ARCA',
    readTime: '2 min read',
  },
  {
    slug: 'taller-scm-carola-cluster-minero',
    title: 'Taller SCM Carola: fortalecimiento del Cluster Minero en Atacama',
    date: '2025-08-15',
    image: '/images/noticias/taller-carola.svg',
    excerpt:
      'SCM Carola, Pucobre y Corproa realizaron un taller de capacitación a pymes y emprendedores de Tierra Amarilla en el Museo Minero.',
    content:
      '<p>El taller buscó apoyar a los proveedores locales, abordar los avances del Cluster Minero en la región y entregar información sobre el PTI Minero y las oportunidades de articulación productiva.</p>',
    source: 'EL ARCA',
    readTime: '2 min read',
  },
  {
    slug: 'taller-pucobre-corproa-emprendedoras',
    title: 'Taller Pucobre y Corproa para emprendedoras de Tierra Amarilla',
    date: '2025-07-10',
    image: '/images/noticias/taller-pucobre.svg',
    excerpt:
      'Capacitación orientada a fortalecer las capacidades de las emprendedoras locales para integrarse al encadenamiento productivo de la minería.',
    content:
      '<p>La actividad tuvo como objetivo que las pequeñas empresas de Tierra Amarilla conozcan cómo ingresar al encadenamiento productivo de la región, con herramientas financieras y de administración.</p>',
    source: 'EL ARCA',
    readTime: '1 min read',
  },
]

export const localPymes: Pyme[] = [
  {
    slug: 'granalla-norte',
    name: 'Granalla Norte',
    description:
      'Empresa dedicada a obras civiles, asesoría en voladuras, suministro de áridos y servicios mineros para la región de Atacama.',
    logo: '/images/pymes/granalla-norte.svg',
    rubro: 'Construcción',
  },
  {
    slug: 'sabores-caseros',
    name: 'Sabores Caseros',
    description:
      'Elaboración de alimentos caseros y saludables, con productos de calidad para familias y empresas de Tierra Amarilla.',
    logo: '/images/pymes/sabores-caseros.svg',
    rubro: 'Alimentación',
  },
  {
    slug: 'melca31-spa',
    name: 'Melca31 SPA',
    description:
      'Servicios de alojamiento, arriendo de vehículos y movimiento de tierra para trabajadores y empresas de la zona.',
    logo: '/images/pymes/melca31.svg',
    rubro: 'Turismo',
  },
  {
    slug: 'trainingmaq',
    name: 'Trainingmaq',
    description:
      'Capacitación técnica en operación de maquinaria industrial y equipos de gran tonelaje para el sector minero.',
    logo: '/images/pymes/trainingmaq.svg',
    rubro: 'Servicios',
  },
  {
    slug: 'hostal-atacama',
    name: 'Hostal Atacama',
    description:
      'Alojamiento cómodo y accesible para turistas y trabajadores que visitan Tierra Amarilla y sus alrededores.',
    logo: '/images/pymes/hostal-atacama.svg',
    rubro: 'Turismo',
  },
  {
    slug: 'agua-purificada-del-desierto',
    name: 'Agua Purificada del Desierto',
    description:
      'Producción y distribución de agua purificada e hielo para hogares, comercios e industrias de la comuna.',
    logo: '/images/pymes/agua-purificada.svg',
    rubro: 'Servicios',
  },
  {
    slug: 'lpach',
    name: "L'Pach",
    description:
      'Organización dedicada a la inclusión laboral y el desarrollo social de personas con discapacidad en Tierra Amarilla.',
    logo: '/images/pymes/lpach.svg',
    rubro: 'Servicios',
  },
  {
    slug: 'comercial-el-morro',
    name: 'Comercial El Morro',
    description:
      'Venta de productos de aseo e higiene para hogares, empresas e instituciones de la región.',
    logo: '/images/pymes/el-morro.svg',
    rubro: 'Comercio',
  },
  {
    slug: 'ingenieria-servicios-fire',
    name: 'Ingeniería y Servicios Fire',
    description:
      'Diseño, instalación y mantención de sistemas de protección contra incendios para la industria y comercio.',
    logo: '/images/pymes/fire.svg',
    rubro: 'Servicios',
  },
  {
    slug: 'vulcanizacion-neomarc',
    name: 'Vulcanización Neomarc',
    description:
      'Reparación y mantención de neumáticos para vehículos livianos y maquinaria pesada de la zona minera.',
    logo: '/images/pymes/neomarc.svg',
    rubro: 'Servicios',
  },
  {
    slug: 'tlt-ingenieria-spa',
    name: 'TLT Ingeniería SPA',
    description:
      'Consultoría e ingeniería industrial, brindando soluciones técnicas a empresas del sector minero y construcción.',
    logo: '/images/pymes/tlt.svg',
    rubro: 'Servicios',
  },
  {
    slug: 'construcciones-moyano',
    name: 'Construcciones Moyano',
    description:
      'Construcción de muros de hormigón y obras civiles para proyectos residenciales e industriales en Atacama.',
    logo: '/images/pymes/moyano.svg',
    rubro: 'Construcción',
  },
]
