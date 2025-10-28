import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-white">
      {/* Banda CTA superior */}
      <section className="relative -mt-24 mb-10 bg-gradient-to-r from-brand-600 to-brand-400 text-white">
        <div className="container-pro py-10">
          <div className="grid items-center gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold">¿Listo para impulsar su proyecto?</h2>
              <p className="mt-2 text-white/90">
                Agenda una llamada o envíanos tu idea. Respuesta ágil por WhatsApp o correo.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <a
                href="https://wa.me/50493870479"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-brand-700 shadow-sm hover:bg-white/95"
                aria-label="Contactar por WhatsApp"
              >
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:mimargrouphn@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-black/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-black/20"
                aria-label="Enviar correo"
              >
                <span>Correo</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal del footer */}
      <div className="container-pro grid gap-10 pb-10 md:grid-cols-4">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-2">
            <img src="/assets/branding/isotipo-m.png" alt="MIMAR Solutions" className="h-9 w-9" />
            <span className="text-base font-semibold">MIMAR Solutions</span>
          </div>
          <p className="mt-3 text-sm text-ink-600">
            Soluciones tecnológicas para empresas: inventario, POS, apps y sitios web. Con soporte local
            y estándares de clase mundial.
          </p>
          <p className="mt-2 text-xs text-ink-600">
            Marca de <strong>MIMAR GROUP S. de R.L.</strong> — San Pedro Sula, Honduras.
          </p>
        </div>

        {/* Servicios (los 6 que pediste) */}
        <div>
          <h4 className="text-sm font-semibold">Servicios</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li>
              <Link href="/servicios#software" className="hover:text-brand-600 hover:underline">
                Desarrollo de Software y Apps
              </Link>
            </li>
            <li>
              <Link href="/servicios#web" className="hover:text-brand-600 hover:underline">
                Diseño y desarrollo web profesional
              </Link>
            </li>
            <li>
              <Link href="/servicios#nube" className="hover:text-brand-600 hover:underline">
                Soluciones en la nube y hosting
              </Link>
            </li>
            <li>
              <Link href="/servicios#soporte" className="hover:text-brand-600 hover:underline">
                Soporte técnico y administración
              </Link>
            </li>
            <li>
              <Link href="/servicios#automatizacion" className="hover:text-brand-600 hover:underline">
                Automatización y herramientas
              </Link>
            </li>
            <li>
              <Link href="/servicios#capacitacion" className="hover:text-brand-600 hover:underline">
                Capacitación y formación
              </Link>
            </li>
          </ul>
        </div>

        {/* Recursos */}
        <div>
          <h4 className="text-sm font-semibold">Recursos</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li><Link href="/proyectos" className="hover:text-brand-600 hover:underline">Proyectos</Link></li>
            <li><Link href="/sitios-web" className="hover:text-brand-600 hover:underline">Sitios Web</Link></li>
            <li><Link href="/cotizar" className="hover:text-brand-600 hover:underline">Solicitar cotización</Link></li>
            <li><Link href="/privacidad" className="hover:text-brand-600 hover:underline">Política de privacidad</Link></li>
          </ul>
        </div>

        {/* Contacto + redes */}
        <div>
          <h4 className="text-sm font-semibold">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li>
              <a href="mailto:mimargrouphn@gmail.com" className="hover:text-brand-600 hover:underline">
                mimargrouphn@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+50493870479" className="hover:text-brand-600 hover:underline">
                +504 9387-0479
              </a>
            </li>
          </ul>

          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://wa.me/50493870479"
              className="inline-flex size-9 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-100 hover:bg-brand-100"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="size-5 text-brand-700" fill="currentColor">
                <path d="M20 3.5A10 10 0 0 0 3 18.4l-1 3.6 3.7-1A10 10 0 1 0 20 3.5Zm-8 16a8 8 0 0 1-4.1-1.1l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 19.5Zm4-5.3c-.2-.1-1.2-.6-1.3-.6s-.3-.1-.5.1-.6.7-.8.9-.3.2-.5.1a6.6 6.6 0 0 1-3-2.6c-.2-.3 0-.4.1-.5l.3-.3c.1-.1.1-.2.2-.4s0-.3 0-.4l-.6-1.4c-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.4.2-.6.4a2 2 0 0 0-.6 1.5 3.6 3.6 0 0 0 .8 2.1 8 8 0 0 0 3 2.7 5.1 5.1 0 0 0 2.4.6 2.1 2.1 0 0 0 1.4-.7 1.8 1.8 0 0 0 .4-1.1c0-.2 0-.3-.1-.4Z"/>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex size-9 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-100 hover:bg-brand-100"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="size-5 text-brand-700" fill="currentColor">
                <path d="M6.94 9.5H4.5V19h2.44V9.5Zm-.97-5.5a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM19.5 19h-2.4v-5.2c0-1.24-.44-2.1-1.54-2.1-.84 0-1.34.57-1.56 1.12-.08.2-.1.48-.1.75V19H11.5s.03-8.67 0-9.5h2.4v1.35c.32-.5.9-1.22 2.2-1.22 1.6 0 2.8 1.04 2.8 3.27V19Z"/>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex size-9 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-100 hover:bg-brand-100"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="size-5 text-brand-700" fill="currentColor">
                <path d="M13 10h2.5l.3-3H13V5.5c0-.9.3-1.5 1.5-1.5H16V1.2C15.7 1.1 14.9 1 14 1c-2 0-3.4 1.2-3.4 3.6V7H8v3h2.6V23h2.4V10Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t">
        <div className="container-pro flex flex-col items-center justify-between gap-3 py-4 text-xs text-ink-600 md:flex-row">
          <p>© {new Date().getFullYear()} MIMAR GROUP S. de R.L. — Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <Link href="/privacidad" className="hover:text-brand-600 hover:underline">Privacidad</Link>
            <span className="text-slate-300">•</span>
            <Link href="/cotizar" className="hover:text-brand-600 hover:underline">Cotizar</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
