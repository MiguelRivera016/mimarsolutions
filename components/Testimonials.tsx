'use client';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const items = [
    {
      quote:
        'El sistema POS transformó completamente nuestra operación. Ahora facturamos electrónicamente sin problemas y tenemos control total del inventario en tiempo real.',
      name: 'María González',
      role: 'Gerente de Operaciones',
      company: 'Retail Express',
      industry: 'Retail',
      metrics: '60% más eficiente',
      color: 'from-blue-500 to-blue-600',
    },
    {
      quote:
        'Implementamos el sistema de inventario IT y ahora sabemos exactamente dónde está cada equipo, cuándo vence cada licencia. El ROI fue inmediato.',
      name: 'Carlos Pineda',
      role: 'Director de TI',
      company: 'Banco Central',
      industry: 'Finanzas',
      metrics: '+200 equipos gestionados',
      color: 'from-purple-500 to-purple-600',
    },
    {
      quote:
        'El control de asistencia biométrico eliminó el fraude de marcaje. Los reportes automáticos ahorran 15 horas semanales al departamento de RRHH.',
      name: 'Andrea Mejía',
      role: 'Gerente de Recursos Humanos',
      company: 'Industrias del Norte',
      industry: 'Manufactura',
      metrics: '+350 empleados',
      color: 'from-green-500 to-green-600',
    },
  ];

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
    <section aria-label="Testimonios de clientes" className="bg-slate-50 py-20">
      <div className="container-pro max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700">
            Testimonios
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Experiencias reales sobre implementación, soporte y resultados
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 md:grid-cols-3"
        >
          {items.map((testimonial, idx) => (
            <motion.figure
              key={idx}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              {/* Decorative gradient */}
              <div
                className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${testimonial.color} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
              />

              {/* Quote icon */}
              <div className="relative">
                <svg
                  className="h-8 w-8 text-brand-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="relative mt-6 text-slate-700">
                "{testimonial.quote}"
              </blockquote>

              {/* Author info */}
              <figcaption className="mt-6 border-t border-slate-200 pt-6">
                <div className="flex items-start gap-3">
                  {/* Avatar placeholder with initials */}
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-lg font-bold text-white`}
                  >
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <div className="flex-1">
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                      <span>{testimonial.company}</span>
                      <span>•</span>
                      <span>{testimonial.industry}</span>
                    </div>
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
