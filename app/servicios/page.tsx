// app/servicios/page.tsx
'use client';

import { motion } from 'framer-motion';
import {
  HiCode,
  HiShoppingCart,
  HiDeviceMobile,
  HiChartBar,
  HiDesktopComputer,
  HiSupport,
  HiCheck,
  HiArrowRight,
} from 'react-icons/hi';

const services = [
  {
    id: 'web-development',
    icon: HiCode,
    title: 'Desarrollo Web Profesional',
    subtitle: 'Sitios que venden, no solo se ven bonitos',
    description:
      'Creamos sitios web que convierten visitantes en clientes. Diseño moderno, código limpio y optimizado para Google.',
    features: [
      'Diseño responsivo (móvil, tablet, PC)',
      'Optimizado para velocidad',
      'SEO básico incluido',
      'Panel de administración fácil',
      'Integración con redes sociales',
      'Formularios de contacto',
    ],
    technologies: ['WordPress', 'React', 'Next.js', 'HTML5', 'CSS3'],
    pricing: 'Desde L.8,999',
    cta: 'Cotizar Sitio Web',
  },
  {
    id: 'ecommerce',
    icon: HiShoppingCart,
    title: 'E-Commerce / Tiendas Online',
    subtitle: 'Vendé 24/7 a todo Honduras',
    description:
      'Tiendas online completas con carrito de compras, múltiples métodos de pago y gestión de inventario automática.',
    features: [
      'Catálogo de productos ilimitado',
      'Carrito de compras seguro',
      'Múltiples métodos de pago',
      'Control de inventario',
      'Cupones y descuentos',
      'Reportes de ventas',
    ],
    technologies: ['WooCommerce', 'Shopify', 'PrestaShop', 'Custom'],
    pricing: 'Desde L.35,999',
    cta: 'Crear Mi Tienda',
  },
  {
    id: 'mobile-apps',
    icon: HiDeviceMobile,
    title: 'Aplicaciones Móviles',
    subtitle: 'Tu negocio en el bolsillo de tus clientes',
    description:
      'Apps nativas y multiplataforma para iOS y Android. Desde apps informativas hasta sistemas complejos.',
    features: [
      'Apps para iOS y Android',
      'Notificaciones push',
      'Diseño intuitivo',
      'Integración con APIs',
      'Publicación en tiendas',
      'Actualizaciones incluidas',
    ],
    technologies: ['React Native', 'Flutter', 'PWA', 'Ionic'],
    pricing: 'Desde L.45,999',
    cta: 'Desarrollar App',
  },
  {
    id: 'seo-marketing',
    icon: HiChartBar,
    title: 'SEO & Marketing Digital',
    subtitle: 'Que te encuentren en Google',
    description:
      'Posicionamiento en buscadores y estrategias de marketing digital para aumentar tu visibilidad y ventas.',
    features: [
      'Auditoría SEO completa',
      'Optimización on-page',
      'Google My Business',
      'Campañas Google Ads',
      'Marketing en redes sociales',
      'Reportes mensuales',
    ],
    technologies: ['Google Analytics', 'Search Console', 'Meta Ads', 'Google Ads'],
    pricing: 'Desde L.2,999/mes',
    cta: 'Mejorar Mi SEO',
  },
  {
    id: 'web-systems',
    icon: HiDesktopComputer,
    title: 'Sistemas Web Personalizados',
    subtitle: 'Soluciones a la medida de tu negocio',
    description:
      'Sistemas de gestión, CRM, inventarios, facturación y cualquier solución personalizada que necesites.',
    features: [
      'Análisis de requerimientos',
      'Desarrollo a medida',
      'Base de datos robusta',
      'Usuarios y roles',
      'Reportería personalizada',
      'API REST incluida',
    ],
    technologies: ['Node.js', 'Laravel', 'Django', 'PostgreSQL', 'MongoDB'],
    pricing: 'Cotización personalizada',
    cta: 'Solicitar Cotización',
  },
  {
    id: 'support',
    icon: HiSupport,
    title: 'Mantenimiento y Soporte',
    subtitle: 'Tu sitio siempre funcionando',
    description:
      'Mantenimiento preventivo, actualizaciones de seguridad, backups automáticos y soporte técnico cuando lo necesites.',
    features: [
      'Actualizaciones de seguridad',
      'Backups diarios',
      'Monitoreo 24/7',
      'Soporte por WhatsApp',
      'Cambios menores incluidos',
      'Tiempo de respuesta: 2 horas',
    ],
    technologies: ['cPanel', 'CloudFlare', 'SSL', 'Git'],
    pricing: 'Desde L.999/mes',
    cta: 'Contratar Soporte',
  },
] as const;

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="section pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-gray-600">
              Soluciones digitales completas para hacer crecer tu negocio. Todo lo que necesitás, en un solo lugar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                      <p className="text-gray-600">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <HiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Tecnologías:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span key={tech} className="badge badge-secondary text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <p className="text-sm text-gray-500">Precio:</p>
                      <p className="text-2xl font-bold text-blue-600">{service.pricing}</p>
                    </div>

                    <a
                      href={`https://wa.me/50493870479?text=${encodeURIComponent(
                        `Hola! Me interesa ${service.title}`,
                      )}`}
                      className="btn btn-primary group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {service.cta}
                      <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Image/Visual */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-blue-600/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">¿No encontrás lo que buscás?</h2>
            <p className="text-gray-600 mb-8">
              Podemos crear soluciones personalizadas para tu negocio. Contanos tu idea y la hacemos realidad.
            </p>

            <a
              href="https://wa.me/50493870479"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar con el Equipo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

