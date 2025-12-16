export default function AboutIntro() {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white">
      <div className="container-pro py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-brand-200">
            Sobre nosotros
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            MIMAR Solutions: desarrollo de software en Honduras
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Diseñamos y construimos software a medida para empresas: sistemas internos, POS e inventarios,
            dashboards, integraciones y aplicaciones web/móviles.
          </p>
          <p className="mt-2 text-base text-slate-600">
            Nuestro enfoque es simple: claridad en el alcance, entregas por fases y acompañamiento para que
            tu equipo pueda operar con confianza desde el primer día.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-brand-700">Misión</div>
            <p className="mt-2 text-sm text-slate-600">
              Convertir procesos manuales en sistemas digitales claros, rápidos y seguros que ahorren tiempo
              y reduzcan errores.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-brand-700">Visión</div>
            <p className="mt-2 text-sm text-slate-600">
              Ser un aliado tecnológico para empresas que buscan escalar con software bien construido y soporte
              responsable.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-brand-700">Cómo trabajamos</div>
            <p className="mt-2 text-sm text-slate-600">
              Descubrimiento → diseño → desarrollo → entrega. Priorizamos visibilidad, calidad y documentación básica.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">Qué hacemos (en pocas palabras)</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              'Sistemas empresariales (inventario, POS, asistencia, RRHH, operaciones)',
              'Aplicaciones web y paneles administrativos',
              'Apps móviles (iOS/Android) para operaciones y clientes',
              'Integraciones: facturación, pagos, WhatsApp, APIs y automatizaciones',
              'Infraestructura y despliegue (nube, backups, monitoreo básico)',
              'Capacitación y soporte para tu equipo',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  ✓
                </span>
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}