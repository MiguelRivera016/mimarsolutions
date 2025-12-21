import { COMPANY, CONTACT } from '@/lib/constants';
import Card from '@/components/ui/Card';

export default function ContactoPage() {
  const waHref = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(
    'Hola! Quisiera cotizar un sitio web.',
  )}`;

  return (
    <section className="py-16">
      <div className="container-pro px-6">
        <h1 className="text-4xl font-bold text-slate-900">Contacto</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Respuesta rápida por WhatsApp o correo. Horario: <strong>{CONTACT.hours}</strong>
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-lg font-bold text-slate-900">WhatsApp</h2>
            <p className="mt-2 text-sm text-slate-600">El canal más rápido para cotizar.</p>
            <a
              href={waHref}
              className="btn-primary mt-6 w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </Card>

          <Card>
            <h2 className="text-lg font-bold text-slate-900">Email</h2>
            <p className="mt-2 text-sm text-slate-600">Si preferís, escribinos con detalles.</p>
            <a href={`mailto:${COMPANY.email}`} className="btn-ghost mt-6 w-full text-center">
              {COMPANY.email}
            </a>
          </Card>
        </div>

        <div className="mt-10">
          <form
            className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
            method="post"
            action="/api/contact"
          >
            <h2 className="text-xl font-bold text-slate-900">Formulario rápido</h2>
            <p className="mt-2 text-sm text-slate-600">
              Enviá tu idea y te respondemos (por ahora guarda el mensaje en el servidor).
            </p>

            <div className="mt-6 grid gap-4">
              <label className="grid gap-1">
                <span className="text-sm font-semibold text-slate-700">Nombre</span>
                <input
                  name="name"
                  required
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm font-semibold text-slate-700">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm font-semibold text-slate-700">Mensaje</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </label>
              <button className="btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

