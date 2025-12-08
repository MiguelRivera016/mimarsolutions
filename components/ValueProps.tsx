'use client';
import { motion } from 'framer-motion';

const pillars = [
  {
    label: 'Implementación',
    metric: '< 10 días',
    title: 'Go-live exprés',
    description: 'Instalamos tu POS o inventario sin detener operaciones comerciales.',
    icon: '⚙️',
    highlights: [
      'Diagnóstico en 48 horas',
      'Migración de datos incluida',
      'Checklist de arranque firmado',
    ],
  },
  {
    label: 'Procesos',
    metric: '0 sorpresas',
    title: 'Procesos blindados',
    description: 'Documentamos flujos y límites de autorización para auditar cada movimiento.',
    icon: '🧭',
    highlights: [
      'Flujos aprobados por dirección',
      'Control simultáneo de inventario y caja',
      'Cumplimiento SAR y políticas internas',
    ],
  },
  {
    label: 'Soporte',
    metric: '24/7',
    title: 'Soporte hiperlocal',
    description: 'Mesa de ayuda en Honduras con escalamientos directos por WhatsApp y remoto.',
    icon: '🛰️',
    highlights: [
      'Tiempo de respuesta < 24 min',
      'Capacitación continua a tu equipo',
      'Monitoreo preventivo de servidores',
    ],
  },
  {
    label: 'Escalabilidad',
    metric: '+50 sedes',
    title: 'Escala sin límites',
    description: 'Arquitectura cloud u on-prem con APIs para conectar contabilidad, e-commerce y BI.',
    icon: '🚀',
    highlights: [
      'Integraciones con SAP, QuickBooks y más',
      'Módulos personalizados por área',
      'Usuarios y sucursales ilimitadas',
    ],
  },
];

export default function ValueProps() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="border-t bg-white py-20">
      <div className="container-pro max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">
            Valor que se nota desde el día uno
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Software más acompañamiento estratégico
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            No solo entregamos código: nos encargamos del proceso, las personas y los resultados.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-400">
                <span>{pillar.label}</span>
                <span className="text-slate-900">{pillar.metric}</span>
              </div>

              <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/5 text-2xl">
                {pillar.icon}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.description}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {pillar.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 inline-block size-1.5 rounded-full bg-brand-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute inset-0 rounded-2xl border-2 border-brand-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-100 opacity-0 blur-2xl transition-opacity group-hover:opacity-60" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

