'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: '¿Cuánto tiempo toma implementar el sistema?',
    answer:
      'La implementación completa toma entre 2-4 semanas dependiendo de la complejidad. Incluye: configuración inicial (3 días), migración de datos (5 días), capacitación del personal (3 días) y periodo de pruebas (1 semana).',
  },
  {
    question: '¿Ofrecen capacitación para mi equipo?',
    answer:
      'Sí, incluimos capacitación completa para todo tu equipo. Realizamos sesiones presenciales o virtuales, material de apoyo en video, y soporte durante el primer mes para resolver cualquier duda operativa.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer:
      'Absolutamente. Usamos encriptación SSL de 256-bit, respaldos automáticos diarios en la nube, servidores con certificación ISO 27001, y cumplimos con todas las normativas de protección de datos de Honduras.',
  },
  {
    question: '¿Qué pasa si tengo problemas técnicos?',
    answer:
      'Nuestro equipo de soporte está disponible 24/7 vía WhatsApp, correo y teléfono. Tiempo de respuesta promedio: 15 minutos. Para clientes Enterprise, ofrecemos soporte técnico en sitio.',
  },
  {
    question: '¿Puedo personalizar el sistema según mis necesidades?',
    answer:
      'Sí, todos nuestros sistemas son altamente personalizables. Podemos adaptar reportes, flujos de trabajo, campos personalizados, integraciones específicas y módulos a medida según tu industria.',
  },
  {
    question: '¿Necesito comprar servidores o hardware especial?',
    answer:
      'No. Nuestro software es 100% basado en la nube. Solo necesitas conexión a internet y navegador web. Para el sistema POS, recomendamos lectores de códigos de barras e impresoras térmicas (opcionales).',
  },
  {
    question: '¿Cuál es la política de actualización del software?',
    answer:
      'Todas las actualizaciones y nuevas funcionalidades están incluidas sin costo adicional. Realizamos actualizaciones mensuales de seguridad y mejoras, y 2-3 releases importantes al año con nuevas características.',
  },
  {
    question: '¿Puedo revisar el sistema antes de contratar?',
    answer:
      'Por supuesto. Prepararemos una cotización personalizada con escenarios similares a tu operación y agendaremos una sesión guiada para mostrarte el sistema en acción. También podemos habilitar un entorno temporal para validar flujos clave con tu equipo.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="container-pro max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Preguntas frecuentes
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            ¿Tienes dudas? Te ayudamos
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
              >
                <span className="pr-8 text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-5 w-5 flex-shrink-0 text-brand-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
                      <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold">¿Aún tienes preguntas?</h3>
          <p className="mt-2 text-white/90">
            Nuestro equipo está listo para ayudarte
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <motion.a
              href="/cotizar"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-brand-600 shadow-lg transition-all hover:bg-white/95"
            >
              Hablar con un experto
            </motion.a>
            <motion.a
              href={`https://wa.me/50493870479?text=${encodeURIComponent('Hola, tengo una pregunta sobre sus servicios')}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-semibold text-white ring-2 ring-white/50 backdrop-blur-sm transition-all hover:bg-white/20"
            >
              💬 WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
