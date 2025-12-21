'use client';

import { motion } from 'framer-motion';
import { HiCode, HiDeviceMobile, HiShoppingCart, HiSupport } from 'react-icons/hi';

const items = [
  {
    icon: HiCode,
    title: 'Sitios Web',
    desc: 'Landing y webs rápidas enfocadas en convertir visitas en clientes.',
  },
  {
    icon: HiShoppingCart,
    title: 'E‑commerce',
    desc: 'Tienda online con carrito, pagos y catálogo listo para vender.',
  },
  {
    icon: HiDeviceMobile,
    title: 'Web Apps',
    desc: 'Paneles y herramientas internas para ahorrar tiempo y errores.',
  },
  {
    icon: HiSupport,
    title: 'Soporte',
    desc: 'Acompañamiento real después de publicar. Sin desaparecer.',
  },
];

export default function Services() {
  return (
    <section className="section-sm bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-4">Servicios</h2>
          <p className="prose">
            Lo esencial para que tu negocio tenga presencia online y genere clientes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="card"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4">{it.title}</h3>
                <p className="mt-2 text-gray-600">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

