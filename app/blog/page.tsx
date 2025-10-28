export default function BlogPage() {
  const posts = [
    { title: "Cómo elegir un POS para su negocio", date: "2025-09-01" },
    { title: "Buenas prácticas de seguridad en web", date: "2025-08-10" },
    { title: "Inventarios: del Excel al sistema", date: "2025-07-22" },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Blog & Noticias</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Artículos de tecnología, tutoriales y actualizaciones de proyectos.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md">
            <div className="h-32 rounded-xl bg-gradient-to-br from-[#E6F3FB] via-white to-[#EAFBFF] ring-1 ring-black/5" />
            <h2 className="mt-3 text-lg font-semibold text-slate-900">{p.title}</h2>
            <p className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString("es-HN")}</p>
            <p className="mt-2 text-sm text-slate-600">Resumen breve del artículo. Próximamente más contenido…</p>
          </article>
        ))}
      </div>
    </section>
  );
}
