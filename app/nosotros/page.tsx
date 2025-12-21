import { COMPANY } from '@/lib/constants';
import Team from '@/components/home/Team';

export default function NosotrosPage() {
  return (
    <>
      <section className="py-16">
        <div className="container-pro px-6">
          <h1 className="text-4xl font-bold text-slate-900">Nosotros</h1>
          <p className="mt-3 max-w-3xl text-slate-600">{COMPANY.description}</p>
        </div>
      </section>
      <Team />
    </>
  );
}

