const milestones = [
  {
    year: '2019',
    title: 'Primeras implementaciones POS',
    description: 'Lanzamos MIMAR con soluciones de facturación y control de inventario para comercios locales.',
  },
  {
    year: '2021',
    title: 'Expansión a apps móviles y field services',
    description: 'Construimos apps para cuadrillas y soporte técnico con sincronización offline y firmas digitales.',
  },
  {
    year: '2023',
    title: 'Oficinas regionales y soporte 24/7',
    description: 'Abrimos operación en San Pedro Sula y formalizamos nuestra mesa de ayuda con SLA.',
  },
  {
    year: '2024',
    title: 'Suite empresarial modular',
    description: 'Integramos inventario IT, POS, asistencia y BI en una plataforma única con APIs abiertas.',
  },
];

export default function AboutTimeline() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container-pro">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Nuestra evolución</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Hitos que nos trajeron hasta aquí</h2>
          <p className="mt-3 text-slate-600">
            Creamos una base tecnológica robusta para seguir escalando junto a nuestros clientes y socios estratégicos.
          </p>
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-4 top-0 h-full border-l-2 border-dashed border-slate-200 md:left-1/2" />
          <div className="space-y-10">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 md:flex-row ${
                  index % 2 === 0 ? 'md:ml-auto md:max-w-[48%]' : 'md:mr-auto md:max-w-[48%]'
                }`}
              >
                <div
                  className={`absolute left-0 top-6 size-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand-500 shadow-md md:left-auto ${
                    index % 2 === 0 ? 'md:-right-8' : 'md:-left-8'
                  }`}
                />
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">{item.year}</span>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

