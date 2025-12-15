export default function TrustBar() {
  return (
    <section aria-label="Indicadores de confianza" className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 px-6 py-6 sm:grid-cols-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900">Implementación</div>
          <div className="text-xs text-slate-600">ordenada y acompañada</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900">Capacitación</div>
          <div className="text-xs text-slate-600">para tu equipo</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900">Seguridad</div>
          <div className="text-xs text-slate-600">buenas prácticas y respaldo</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900">Soporte</div>
          <div className="text-xs text-slate-600">canales y tiempos claros</div>
        </div>
      </div>
    </section>
  );
}
