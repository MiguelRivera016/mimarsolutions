'use client';

import { motion } from 'framer-motion';
import { HiClipboardCheck, HiColorSwatch, HiCode, HiLightningBolt } from 'react-icons/hi';

const steps = [
  {
    when: 'Día 1',
    title: 'Reunión inicial',
    desc: 'Definimos objetivos, páginas y contenido.',
    icon: HiClipboardCheck,
  },
  {
    when: 'Día 3-5',
    title: 'Propuesta y diseño',
    desc: 'Te mostramos diseño y ajustamos rápido.',
    icon: HiColorSwatch,
  },
  {
    when: 'Semana 2-3',
    title: 'Desarrollo',
    desc: 'Construimos y te mostramos avances cada pocos días.',
    icon: HiCode,
  },
  {
    when: 'Semana 4',
    title: 'Entrega y capacitación',
    desc: 'Publicamos tu sitio y te explicamos cómo usarlo.',
    icon: HiLightningBolt,
  },
];

export default function Process() {
  return (
    <section className="section-sm">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-4">Proceso Simple y Transparente</h2>
          <p className="prose">Sin vueltas. Con fechas claras y comunicación directa.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="badge badge-primary">{s.when}</span>
                      <h3 className="text-xl font-bold">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-gray-600">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

