export default function Services() {
  type Item = { t: string; d: string; icon: JSX.Element };
  const IconWrap = ({ children }: { children: React.ReactNode }) => (
    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100">
      <div className="inline-flex size-9 items-center justify-center rounded-xl bg-white ring-1 ring-gold-200">
        {children}
      </div>
    </div>
  );

  const items: Item[] = [
    {
      t: "Desarrollo de Software y Aplicaciones",
      d: "Creamos sistemas de inventario, ventas, asistencia y apps móviles a la medida para empresas, escuelas y negocios.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 text-brand-600">
          <path fill="currentColor" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2z" />
        </svg>
      ),
    },
    {
      t: "Diseño y desarrollo web profesional",
      d: "Diseñamos sitios web modernos y funcionales con panel de administración y hosting incluido.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 text-brand-600">
          <path fill="currentColor" d="M3 5h18v12H3zM7 19h10" />
        </svg>
      ),
    },
    {
      t: "Soluciones en la nube y hosting",
      d: "Implementamos servidores, bases de datos y copias de seguridad con AWS, Firebase o Render.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 text-brand-600">
          <path fill="currentColor" d="M7 16h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 7 16z" />
        </svg>
      ),
    },
    {
      t: "Soporte técnico y administración de sistemas",
      d: "Mantenimiento remoto, redes, políticas de seguridad y administración de usuarios.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 text-brand-600">
          <path fill="currentColor" d="M12 6a6 6 0 1 1-6 6h2a4 4 0 1 0 4-4V6zM5 20h14v-2H5z" />
        </svg>
      ),
    },
    {
      t: "Automatización y herramientas empresariales",
      d: "Dashboards, reportes con Power BI y conexiones entre sistemas para optimizar procesos.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 text-brand-600">
          <path fill="currentColor" d="M4 14h3v6H4zm6-4h3v10h-3zm6-6h3v16h-3z" />
        </svg>
      ),
    },
    {
      t: "Capacitación y formación tecnológica",
      d: "Cursos, talleres y certificaciones basadas en nuestra serie educativa ‘Informática para Todos’.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 text-brand-600">
          <path fill="currentColor" d="M12 3 2 8l10 5 8-4v6h2V8zM4 14v3l8 4 8-4v-3l-8 4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="container-pro section-pad">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">Servicios</h2>
        <p className="mt-2 text-ink-600">
          Soluciones integrales con enfoque empresarial: desarrollo, nube, soporte, automatización y formación.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article
            key={it.t}
            className="group rounded-xl2 bg-white p-6 shadow-card ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <IconWrap>{it.icon}</IconWrap>
            <h3 className="mt-4 text-lg font-semibold">
              <span className="bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">
                {it.t}
              </span>
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-600">{it.d}</p>

            {/* acento dorado sutil en el borde al pasar */}
            <div className="pointer-events-none absolute inset-0 rounded-xl2 ring-0 ring-gold-300/0 transition duration-300 group-hover:ring-4 group-hover:ring-gold-200/50" />
          </article>
        ))}
      </div>

      {/* Botón centrado */}
      <div className="mt-10 flex justify-center">
        <a href="/servicios" className="btn-primary">
          Ver todos los servicios
        </a>
      </div>
    </section>
  );
}
