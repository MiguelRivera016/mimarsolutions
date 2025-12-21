'use client';

import { motion } from 'framer-motion';
import { TEAM } from '@/lib/constants';

export default function Team() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tu Equipo de Confianza</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trabajás directamente con los fundadores. Sin intermediarios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-6xl">
                  {member.avatar}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {member.title}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1">
                {member.prefix && <span className="text-gray-600">{member.prefix} </span>}
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6">{member.bio}</p>

              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill) => (
                  <span key={skill} className="badge badge-secondary text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl"
        >
          <p className="text-lg text-gray-700 italic mb-4">
            &quot;No somos una agencia grande, y eso es bueno para vos. Somos un equipo comprometido que tratará tu
            proyecto como propio. Cuando trabajás con nosotros, tu éxito es nuestro éxito.&quot;
          </p>
          <p className="font-bold text-gray-900">— Miguel &amp; María</p>
        </motion.div>
      </div>
    </section>
  );
}

