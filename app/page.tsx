import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';
import ScaleIn from '@/components/animations/ScaleIn';
import { CONTACT, PRICING_PACKS } from '@/config/constants';

function WhatsAppIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20 3.5A10 10 0 0 0 3 18.4l-1 3.6 3.7-1A10 10 0 1 0 20 3.5Zm-8 16a8 8 0 0 1-4.1-1.1l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 19.5Zm4-5.3c-.2-.1-1.2-.6-1.3-.6s-.3-.1-.5.1-.6.7-.8.9-.3.2-.5.1a6.6 6.6 0 0 1-3-2.6c-.2-.3 0-.4.1-.5l.3-.3c.1-.1.1-.2.2-.4s0-.3 0-.4l-.6-1.4c-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.4.2-.6.4a2 2 0 0 0-.6 1.5 3.6 3.6 0 0 0 .8 2.1 8 8 0 0 0 3 2.7 5.1 5.1 0 0 0 2.4.6 2.1 2.1 0 0 0 1.4-.7 1.8 1.8 0 0 0 .4-1.1c0-.2 0-.3-.1-.4Z" />
    </svg>
  );
}

function formatLempiras(value: number) {
  // Formato simple para conversión: L. 8,999
  return `L. ${new Intl.NumberFormat('es-HN', { maximumFractionDigits: 0 }).format(value)}`;
}

export default function HomePage() {
  const waHref = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(CONTACT.whatsapp.message)}`;
  const waCtaHref = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(
    'Hola! Me interesa el Pack ',
  )}`;
  const starterPrice = formatLempiras(PRICING_PACKS.web.starter.price);
  const packs = [
    PRICING_PACKS.web.starter,
    PRICING_PACKS.web.business,
    PRICING_PACKS.web.ecommerce,
  ];

  return (
    <>
      {/* Hero Section - Propuesta clara y directa */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-white">
        <div className="container-pro relative z-10 px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <FadeIn>
              {/* Badge de oferta */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-800">
                <span className="animate-pulse">🔥</span>
                <span className="font-semibold">Oferta especial primeros 10 clientes</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
                Desarrollo Web Que
                <span className="block text-brand-500">Sí Podés Pagar</span>
              </h1>

              <p className="mb-8 text-xl text-slate-600">
                Sitios web profesionales desde{' '}
                <span className="text-2xl font-bold text-slate-900">{starterPrice}</span>. Sin
                sorpresas, sin excusas. Equipo 100% hondureño.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/precios" className="btn-primary text-center">
                  Ver Planes y Precios <span className="ml-2">→</span>
                </Link>
                <a
                  href={waHref}
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

        {/* Imagen al lado derecho */}
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/70 to-transparent" />
          <div className="absolute inset-0 opacity-90">
            <Image
              src="/assets/images/responsive-devices.png"
              alt="Ejemplo de sitio web responsivo"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Sección Problema-Solución */}
      <section className="bg-slate-50 py-20">
        <div className="container-pro px-6">
          <SlideIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
              Sabemos lo que pasa en Honduras...
            </h2>
          </SlideIn>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <ScaleIn>
              {/* Problemas */}
              <div className="rounded-xl bg-red-50 p-8 ring-1 ring-red-100">
                <h3 className="mb-4 text-xl font-bold text-red-900">Lo que NO querés 😤</h3>
                <ul className="space-y-3 text-slate-700">
                  {[
                    'Agencias que cobran en dólares ($2000+)',
                    'Freelancers que desaparecen',
                    'Proyectos que nunca terminan',
                    'Cero soporte después de pagar',
                    '"Costos extras" sorpresa',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="text-red-500">❌</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.05}>
              {/* Soluciones */}
              <div className="rounded-xl bg-emerald-50 p-8 ring-1 ring-emerald-100">
                <h3 className="mb-4 text-xl font-bold text-emerald-900">Lo que SÍ ofrecemos 💪</h3>
                <ul className="space-y-3 text-slate-700">
                  {[
                    'Precio fijo en Lempiras',
                    'Contrato claro y legal',
                    'Entrega en 2-4 semanas',
                    '6 meses soporte incluido',
                    'Garantía devolución 30 días',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="text-emerald-600">✅</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Pricing Cards simplificados */}
      <section className="py-20">
        <div className="container-pro px-6">
          <FadeIn>
            <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">
              Planes Simples, Precios Claros
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-xl text-slate-600">
              Sin letra pequeña. Lo que ves es lo que pagás.
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {packs.map((p) => {
              const isPopular = 'popular' in p && Boolean(p.popular);
              return (
                <div
                  key={p.name}
                  className={
                    'rounded-2xl bg-white p-8 shadow-sm ring-1 ' +
                    (isPopular ? 'ring-brand-200 shadow-lg' : 'ring-slate-200')
                  }
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
                      <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                    </div>
                    {isPopular && (
                      <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                        Más elegido
                      </span>
                    )}
                  </div>

                  <div className="mt-6">
                    <div className="text-4xl font-extrabold text-slate-900">
                      {formatLempiras(p.price)}
                    </div>
                    <div className="mt-2 text-sm text-slate-600">
                      Entrega: <span className="font-semibold text-slate-900">{p.deliveryTime}</span>
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Ideal para:{' '}
                      <span className="font-semibold text-slate-900">{p.idealFor}</span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2 text-sm text-slate-700">
                    {p.features.slice(0, 7).map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-emerald-600">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-3">
                    <Link href="/precios" className="btn-primary text-center">
                      Ver detalles
                    </Link>
                    <a
                      href={`${waCtaHref}${encodeURIComponent(p.name)}`}
                      className="btn-ghost flex items-center justify-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Pago:</span>{' '}
                {PRICING_PACKS.payment.initial}% inicial / {PRICING_PACKS.payment.final}% al entregar
              </div>
              <div className="text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Garantía:</span>{' '}
                {PRICING_PACKS.payment.guarantee} días devolución
              </div>
              <div className="text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Extras:</span> hosting, dominio, correos,
                mantenimiento, SEO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección del Equipo */}
      <section className="bg-slate-50 py-20">
        <div className="container-pro px-6">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
              Tu Equipo de Confianza
            </h2>
          </FadeIn>

          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
            <ScaleIn>
              {/* Miguel */}
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-brand-100">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Miguel Rivera</h3>
                <p className="mb-4 font-semibold text-brand-600">Desarrollo & Tecnología</p>
                <p className="text-slate-600">
                  Ingeniero en Sistemas. Especialista en React, Next.js y desarrollo móvil. Me
                  aseguro que tu sitio sea rápido, moderno y funcione perfectamente.
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.05}>
              {/* María */}
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-brand-100">
                  <span className="text-5xl">👩‍💼</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Lic. María Matehu</h3>
                <p className="mb-4 font-semibold text-brand-600">Administración & Ventas</p>
                <p className="text-slate-600">
                  Licenciada en Administración de Empresas. Me encargo de que todo fluya: contratos,
                  tiempos, presupuestos y que quedes 100% satisfecho.
                </p>
              </div>
            </ScaleIn>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
            <p className="text-lg italic text-slate-700">
              &quot;No somos una agencia grande, somos un equipo comprometido. Cuando trabajás con
              nosotros, trabajás directamente con los fundadores. Tu éxito es nuestro éxito.&quot;
            </p>
            <p className="mt-4 font-semibold text-slate-900">- Miguel &amp; María</p>
          </div>
        </div>
      </section>

      {/* Proceso Simple */}
      <section className="py-20">
        <div className="container-pro px-6">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
              Proceso Simple y Transparente
            </h2>
          </FadeIn>

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
                <SlideIn key={step.title} delay={index * 0.03} className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-4">
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-600">
                        {step.week}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="bg-gradient-to-r from-brand-500 to-brand-600 py-20 text-white">
        <div className="container-pro px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-6xl">🛡️</div>
            <h2 className="mb-6 text-3xl font-bold">Garantía de 30 Días</h2>
            <p className="mb-8 text-xl opacity-95">
              Si no estás 100% satisfecho con tu sitio web en los primeros 30 días, te devolvemos
              tu dinero. Sin preguntas, sin letra pequeña.
            </p>
            <p className="text-lg opacity-90">
              Somos los ÚNICOS en Honduras que ofrecemos esta garantía. ¿Por qué? Porque confiamos
              en nuestro trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container-pro px-6 text-center">
          <FadeIn>
            <h2 className="mb-6 text-4xl font-bold text-slate-900">¿Listo para tener tu sitio web?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-600">
              Solo aceptamos 3 proyectos por mes para garantizar calidad.{' '}
              <span className="font-semibold text-brand-600">Quedan 2 espacios para enero.</span>
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={waCtaHref}
                className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Reservar mi Espacio
              </a>
              <Link href="/precios" className="btn-ghost px-7 py-3.5 text-base">
                Ver Todos los Planes
              </Link>
            </div>

            <p className="mt-12 text-slate-500">
              También podés escribirnos a:{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-brand-600 hover:underline">
                {CONTACT.email}
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
