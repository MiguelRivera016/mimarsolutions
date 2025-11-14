import { COMPANY } from '@/config/constants';

export default function ContactStrip() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="text-sm text-slate-700">
          ¿Listo para una demo o una llamada de 10 minutos?
        </p>
        <div className="flex gap-2">
          <a
            href={`https://wa.me/${COMPANY.phoneRaw}`}
            className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Contactar por email"
          >
            {COMPANY.email}
          </a>
        </div>
      </div>
    </section>
  );
}
