"use client";
import { useMemo, useState } from "react";

type FormState = {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  tipo: string;
  presupuesto: string;
  plazo: string;
  mensaje: string;
  acepta: boolean;
};

const WHATS_TEL = "50493870479"; // +504 9387-0479
const EMAIL_TO = "mimargrouphn@gmail.com";

export default function CotizarPage() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    tipo: "Inventario / POS",
    presupuesto: "A definir",
    plazo: "Lo antes posible",
    mensaje: "",
    acepta: true,
  });

  const isValid = useMemo(() => {
    if (!form.nombre.trim()) return false;
    if (!/^\S+@\S+\.\S+$/.test(form.correo)) return false;
    if (!form.telefono.trim()) return false;
    if (!form.mensaje.trim()) return false;
    if (!form.acepta) return false;
    return true;
  }, [form]);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as any;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const buildSummary = () =>
    [
      `👤 Nombre: ${form.nombre}`,
      form.empresa ? `🏢 Empresa: ${form.empresa}` : null,
      `✉️ Correo: ${form.correo}`,
      `📞 Teléfono: ${form.telefono}`,
      `📦 Tipo: ${form.tipo}`,
      `💰 Presupuesto: ${form.presupuesto}`,
      `⏱️ Plazo: ${form.plazo}`,
      "",
      `📝 Mensaje:`,
      form.mensaje,
    ]
      .filter(Boolean)
      .join("\n");

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const text = encodeURIComponent(
      `Hola MIMAR Solutions,\n\nQuiero una cotización:\n\n${buildSummary()}`
    );
    window.open(`https://wa.me/${WHATS_TEL}?text=${text}`, "_blank");
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const subject = encodeURIComponent("Solicitud de cotización — MIMAR Solutions");
    const body = encodeURIComponent(buildSummary());
    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-gradient-to-b from-[#E6F3FB] to-white py-16 md:py-20">
      <div className="container-pro max-w-5xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-100">
            <span className="inline-block size-2 rounded-full bg-gold-500" />
            Cotización personalizada
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-700 md:text-4xl">
            Cuéntenos su proyecto y reciba una propuesta clara
          </h1>
          <p className="mt-2 text-ink-600">
            Respuesta rápida por WhatsApp o correo. También puede llamarnos o escribirnos directamente.
          </p>
        </div>

        {/* Grid: formulario + contacto */}
        <div className="mt-10 grid gap-6 md:grid-cols-[1.3fr_.7fr]">
          {/* Formulario */}
          <form className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-ink-700">Nombre completo</label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={onChange}
                  placeholder="Ej. Carlos Rivera"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand-300"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-ink-700">Empresa (opcional)</label>
                <input
                  name="empresa"
                  value={form.empresa}
                  onChange={onChange}
                  placeholder="Nombre de su empresa"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand-300"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-ink-700">Correo</label>
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={onChange}
                  placeholder="ejemplo@correo.com"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand-300"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-ink-700">Teléfono</label>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={onChange}
                  placeholder="+504 9XXX-XXXX"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand-300"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-ink-700">Tipo de proyecto</label>
                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={onChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand-300"
                >
                  <option>Inventario / POS</option>
                  <option>App móvil</option>
                  <option>Sitio web</option>
                  <option>Integraciones</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-ink-700">Presupuesto estimado</label>
                  <select
                    name="presupuesto"
                    value={form.presupuesto}
                    onChange={onChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand-300"
                  >
                    <option>A definir</option>
                    <option>Hasta L. 25,000</option>
                    <option>L. 25,000 — 75,000</option>
                    <option>L. 75,000 — 150,000</option>
                    <option>Más de L. 150,000</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-ink-700">Plazo</label>
                  <select
                    name="plazo"
                    value={form.plazo}
                    onChange={onChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand-300"
                  >
                    <option>Lo antes posible</option>
                    <option>2–4 semanas</option>
                    <option>1–2 meses</option>
                    <option>3+ meses</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-1 block text-sm font-medium text-ink-700">Mensaje o descripción</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={onChange}
                rows={6}
                placeholder="Cuéntenos objetivos, funcionalidades y referencias..."
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand-300"
                required
              />
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm text-ink-700">
              <input
                type="checkbox"
                name="acepta"
                checked={form.acepta}
                onChange={onChange}
                className="mt-1 size-4 rounded border-slate-300 text-brand-600 focus:ring-brand-400"
              />
              <span>
                Acepto ser contactado por MIMAR Solutions para recibir mi cotización y próximos pasos.
              </span>
            </label>

            {/* Acciones */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                onClick={sendWhatsApp}
                className="btn-primary flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700"
                disabled={!isValid}
                aria-label="Enviar por WhatsApp"
              >
                <span>Enviar por WhatsApp</span>
              </button>
              <button
                onClick={sendEmail}
                className="btn-ghost flex items-center justify-center gap-2 ring-gold-300 hover:bg-gold-50"
                disabled={!isValid}
                aria-label="Enviar por correo"
              >
                <span>Enviar por correo</span>
              </button>
            </div>

            <p className="mt-3 text-center text-xs text-ink-500">
              Respetamos su privacidad. Solo usaremos sus datos para contactarle respecto a esta solicitud.
            </p>
          </form>

          {/* Tarjeta de contacto directo */}
          <aside className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold">Contacto directo</h3>
            <p className="mt-1 text-sm text-ink-600">
              Si prefiere, puede escribirnos o llamarnos de inmediato.
            </p>

            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${EMAIL_TO}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 hover:bg-slate-50"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100">
                  <span className="size-4 rounded-full bg-brand-600" />
                </span>
                <div>
                  <div className="text-sm font-medium">Correo</div>
                  <div className="text-sm text-ink-600">{EMAIL_TO}</div>
                </div>
              </a>

              <a
                href="tel:+50493870479"
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 hover:bg-slate-50"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-gold-50 ring-1 ring-gold-200">
                  <span className="size-4 rounded-full bg-gold-500" />
                </span>
                <div>
                  <div className="text-sm font-medium">Celular</div>
                  <div className="text-sm text-ink-600">+504 9387-0479</div>
                </div>
              </a>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-xs text-ink-600">
              <div className="font-medium text-ink-700">Horario de atención</div>
              <div>Lunes a viernes — 8:00 am a 6:00 pm</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
