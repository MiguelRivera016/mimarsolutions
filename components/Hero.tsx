import Link from "next/link";

export default function Hero(){
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-500 to-brand-400" />
      <div className="absolute inset-0 z-0 [mask-image:radial-gradient(65%_60%_at_25%_35%,black,transparent)]">
        <div className="h-full w-full bg-white/10" />
      </div>

      <div className="relative z-10 container-pro section-pad">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="text-white">
            <p className="text-[12px] uppercase tracking-wider text-white/75">
              Software para operar y escalar
            </p>

            <h1 id="hero-title" className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
              Innovación digital para su empresa
            </h1>

            <p className="mt-4 max-w-xl text-white/90">
              Creamos software a medida: sistemas de inventario, POS, apps móviles y sitios web modernos, con soporte local y enfoque empresarial.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cotizar" className="btn-primary">Solicitar demo</Link>
              <Link href="/proyectos" className="btn-ghost">Ver proyectos</Link>
            </div>
          </div>

          <div>
            <div className="rounded-xl2 bg-white/95 p-4 shadow-card ring-1 ring-black/10">
              <div className="mb-3 flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="overflow-hidden rounded-lg ring-1 ring-slate-200">
                <img
                  src="/assets/images/responsive-devices.png"
                  alt="Sitios web responsivos y apps — MIMAR Solutions"
                  className="h-auto w-full"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
