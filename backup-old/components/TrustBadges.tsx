'use client';
import { motion } from 'framer-motion';

const badges = [
  {
    icon: '🔒',
    title: 'Datos Seguros',
    description: 'Encriptación SSL 256-bit',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: '⚡',
    title: '99.9% Uptime',
    description: 'Disponibilidad garantizada',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: '🛡️',
    title: 'Cumplimiento SAR',
    description: 'Facturación certificada',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: '💬',
    title: 'Soporte 24/7',
    description: 'Respuesta en minutos',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: '☁️',
    title: 'Cloud Backup',
    description: 'Respaldo automático diario',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: '✓',
    title: '5 Años',
    description: 'De experiencia comprobada',
    color: 'from-indigo-500 to-indigo-600',
  },
];

export default function TrustBadges() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="container-pro max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Tu tranquilidad es nuestra prioridad
          </h2>
          <p className="mt-2 text-slate-600">
            Tecnología confiable respaldada por garantías sólidas
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6"
        >
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="group relative flex flex-col items-center rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-200"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${badge.color} text-2xl shadow-md`}
              >
                {badge.icon}
              </motion.div>
              <h3 className="mt-3 text-sm font-semibold text-slate-900">
                {badge.title}
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                {badge.description}
              </p>

              {/* Hover glow */}
              <div
                className={`absolute -inset-1 -z-10 rounded-xl bg-gradient-to-br ${badge.color} opacity-0 blur-lg transition-opacity group-hover:opacity-20`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
