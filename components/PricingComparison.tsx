'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const plans = [
  {
    name: 'Básico',
    price: 'L. 8,500',
    description: 'Ideal para pequeños negocios',
    popular: false,
    features: [
      { name: 'Hasta 3 usuarios', included: true },
      { name: 'Inventario básico', included: true },
      { name: 'Reportes estándar', included: true },
      { name: 'Soporte por email', included: true },
      { name: 'Facturación electrónica', included: false },
      { name: 'Multi-sucursal', included: false },
      { name: 'API personalizada', included: false },
      { name: 'Soporte 24/7', included: false },
    ],
  },
  {
    name: 'Profesional',
    price: 'L. 12,000',
    description: 'Lo más popular para empresas',
    popular: true,
    features: [
      { name: 'Hasta 10 usuarios', included: true },
      { name: 'Inventario avanzado', included: true },
      { name: 'Reportes personalizados', included: true },
      { name: 'Soporte prioritario', included: true },
      { name: 'Facturación electrónica', included: true },
      { name: 'Multi-sucursal', included: true },
      { name: 'API personalizada', included: false },
      { name: 'Soporte 24/7', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Contactar',
    description: 'Solución completa a medida',
    popular: false,
    features: [
      { name: 'Usuarios ilimitados', included: true },
      { name: 'Todo de Profesional', included: true },
      { name: 'Módulos personalizados', included: true },
      { name: 'Gerente de cuenta dedicado', included: true },
      { name: 'Facturación electrónica', included: true },
      { name: 'Multi-sucursal', included: true },
      { name: 'API personalizada', included: true },
      { name: 'Soporte 24/7', included: true },
    ],
  },
];

export default function PricingComparison() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="container-pro max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Planes y precios
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Elige el plan perfecto para tu negocio
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Precios transparentes sin sorpresas. Todos incluyen actualizaciones gratis
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 md:grid-cols-3"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`relative overflow-hidden rounded-2xl border-2 bg-white p-8 shadow-lg ${
                plan.popular
                  ? 'border-brand-500 ring-4 ring-brand-100'
                  : 'border-slate-200'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute right-6 top-6">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    ⭐ MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.price !== 'Contactar' && (
                    <span className="text-sm text-slate-600">/ una vez</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    {feature.included ? (
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-slate-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-slate-700' : 'text-slate-400'
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href="/cotizar">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full rounded-lg px-6 py-3 font-semibold shadow-lg transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.price === 'Contactar' ? 'Hablar con ventas' : 'Comenzar ahora'}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center text-sm text-slate-600"
        >
          <p>
            Todos los planes incluyen: Capacitación inicial, migración de datos, y
            actualizaciones de por vida.
          </p>
          <p className="mt-2">
            ¿Necesitas un plan personalizado?{' '}
            <a href="/cotizar" className="font-semibold text-brand-600 hover:text-brand-700">
              Contáctanos →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
