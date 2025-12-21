// lib/constants.ts

export const SITE_CONFIG = {
  name: 'MIMAR Solutions',
  tagline: 'Desarrollo Web Que Sí Podés Pagar',
  description:
    'Desarrollo web profesional y accesible para negocios hondureños. Sitios web desde L.8,999.',
  url: 'https://www.mimarsolutions.lat',

  // Meta
  keywords: [
    'desarrollo web honduras',
    'páginas web baratas honduras',
    'diseño web tegucigalpa',
    'crear página web',
    'tienda online honduras',
    'desarrollo apps honduras',
    'mimar solutions',
    'sitio web precio',
  ],

  // Company
  company: {
    name: 'MIMAR Solutions',
    legalName: 'MIMAR Group',
    rtn: '', // Agregar cuando lo tengas
    founded: '2024',
  },

  // Contact
  contact: {
    phone: '+504 9387-0479',
    phoneRaw: '50493870479',
    whatsapp: '50493870479',
    email: 'mimargrouphn@gmail.com',
    address: 'Tegucigalpa, Honduras',
    hours: 'Lunes a Sábado, 8:00 AM - 6:00 PM',
  },

  // Social
  social: {
    facebook: 'https://facebook.com/mimarsolutions',
    instagram: 'https://instagram.com/mimarsolutions',
    linkedin: 'https://linkedin.com/company/mimarsolutions',
  },
} as const;

// Founders/Team
export const TEAM = [
  {
    id: 'miguel',
    name: 'Miguel Rivera',
    role: 'Desarrollo & Tecnología',
    title: 'Co-Fundador',
    bio: 'Ingeniero en Sistemas. Especialista en React, Next.js y desarrollo móvil. Me aseguro que tu sitio sea rápido, moderno y funcione perfectamente.',
    avatar: '👨‍💻',
    skills: ['React', 'Next.js', 'Node.js', 'React Native'],
  },
  {
    id: 'maria',
    name: 'María Matehu',
    role: 'Administración & Ventas',
    title: 'Co-Fundadora',
    prefix: 'Lic.',
    bio: 'Licenciada en Administración de Empresas. Me encargo de que todo fluya: contratos, tiempos, presupuestos y que quedes 100% satisfecho.',
    avatar: '👩‍💼',
    skills: ['Gestión de Proyectos', 'Ventas', 'Atención al Cliente', 'Administración'],
  },
] as const;

// Pricing
export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 8999,
    currency: 'L',
    period: 'único pago',
    description: 'Perfecto para empezar tu presencia online',
    popular: false,
    features: [
      'Sitio web de 5 páginas',
      'Diseño 100% responsivo',
      'Formulario de contacto',
      'Integración WhatsApp',
      '3 meses hosting gratis',
      '6 meses de soporte',
      'Capacitación incluida',
      'Código fuente incluido',
    ],
    deliveryTime: '2 semanas',
    idealFor: 'Negocios nuevos o pequeños',
  },
  {
    id: 'business',
    name: 'Negocio',
    price: 18999,
    currency: 'L',
    period: 'único pago',
    description: 'La opción más elegida por negocios establecidos',
    popular: true,
    features: [
      'Todo del plan Starter',
      'Hasta 10 páginas',
      'Catálogo de productos (50)',
      'Google Maps integrado',
      'Google Analytics',
      'SEO básico incluido',
      '6 meses hosting gratis',
      '1 año de soporte',
      'Blog incluido',
    ],
    deliveryTime: '3-4 semanas',
    idealFor: 'Negocios establecidos',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    price: 35999,
    currency: 'L',
    period: 'único pago',
    description: 'Tienda online completa lista para vender',
    popular: false,
    features: [
      'Tienda online completa',
      'Productos ilimitados',
      'Carrito de compras',
      'Múltiples métodos de pago',
      'Gestión de inventario',
      'Reportes de ventas',
      '1 año hosting gratis',
      '1 año soporte premium',
      'Capacitación completa',
      'SSL incluido',
    ],
    deliveryTime: '4-6 semanas',
    idealFor: 'Vender online profesionalmente',
  },
] as const;

// Services
export const SERVICES = [
  {
    id: 'web-dev',
    title: 'Desarrollo Web',
    description: 'Sitios web modernos y responsivos que convierten visitantes en clientes.',
    icon: '🌐',
    features: ['WordPress', 'React', 'Next.js'],
    color: 'blue',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'Tiendas online completas con pagos seguros y gestión de inventario.',
    icon: '🛒',
    features: ['WooCommerce', 'Shopify', 'Custom'],
    color: 'purple',
  },
  {
    id: 'mobile',
    title: 'Apps Móviles',
    description: 'Aplicaciones nativas y multiplataforma para iOS y Android.',
    icon: '📱',
    features: ['React Native', 'Flutter', 'PWA'],
    color: 'green',
  },
  {
    id: 'seo',
    title: 'SEO & Marketing',
    description: 'Posicionamiento en Google y estrategias digitales que funcionan.',
    icon: '📈',
    features: ['SEO Local', 'Google Ads', 'Social Media'],
    color: 'orange',
  },
  {
    id: 'support',
    title: 'Soporte Continuo',
    description: 'Mantenimiento y actualizaciones para que tu sitio siempre funcione.',
    icon: '🛠️',
    features: ['24/7', 'Backups', 'Updates'],
    color: 'red',
  },
  {
    id: 'fast',
    title: 'Desarrollo Rápido',
    description: 'Entrega en tiempo récord sin sacrificar calidad.',
    icon: '⚡',
    features: ['2-4 semanas', 'Agile', 'Sprint'],
    color: 'yellow',
  },
] as const;


