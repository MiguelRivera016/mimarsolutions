export default function Testimonials() {
  const items = [
    {
      quote:
        'El sistema POS transformó completamente nuestra operación. Ahora facturamos electrónicamente sin problemas y tenemos control total del inventario en tiempo real.',
      name: 'María González',
      role: 'Gerente de Operaciones',
      company: 'Retail Express',
      industry: 'Retail',
      metrics: '60% más eficiente',
      color: 'from-blue-500 to-blue-600',
    },
    {
      quote:
        'Implementamos el sistema de inventario IT y ahora sabemos exactamente dónde está cada equipo, cuándo vence cada licencia. El ROI fue inmediato.',
      name: 'Carlos Pineda',
      role: 'Director de TI',
      company: 'Banco Central',
      industry: 'Finanzas',
      metrics: '+200 equipos gestionados',
      color: 'from-purple-500 to-purple-600',
    },
    {
      quote:
        'El control de asistencia biométrico eliminó el fraude de marcaje. Los reportes automáticos ahorran 15 horas semanales al departamento de RRHH.',
      name: 'Andrea Mejía',
      role: 'Gerente de Recursos Humanos',
      company: 'Industrias del Norte',
      industry: 'Manufactura',
      metrics: '+350 empleados',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section aria-label="Testimonios de clientes" className="bg-slate-50 py-20">
      <div className="container-pro max-w-7xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-gold-100 px-4 py-1.5 text-sm font-medium text-gold-700">
            Casos de éxito
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Empresas que confían en nosotros
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Más de 50 empresas hondureñas ya automatizaron sus operaciones
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((testimonial, idx) => (
            <figure
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
            >
              {/* Decorative gradient */}
              <div
                className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${testimonial.color} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
              />

              {/* Quote icon */}
              <div className="relative">
                <svg
                  className="h-8 w-8 text-brand-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="relative mt-6 text-slate-700">
                "{testimonial.quote}"
              </blockquote>

              {/* Metrics badge */}
              <div className="mt-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-600/20">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {testimonial.metrics}
                </span>
              </div>

              {/* Author info */}
              <figcaption className="mt-6 border-t border-slate-200 pt-6">
                <div className="flex items-start gap-3">
                  {/* Avatar placeholder with initials */}
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-lg font-bold text-white`}
                  >
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <div className="flex-1">
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                      <span>{testimonial.company}</span>
                      <span>•</span>
                      <span>{testimonial.industry}</span>
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid gap-8 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 p-8 text-white md:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold">+50</div>
            <div className="mt-1 text-sm text-white/80">Empresas activas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">98%</div>
            <div className="mt-1 text-sm text-white/80">Satisfacción</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">24/7</div>
            <div className="mt-1 text-sm text-white/80">Soporte técnico</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">5 años</div>
            <div className="mt-1 text-sm text-white/80">En el mercado</div>
          </div>
        </div>
      </div>
    </section>
  );
}
