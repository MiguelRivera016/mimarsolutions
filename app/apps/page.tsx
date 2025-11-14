import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Soluciones de Software Empresarial',
  description:
    'Sistemas POS, Inventario IT, Control de Asistencia y más. Software empresarial personalizado para optimizar tu negocio en Honduras.',
  openGraph: {
    title: 'Soluciones de Software | MIMAR Solutions',
    description:
      'Software empresarial: sistemas de inventario, punto de venta, control de asistencia y más.',
  },
};

export default function AppsPage() {
  const apps = [
    {
      id: 'pos',
      title: 'Sistema POS Completo',
      subtitle: 'Punto de venta profesional',
      desc: 'Gestiona ventas, inventario, facturación electrónica y caja en tiempo real.',
      icon: '🛒',
      features: [
        'Facturación electrónica SAR',
        'Control de inventario automático',
        'Múltiples métodos de pago',
        'Reportes y analytics',
        'Multi-sucursal',
      ],
      price: 'Desde L. 12,000',
      tag: 'MÁS POPULAR',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'inventory',
      title: 'Inventario IT',
      subtitle: 'Control total de activos',
      desc: 'Administra equipos, licencias, ubicaciones y asignaciones con trazabilidad completa.',
      icon: '📦',
      features: [
        'Gestión de equipos y licencias',
        'Control por ubicación/agencia',
        'Historial de asignaciones',
        'Alertas de vencimiento',
        'Reportes personalizados',
      ],
      price: 'Desde L. 8,500',
      tag: '',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'attendance',
      title: 'Control de Asistencia',
      subtitle: 'Registro preciso de personal',
      desc: 'Sistema biométrico y por código para registro de entrada/salida con reportes automáticos.',
      icon: '👥',
      features: [
        'Registro biométrico/código',
        'Horarios flexibles',
        'Reportes de asistencia',
        'Integración con nómina',
        'App móvil incluida',
      ],
      price: 'Desde L. 9,000',
      tag: '',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'marketplace',
      title: 'Marketplace/E-commerce',
      subtitle: 'Tienda online completa',
      desc: 'Plataforma de comercio electrónico con geolocalización, chat y pagos en línea.',
      icon: '🌐',
      features: [
        'Catálogo de productos',
        'Geolocalización de servicios',
        'Chat en tiempo real',
        'Pasarela de pagos',
        'Panel administrativo',
      ],
      price: 'Desde L. 15,000',
      tag: '',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-16 md:py-20">
        <div className="container-pro max-w-6xl text-center">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-brand-200">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
              Software empresarial hecho en Honduras
            </span>

            <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Soluciones de Software{' '}
              <span className="text-brand-600">que impulsan tu negocio</span>
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Sistemas completos y personalizables para automatizar tu empresa. Instalación,
              capacitación y soporte técnico incluidos.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-16">
        <div className="container-pro max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {apps.map((app) => (
              <div
                key={app.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                {/* Tag */}
                {app.tag && (
                  <div className="absolute right-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-white">
                    {app.tag}
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${app.color} text-3xl shadow-lg`}
                >
                  {app.icon}
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-slate-900">{app.title}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-600">{app.subtitle}</p>
                  <p className="mt-3 text-slate-600">{app.desc}</p>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-2">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing & CTA */}
                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
                  <div>
                    <div className="text-sm text-slate-500">Precio base</div>
                    <div className="text-2xl font-bold text-slate-900">{app.price}</div>
                  </div>
                  <Link
                    href={`/cotizar?producto=${app.id}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-700"
                  >
                    Solicitar demo
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t bg-slate-50 py-16">
        <div className="container-pro max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              ¿Por qué elegir nuestro software?
            </h2>
            <p className="mt-2 text-slate-600">
              Más que software, una solución integral para tu empresa
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Instalación rápida
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Implementación en menos de una semana. Nuestro equipo se encarga de todo el
                proceso técnico.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Capacitación incluida
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Entrenamiento completo para tu equipo. Videos tutoriales y manuales en español.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Soporte local 24/7</h3>
              <p className="mt-2 text-sm text-slate-600">
                Atención técnica en español cuando la necesites. WhatsApp, teléfono o remoto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-500 py-16 text-white">
        <div className="container-pro max-w-4xl text-center">
          <h2 className="text-3xl font-bold">¿Listo para modernizar tu negocio?</h2>
          <p className="mt-4 text-lg text-white/90">
            Agenda una demo gratuita y descubre cómo nuestro software puede ayudarte
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg transition-all hover:bg-gold-400 hover:text-white"
            >
              Solicitar demo gratuita
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <a
              href="https://wa.me/50493870479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
