'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const teamSections = [
  {
    id: 'fundador',
    label: 'Fundador',
    pill: 'Visión tecnológica',
    summary:
      'Define la arquitectura, los criterios de seguridad y acompaña personalmente la ejecución de los proyectos clave.',
    color: 'from-blue-500 to-blue-600',
    members: [
      {
        name: 'Miguel Rivera',
        role: 'Fundador & CTO',
        bio: 'Lidera la dirección técnica, asesora a los clientes estratégicos y asegura que cada entrega mantenga estándares enterprise.',
        focus: ['Arquitectura cloud-native', 'Integraciones fiscales y POS', 'Mentoría técnica'],
      },
    ],
  },
  {
    id: 'cofundadora',
    label: 'Cofundadora',
    pill: 'Operaciones y experiencia',
    summary:
      'Licenciada en Administración de Empresas a cargo de la operación diaria, la relación con clientes y la evaluación de nuevos proyectos.',
    color: 'from-purple-500 to-purple-600',
    members: [
      {
        name: 'María Matehu',
        role: 'Cofundadora & COO | Lic. Admón. de Empresas',
        bio: 'Administra los recursos, conecta cada cliente con el squad ideal y valida el alcance de cada iniciativa antes de su producción.',
        focus: ['Gestión de clientes', 'Evaluación de proyectos', 'Procesos operativos'],
      },
    ],
  },
  {
    id: 'equipo',
    label: 'Equipo',
    pill: 'Squads multidisciplinarios',
    summary:
      'Desarrollo y Customer Success trabajan en células que se activan según el reto del cliente para garantizar continuidad y soporte.',
    color: 'from-green-500 to-green-600',
    members: [
      {
        name: 'Jorge Aguilar',
        role: 'Full Stack Engineer',
        bio: 'Especialista en Next.js, Nest y despliegues en Vercel/AWS.',
        focus: ['Integraciones externas', 'Escalabilidad'],
      },
      {
        name: 'Camila Núñez',
        role: 'Customer Success & Soporte',
        bio: 'Monitorea KPIs post-lanzamiento, coordina entrenamientos y cuida la adopción continua.',
        focus: ['Playbooks de soporte', 'Automatización de alertas'],
      },
    ],
  },
];

export default function Team() {
  const [activeSection, setActiveSection] = useState(teamSections[0].id);
  const current = teamSections.find((section) => section.id === activeSection) ?? teamSections[0];

  return (
    <section className="bg-slate-50/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 shadow-sm">
            Equipo MIMAR
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">Personas detrás de cada entrega</h2>
          <p className="mt-2 text-base text-slate-600">
            Haz clic en cada perfil para conocer cómo se organizan nuestros squads.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {teamSections.map((section) => {
            const isActive = section.id === current.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? 'border-transparent bg-slate-900 text-white shadow-lg'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                }`}
                aria-pressed={isActive}
              >
                {section.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur"
          >
            <div className="flex flex-col items-center text-center">
              <span
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${current.color} px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white`}
              >
                {current.pill}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">{current.label}</h3>
              <p className="mt-2 text-base text-slate-600 max-w-2xl">{current.summary}</p>
            </div>

            <div
              className={`mt-10 grid gap-6 ${
                current.members.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'
              }`}
            >
              {current.members.map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -4 }}
                  className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${current.color} text-lg font-semibold text-white`}
                  >
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <div className="mt-4">
                    <div className="text-lg font-semibold text-slate-900">{member.name}</div>
                    <p className="text-sm font-medium text-slate-600">{member.role}</p>
                    <p className="mt-2 text-sm text-slate-500">{member.bio}</p>
                  </div>
                  {member.focus && (
                    <ul className="mt-4 space-y-1 text-sm text-slate-600">
                      {member.focus.map((focusItem) => (
                        <li key={focusItem} className="flex items-center gap-2">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
                          {focusItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}