'use client';

import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Fundación local',
    badge: 'Desde 2020',
    description:
      'Nacimos en Honduras para acompañar a las MiPymes en su transformación digital con soluciones web y móviles hechas a la medida.',
  },
  {
    title: 'Equipo híbrido',
    badge: 'Ingeniería + Diseño',
    description:
      'Integramos desarrolladores, estrategas y diseñadores de producto que trabajan 100% alineados con los resultados de negocio.',
  },
  {
    title: 'Soporte cercano',
    badge: 'Acompañamiento 24/7',
    description:
      'Mantenemos canales directos con cada cliente para iterar rápido, resolver incidencias y evolucionar el producto junto a ellos.',
  },
];

const focusAreas = [
  {
    label: 'Inventario & POS',
    detail: 'Automatizamos ventas, compras y stock en tiempo real.',
  },
  {
    label: 'Apps móviles',
    detail: 'Construimos experiencias nativas y progresivas para campo o retail.',
  },
  {
    label: 'Operaciones internas',
    detail: 'Digitalizamos RRHH, soporte y flujos de aprobación.',
  },
];

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
            ADN hondureño
          </span>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Tecnología diseñada con cercanía y criterios de negocio claros
          </h1>
          <p className="text-base text-white/70 md:text-lg">
            Cada proyecto combina research con iteraciones cortas para que nuestros clientes adopten
            herramientas modernas sin fricción y con métricas visibles desde el día uno.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-3xl border border-white/15 bg-white/5 p-6 text-left shadow-lg shadow-slate-900/30"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gold-200">{item.badge}</span>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white text-left text-slate-900 shadow-2xl"
        >
          <div className="grid gap-0 md:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-4 border-b border-slate-200 p-8 md:border-b-0 md:border-r">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                Cómo trabajamos
              </p>
              <h2 className="text-2xl font-bold text-slate-900">
                Diseño centrado en valor, despliegues rápidos y soporte continuo.
              </h2>
              <p className="text-base text-slate-600">
                Operamos con squads pequeños, cercanos y multidisciplinarios que acompañan al cliente
                desde la definición del reto hasta la estabilización del producto en producción.
              </p>
            </div>
            <div className="space-y-4 p-8">
              {focusAreas.map((area) => (
                <motion.div
                  key={area.label}
                  whileHover={{ x: 4 }}
                  className="rounded-2xl border border-slate-100/70 bg-slate-50/50 p-4"
                >
                  <div className="text-sm font-semibold text-slate-900">{area.label}</div>
                  <p className="text-sm text-slate-600">{area.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}