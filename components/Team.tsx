'use client';
import { motion } from 'framer-motion';

const team = [
  {
    name: "Carlos Miguel Rivera",
    role: "Fundador & CTO",
    initials: "CR",
    gradient: "from-blue-500 to-blue-600",
    description: "Chief Technology Officer"
  },
  {
    name: "María Matehu",
    role: "Cofundadora & COO",
    initials: "MM",
    gradient: "from-purple-500 to-purple-600",
    description: "Chief Operating Officer"
  },
  {
    name: "Equipo Técnico",
    role: "Desarrolladores & Soporte",
    initials: "ET",
    gradient: "from-green-500 to-green-600",
    description: "Development & IT Support"
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
          <h2 className="text-2xl font-bold text-slate-900">Nuestro equipo</h2>
          <p className="mt-2 text-slate-600">Profesionales comprometidos con tu éxito</p>
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
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              {/* Decorative gradient background */}
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${m.gradient} opacity-5 blur-2xl transition-opacity group-hover:opacity-10`} />

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
                <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-700">{m.role}</p>
                <p className="mt-2 text-xs text-slate-500">{m.description}</p>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent transition-all group-hover:ring-slate-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}