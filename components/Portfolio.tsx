'use client';
import { motion } from 'framer-motion';

export default function Portfolio({ withCTA=false }:{ withCTA?:boolean }){
  const projects = [
    {
      title: "Inventario IT",
      desc: "Control de stock, licencias y reportes.",
      img: "/assets/images/laptop-dashboard.png",
      alt: "Laptop con dashboard de inventario"
    },
    {
      title: "POS Rápido",
      desc: "Ventas, caja y facturación.",
      img: "/assets/images/pos-terminal.png",
      alt: "Terminal POS con recibo"
    },
    {
      title: "App Servicios",
      desc: "Marketplace con mapas y notificaciones.",
      img: "/assets/images/mobile-app-screens.png",
      alt: "Pantallas de aplicación móvil"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="container-pro section-pad">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold">Proyectos realizados</h2>
        <p className="mt-2 max-w-2xl text-ink-600">Casos reales con capturas de pantalla y mockups 3D.</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 grid gap-6 md:grid-cols-3"
      >
        {projects.map(p => (
          <motion.div
            key={p.title}
            variants={item}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl2 bg-white p-4 shadow-card ring-1 ring-slate-200"
          >
            <div className="overflow-hidden rounded-lg ring-1 ring-slate-200">
              <motion.img
                src={p.img}
                alt={p.alt}
                className="h-44 w-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="mt-3 text-lg font-semibold">{p.title}</div>
            <p className="text-sm text-ink-600">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {withCTA && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <a href="/proyectos" className="btn-ghost">Ver todos los proyectos</a>
        </motion.div>
      )}
    </section>
  );
}
