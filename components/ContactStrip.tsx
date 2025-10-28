export default function ContactStrip() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="text-sm text-slate-700">
          ¿Listo para una demo o una llamada de 10 minutos?
        </p>
        <div className="flex gap-2">
          <a
            href="https://wa.me/50499999999"
            className="rounded-xl bg-[#0B78C4] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0a6dad]"
            target="_blank"
          >
            WhatsApp
          </a>
          <a
            href="mailto:ventas@mimar.group"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            ventas@mimar.group
          </a>
        </div>
      </div>
    </section>
  );
}
