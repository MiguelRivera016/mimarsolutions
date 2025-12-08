'use client';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Metodología operativa',
    description:
      'Blueprint funcional, prototipos navegables y checklist de go-live para cada proyecto.',
    bullets: ['Workshops ejecutivos de descubrimiento', 'Matrices de roles y permisos', 'Plan de adopción por área'],
    color: 'from-brand-500 to-cyan-500',
  },
  {
    title: 'Calidad y seguridad',
    description:
      'Pruebas automatizadas, entornos separados y monitoreo constante de infraestructura.',
    bullets: ['Backups diarios en la nube', 'Auditoría de accesos y logs', 'Cumplimiento SAR y políticas de datos'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Acompañamiento continuo',
    description:
      'Mesa de soporte con SLA, dashboard de tickets y roadmap de mejoras trimestral.',
    bullets: ['Soporte omnicanal 24/7', 'Capacitaciones on-demand', 'Product manager asignado'],
    color: 'from-amber-500 to-orange-500',
  },
];

export default function AboutHighlights() {
  return (
    <section className="bg-white py-20">
      <div className="container-pro">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Cómo trabajamos</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Operación de software con enfoque ejecutivo</h2>
          <p className="mt-3 text-slate-600">
            Sumamos procesos consultivos, ingeniería ágil y métricas claras para entregar implementaciones que se adaptan
            al ritmo de tus operaciones.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
            >
              <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-3xl`} />
              <div className="relative z-10">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white`}>
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-block size-1.5 rounded-full bg-slate-900" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

