import Link from 'next/link';

const stats = [
  { value: '5+', label: 'Años construyendo software' },
  { value: '+60', label: 'Implementaciones exitosas' },
  { value: '24/7', label: 'Mesa de soporte local' },
];

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold-400/20 blur-3xl" />
      </div>

      <div className="container-pro relative z-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/80 ring-1 ring-white/20">
              Fundados en Tegucigalpa · 2019
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Tecnología hondureña diseñada para operaciones críticas
            </h1>
            <p className="text-lg text-white/80">
              Somos un equipo de ingenieros, product managers y consultores que desarrollan
              plataformas POS, inventarios y aplicaciones empresariales adaptadas a cada proceso.
              Lideramos proyectos de punta a punta: descubrimiento, desarrollo, capacitación y soporte.
            </p>
            <div className="grid gap-3 text-white/80 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-200">
                  Lo que nos mueve
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block size-1.5 rounded-full bg-white" />
                    Digitalizar MiPymes y corporativos con metodologías claras.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block size-1.5 rounded-full bg-white" />
                    Soporte hiperlocal y acompañamiento ejecutivo continuo.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block size-1.5 rounded-full bg-white" />
                    Software modular que crece con cada negocio.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-200">
                  Sectores que atendemos
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  <li>Retail y cadenas de conveniencia</li>
                  <li>Manufactura ligera y logística</li>
                  <li>Finanzas, cooperativas y servicios B2B</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/cotizar"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-brand-700 shadow-lg transition-all hover:bg-gold-400 hover:text-white"
              >
                Cotizar ahora
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                Ver servicios
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Resultados</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 p-4 text-center">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <p className="mt-1 text-sm text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
                <p className="font-semibold text-white">“Integramos todas las operaciones de caja y almacén en menos de 3 semanas.”</p>
                <p className="mt-2 text-white/70">— Dirección de Operaciones, cliente retail nacional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}