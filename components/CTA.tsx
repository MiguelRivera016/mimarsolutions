import Link from "next/link";
export default function CTA(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-500 to-brand-400" />
      <div className="container-pro section-pad text-white">
        <div className="rounded-xl2 bg-white/10 p-8 ring-1 ring-white/20">
          <h2 className="text-2xl font-bold">¿Listo para iniciar su proyecto?</h2>
          <p className="mt-2 max-w-2xl text-white/90">Agende una demo o solicite una cotización personalizada.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/cotizar" className="btn-primary bg-white text-brand-600 hover:bg-white/95">Cotizar ahora</Link>
            <Link href="/proyectos" className="btn-ghost text-white ring-white/50 hover:bg-white/10">Ver proyectos</Link>
          </div>
        </div>
      </div>
    </section>
  );
}