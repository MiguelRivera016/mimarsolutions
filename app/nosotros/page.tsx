// app/nosotros/page.tsx
'use client';

import { motion } from 'framer-motion';
import { TEAM } from '@/lib/constants';
import { HiLightBulb, HiHeart, HiUserGroup, HiSparkles, HiArrowRight } from 'react-icons/hi';

const values = [
  {
    icon: HiHeart,
    title: 'Transparencia Total',
    description: 'Sin letra pequeña, sin costos ocultos. Lo que prometemos es lo que entregamos.',
  },
  {
    icon: HiLightBulb,
    title: 'Innovación Constante',
    description: 'Usamos las últimas tecnologías para darte ventaja sobre tu competencia.',
  },
  {
    icon: HiUserGroup,
    title: 'Enfoque Personal',
    description: 'No sos un número más. Cada proyecto recibe nuestra atención completa.',
  },
  {
    icon: HiSparkles,
    title: 'Calidad Garantizada',
    description: 'Si no estás satisfecho, te devolvemos tu dinero. Así de seguros estamos.',
  },
] as const;

const milestones = [
  { year: '2023', event: 'Inicio del sueño', description: 'Miguel y María deciden crear MIMAR Solutions' },
  { year: '2024', event: 'Primeros proyectos', description: 'Desarrollamos sitios para negocios locales' },
  { year: '2024', event: 'Equipo formado', description: 'Establecemos procesos y metodologías' },
  { year: '2025', event: 'Crecimiento', description: 'Meta: 50 negocios digitalizados' },
] as const;

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="section pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl text-gray-600">
              Somos Miguel y María, un equipo hondureño con una misión: hacer la tecnología accesible para todos los
              negocios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg mx-auto text-gray-600"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>

              <p className="text-lg leading-relaxed mb-6">
                Todo comenzó con una simple observación: los negocios hondureños estaban pagando fortunas por sitios
                web mediocres, o peor aún, siendo ignorados por agencias que los trataban como un número más.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Miguel, con su pasión por la tecnología y años de experiencia en desarrollo, y María, con su visión de
                negocios y habilidades administrativas, decidimos que era hora de cambiar las cosas.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-6 my-8 text-xl italic text-gray-700">
                &quot;¿Por qué los negocios locales tienen que pagar precios de primer mundo por tecnología? ¿Por qué
                no pueden tener acceso a desarrollo de calidad a precios justos?&quot;
              </blockquote>

              <p className="text-lg leading-relaxed mb-6">
                Así nació <strong>MIMAR Solutions</strong>: una empresa de desarrollo web que combina calidad
                profesional con precios accesibles, atención personalizada con procesos eficientes, y sobre todo, un
                compromiso real con el éxito de cada cliente.
              </p>

              <p className="text-lg leading-relaxed">
                No somos la agencia más grande (todavía), pero somos la que más se preocupa por tu éxito. Cuando
                trabajás con nosotros, trabajás directamente con los fundadores. Tu proyecto es nuestro proyecto.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            El Equipo Fundador
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-5xl flex-shrink-0">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      {member.prefix && <span className="text-gray-600">{member.prefix} </span>}
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="badge badge-secondary text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Nuestros Valores
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Nuestro Camino
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />

              {/* Milestones */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={`${milestone.year}-${milestone.event}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-sm font-bold">{milestone.year}</span>
                    </div>
                    <div className="pb-8">
                      <h3 className="font-bold text-lg mb-1">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Trabajemos Juntos</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Queremos ser parte de tu historia de éxito. Contanos tu idea y hagámosla realidad juntos.
            </p>

            <a
              href="https://wa.me/50493870479?text=Hola!%20Me%20gustaría%20trabajar%20con%20ustedes"
              className="btn btn-primary btn-lg group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar Conversación
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

