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
      t: 'Desarrollo de Software y Aplicaciones',
      d: 'Sistemas de inventario, POS, asistencia y apps móviles a la medida para empresas y negocios.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 text-blue-600">
          <path
            fill="currentColor"
            d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2z"
          />
        </svg>
      ),
    },
    {
      t: 'Diseño y Desarrollo Web Profesional',
      d: 'Sitios web modernos, responsivos y optimizados con panel de administración incluido.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 text-purple-600">
          <path
            fill="currentColor"
            d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm0 2v10h18V7H3z"
          />
        </svg>
      ),
    },
    {
      t: 'Soluciones en la Nube y Hosting',
      d: 'Servidores, bases de datos y copias de seguridad con AWS, Firebase o Azure.',
      color: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 text-cyan-600">
          <path
            fill="currentColor"
            d="M7 16h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 7 16z"
          />
        </svg>
      ),
    },
    {
      t: 'Soporte Técnico 24/7',
      d: 'Mantenimiento remoto, administración de redes y seguridad de sistemas.',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 text-green-600">
          <path
            fill="currentColor"
            d="M12 6a6 6 0 1 1-6 6h2a4 4 0 1 0 4-4V6zM5 20h14v-2H5z"
          />
        </svg>
      ),
    },
    {
      t: 'Automatización Empresarial',
      d: 'Dashboards, reportes con Power BI y conexiones entre sistemas para optimizar procesos.',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 text-orange-600">
          <path
            fill="currentColor"
            d="M4 14h3v6H4zm6-4h3v10h-3zm6-6h3v16h-3z"
          />
        </svg>
      ),
    },
    {
      t: 'Capacitación Tecnológica',
      d: 'Cursos, talleres y certificaciones para tu equipo con contenido empresarial.',
      color: 'bg-gradient-to-br from-pink-500 to-pink-600',
      icon: (
        <svg viewBox="0 0 24 24" className="size-6 text-pink-600">
          <path
            fill="currentColor"
            d="M12 3 2 8l10 5 8-4v6h2V8zM4 14v3l8 4 8-4v-3l-8 4z"
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
            Nuestros Servicios
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Soluciones completas para tu empresa
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Desde desarrollo hasta soporte continuo, cubrimos todas tus necesidades tecnológicas
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
            href="/servicios"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand-700 hover:shadow-xl"
          >
            Ver todos los servicios
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
