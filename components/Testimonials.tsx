export default function Testimonials() {
  const items = [
    {
      quote: "Reducimos tiempos de inventario un 60% y tenemos reportes diarios en un clic.",
      name: "María González",
      role: "Gerente Operaciones — Retail SPS",
      avatar: "/avatars/1.jpg",
    },
    {
      quote: "El POS nos permitió controlar caja y facturación con auditoría y roles.",
      name: "Carlos Pineda",
      role: "Administrador — Farma Centro",
      avatar: "/avatars/2.jpg",
    },
    {
      quote: "La app móvil integró mapas, pagos y notificaciones en pocas semanas.",
      name: "Andrea Mejía",
      role: "CEO — Servicios Express",
      avatar: "/avatars/3.jpg",
    },
  ];
  return (
    <section aria-label="Testimonios de clientes">
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Lo que dicen nuestros clientes</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-600">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
