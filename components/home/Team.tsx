import Card from '@/components/ui/Card';
import { COMPANY } from '@/lib/constants';

export default function Team() {
  const [miguel, maria] = COMPANY.team.founders;

  return (
    <section className="bg-slate-50 py-16">
      <div className="container-pro px-6">
        <h2 className="text-3xl font-bold text-slate-900">Tu equipo de confianza</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          No somos una agencia gigante. Trabajás directamente con los fundadores.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="text-center">
            <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-brand-100">
              <span className="text-5xl">👨‍💻</span>
            </div>
            <div className="text-xl font-bold text-slate-900">{miguel.name}</div>
            <div className="mt-1 font-semibold text-brand-600">{miguel.role}</div>
            <p className="mt-4 text-slate-600">
              Me aseguro de que tu sitio sea rápido, moderno y listo para convertir visitas en clientes.
            </p>
          </Card>

          <Card className="text-center">
            <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-brand-100">
              <span className="text-5xl">👩‍💼</span>
            </div>
            <div className="text-xl font-bold text-slate-900">
              {(maria.title ? `${maria.title} ` : '') + maria.name}
            </div>
            <div className="mt-1 font-semibold text-brand-600">{maria.role}</div>
            <p className="mt-4 text-slate-600">
              Te acompaño con contrato claro, tiempos definidos y comunicación directa por WhatsApp o correo.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

