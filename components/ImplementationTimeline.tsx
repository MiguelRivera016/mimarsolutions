'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    title: '1. Kickoff y diagnóstico',
    duration: 'Día 1-2',
    description: 'Reunión estratégica de 90 minutos para mapear operaciones, puntos de dolor y KPIs.',
    deliverables: ['Mapa de procesos prioritarios', 'Checklist técnico', 'Owners asignados'],
  },
  {
    title: '2. Blueprint funcional',
    duration: 'Día 3-4',
    description: 'Diseñamos pantallas, permisos y reglas de negocio. Validamos con tus equipos.',
    deliverables: ['Wireframes navegables', 'Matriz de roles y permisos', 'Plan de integración'],
  },
  {
    title: '3. Configuración + datos',
    duration: 'Día 5-7',
    description: 'Parametrizamos módulos, migramos catálogos y conectamos hardware o APIs.',
    deliverables: ['Base de datos limpia', 'Pruebas con tus escenarios', 'Documentación técnica'],
  },
  {
    title: '4. Lanzamiento guiado',
    duration: 'Día 8-10',
    description: 'Pilotaje en vivo acompañado por nuestro equipo. Ajustamos detalles en el momento.',
    deliverables: ['Go-live supervisado', 'Plan de contingencia', 'Reporte de incidencias'],
  },
  {
    title: '5. Soporte y mejora continua',
    duration: 'Desde el día 11',
    description: 'Mesa de soporte 24/7, monitoreo proactivo y roadmap de mejoras trimestral.',
    deliverables: ['SLA firmado', 'Capacitaciones on-demand', 'Roadmap de producto'],
  },
];

export default function ImplementationTimeline() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-brand-500/30 to-transparent" />

      <div className="container-pro relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white/80 ring-1 ring-white/20">
            Proceso comprobado
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            De idea a software operativo en 10 días
          </h2>
          <p className="mt-3 text-lg text-white/80">
            Seguimos una metodología ágil enfocada en resultados rápidos y adopción total del equipo.
          </p>
        </motion.div>

        <div className="mt-16 space-y-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              {/* Timeline indicator */}
              <div className="absolute -left-5 top-8 hidden items-center md:flex">
                <div className="size-3 rounded-full bg-gold-400 shadow-[0_0_0_6px_rgba(248,169,28,0.35)]" />
                <div className="ml-3 h-px w-8 bg-gradient-to-r from-gold-400 to-transparent" />
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Duración</p>
                  <p className="text-lg font-semibold text-gold-200">{step.duration}</p>
                </div>
                <div className="rounded-full border border-white/10 px-4 py-1 text-sm text-white/70">
                  {`Paso ${idx + 1}`}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-base text-white/80">{step.description}</p>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Entregables</p>
                <ul className="mt-2 grid gap-2 text-sm text-white/80 md:grid-cols-3">
                  {step.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2 rounded-lg bg-white/5 px-3 py-2">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-300" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
                      </svg>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

