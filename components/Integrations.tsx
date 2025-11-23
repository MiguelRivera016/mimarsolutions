'use client';
import { motion } from 'framer-motion';

const integrations = [
  {
    name: 'SAR Honduras',
    description: 'Facturación electrónica certificada',
    icon: '📋',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'WhatsApp Business',
    description: 'Notificaciones automáticas',
    icon: '💬',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Excel / CSV',
    description: 'Importación y exportación',
    icon: '📊',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'Bancos Locales',
    description: 'Conciliación bancaria',
    icon: '🏦',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'QuickBooks',
    description: 'Sincronización contable',
    icon: '💼',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    name: 'APIs Personalizadas',
    description: 'Conecta cualquier sistema',
    icon: '🔌',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function Integrations() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-20">
      <div className="container-pro max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Integraciones
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Se integra con tus herramientas favoritas
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Conecta nuestro software con los sistemas que ya usas
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {integrations.map((integration, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              {/* Gradient background */}
              <div
                className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${integration.color} opacity-5 blur-2xl transition-opacity group-hover:opacity-10`}
              />

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${integration.color} text-2xl shadow-lg`}
                >
                  {integration.icon}
                </motion.div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {integration.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {integration.description}
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent transition-all group-hover:ring-slate-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600">
            ¿Necesitas una integración personalizada?{' '}
            <a href="/cotizar" className="font-semibold text-brand-600 hover:text-brand-700">
              Contáctanos →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
