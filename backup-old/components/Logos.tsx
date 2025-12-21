export default function Logos() {
  const logos = [
    { name: "AWS", src: "/logos/aws.svg" },
    { name: "Firebase", src: "/logos/firebase.svg" },
    { name: "SQL Server", src: "/logos/sqlserver.svg" },
    { name: "Mikrotik", src: "/logos/mikrotik.svg" },
    { name: "Twilio", src: "/logos/twilio.svg" },
  ];
  return (
    <section aria-label="Tecnologías y aliados" className="bg-slate-50/60">
      <div className="mx-auto max-w-screen-xl px-6 py-10">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">
          Tecnologías y aliados
        </p>
        <div className="mx-auto mt-4 grid max-w-5xl grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((l) => (
            <img key={l.name} src={l.src} alt={l.name} className="h-8 opacity-80" />
          ))}
        </div>
      </div>
    </section>
  );
}
