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

// Rutas centrales del sitio (evita "hardcodear" strings)
export const ROUTES = {
  home: '/',
  sobre: '/sobre',
  servicios: '/servicios',
  proyectos: '/proyectos',
  blog: '/blog',
  cotizar: '/cotizar',
  privacidad: '/privacidad',

  ecosistema: '/ecosistema',
  ecosistemaMimarApp: '/ecosistema/mimarapp',
  ecosistemaMimarDrive: '/ecosistema/mimar-drive',
  ecosistemaMimarFood: '/ecosistema/mimar-food',

  serviciosWhiteLabel: '/servicios/apps-white-label',

  industrias: '/industrias',
  industriasRestaurantes: '/industrias/restaurantes',
  industriasRetail: '/industrias/tiendas-retail',
  industriasFarmacias: '/industrias/farmacias',
  industriasSupermercados: '/industrias/supermercados',
} as const;

export type NavBadge = 'new' | 'hot' | 'beta';

export type NavLinkItem = {
  type: 'link';
  name: string;
  href: string;
  description?: string;
  highlight?: boolean;
  badge?: NavBadge;
};

export type NavDropdownItem = {
  type: 'dropdown';
  name: string;
  items: NavLinkItem[];
};

export type NavigationItem = NavLinkItem | NavDropdownItem;

export const NAVIGATION: NavigationItem[] = [
  { type: 'link', name: 'Inicio', href: ROUTES.home },
  {
    type: 'dropdown',
    name: 'Ecosistema Mimar',
    items: [
      {
        type: 'link',
        name: 'Visión general',
        href: ROUTES.ecosistema,
        description: 'Conoce el Ecosistema Mimar y sus soluciones conectadas.',
      },
      {
        type: 'link',
        name: 'MimarApp',
        href: ROUTES.ecosistemaMimarApp,
        description: 'App principal del ecosistema (clientes/operación).',
        badge: 'new',
      },
      {
        type: 'link',
        name: 'Mimar Drive',
        href: ROUTES.ecosistemaMimarDrive,
        description: 'Logística y entregas para operaciones modernas.',
        badge: 'new',
      },
      {
        type: 'link',
        name: 'Mimar Food',
        href: ROUTES.ecosistemaMimarFood,
        description: 'Solución para restaurantes, pedidos y delivery.',
        badge: 'new',
      },
    ],
  },
  {
    type: 'dropdown',
    name: 'Servicios',
    items: [
      {
        type: 'link',
        name: 'Todos los servicios',
        href: ROUTES.servicios,
        description: 'Desarrollo web, apps, e-commerce, SEO y mantenimiento.',
      },
      {
        type: 'link',
        name: 'Apps White Label',
        href: ROUTES.serviciosWhiteLabel,
        description: 'Tu app lista para vender bajo tu marca (servicio estrella).',
        badge: 'hot',
      },
      {
        type: 'link',
        name: 'Software Empresarial (POS/Inventarios)',
        href: '/apps',
        description: 'POS, Inventario IT, control de asistencia y más.',
      },
    ],
  },
  {
    type: 'dropdown',
    name: 'Industrias',
    items: [
      {
        type: 'link',
        name: 'Índice de industrias',
        href: ROUTES.industrias,
        description: 'Soluciones por tipo de negocio.',
      },
      { type: 'link', name: 'Restaurantes', href: ROUTES.industriasRestaurantes },
      { type: 'link', name: 'Tiendas retail', href: ROUTES.industriasRetail },
      { type: 'link', name: 'Farmacias', href: ROUTES.industriasFarmacias },
      { type: 'link', name: 'Supermercados', href: ROUTES.industriasSupermercados },
    ],
  },
  { type: 'link', name: 'Sobre Nosotros', href: ROUTES.sobre },
  { type: 'link', name: 'Proyectos', href: ROUTES.proyectos },
  { type: 'link', name: 'Blog', href: ROUTES.blog },
  { type: 'link', name: 'Cotizar', href: ROUTES.cotizar, highlight: true },
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

export const WHITE_LABEL_PRICING = {
  currency: 'HNL',
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'Para validar mercado',
      priceFrom: 14999,
      period: 'mes',
      highlight: false,
      features: [
        'Branding básico (logo/colores)',
        'Publicación guiada',
        'Panel básico',
        'Soporte estándar',
      ],
    },
    {
      id: 'growth',
      name: 'Growth',
      subtitle: 'Para crecer ventas',
      priceFrom: 29999,
      period: 'mes',
      highlight: true,
      badge: 'hot' as NavBadge,
      features: [
        'Branding completo',
        'Módulos premium (según stack)',
        'Analíticas y eventos',
        'Soporte prioritario',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'Para operación a escala',
      priceFrom: null as number | null,
      period: 'cotización',
      highlight: false,
      features: [
        'Integraciones (ERP/POS/Payment)',
        'SLA y soporte dedicado',
        'Seguridad avanzada',
        'Roadmap conjunto',
      ],
    },
  ],
} as const;

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
      'ecosistema mimar',
      'mimarapp',
      'mimar drive',
      'mimar food',
      'apps white label',
      'app white label honduras',
      'aplicaciones bajo marca',
      'saas white label',
    ],
  },
  openGraph: {
    type: 'website' as const,
    locale: 'es_HN',
    siteName: 'MIMAR Solutions',
  },
};
