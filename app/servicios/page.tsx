import Services from '@/components/home/Services';

export default function ServiciosPage() {
  return (
    <>
      <section className="py-16">
        <div className="container-pro px-6">
          <h1 className="text-4xl font-bold text-slate-900">Servicios</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Web, e-commerce y soporte. Sin humo. Con precios claros.
          </p>
        </div>
      </section>
      <Services />
    </>
  );
}

