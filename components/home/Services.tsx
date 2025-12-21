import Card from '@/components/ui/Card';

const items = [
  {
    title: 'Sitios web',
    desc: 'Landing, corporativos, catálogo y sitios de conversión.',
  },
  {
    title: 'E-commerce',
    desc: 'Tiendas online listas para vender (pagos, inventario, reportes).',
  },
  {
    title: 'Soporte y mantenimiento',
    desc: 'Actualizaciones, cambios y mejoras continuas.',
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container-pro px-6">
        <h2 className="text-3xl font-bold text-slate-900">Servicios</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Lo esencial para que tu negocio tenga presencia online y genere clientes.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title}>
              <h3 className="text-lg font-bold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

