export default function TrustBar() {
  return (
    <section aria-label="Indicadores de confianza" className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 px-6 py-6 sm:grid-cols-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900">5+ años</div>
          <div className="text-xs text-slate-600">de experiencia</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900">40+</div>
          <div className="text-xs text-slate-600">proyectos entregados</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900">99.9%</div>
          <div className="text-xs text-slate-600">uptime en producción</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900">SLA</div>
          <div className="text-xs text-slate-600">soporte con tiempos claros</div>
        </div>
      </div>
    </section>
  );
}
