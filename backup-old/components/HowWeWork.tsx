import Link from 'next/link';

const steps = [
  {
    title: '1) Descubrimiento',
    desc: 'Aterrizamos objetivos, alcance, usuarios y prioridades. Definimos un plan por fases.',
  },
  {
    title: '2) Diseño & arquitectura',
    desc: 'Prototipo UI/UX + estructura técnica (roles, datos, integraciones, seguridad).',
  },
  {
    title: '3) Desarrollo',
    desc: 'Construcción por entregas. Revisiones constantes para asegurar avance y calidad.',
  },
  {
    title: '4) Entrega & puesta en marcha',
    desc: 'Pruebas, capacitación, despliegue y acompañamiento para que tu equipo opere sin fricción.',
  },
];

const deliverables = [
  'Código y repositorio (cuando aplique)',
  'Panel administrativo / roles / permisos',
  'Integraciones (APIs, facturación, WhatsApp, pagos)',
  'Documentación básica + capacitación',
  'Soporte y mejoras continuas (mensualidad opcional)',
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-20">
      <div className="container-pro max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-brand-200">
            Cómo trabajamos
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Un proceso claro para entregar software de calidad
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Te damos visibilidad desde el día 1: alcance, tiempos, entregables y próximos pasos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4">
            {steps.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-base font-semibold text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <div className="text-lg font-semibold text-slate-900">Qué incluye normalmente</div>
            <p className="mt-2 text-sm text-slate-600">
              Dependiendo del proyecto, estos son los componentes más comunes.
            </p>
            <ul className="mt-5 space-y-3">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-white">
                    ✓
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cotizar" className="btn-primary">
                Solicitar propuesta
              </Link>
              <Link href="/proyectos" className="btn-ghost">
                Ver ejemplos
              </Link>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Nota: los tiempos y el alcance se definen según tu necesidad (fase 1).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

