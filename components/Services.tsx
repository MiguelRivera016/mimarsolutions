'use client';
import { motion } from 'framer-motion';
import type { ReactElement, ReactNode } from 'react';

export default function Services() {
  type Item = { t: string; d: string; icon: ReactElement; color: string };

  const IconWrap = ({ children, color }: { children: ReactNode; color: string }) => (
    <motion.div
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className={`inline-flex size-14 items-center justify-center rounded-2xl ${color} shadow-lg`}
    >
      <div className="inline-flex size-10 items-center justify-center rounded-xl bg-white">
        {children}
      </div>
    </motion.div>
  );

  const items: Item[] = [
    {
      t: 'Suite POS + Inventario',
      d: 'Ventas, stock en tiempo real y facturación SAR en un solo panel multi-sucursal.',
      color: 'bg-gradient-to-br from-brand-500 to-brand-600',
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 text-brand-50">
          <path
            fill="currentColor"
            d="M6 3h12a2 2 0 0 1 2 2v3H4V5a2 2 0 0 1 2-2m14 7v9a2 2 0 0 1-2 2h-5v-4h-4v4H4a2 2 0 0 1-2-2v-9z"
          />
        </svg>
      ),
    },
    {
      t: 'Control de asistencia & RRHH',
      d: 'Biometría, geolocalización, turnos flexibles e integración con nómina.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 text-white">
          <path
            fill="currentColor"
            d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5m-7 9v-1a6 6 0 0 1 12 0v1"
          />
        </svg>
      ),
    },
    {
      t: 'E-commerce y marketplaces',
      d: 'Catálogos, pagos en línea, logística y panel administrativo con analytics.',
      color: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 text-white">
          <path
            fill="currentColor"
            d="M15 6H3l3 9h10l3-9zm-3 12a2 2 0 1 0 2 2 2 2 0 0 0-2-2m-6 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2"
          />
        </svg>
      ),
    },
    {
      t: 'Apps móviles de campo',
      d: 'Ordenes de servicio, formularios offline y firmas digitales desde Android/iOS.',
      color: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 text-white">
          <path
            fill="currentColor"
            d="M17 1H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2m-5 20a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 21m5-4H7V4h10z"
          />
        </svg>
      ),
    },
    {
      t: 'Dashboards y BI',
      d: 'KPIs en vivo, reportes automáticos y alertas para dirección y operaciones.',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 text-white">
          <path
            fill="currentColor"
            d="M5 21h14v-2H5zm2-4h3V7H7zm5 0h3V3h-3zm5 0h3V11h-3z"
          />
        </svg>
      ),
    },
    {
      t: 'Integraciones + automatización',
      d: 'Conectamos contabilidad, ERPs, pasarelas y hardware con APIs seguras.',
      color: 'bg-gradient-to-br from-rose-500 to-rose-600',
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 text-white">
          <path
            fill="currentColor"
            d="M12 3a3 3 0 1 0 0 6h.18a3 3 0 1 0 0 6H12a3 3 0 1 0 0 6"
          />
        </svg>
      ),
    },
  ];

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
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)]" />

      <div className="relative container-pro">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-brand-200">
            Soluciones listas para implementar
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Paquetes de software para operaciones críticas
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Conectamos ventas, inventario, RRHH y datos en una suite modular que crece contigo.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((service, idx) => (
            <motion.article
              key={service.t}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                initial={false}
              />

              {/* Content */}
              <div className="relative z-10">
                <IconWrap color={service.color}>{service.icon}</IconWrap>

                <h3 className="mt-6 text-lg font-semibold text-slate-900 transition-colors group-hover:text-brand-700">
                  {service.t}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.d}
                </p>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileHover={{ x: 5, opacity: 1 }}
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-600"
                >
                  <span>Saber más</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-100 opacity-20 blur-2xl transition-opacity group-hover:opacity-40" />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="/apps"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand-700 hover:shadow-xl"
          >
            Ver todas las soluciones
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
