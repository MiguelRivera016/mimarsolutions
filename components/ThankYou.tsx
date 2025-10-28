import Link from "next/link";
export default function ThankYou() {
  return (
    <section className="mx-auto max-w-screen-md px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-[#0B78C4]">¡Gracias por contactarnos!</h1>
      <p className="mt-4 text-slate-700">
        Hemos recibido su solicitud. Nuestro equipo le responderá en las próximas horas.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="rounded-xl bg-[#0B78C4] px-5 py-2.5 text-white font-semibold hover:bg-[#0a6dad]">
          Volver al inicio
        </Link>
        <Link href="/apps" className="rounded-xl border border-slate-300 px-5 py-2.5 text-slate-700 hover:bg-slate-50">
          Ver aplicaciones
        </Link>
      </div>
    </section>
  );
}