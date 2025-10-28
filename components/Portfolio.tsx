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

  return (
    <section className="container-pro section-pad">
      <h2 className="text-2xl font-bold">Proyectos realizados</h2>
      <p className="mt-2 max-w-2xl text-ink-600">Casos reales con capturas de pantalla y mockups 3D.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map(p => (
          <div key={p.title} className="rounded-xl2 bg-white p-4 shadow-card ring-1 ring-slate-200">
            <div className="overflow-hidden rounded-lg ring-1 ring-slate-200">
              <img src={p.img} alt={p.alt} className="h-44 w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-3 text-lg font-semibold">{p.title}</div>
            <p className="text-sm text-ink-600">{p.desc}</p>
          </div>
        ))}
      </div>

      {withCTA && (
        <div className="mt-8">
          <a href="/proyectos" className="btn-ghost">Ver todos los proyectos</a>
        </div>
      )}
    </section>
  );
}
