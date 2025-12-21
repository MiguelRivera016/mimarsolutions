// Configuración centralizada de MIMAR Solutions

export const COMPANY = {
  name: 'MIMAR Solutions',
  tagline: 'Desarrollo Web Que Sí Podés Pagar',
  description:
    'Equipo hondureño de desarrollo web y apps. Precios justos, contratos claros, resultados garantizados.',

  team: {
    founders: [
      { name: 'Miguel Rivera', role: 'Desarrollo & Tecnología' },
      { name: 'María Matehu', role: 'Administración & Ventas', title: 'Lic.' },
    ],
  },

  // Contacto
  phone: '+504 9387-0479',
  phoneRaw: '50493870479',
  email: 'mimargrouphn@gmail.com',

  // Redes sociales
  social: {
    facebook: 'https://www.facebook.com/mimargroup',
    linkedin: 'https://www.linkedin.com/company/mimar-solutions',
    instagram: 'https://www.instagram.com/mimar.solutions',
    twitter: 'https://twitter.com/mimarsolutions',
  },

  // Ubicación
  location: {
    country: 'Honduras',
    city: 'Tegucigalpa',
    address: 'Tegucigalpa, Honduras',
  },

  // URLs
  url: 'https://mimar.solutions',
  logo: '/assets/branding/logo.png',
  logoAlt: 'MIMAR Solutions Logo',
} as const;

export const BRAND_COLORS = {
  primary: '#0B78C4', // brand-500
  primaryLight: '#3B9BD9',
  primaryDark: '#085B94',
  accent: '#F8A91C', // gold-500
  dark: '#1a1a1a',
  light: '#ffffff',
} as const;

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Precios', href: '/precios' },
  { name: 'Sobre Nosotros', href: '/sobre' },
  { name: 'Blog', href: '/blog' },
  // Nota: por ahora "Contacto" apunta a la página de cotización.
  { name: 'Contacto', href: '/cotizar', highlight: true },
] as const;

export const PRICING_PACKS = {
  web: {
    starter: {
      name: 'Pack Starter',
      price: 8999,
      description: 'Perfecto para empezar tu presencia online',
      features: [
        'Sitio web 5 páginas',
        'Diseño responsivo (móvil y PC)',
        'Formulario de contacto',
        'Integración WhatsApp',
        '3 meses hosting gratis',
        '6 meses soporte incluido',
        'Capacitación básica',
      ],
      deliveryTime: '2 semanas',
      idealFor: 'Negocios nuevos o pequeños',
    },
    business: {
      name: 'Pack Negocio',
      price: 18999,
      popular: true,
      description: 'La opción más elegida por negocios establecidos',
      features: [
        'Todo del Pack Starter +',
        'Hasta 10 páginas',
        'Catálogo productos (hasta 50)',
        'Google Maps integrado',
        'Google Analytics',
        'SEO básico incluido',
        '6 meses hosting gratis',
        '1 año soporte incluido',
      ],
      deliveryTime: '3-4 semanas',
      idealFor: 'Negocios establecidos',
    },
    ecommerce: {
      name: 'Pack E-Commerce',
      price: 35999,
      description: 'Tienda online completa lista para vender',
      features: [
        'Tienda online completa',
        'Productos ilimitados',
        'Carrito de compras',
        'Múltiples métodos de pago',
        'Inventario automático',
        'Reportes de ventas',
        '1 año hosting gratis',
        '1 año soporte incluido',
        'Capacitación completa',
      ],
      deliveryTime: '4-6 semanas',
      idealFor: 'Vender online profesionalmente',
    },
  },
  addons: {
    hosting: { name: 'Hosting anual', price: 3599 },
    domain: { name: 'Dominio .com', price: 899 },
    email: { name: 'Correos profesionales (5)', price: 1999 },
    maintenance: { name: 'Mantenimiento mensual', price: 999 },
    seo: { name: 'SEO mensual', price: 2999 },
  },
  payment: {
    initial: 50, // porcentaje inicial
    final: 50, // al entregar
    guarantee: 30, // días garantía devolución
  },
} as const;

export const CONTACT = {
  // Preferimos WhatsApp como canal principal
  whatsapp: {
    number: '50493870479',
    message: 'Hola! Quisiera información sobre sus servicios',
  },
  email: COMPANY.email,
  phone: COMPANY.phone,
  phoneRaw: COMPANY.phoneRaw,
  hours: 'Lunes a Sábado, 8:00 AM - 6:00 PM',
} as const;

export const VALUE_PROPS = [
  {
    icon: '💰',
    title: 'Precios en Lempiras',
    description: 'Sin sorpresas en dólares. Precio fijo y claro.',
  },
  {
    icon: '🤝',
    title: 'Equipo Local',
    description: 'Reuniones en persona. Soporte en tu idioma y horario.',
  },
  {
    icon: '✨',
    title: 'Garantía 30 Días',
    description: 'Si no estás satisfecho, te devolvemos tu dinero.',
  },
  {
    icon: '🚀',
    title: 'Entrega Rápida',
    description: 'Tu sitio listo en 2-4 semanas, garantizado.',
  },
] as const;

export const SERVICES = [
  {
    id: 'web-dev',
    title: 'Desarrollo Web',
    description: 'Sitios web modernos y responsivos',
    icon: '🌐',
  },
  {
    id: 'mobile-dev',
    title: 'Apps Móviles',
    description: 'Aplicaciones iOS y Android nativas',
    icon: '📱',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Tiendas online completas',
    icon: '🛒',
  },
  {
    id: 'seo',
    title: 'SEO & Marketing',
    description: 'Optimización y posicionamiento',
    icon: '📈',
  },
  {
    id: 'design',
    title: 'Diseño UI/UX',
    description: 'Interfaces atractivas y funcionales',
    icon: '🎨',
  },
  {
    id: 'maintenance',
    title: 'Mantenimiento',
    description: 'Soporte técnico continuo',
    icon: '🔧',
  },
] as const;

export const METADATA = {
  default: {
    title: 'MIMAR Solutions - Desarrollo web en Honduras',
    description: COMPANY.description,
    keywords: [
      'desarrollo web',
      'aplicaciones móviles',
      'diseño web',
      'e-commerce',
      'SEO',
      'Honduras',
      'Tegucigalpa',
      'desarrollo software',
      'precios en lempiras',
    ],
  },
  openGraph: {
    type: 'website' as const,
    locale: 'es_HN',
    siteName: 'MIMAR Solutions',
  },
};
