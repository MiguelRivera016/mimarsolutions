'use client';

import { motion } from 'framer-motion';
import {
  HiCode,
  HiShoppingCart,
  HiDeviceMobile,
  HiChartBar,
  HiSupport,
  HiLightningBolt,
} from 'react-icons/hi';

const services = [
  {
    icon: HiCode,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos y responsivos que convierten visitantes en clientes.',
    features: ['WordPress', 'React', 'Next.js'],
    color: 'blue',
  },
  {
    icon: HiShoppingCart,
    title: 'E-Commerce',
    description: 'Tiendas online completas con pagos seguros y gestión de inventario.',
    features: ['WooCommerce', 'Shopify', 'Custom'],
    color: 'purple',
  },
  {
    icon: HiDeviceMobile,
    title: 'Apps Móviles',
    description: 'Aplicaciones nativas y multiplataforma para iOS y Android.',
    features: ['React Native', 'Flutter', 'PWA'],
    color: 'green',
  },
  {
    icon: HiChartBar,
    title: 'SEO & Marketing',
    description: 'Posicionamiento en Google y estrategias digitales que funcionan.',
    features: ['SEO Local', 'Google Ads', 'Social Media'],
    color: 'orange',
  },
  {
    icon: HiSupport,
    title: 'Soporte Continuo',
    description: 'Mantenimiento y actualizaciones para que tu sitio siempre funcione.',
    features: ['24/7', 'Backups', 'Updates'],
    color: 'red',
  },
  {
    icon: HiLightningBolt,
    title: 'Desarrollo Rápido',
    description: 'Entrega en tiempo récord sin sacrificar calidad.',
    features: ['2-4 semanas', 'Agile', 'Sprint'],
    color: 'yellow',
  },
] as const;

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  green: 'bg-green-100 text-green-600',
  orange: 'bg-orange-100 text-orange-600',
  red: 'bg-red-100 text-red-600',
  yellow: 'bg-yellow-100 text-yellow-600',
} as const;

type ServiceColor = keyof typeof colorClasses;

export default function Services() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Lo Que Hacemos Mejor</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones digitales completas para hacer crecer tu negocio en línea
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const color = service.color as ServiceColor;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:shadow-xl"
              >
                <div
                  className={`w-14 h-14 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="badge badge-secondary text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/50493870479?text=Hola!%20Quiero%20saber%20más%20sobre%20sus%20servicios"
            className="btn btn-primary btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar Servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
}

