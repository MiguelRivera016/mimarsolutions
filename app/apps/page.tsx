import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aplicaciones',
  description:
    'Soluciones empresariales: Inventario IT, POS, Asistencia Estudiantil y más. Sistemas personalizados para optimizar tu negocio.',
  openGraph: {
    title: 'Nuestras Aplicaciones | MIMAR Solutions',
    description:
      'Aplicaciones empresariales: sistemas de inventario, punto de venta, control de asistencia y más.',
  },
};

export default function AppsPage() {
  const apps = [
    {
      title: 'Inventario IT',
      desc: 'Control de equipos, licencias, agencias y reportes.',
      href: '#',
    },
    {
      title: 'POS Rápido',
      desc: 'Ventas, caja, facturación y reportes en tiempo real.',
      href: '#',
    },
    {
      title: 'Asistencia Estudiantil',
      desc: 'Registro por código/biométrico, horarios y estado.',
      href: '#',
    },
    {
      title: 'MimarApp',
      desc: 'Marketplace de servicios con geolocalización y chat.',
      href: '#',
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Aplicaciones</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Selección de soluciones desarrolladas por MIMAR Solutions. Solicite una
        demo para conocer el flujo completo y la integración con su negocio.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {apps.map((app) => (
          <a
            key={app.title}
            href={app.href}
            className="group rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="h-28 rounded-xl bg-gradient-to-br from-brand-50 via-white to-brand-100 ring-1 ring-brand-100 transition group-hover:from-brand-100 group-hover:to-brand-50" />
            <h2 className="mt-3 text-lg font-semibold text-slate-900">
              {app.title}
            </h2>
            <p className="text-sm text-slate-600">{app.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
