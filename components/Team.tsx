'use client';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Miguel Rivera',
    role: 'Fundador & CEO',
    initials: 'MR',
    gradient: 'from-blue-500 to-sky-600',
    quote: 'Dirige la visión de producto y asegura que cada implementación esté alineada a indicadores de negocio.',
    tags: ['Product Strategy', 'Enterprise SaaS'],
  },
  {
    name: 'María Matehu',
    role: 'COO & Customer Success',
    initials: 'MM',
    gradient: 'from-purple-500 to-pink-600',
    quote: 'Orquesta la operación diaria, lidera la oficina de proyectos y el acompañamiento post go-live.',
    tags: ['PMO', 'Customer Success'],
  },
  {
    name: 'Equipo Técnico',
    role: 'Ingeniería & Soporte 24/7',
    initials: 'ET',
    gradient: 'from-emerald-500 to-teal-600',
    quote: 'Desarrolladores full stack, especialistas DevOps y mesa de soporte hiperlocal dedicada.',
    tags: ['Full Stack', 'DevOps', 'Support'],
  },
];

export default function Team() {
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
    <section className="bg-slate-50/60">
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">Personas</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Equipo fundador y células clave</h2>
          <p className="mt-2 text-slate-600">
            Los líderes que diseñan, implementan y acompañan cada uno de tus proyectos de software.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid gap-8 sm:grid-cols-3"
        >
          {team.map((m) => (
            <motion.div
              key={m.name}
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100"
            >
              {/* Decorative gradient background */}
              <div
                className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${m.gradient} opacity-10 blur-3xl transition-opacity group-hover:opacity-30`}
              />

              {/* Avatar with initials */}
              <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${m.gradient} text-3xl font-bold text-white shadow-lg`}
                >
                  {m.initials}
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative mt-6 text-center">
                <h3 className="text-2xl font-semibold text-slate-900">{m.name}</h3>
                <p className="mt-1 text-base font-semibold text-brand-600">{m.role}</p>
                <p className="mt-3 text-sm text-slate-600">{m.quote}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent transition-all group-hover:ring-brand-200" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}