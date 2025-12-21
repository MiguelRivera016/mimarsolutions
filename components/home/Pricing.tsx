'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiCheck, HiLightningBolt } from 'react-icons/hi';
import { CONTACT, PRICING_PACKS } from '@/lib/constants';

function formatLempiras(value: number) {
  return `L.${new Intl.NumberFormat('es-HN', { maximumFractionDigits: 0 }).format(value)}`;
}

export default function Pricing() {
  const packs = [
    PRICING_PACKS.web.starter,
    PRICING_PACKS.web.business,
    PRICING_PACKS.web.ecommerce,
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-4">Planes Simples, Precios Claros</h2>
          <p className="prose">Sin letra pequeña. Lo que ves es lo que pagás.</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {packs.map((p, idx) => {
            const popular = 'popular' in p && Boolean(p.popular);
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className={`bg-white rounded-2xl p-8 relative shadow-lg ${
                  popular ? 'border-2 border-blue-600 shadow-xl' : 'border border-gray-100'
                }`}
              >
                {popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="badge badge-primary animate-pulse-border">
                      <HiLightningBolt className="w-4 h-4" />
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="mb-2">{p.name}</h3>
                  <p className="text-gray-600">{p.description}</p>
                  <div className="mt-6">
                    <span className={`text-5xl font-bold ${popular ? 'text-blue-700' : 'text-gray-900'}`}>
                      {formatLempiras(p.price)}
                    </span>
                    <span className="text-gray-500 ml-2">único pago</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {p.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <HiCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2 text-sm text-gray-600">
                  <div>⏱️ Entrega: {p.deliveryTime}</div>
                  <div>👥 Ideal para: {p.idealFor}</div>
                </div>

                <div className="mt-8 grid gap-3">
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(
                      `Hola! Me interesa el ${p.name}`,
                    )}`}
                    className="btn btn-primary w-full text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar {p.name}
                  </a>
                  <Link href="/contacto" className="btn btn-ghost w-full text-center">
                    Hablar con nosotros
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="prose">
            Plan de pagos: <strong>{PRICING_PACKS.payment.initial}%</strong> al iniciar y{' '}
            <strong>{PRICING_PACKS.payment.final}%</strong> al entregar. Garantía:{' '}
            <strong>{PRICING_PACKS.payment.guarantee} días</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

