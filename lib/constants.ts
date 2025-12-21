// Configuración mínima para el rediseño (enfoque conversión)

export const COMPANY = {
  name: 'MIMAR Solutions',
  tagline: 'Desarrollo Web Que Sí Podés Pagar',
  description:
    'Equipo hondureño de desarrollo web y apps. Precios justos, contratos claros, resultados garantizados.',
  email: 'mimargrouphn@gmail.com',
  location: 'Tegucigalpa, Honduras',
  team: {
    founders: [
      { name: 'Miguel Rivera', role: 'Desarrollo & Tecnología' },
      { name: 'María Matehu', role: 'Administración & Ventas', title: 'Lic.' },
    ],
  },
} as const;

export const CONTACT = {
  whatsapp: {
    number: '50493870479',
    message: 'Hola! Quisiera información sobre sus servicios',
  },
  hours: 'Lunes a Sábado, 8:00 AM - 6:00 PM',
} as const;

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto', highlight: true },
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
    initial: 50,
    final: 50,
    guarantee: 30,
  },
} as const;

