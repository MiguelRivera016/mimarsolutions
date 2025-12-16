'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  title: string;
  desc: string;
  category: string;
  highlights: string[];
  img: string;
  alt: string;
};

export default function Portfolio({ withCTA = true }: { withCTA?: boolean }) {
  const projects = [
    {
      title: 'Inventario IT',
      desc: 'Control de stock, auditorías y reportes para equipos y activos.',
      category: 'Inventario',
      highlights: ['Kardex', 'Alertas de stock', 'Reportes'],
      img: '/assets/images/laptop-dashboard.png',
      alt: 'Laptop con dashboard de inventario',
    },
    {
      title: 'POS Rápido',
      desc: 'Ventas, caja y facturación con interfaz rápida y fácil de usar.',
      category: 'POS',
      highlights: ['Caja', 'Tickets', 'Usuarios'],
      img: '/assets/images/pos-terminal.png',
      alt: 'Terminal POS con recibo',
    },
    {
      title: 'App de Servicios',
      desc: 'Experiencia móvil con perfiles, estados y notificaciones.',
      category: 'App móvil',
      highlights: ['Notificaciones', 'Perfiles', 'Flujos'],
      img: '/assets/images/mobile-app-screens.png',
      alt: 'Pantallas de aplicación móvil',
    },
    {
      title: 'Panel administrativo',
      desc: 'Vista central para administración, métricas y control operativo.',
      category: 'Dashboard',
      highlights: ['Métricas', 'Roles', 'Exportación'],
      img: '/assets/images/admin-dashboard.png',
      alt: 'Panel administrativo en pantalla',
    },
    {
      title: 'Pagos e integraciones',
      desc: 'Integración de pasarelas y flujos de pago listos para producción.',
      category: 'Integraciones',
      highlights: ['Pasarelas', 'Webhooks', 'Conciliación'],
      img: '/assets/images/payment-gateways.png',
      alt: 'Ilustración de pasarelas de pago',
    },
    {
      title: 'Sitios responsivos',
      desc: 'Sitios rápidos, modernos y optimizados para conversiones.',
      category: 'Web',
      highlights: ['SEO', 'Responsive', 'Performance'],
      img: '/assets/images/responsive-devices.png',
      alt: 'Dispositivos mostrando un sitio responsivo',
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
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
              Portafolio
            </span>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">Proyectos realizados</h2>
            <p className="mt-2 max-w-2xl text-ink-600">
              Ejemplos de soluciones que podemos construir: POS, inventarios, dashboards, integraciones y apps.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/proyectos" className="btn-ghost">
              Ver todos
            </Link>
            <Link href="/cotizar" className="btn-primary">
              Cotizar un proyecto
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p: Project) => (
          <motion.div
            key={p.title}
            variants={item}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="group overflow-hidden rounded-xl2 bg-white shadow-card ring-1 ring-slate-200"
          >
            <div className="relative overflow-hidden">
              <div className="absolute left-3 top-3 z-10 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-700 ring-1 ring-slate-200 backdrop-blur">
                {p.category}
              </div>
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.35 }}>
                <Image
                  src={p.img}
                  alt={p.alt}
                  width={1200}
                  height={700}
                  className="h-52 w-full object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="p-5">
              <div className="text-lg font-semibold">{p.title}</div>
              <p className="mt-1 text-sm text-ink-600">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-ink-700 ring-1 ring-slate-200"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <Link href="/cotizar" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                  Cotizar algo similar →
                </Link>
                <span className="text-slate-300">•</span>
                <Link href="/proyectos" className="text-sm text-ink-600 hover:text-ink-800">
                  Ver portafolio
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {withCTA && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-xl2 bg-gradient-to-r from-brand-600 to-brand-400 p-6 text-white"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold">¿Quieres ver un caso parecido al tuyo?</div>
              <div className="mt-1 text-sm text-white/90">
                Cuéntanos tu idea y te proponemos el alcance, tiempos y próximos pasos.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/proyectos" className="btn-ghost text-white ring-white/40 hover:bg-white/10">
                Ver todos los proyectos
              </Link>
              <Link href="/cotizar" className="btn-primary bg-white text-brand-700 hover:bg-white/95">
                Solicitar cotización
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
