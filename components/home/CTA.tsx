'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { CONTACT } from '@/lib/constants';

export default function CTA() {
  const href = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(
    'Hola! Quiero reservar mi espacio para un sitio web.',
  )}`;

  return (
    <section className="section">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-6"
        >
          ¿Listo para tener tu sitio web?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Cupos limitados por mes para garantizar calidad. Escribinos y te respondemos rápido.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={href}
            className="btn btn-primary btn-lg inline-flex items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar por WhatsApp
            <HiArrowRight className="w-5 h-5" />
          </a>
          <Link href="/contacto" className="btn btn-secondary btn-lg">
            Ir a Contacto
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

