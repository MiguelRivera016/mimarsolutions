import Link from 'next/link';

export default function ThankYou() {
  return (
    <section className="mx-auto max-w-screen-md px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-brand-500">
        ¡Gracias por contactarnos!
      </h1>
      <p className="mt-4 text-slate-700">
        Hemos recibido su solicitud. Nuestro equipo le responderá en las
        próximas horas.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-brand-500 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Volver al inicio
        </Link>
        <Link
          href="/proyectos"
          className="rounded-xl border border-slate-300 px-5 py-2.5 text-slate-700 transition-colors hover:bg-slate-50"
        >
          Ver proyectos
        </Link>
      </div>
    </section>
  );
}
