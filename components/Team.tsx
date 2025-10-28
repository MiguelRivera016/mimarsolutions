const team = [
  { name: "Carlos Miguel Rivera", role: "Fundador & CTO", img: "/avatars/1.jpg" },
  { name: "María Matehu", role: "Cofundadora & COO", img: "/avatars/2.jpg" },
  { name: "Equipo Técnico", role: "Desarrolladores & Soporte IT", img: "/avatars/3.jpg" },
];

export default function Team() {
  return (
    <section className="bg-slate-50/60">
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Nuestro equipo</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <img src={m.img} alt={m.name} className="mx-auto h-28 w-28 rounded-full object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 text-center">{m.name}</h3>
              <p className="text-sm text-slate-600 text-center">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}