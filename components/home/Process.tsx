const steps = [
  { when: 'Día 1', title: 'Reunión inicial', desc: 'Definimos objetivos, páginas y contenido.' },
  { when: 'Día 3-5', title: 'Propuesta y diseño', desc: 'Te mostramos diseño y ajustamos rápido.' },
  { when: 'Semana 2-3', title: 'Desarrollo', desc: 'Construimos y te mostramos avances cada pocos días.' },
  { when: 'Semana 4', title: 'Entrega y capacitación', desc: 'Publicamos tu sitio y te explicamos cómo usarlo.' },
];

export default function Process() {
  return (
    <section className="py-16">
      <div className="container-pro px-6">
        <h2 className="text-3xl font-bold text-slate-900">Proceso simple y transparente</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Sin vueltas. Con fechas claras y comunicación directa.
        </p>

        <div className="mt-10 space-y-6">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                    {s.when}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                </div>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

