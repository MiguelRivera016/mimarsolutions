import Link from 'next/link';
import { COMPANY, CONTACT } from '@/lib/constants';

export default function Footer() {
  const waHref = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(CONTACT.whatsapp.message)}`;

  return (
    <footer className="border-t bg-white">
      <div className="container-pro grid gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="text-sm font-bold text-slate-900">{COMPANY.name}</div>
          <p className="mt-2 text-sm text-slate-600">{COMPANY.description}</p>
          <p className="mt-3 text-xs text-slate-500">{COMPANY.location}</p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Contacto</div>
          <div className="mt-3 grid gap-2">
            <a
              href={waHref}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-brand-700 ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Email
            </a>
            <p className="text-xs text-slate-600">
              Horario: <strong>{CONTACT.hours}</strong>
            </p>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Enlaces</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link className="hover:text-brand-600 hover:underline" href="/servicios">
                Servicios
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-600 hover:underline" href="/proyectos">
                Proyectos
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-600 hover:underline" href="/nosotros">
                Nosotros
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-600 hover:underline" href="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container-pro flex flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name}. Todos los derechos reservados.</p>
          <p>Hecho en Honduras.</p>
        </div>
      </div>
    </footer>
  );
}

