'use client';

import { motion } from 'framer-motion';
import { HiCheck, HiStar } from 'react-icons/hi';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'L.8,999',
      description: 'Perfecto para empezar tu presencia online',
      features: [
        'Sitio web de 5 páginas',
        'Diseño responsivo',
        'Formulario de contacto',
        'Integración WhatsApp',
        '3 meses hosting gratis',
        '6 meses soporte',
      ],
      cta: 'Empezar Ahora',
      popular: false,
    },
    {
      name: 'Negocio',
      price: 'L.18,999',
      description: 'La opción más elegida por negocios establecidos',
      features: [
        'Todo del plan Starter',
        'Hasta 10 páginas',
        'Catálogo de productos (50)',
        'Google Maps y Analytics',
        'SEO básico incluido',
        '6 meses hosting gratis',
        '1 año de soporte',
      ],
      cta: 'Más Popular',
      popular: true,
    },
    {
      name: 'E-Commerce',
      price: 'L.35,999',
      description: 'Tienda online completa lista para vender',
      features: [
        'Tienda online completa',
        'Productos ilimitados',
        'Carrito de compras',
        'Múltiples pagos',
        'Inventario automático',
        '1 año hosting gratis',
        '1 año soporte premium',
      ],
      cta: 'Vender Online',
      popular: false,
    },
  ] as const;

  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Planes Simples, Precios Claros</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sin letra pequeña, sin costos ocultos. Precio fijo en Lempiras.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-1">
                    <HiStar className="w-4 h-4" />
                    Más Popular
                  </span>
                </div>
              )}

              <div className={`card h-full ${plan.popular ? 'border-2 border-blue-500 shadow-xl' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                  <span className="text-gray-500 text-sm">único pago</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <HiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/50493870479?text=Hola!%20Me%20interesa%20el%20plan%20${encodeURIComponent(
                    plan.name,
                  )}`}
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} w-full`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">Aceptamos todos los métodos de pago</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="badge badge-secondary">💳 Tarjetas</span>
            <span className="badge badge-secondary">🏦 Transferencia</span>
            <span className="badge badge-secondary">💵 Efectivo</span>
            <span className="badge badge-secondary">📱 Tigo Money</span>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-primary text-white rounded-2xl text-center max-w-3xl mx-auto"
        >
          <div className="text-5xl mb-4">🛡️</div>
          <h3 className="text-2xl font-bold mb-4">Garantía de 30 Días</h3>
          <p className="text-white/90">
            Si no estás 100% satisfecho, te devolvemos tu dinero. Somos los únicos en Honduras con esta garantía.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

