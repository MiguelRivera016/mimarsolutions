'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowRight, HiSparkles } from 'react-icons/hi';
import { PRICING_PLANS } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6"
          >
            <HiSparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Oferta especial primeros 10 clientes</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            Desarrollo Web
            <span className="text-gradient block mt-2">Que Sí Podés Pagar</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Sitios web profesionales desde{' '}
            <span className="font-bold text-gray-900">
              L.{new Intl.NumberFormat('es-HN').format(PRICING_PLANS[0].price)}
            </span>
            . Sin sorpresas, sin excusas. Equipo 100% hondureño.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/servicios" className="btn btn-primary btn-lg group">
              Ver Planes y Precios
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/50493870479"
              className="btn btn-secondary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Hablar por WhatsApp
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-600"
          >
            <span className="flex items-center gap-2">✓ Garantía 30 días</span>
            <span className="flex items-center gap-2">✓ Contrato claro</span>
            <span className="flex items-center gap-2">✓ Precio fijo</span>
            <span className="flex items-center gap-2">✓ 6 meses soporte</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">2-4</div>
              <div className="text-gray-600 text-sm mt-1">Semanas entrega</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">50%</div>
              <div className="text-gray-600 text-sm mt-1">Menos costo</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 text-sm mt-1">Soporte local</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs">Scroll</span>
          <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

