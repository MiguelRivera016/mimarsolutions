import { COMPANY, CONTACT, PRICING_PACKS } from '@/lib/constants';
import { ButtonLink } from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

function formatLempiras(value: number) {
  return `L. ${new Intl.NumberFormat('es-HN', { maximumFractionDigits: 0 }).format(value)}`;
}

export default function Hero() {
  const waHref = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(CONTACT.whatsapp.message)}`;

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="container-pro px-6">
        <div className="max-w-3xl">
          <Badge className="mb-6 bg-red-100 text-red-800 ring-red-200">
            <span className="mr-2 animate-pulse">🔥</span>
            Oferta especial primeros 10 clientes
          </Badge>

          <h1 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
            {COMPANY.tagline.split(' Que ')[0]} Que
            <span className="block text-brand-600">Sí Podés Pagar</span>
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            Sitios web profesionales desde{' '}
            <span className="text-2xl font-bold text-slate-900">
              {formatLempiras(PRICING_PACKS.web.starter.price)}
            </span>
            . Sin sorpresas, sin excusas. Equipo 100% hondureño.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contacto" variant="primary" size="lg">
              Cotizar / Contacto →
            </ButtonLink>
            <a
              href={waHref}
              className="btn-ghost inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
            <span>✓ Garantía 30 días</span>
            <span>✓ Contrato claro</span>
            <span>✓ Precio fijo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

