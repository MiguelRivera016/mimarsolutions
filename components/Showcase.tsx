export default function Showcase() {
  const items = [
    { title: "Inventario IT", points: ["Equipos, licencias, zonas", "Reportes y alertas", "Usuarios/roles"] },
    { title: "POS Rápido", points: ["Ventas y caja", "Facturación", "Dashboard diario"] },
    { title: "Asistencia", points: ["Código/biometría", "Horarios", "Estados automáticos"] },
  ];

  return (
    <section className="bg-slate-50/60">
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Casos destacados</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-28 rounded-xl bg-gradient-to-br from-[#E6F3FB] via-white to-[#EAFBFF] ring-1 ring-black/5" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{it.title}</h3>
              <ul className="mt-2 text-sm text-slate-600">
                {it.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
