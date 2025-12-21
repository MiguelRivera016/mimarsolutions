import { CONTACT } from '@/lib/constants';
import { ButtonLink } from '@/components/ui/Button';

export default function CTA() {
  const href = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(
    'Hola! Quiero reservar mi espacio para un sitio web.',
  )}`;

  return (
    <section className="py-16">
      <div className="container-pro px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900">¿Listo para tener tu sitio web?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-slate-600">
          Cupos limitados por mes para garantizar calidad. Escribinos y te respondemos rápido.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={href}
            className="btn-primary px-7 py-3.5 text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar por WhatsApp
          </a>
          <ButtonLink href="/contacto" variant="ghost" size="lg">
            Ir a Contacto
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

