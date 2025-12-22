import Link from "next/link";

function Card({
  title,
  total,
  membership,
  features,
  ctaHref,
  highlighted = false,
}: {
  title: string;
  total: string;
  membership: string;
  features: string[];
  ctaHref: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 ring-1 ${
        highlighted
          ? "bg-white shadow-xl ring-sky-200"
          : "bg-white/90 shadow-sm ring-slate-200"
      }`}
    >
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Inversión inicial
        </p>
        <div className="text-3xl font-bold text-slate-900">{total}</div>
      </div>
      <div className="mt-4 rounded-2xl bg-slate-100/80 px-4 py-3 text-sm font-semibold text-slate-700">
        Membresía mensual: <span className="text-slate-900">{membership}</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
          highlighted
            ? "bg-[#0B78C4] text-white hover:bg-[#0a6dad]"
            : "bg-white text-[#0B78C4] ring-1 ring-slate-200 hover:bg-slate-50"
        }`}
      >
        Solicitar
      </Link>
    </div>
  );
}

export default function Pricing() {
  return (
    <section aria-label="Planes y precios" className="bg-slate-50/60">
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Planes claros, resultados reales</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Mostramos la inversión total y la membresía mensual que asegura soporte, mejoras y
          acompañamiento continuo por paquete.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card
            title="Sitio Web"
            total="L 9,900"
            membership="L 350 / mes"
            features={["Landing corporativa", "Optimización SEO inicial", "Formulario y WhatsApp", "Hosting no incluido"]}
            ctaHref="/cotizar"
          />
          <Card
            title="Inventario / POS"
            total="L 24,900"
            membership="L 450 / mes"
            features={["Módulos base (productos, ventas, reportes)", "Usuarios y roles", "Capacitación 2 sesiones", "Soporte 30 días"]}
            ctaHref="/cotizar"
            highlighted
          />
          <Card
            title="App Móvil"
            total="L 39,900"
            membership="L 650 / mes"
            features={["iOS / Android con RN", "Notificaciones y mapas", "Panel admin web", "CI/CD básico"]}
            ctaHref="/cotizar"
          />
        </div>
      </div>
    </section>
  );
}
