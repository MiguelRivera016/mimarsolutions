'use client';

import { motion } from 'framer-motion';
import { HiCalendar, HiSwatch, HiCodeBracket, HiRocketLaunch } from 'react-icons/hi2';

const steps = [
  {
    icon: HiCalendar,
    day: 'Día 1',
    title: 'Reunión Inicial',
    description: 'Nos reunimos (virtual o presencial), entendemos tu negocio y definimos objetivos claros.',
  },
  {
    icon: HiSwatch,
    day: 'Día 3-5',
    title: 'Diseño y Propuesta',
    description: 'Te presentamos el diseño inicial y ajustamos según tu feedback hasta que estés feliz.',
  },
  {
    icon: HiCodeBracket,
    day: 'Semana 2-3',
    title: 'Desarrollo',
    description: 'Construimos tu sitio con código limpio. Te mostramos avances cada 3 días.',
  },
  {
    icon: HiRocketLaunch,
    day: 'Semana 4',
    title: 'Lanzamiento',
    description: 'Tu sitio online, te capacitamos y tienes 30 días para solicitar cambios.',
  },
];

export default function Process() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proceso Simple y Transparente</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">De la idea a la realidad en 4 semanas o menos</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Line connector - hidden on mobile */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gray-300" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center relative z-10">
                      <step.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="absolute inset-0 animate-pulse bg-blue-200 rounded-full" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-3">
                      {step.day}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  {/* Step number for mobile */}
                  <div className="md:hidden absolute -top-2 -left-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-white rounded-2xl shadow-sm max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Tiempos de Entrega Garantizados</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">2</div>
              <div className="text-sm text-gray-600">Semanas</div>
              <div className="text-xs text-gray-500 mt-1">Sitio básico</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">3-4</div>
              <div className="text-sm text-gray-600">Semanas</div>
              <div className="text-xs text-gray-500 mt-1">Sitio negocio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">4-6</div>
              <div className="text-sm text-gray-600">Semanas</div>
              <div className="text-xs text-gray-500 mt-1">E-commerce</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

