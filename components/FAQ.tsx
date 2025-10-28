export default function FAQ() {
  const faqs = [
    {
      q: "¿Cómo es el proceso de desarrollo?",
      a: "Kickoff, propuesta y cronograma. Iteraciones quincenales con demos y entregables; cierre con soporte.",
    },
    {
      q: "¿Ofrecen soporte y mantenimiento?",
      a: "Sí. Tenemos planes de soporte con SLA y monitoreo. También paquetes por horas.",
    },
    {
      q: "¿Pueden migrar datos desde Excel u otro sistema?",
      a: "Sí. Evaluamos estructura, hacemos limpieza y cargamos de forma controlada con respaldo.",
    },
    {
      q: "¿Qué formas de pago aceptan?",
      a: "Transferencia bancaria y depósito. Para suscripciones, podemos integrar pasarelas.",
    },
  ];
  return (
    <section aria-label="Preguntas frecuentes">
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Preguntas frecuentes</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{f.q}</div>
              <p className="mt-1 text-sm text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
