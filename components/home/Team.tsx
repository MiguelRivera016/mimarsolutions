'use client';

import { motion } from 'framer-motion';
import { HiBadgeCheck, HiChatAlt2 } from 'react-icons/hi';
import { COMPANY } from '@/lib/constants';

export default function Team() {
  const [miguel, maria] = COMPANY.team.founders;

  return (
    <section className="section-sm bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-4">Tu Equipo de Confianza</h2>
          <p className="prose">
            No somos una agencia grande, somos un equipo comprometido. Trabajás directamente con los fundadores.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="card text-center"
          >
            <div className="w-28 h-28 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-5xl">👨‍💻</span>
            </div>
            <h3 className="mt-6">{miguel.name}</h3>
            <p className="mt-2 text-blue-700 font-semibold">{miguel.role}</p>
            <p className="mt-4 text-gray-600">
              Ingeniero en Sistemas. Me enfoco en que tu sitio sea rápido, moderno y listo para convertir.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2">
                <HiBadgeCheck className="w-5 h-5 text-green-600" /> Calidad
              </span>
              <span className="inline-flex items-center gap-2">
                <HiChatAlt2 className="w-5 h-5 text-blue-600" /> Comunicación
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="card text-center"
          >
            <div className="w-28 h-28 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-5xl">👩‍💼</span>
            </div>
            <h3 className="mt-6">{(maria.title ? `${maria.title} ` : '') + maria.name}</h3>
            <p className="mt-2 text-blue-700 font-semibold">{maria.role}</p>
            <p className="mt-4 text-gray-600">
              Me encargo de que todo fluya: contrato, tiempos, presupuestos y que quedés 100% satisfecho.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2">
                <HiBadgeCheck className="w-5 h-5 text-green-600" /> Transparencia
              </span>
              <span className="inline-flex items-center gap-2">
                <HiChatAlt2 className="w-5 h-5 text-blue-600" /> Seguimiento
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl p-8 border border-gray-100 text-center">
          <p className="text-lg text-gray-700 italic">
            &quot;No somos una agencia grande, somos un equipo comprometido. Cuando trabajás con nosotros, trabajás
            directamente con los fundadores. Tu éxito es nuestro éxito.&quot;
          </p>
          <p className="mt-4 font-semibold text-gray-900">- Miguel &amp; María</p>
        </div>
      </div>
    </section>
  );
}

