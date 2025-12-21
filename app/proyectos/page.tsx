import Card from '@/components/ui/Card';

const projects = [
  { title: 'Sitio corporativo', desc: 'Landing + páginas clave orientadas a conversión.' },
  { title: 'Catálogo', desc: 'Productos con WhatsApp y mapas.' },
  { title: 'E-commerce', desc: 'Tienda online lista para vender.' },
];

export default function ProyectosPage() {
  return (
    <section className="py-16">
      <div className="container-pro px-6">
        <h1 className="text-4xl font-bold text-slate-900">Proyectos</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Algunos ejemplos de lo que podemos construir (más casos reales pronto).
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title}>
              <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

