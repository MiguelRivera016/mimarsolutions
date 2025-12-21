// Configuración centralizada de MIMAR Solutions

export const COMPANY = {
  name: 'MIMAR Solutions',
  tagline: 'Construyendo el futuro digital',
  description: 'Empresa hondureña especializada en desarrollo web, aplicaciones móviles y soluciones digitales personalizadas.',

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
  url: 'https://www.mimarsolutions.lat',
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
  { name: 'Sobre Nosotros', href: '/sobre' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Cotizar', href: '/cotizar', highlight: true },
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
    title: 'MIMAR Solutions - Desarrollo Web y Apps en Honduras',
    description: 'Empresa hondureña líder en desarrollo web, aplicaciones móviles y soluciones digitales. Transformamos ideas en realidad digital.',
    keywords: [
      'desarrollo web',
      'aplicaciones móviles',
      'diseño web',
      'e-commerce',
      'SEO',
      'Honduras',
      'Tegucigalpa',
      'desarrollo software',
    ],
  },
  openGraph: {
    type: 'website' as const,
    locale: 'es_HN',
    siteName: 'MIMAR Solutions',
  },
};
