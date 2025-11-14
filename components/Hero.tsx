import Link from 'next/link';

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400" />
      <div className="absolute inset-0 z-0 [mask-image:radial-gradient(65%_60%_at_25%_35%,black,transparent)]">
        <div className="h-full w-full bg-white/10" />
      </div>

      <div className="relative z-10 container-pro py-20 md:py-28">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <span className="inline-block size-2 animate-pulse rounded-full bg-green-400" />
              Software empresarial desarrollado en Honduras
            </div>

            <h1
              id="hero-title"
              className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
            >
              Sistemas POS e Inventarios
              <span className="block text-gold-400">para hacer crecer tu negocio</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/90 md:text-xl">
              Software personalizado que automatiza tus operaciones: control de inventario,
              punto de venta, facturación electrónica y reportes en tiempo real.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/cotizar"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-brand-700 shadow-lg transition-all hover:bg-gold-400 hover:text-white"
              >
                <span>Solicitar demo gratuita</span>
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/apps"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
              >
                Ver soluciones
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Soporte local 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Instalación incluida</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Capacitación completa</span>
              </div>
            </div>
          </div>

          {/* Screenshot mockup */}
          <div className="relative">
            <div className="rounded-2xl bg-white/95 p-4 shadow-2xl ring-1 ring-black/10 backdrop-blur">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500" />
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
              </div>

              <div className="overflow-hidden rounded-lg ring-1 ring-slate-200">
                <img
                  src="/assets/images/responsive-devices.png"
                  alt="Sistema POS e Inventario - MIMAR Solutions"
                  className="h-auto w-full"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-xl bg-white p-4 shadow-xl ring-1 ring-black/5">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">+50</div>
                <div className="text-xs text-slate-600">Empresas confían</div>
                <div className="text-xs text-slate-600">en nosotros</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
