export default function AppsPage() {
  const apps = [
    { title: "Inventario IT", desc: "Control de equipos, licencias, agencias y reportes.", href: "#" },
    { title: "POS Rápido", desc: "Ventas, caja, facturación y reportes en tiempo real.", href: "#" },
    { title: "Asistencia Estudiantil", desc: "Registro por código/biométrico, horarios y estado.", href: "#" },
    { title: "MimarApp", desc: "Marketplace de servicios con geolocalización y chat.", href: "#" },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Aplicaciones</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Selección de soluciones desarrolladas por MIMAR GROUP. Solicite una demo
        para conocer el flujo completo y la integración con su negocio.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {apps.map((a) => (
          <a key={a.title} href={a.href} className="rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md">
            <div className="h-28 rounded-xl bg-gradient-to-br from-[#E6F3FB] via-white to-[#EAFBFF] ring-1 ring-black/5" />
            <h2 className="mt-3 text-lg font-semibold text-slate-900">{a.title}</h2>
            <p className="text-sm text-slate-600">{a.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
