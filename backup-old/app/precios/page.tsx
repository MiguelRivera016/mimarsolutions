// Página de precios 100% transparente - Sin sorpresas

import Link from 'next/link';
import { CONTACT, PRICING_PACKS } from '@/config/constants';

function WhatsAppIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20 3.5A10 10 0 0 0 3 18.4l-1 3.6 3.7-1A10 10 0 1 0 20 3.5Zm-8 16a8 8 0 0 1-4.1-1.1l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 19.5Zm4-5.3c-.2-.1-1.2-.6-1.3-.6s-.3-.1-.5.1-.6.7-.8.9-.3.2-.5.1a6.6 6.6 0 0 1-3-2.6c-.2-.3 0-.4.1-.5l.3-.3c.1-.1.1-.2.2-.4s0-.3 0-.4l-.6-1.4c-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.4.2-.6.4a2 2 0 0 0-.6 1.5 3.6 3.6 0 0 0 .8 2.1 8 8 0 0 0 3 2.7 5.1 5.1 0 0 0 2.4.6 2.1 2.1 0 0 0 1.4-.7 1.8 1.8 0 0 0 .4-1.1c0-.2 0-.3-.1-.4Z" />
    </svg>
  );
}

function formatLempiras(value: number) {
  return `L.${new Intl.NumberFormat('es-HN', { maximumFractionDigits: 0 }).format(value)}`;
}

function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export default function PreciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container-pro px-6 text-center">
          <h1 className="mb-6 text-5xl font-bold text-slate-900">Precios Honestos, Sin Sorpresas</h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Lo que ves es lo que pagás. Sin letra pequeña, sin &quot;costos adicionales&quot; sorpresa.
            Precio fijo en Lempiras.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container-pro px-6">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {/* Pack Starter */}
            <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">{PRICING_PACKS.web.starter.name}</h3>
                <p className="text-slate-600">Perfecto para empezar</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-slate-900">
                    {formatLempiras(PRICING_PACKS.web.starter.price)}
                  </span>
                  <span className="ml-2 text-slate-500">único pago</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {PRICING_PACKS.web.starter.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-emerald-600">✓</span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 text-sm text-slate-600">
                <div>⏱️ Entrega: {PRICING_PACKS.web.starter.deliveryTime}</div>
                <div>👥 Ideal para: {PRICING_PACKS.web.starter.idealFor}</div>
              </div>

              <a
                href={waLink('Hola! Me interesa el Pack Starter')}
                className="btn-primary mt-8 inline-flex w-full items-center justify-center text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Pack Starter
              </a>
            </div>

            {/* Pack Negocio - Más Popular */}
            <div className="relative rounded-2xl bg-white p-8 shadow-xl ring-2 ring-brand-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white">
                  MÁS POPULAR
                </span>
              </div>

              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">{PRICING_PACKS.web.business.name}</h3>
                <p className="text-slate-600">La opción preferida</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-brand-600">
                    {formatLempiras(PRICING_PACKS.web.business.price)}
                  </span>
                  <span className="ml-2 text-slate-500">único pago</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {PRICING_PACKS.web.business.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-emerald-600">✓</span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 text-sm text-slate-600">
                <div>⏱️ Entrega: {PRICING_PACKS.web.business.deliveryTime}</div>
                <div>👥 Ideal para: {PRICING_PACKS.web.business.idealFor}</div>
              </div>

              <a
                href={waLink('Hola! Me interesa el Pack Negocio')}
                className="btn-primary mt-8 inline-flex w-full items-center justify-center bg-brand-600 text-center hover:bg-brand-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Pack Negocio
              </a>
            </div>

            {/* Pack E-commerce */}
            <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">{PRICING_PACKS.web.ecommerce.name}</h3>
                <p className="text-slate-600">Vende online profesionalmente</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-slate-900">
                    {formatLempiras(PRICING_PACKS.web.ecommerce.price)}
                  </span>
                  <span className="ml-2 text-slate-500">único pago</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {PRICING_PACKS.web.ecommerce.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-emerald-600">✓</span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 text-sm text-slate-600">
                <div>⏱️ Entrega: {PRICING_PACKS.web.ecommerce.deliveryTime}</div>
                <div>👥 Ideal para: {PRICING_PACKS.web.ecommerce.idealFor}</div>
              </div>

              <a
                href={waLink('Hola! Me interesa el Pack E-Commerce')}
                className="btn-primary mt-8 inline-flex w-full items-center justify-center text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Pack E-Commerce
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="bg-slate-50 py-20">
        <div className="container-pro px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Servicios Adicionales (Opcionales)
          </h2>

          <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex justify-between border-b py-3">
                <span>Hosting anual</span>
                <span className="font-semibold">
                  {formatLempiras(PRICING_PACKS.addons.hosting.price)}/año
                </span>
              </div>
              <div className="flex justify-between border-b py-3">
                <span>Dominio .com</span>
                <span className="font-semibold">
                  {formatLempiras(PRICING_PACKS.addons.domain.price)}/año
                </span>
              </div>
              <div className="flex justify-between border-b py-3">
                <span>Correos profesionales (5)</span>
                <span className="font-semibold">
                  {formatLempiras(PRICING_PACKS.addons.email.price)}/año
                </span>
              </div>
              <div className="flex justify-between border-b py-3">
                <span>Mantenimiento mensual</span>
                <span className="font-semibold">
                  {formatLempiras(PRICING_PACKS.addons.maintenance.price)}/mes
                </span>
              </div>
              <div className="flex justify-between border-b py-3">
                <span>SEO mensual</span>
                <span className="font-semibold">
                  {formatLempiras(PRICING_PACKS.addons.seo.price)}/mes
                </span>
              </div>
              <div className="flex justify-between border-b py-3">
                <span>Rediseño completo</span>
                <span className="font-semibold">Cotización</span>
              </div>
            </div>
            <div className="mt-6 rounded-lg bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-200">
              Nota: todo adicional se cotiza aparte y solo se agrega con tu aprobación.
            </div>
          </div>
        </div>
      </section>

      {/* Formas de Pago */}
      <section className="py-20">
        <div className="container-pro px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Formas de Pago Flexibles</h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl">💳</div>
              <h3 className="mb-2 font-bold text-slate-900">Tarjeta</h3>
              <p className="text-slate-600">Pago con tarjeta (link). Consultar disponibilidad.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🏦</div>
              <h3 className="mb-2 font-bold text-slate-900">Transferencia</h3>
              <p className="text-slate-600">Transferencia bancaria. Confirmación rápida.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">💵</div>
              <h3 className="mb-2 font-bold text-slate-900">Depósito / efectivo</h3>
              <p className="text-slate-600">Depósito bancario o efectivo (previa coordinación).</p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-xl bg-brand-50 p-8 ring-1 ring-brand-100">
            <h3 className="mb-4 text-center text-xl font-bold text-slate-900">Plan de Pagos</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600">{PRICING_PACKS.payment.initial}%</div>
                <p className="text-slate-700">Al iniciar el proyecto</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600">{PRICING_PACKS.payment.final}%</div>
                <p className="text-slate-700">Al entregar completo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs de Precios */}
      <section className="bg-slate-50 py-20">
        <div className="container-pro px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Preguntas Frecuentes sobre Precios
          </h2>

          <div className="mx-auto space-y-6">
            {[
              {
                q: '¿Por qué son más baratos que otros?',
                a: 'No tenemos oficina lujosa ni 20 empleados. Somos un equipo pequeño y eficiente. Nuestros costos son bajos, y eso se refleja en nuestros precios.',
              },
              {
                q: '¿Hay costos ocultos?',
                a: 'NO. El precio que ves es el precio final. Si necesitás algo adicional, te lo cotizamos aparte y con tu aprobación.',
              },
              {
                q: '¿Incluye hosting y dominio?',
                a: 'Los packs incluyen hosting gratis por 3, 6 o 12 meses según el plan. El dominio lo podés comprar con nosotros o usar uno existente.',
              },
              {
                q: '¿Qué pasa después del hosting gratis?',
                a: 'Podés renovar con nosotros o migrar a cualquier otro proveedor. Tu sitio es 100% tuyo.',
              },
              {
                q: '¿Dan factura?',
                a: 'Sí, emitimos factura legal (cuando aplique).',
              },
            ].map((faq, i) => (
              <details key={i} className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
                <summary className="cursor-pointer font-bold text-slate-900">{faq.q}</summary>
                <p className="mt-4 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container-pro px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-slate-900">¿Tenés dudas sobre qué plan elegir?</h2>
          <p className="mb-8 text-xl text-slate-600">María está lista para asesorarte sin compromiso</p>
          <a
            href={waLink('Hola María! Tengo dudas sobre qué plan me conviene')}
            className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Hablar con María
          </a>

          <div className="mt-8">
            <Link href="/cotizar" className="text-sm font-semibold text-brand-600 hover:underline">
              O si preferís, llená el formulario de cotización →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

