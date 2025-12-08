const values = [
  { title: 'Claridad radical', description: 'Comunicación directa con sponsors y líderes de área para tomar decisiones rápidas.' },
  { title: 'Responsabilidad compartida', description: 'Trabajamos junto con tus equipos internos; el éxito del software es de todos.' },
  { title: 'Aprendizaje constante', description: 'Documentamos retroalimentación de cada proyecto para mejorar procesos y productos.' },
  { title: 'Tecnología pragmática', description: 'Elegimos arquitecturas y herramientas que priorizan mantenibilidad y costo total.' },
];

export default function AboutCulture() {
  return (
    <section className="border-t bg-white py-20">
      <div className="container-pro grid gap-10 lg:grid-cols-[0.4fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Cultura</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Principios que guían cada implementación</h2>
          <p className="mt-4 text-slate-600">
            Cuidamos la experiencia del usuario final y de los equipos internos. Cuando un proyecto exige cambios, acompañamos
            a los líderes con datos y planes de adopción claros.
          </p>
          <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Compromiso</p>
            <p className="mt-3 text-xl font-semibold">
              “Nuestro objetivo es que cada cliente pueda escalar sin detener la operación. Por eso implementamos, medimos y
              mejoramos juntos.”
            </p>
            <p className="mt-4 text-sm text-white/70">Miguel Rivera · Fundador</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

