'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiHome, HiArrowLeft } from 'react-icons/hi';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto relative"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="text-9xl md:text-[200px] font-black text-blue-600/20 mb-8"
          >
            404
          </motion.div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">¡Ups! Página no encontrada</h1>
          <p className="text-xl text-gray-600 mb-8">
            Parece que la página que buscás no existe o fue movida. No te preocupes, podemos ayudarte.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-primary group">
              <HiHome className="w-5 h-5" />
              Ir al Inicio
            </Link>
            <button onClick={() => window.history.back()} className="btn btn-secondary group" type="button">
              <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Volver Atrás
            </button>
          </div>

          {/* Help */}
          <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm">
            <p className="text-gray-600 mb-4">¿Necesitás ayuda encontrando algo específico?</p>

            <a
              href="https://wa.me/50493870479?text=Hola!%20No%20pude%20encontrar%20la%20página%20que%20buscaba"
              className="text-blue-600 hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribinos por WhatsApp →
            </a>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-float" />
          <div
            className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-50 animate-float"
            style={{ animationDelay: '2s' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

