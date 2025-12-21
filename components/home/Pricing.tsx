import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { CONTACT, PRICING_PACKS } from '@/lib/constants';

function formatLempiras(value: number) {
  return `L. ${new Intl.NumberFormat('es-HN', { maximumFractionDigits: 0 }).format(value)}`;
}

export default function Pricing() {
  const waBase = `https://wa.me/${CONTACT.whatsapp.number}?text=`;
  const packs = [
    PRICING_PACKS.web.starter,
    PRICING_PACKS.web.business,
    PRICING_PACKS.web.ecommerce,
  ];

  return (
    <section className="py-16">
      <div className="container-pro px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Planes simples, precios claros</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Sin letra pequeña. Lo que ves es lo que pagás.
            </p>
          </div>
          <Link href="/contacto" className="btn-ghost">
            Pedir recomendación →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {packs.map((p) => {
            const popular = 'popular' in p && Boolean(p.popular);
            return (
              <Card key={p.name} className={popular ? 'ring-brand-200 shadow-lg' : ''}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-bold text-slate-900">{p.name}</div>
                    <div className="mt-1 text-sm text-slate-600">{p.description}</div>
                  </div>
                  {popular && (
                    <Badge className="bg-brand-50 text-brand-700 ring-brand-100">Más popular</Badge>
                  )}
                </div>

                <div className="mt-6 text-4xl font-extrabold text-slate-900">
                  {formatLempiras(p.price)}
                </div>
                <div className="mt-2 text-sm text-slate-600">Entrega: {p.deliveryTime}</div>

                <ul className="mt-6 space-y-2 text-sm text-slate-700">
                  {p.features.slice(0, 6).map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-emerald-600">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid gap-2">
                  <a
                    href={`${waBase}${encodeURIComponent(`Hola! Me interesa el ${p.name}`)}`}
                    className="btn-primary w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cotizar por WhatsApp
                  </a>
                  <Link href="/contacto" className="btn-ghost w-full text-center">
                    Contacto / Formulario
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

