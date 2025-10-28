export default function Websites(){
  const items = [
    {
      t: "Landing de campaña",
      f: ["1 sección hero","beneficios","contacto","analítica"],
      img: "/assets/images/responsive-devices.png",
      alt: "Landing responsiva"
    },
    {
      t: "Sitio corporativo",
      f: ["5-8 secciones","blog básico","SEO inicial","contacto"],
      img: "/assets/images/admin-dashboard.png",
      alt: "Dashboard corporativo"
    },
    {
      t: "Portal con panel",
      f: ["autenticación","panel admin","roles","integraciones"],
      img: "/assets/images/payment-gateways.png",
      alt: "Integraciones y pagos"
    },
  ];

  return (
    <section className="bg-slate-50/60">
      <div className="container-pro section-pad">
        <h2 className="text-2xl font-bold">Sitios web que construimos</h2>
        <p className="mt-2 max-w-2xl text-ink-600">Opciones de entrega según el objetivo.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map(i => (
            <div key={i.t} className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-slate-200">
              <div className="overflow-hidden rounded-lg ring-1 ring-slate-200">
                <img src={i.img} alt={i.alt} className="h-40 w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-3 text-lg font-semibold">{i.t}</div>
              <ul className="mt-2 text-sm text-ink-600 space-y-1">
                {i.f.map(x => <li key={x}>• {x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
