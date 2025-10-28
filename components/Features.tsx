import { ReactNode } from "react";

function Feature({ title, desc, icon }: { title: string; desc: string; icon: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="mx-auto max-w-screen-xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-slate-900">Servicios</h2>
        <p className="mt-2 text-slate-600">Soluciones integrales para acelerar su operación.</p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Feature title="Desarrollo de Apps" desc="iOS/Android con React Native, backend seguro y despliegue CI/CD." icon={<span>📱</span>} />
        <Feature title="Sistemas de Inventario" desc="Catálogo, stock, alertas, multi-sucursal, reportes y auditoría." icon={<span>📦</span>} />
        <Feature title="Punto de Venta (POS)" desc="Ventas rápidas, caja, facturación e informes en tiempo real." icon={<span>🧾</span>} />
        <Feature title="Integraciones & Cloud" desc="APIs REST, pagos, mapas, correo, AWS/Firebase/SQL Server." icon={<span>☁️</span>} />
        <Feature title="Soporte & Monitoreo" desc="SLA, 24/7, buenas prácticas, respaldo y observabilidad." icon={<span>🛡️</span>} />
        <Feature title="UX/UI & Web" desc="Sitios corporativos, paneles admin y diseño accesible." icon={<span>🎨</span>} />
      </div>
    </section>
  );
}
