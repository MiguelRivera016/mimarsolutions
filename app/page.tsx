import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';
import { COMPANY, CONTACT, PRICING_PACKS } from '@/config/constants';

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const formatHNL = (value: number) =>
  `L.${value.toLocaleString('es-HN', { maximumFractionDigits: 0 })}`;

export default function HomePage() {
  const plans = [
    PRICING_PACKS.web.starter,
    PRICING_PACKS.web.business,
    PRICING_PACKS.web.ecommerce,
  ];

  const waInfoText = encodeURIComponent(CONTACT.whatsapp.message);
  const waLink = `https://wa.me/${CONTACT.whatsapp.number}?text=${waInfoText}`;
  const waReserveLink = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(
    'Hola! Me interesa el Pack '
  )}`;

  return (
    <>
      {/* Hero Section - Propuesta clara y directa */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden">
        <div className="container-pro relative z-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <FadeIn>
              {/* Badge de oferta */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-800">
                <span className="animate-pulse" aria-hidden="true">
                  🔥
                </span>
                <span className="font-semibold">Oferta especial primeros 10 clientes</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
                Desarrollo Web Que
                <span className="block text-brand-500">Sí Podés Pagar</span>
              </h1>

              <p className="mb-8 text-xl text-slate-600">
                Sitios web profesionales desde{' '}
                <span className="text-2xl font-bold text-slate-900">
                  {formatHNL(PRICING_PACKS.web.starter.price)}
                </span>
                . Sin sorpresas, sin excusas. Equipo 100% hondureño.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/precios" className="btn-primary text-center">
                  Ver Planes y Precios
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
                <a
                  href={waLink}
                  className="btn-ghost flex items-center justify-center gap-2 text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  Hablar por WhatsApp
                </a>
              </div>

              {/* Trust signals */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">✓ Garantía 30 días</span>
                <span className="flex items-center gap-2">✓ Contrato claro</span>
                <span className="flex items-center gap-2">✓ Precio fijo</span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Imagen o gráfico al lado derecho */}
        <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
          <div className="absolute inset-0 bg-gradient-to-bl from-brand-50 via-white to-white" />
          <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(11,120,196,.18),transparent_45%),radial-gradient(circle_at_70%_40%,rgba(248,169,28,.18),transparent_45%),radial-gradient(circle_at_40%_80%,rgba(11,120,196,.14),transparent_50%)]" />
          </div>
        </div>
      </section>

      {/* Sección Problema-Solución */}
      <section className="bg-slate-50 py-20">
        <div className="container-pro">
          <SlideIn className="mx-auto max-w-3xl text-center">
            <h2 className="mb-12 text-3xl font-bold text-slate-900">Sabemos lo que pasa en Honduras...</h2>
          </SlideIn>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Problemas */}
            <div className="rounded-xl bg-red-50 p-8 ring-1 ring-red-100">
              <h3 className="mb-4 text-xl font-bold text-red-900">Lo que NO querés 😤</h3>
              <ul className="space-y-3 text-slate-800">
                <li className="flex items-start gap-3">
                  <span className="text-red-500" aria-hidden="true">
                    ❌
                  </span>
                  <span>Agencias que cobran en dólares ($2000+)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500" aria-hidden="true">
                    ❌
                  </span>
                  <span>Freelancers que desaparecen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500" aria-hidden="true">
                    ❌
                  </span>
                  <span>Proyectos que nunca terminan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500" aria-hidden="true">
                    ❌
                  </span>
                  <span>Cero soporte después de pagar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500" aria-hidden="true">
                    ❌
                  </span>
                  <span>&quot;Costos extras&quot; sorpresa</span>
                </li>
              </ul>
            </div>

            {/* Soluciones */}
            <div className="rounded-xl bg-green-50 p-8 ring-1 ring-green-100">
              <h3 className="mb-4 text-xl font-bold text-green-900">Lo que SÍ ofrecemos 💪</h3>
              <ul className="space-y-3 text-slate-800">
                <li className="flex items-start gap-3">
                  <span className="text-green-600" aria-hidden="true">
                    ✅
                  </span>
                  <span>Precio fijo en Lempiras</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600" aria-hidden="true">
                    ✅
                  </span>
                  <span>Contrato claro y legal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600" aria-hidden="true">
                    ✅
                  </span>
                  <span>Entrega en 2-4 semanas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600" aria-hidden="true">
                    ✅
                  </span>
                  <span>6 meses soporte incluido</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600" aria-hidden="true">
                    ✅
                  </span>
                  <span>Garantía devolución 30 días</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards simplificados */}
      <section className="py-20">
        <div className="container-pro">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Planes Simples, Precios Claros</h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-slate-600">
              Sin letra pequeña. Lo que ves es lo que pagás.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {plans.map((plan) => {
              const popular = 'popular' in plan && plan.popular;
              return (
                <article
                  key={plan.name}
                  className={
                    'relative rounded-2xl bg-white p-8 shadow-card ring-1 ' +
                    (popular ? 'ring-brand-200' : 'ring-slate-200')
                  }
                >
                  {popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
                      Más popular
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{plan.description}</p>

                  <div className="mt-6">
                    <div className="text-sm text-slate-500">Desde</div>
                    <div className="mt-1 text-4xl font-extrabold tracking-tight text-slate-900">
                      {formatHNL(plan.price)}
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2 text-sm text-slate-700">
                    {plan.features.slice(0, 6).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 text-green-600" aria-hidden="true">
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Entrega</span>
                      <span>{plan.deliveryTime}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-semibold">Ideal para</span>
                      <span className="text-right">{plan.idealFor}</span>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <Link href="/precios" className="btn-primary w-full justify-center text-center">
                      Ver detalles
                    </Link>
                    <a
                      href={`${waReserveLink}${encodeURIComponent(plan.name)}`}
                      className="btn-ghost flex w-full items-center justify-center gap-2 text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección del Equipo */}
      <section className="bg-slate-50 py-20">
        <div className="container-pro">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Tu Equipo de Confianza</h2>

          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
            {/* Miguel */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-brand-100">
                <span className="text-5xl" aria-hidden="true">
                  👨‍💻
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Miguel Rivera</h3>
              <p className="mb-4 font-semibold text-brand-600">Desarrollo & Tecnología</p>
              <p className="text-slate-600">
                Ingeniero en Sistemas. Especialista en React, Next.js y desarrollo móvil. Me
                aseguro que tu sitio sea rápido, moderno y funcione perfectamente.
              </p>
            </div>

            {/* María */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-brand-100">
                <span className="text-5xl" aria-hidden="true">
                  👩‍💼
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Lic. María Matehu</h3>
              <p className="mb-4 font-semibold text-brand-600">Administración & Ventas</p>
              <p className="text-slate-600">
                Licenciada en Administración de Empresas. Me encargo de que todo fluya:
                contratos, tiempos, presupuestos y que quedes 100% satisfecho.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-xl bg-white p-8 text-center shadow-card ring-1 ring-slate-200">
            <p className="text-lg italic text-slate-700">
              &quot;No somos una agencia grande, somos un equipo comprometido. Cuando trabajás
              con nosotros, trabajás directamente con los fundadores. Tu éxito es nuestro
              éxito.&quot;
            </p>
            <p className="mt-4 font-semibold text-slate-900">- Miguel & María</p>
          </div>
        </div>
      </section>

      {/* Proceso Simple */}
      <section className="py-20">
        <div className="container-pro">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Proceso Simple y Transparente
          </h2>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {[
                {
                  week: 'Día 1',
                  title: 'Reunión Inicial',
                  description:
                    'Nos reunimos (virtual o presencial), entendemos tu negocio y definimos objetivos.',
                },
                {
                  week: 'Día 3-5',
                  title: 'Propuesta y Diseño',
                  description:
                    'Te presentamos la propuesta, diseño inicial y ajustamos según tu feedback.',
                },
                {
                  week: 'Semana 2-3',
                  title: 'Desarrollo',
                  description: 'Construimos tu sitio. Te mostramos avances cada 3 días.',
                },
                {
                  week: 'Semana 4',
                  title: 'Entrega y Capacitación',
                  description:
                    'Tu sitio online, te capacitamos y tienes 30 días para solicitar cambios.',
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-4">
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-600 ring-1 ring-brand-100">
                        {step.week}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="bg-gradient-to-r from-brand-500 to-brand-600 py-20 text-white">
        <div className="container-pro text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-6xl" aria-hidden="true">
              🛡️
            </div>
            <h2 className="mb-6 text-3xl font-bold">Garantía de 30 Días</h2>
            <p className="mb-8 text-xl opacity-95">
              Si no estás 100% satisfecho con tu sitio web en los primeros 30 días, te
              devolvemos tu dinero. Sin preguntas, sin letra pequeña.
            </p>
            <p className="text-lg opacity-90">
              Somos los ÚNICOS en Honduras que ofrecemos esta garantía. ¿Por qué? Porque
              confiamos en nuestro trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container-pro text-center">
          <h2 className="mb-6 text-4xl font-bold text-slate-900">¿Listo para tener tu sitio web?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-600">
            Solo aceptamos 3 proyectos por mes para garantizar calidad.{' '}
            <span className="font-semibold text-brand-600">Quedan 2 espacios para enero.</span>
          </p>

          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <a
              href={waReserveLink}
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3 text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Reservar mi Espacio
            </a>
            <Link
              href="/precios"
              className="btn-ghost inline-flex items-center justify-center gap-2 px-8 py-3 text-base"
            >
              Ver Todos los Planes
            </Link>
          </div>

          <p className="mt-12 text-slate-500">
            También podés escribirnos a:{' '}
            <a href={`mailto:${COMPANY.email}`} className="text-brand-600 hover:underline">
              {COMPANY.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
