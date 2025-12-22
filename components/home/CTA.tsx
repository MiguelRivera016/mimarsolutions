'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para hacer crecer tu negocio?</h2>
          <p className="text-xl mb-8 text-white/90">
            Solo aceptamos <span className="font-bold">3 proyectos por mes</span> para garantizar calidad.{' '}
            <span className="text-yellow-300 font-semibold">Quedan 2 espacios para enero.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/50493870479?text=Hola!%20Quiero%20reservar%20mi%20espacio%20para%20enero"
              className="btn bg-white text-blue-600 hover:bg-gray-100 btn-lg group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Reservar Mi Espacio
            </a>
            <Link
              href="/servicios"
              className="btn btn-ghost bg-white/10 backdrop-blur text-white hover:bg-white/20 btn-lg"
            >
              Ver Todos los Planes
            </Link>
          </div>

          <p className="text-white/70 text-sm">
            También podés escribirnos a:{' '}
            <a href="mailto:mimargrouphn@gmail.com" className="underline hover:no-underline">
              mimargrouphn@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

