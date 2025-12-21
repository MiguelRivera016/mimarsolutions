import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos sobre tecnología, desarrollo web, apps móviles y mejores prácticas. Tutoriales y guías para empresas hondureñas.',
  openGraph: {
    title: 'Blog | MIMAR Solutions',
    description:
      'Artículos, tutoriales y guías sobre desarrollo web, apps móviles y tecnología empresarial.',
  },
};

export default function BlogPage() {
  const posts = [
    {
      title: 'Cómo elegir un POS para su negocio',
      date: '2025-01-15',
      excerpt:
        'Guía completa para seleccionar el sistema de punto de venta ideal para tu empresa.',
    },
    {
      title: 'Buenas prácticas de seguridad en web',
      date: '2025-01-10',
      excerpt:
        'Protege tu sitio web y datos de clientes con estas recomendaciones esenciales.',
    },
    {
      title: 'Inventarios: del Excel al sistema',
      date: '2025-01-05',
      excerpt:
        'Cómo migrar de hojas de cálculo a un sistema de inventario profesional.',
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Blog & Noticias</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Artículos de tecnología, tutoriales y actualizaciones de proyectos.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="group rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="h-32 rounded-xl bg-gradient-to-br from-brand-50 via-white to-brand-100 ring-1 ring-brand-100 transition group-hover:from-brand-100 group-hover:to-brand-50" />
            <time className="mt-3 block text-xs text-slate-500">
              {new Date(post.date).toLocaleDateString('es-HN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
