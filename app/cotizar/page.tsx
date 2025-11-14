'use client';
import { Metadata } from 'next';
import { useMemo, useState } from 'react';
import { COMPANY } from '@/config/constants';

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

export default function CotizarPage() {
  const [form, setForm] = useState<FormState>({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    tipo: 'Inventario / POS',
    presupuesto: 'A definir',
    plazo: 'Lo antes posible',
    mensaje: '',
    acepta: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!form.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(form.correo)) {
      newErrors.correo = 'El correo no es válido';
    }

    if (!form.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    }

    if (!form.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }

    if (!form.acepta) {
      newErrors.acepta = 'Debe aceptar los términos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValid = useMemo(() => {
    if (!form.nombre.trim()) return false;
    if (!/^\S+@\S+\.\S+$/.test(form.correo)) return false;
    if (!form.telefono.trim()) return false;
    if (!form.mensaje.trim()) return false;
    if (!form.acepta) return false;
    return true;
  }, [form]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setForm((s) => ({ ...s, [name]: type === 'checkbox' ? checked : value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
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
      '',
      `📝 Mensaje:`,
      form.mensaje,
    ]
      .filter(Boolean)
      .join('\n');

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const text = encodeURIComponent(
      `Hola MIMAR Solutions,\n\nQuiero una cotización:\n\n${buildSummary()}`
    );
    window.open(`https://wa.me/${COMPANY.phoneRaw}?text=${text}`, '_blank');
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const subject = encodeURIComponent(
      'Solicitud de cotización — MIMAR Solutions'
    );
    const body = encodeURIComponent(buildSummary());
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-gradient-to-b from-brand-50 to-white py-16 md:py-20">
      <div className="container-pro max-w-5xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-200">
            <span className="inline-block size-2 rounded-full bg-gold-500" />
            Cotización personalizada
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-700 md:text-4xl">
            Cuéntenos su proyecto y reciba una propuesta clara
          </h1>
          <p className="mt-2 text-ink-600">
            Respuesta rápida por WhatsApp o correo. También puede llamarnos o
            escribirnos directamente.
          </p>
        </div>

        {/* Grid: formulario + contacto */}
        <div className="mt-10 grid gap-6 md:grid-cols-[1.3fr_.7fr]">
          {/* Formulario */}
          <form className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-1 block text-sm font-medium text-ink-700"
                >
                  Nombre completo *
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={onChange}
                  placeholder="Ej. Carlos Rivera"
                  className={`w-full rounded-lg border px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                    errors.nombre
                      ? 'border-red-300 focus:ring-red-300'
                      : 'border-slate-300 focus:ring-brand-300'
                  }`}
                  required
                  aria-invalid={!!errors.nombre}
                  aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                />
                {errors.nombre && (
                  <p id="nombre-error" className="mt-1 text-xs text-red-600">
                    {errors.nombre}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="empresa"
                  className="mb-1 block text-sm font-medium text-ink-700"
                >
                  Empresa (opcional)
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  value={form.empresa}
                  onChange={onChange}
                  placeholder="Nombre de su empresa"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
              </div>
              <div>
                <label
                  htmlFor="correo"
                  className="mb-1 block text-sm font-medium text-ink-700"
                >
                  Correo *
                </label>
                <input
                  id="correo"
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={onChange}
                  placeholder="ejemplo@correo.com"
                  className={`w-full rounded-lg border px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                    errors.correo
                      ? 'border-red-300 focus:ring-red-300'
                      : 'border-slate-300 focus:ring-brand-300'
                  }`}
                  required
                  aria-invalid={!!errors.correo}
                  aria-describedby={errors.correo ? 'correo-error' : undefined}
                />
                {errors.correo && (
                  <p id="correo-error" className="mt-1 text-xs text-red-600">
                    {errors.correo}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="telefono"
                  className="mb-1 block text-sm font-medium text-ink-700"
                >
                  Teléfono *
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  value={form.telefono}
                  onChange={onChange}
                  placeholder="+504 9XXX-XXXX"
                  className={`w-full rounded-lg border px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                    errors.telefono
                      ? 'border-red-300 focus:ring-red-300'
                      : 'border-slate-300 focus:ring-brand-300'
                  }`}
                  required
                  aria-invalid={!!errors.telefono}
                  aria-describedby={
                    errors.telefono ? 'telefono-error' : undefined
                  }
                />
                {errors.telefono && (
                  <p id="telefono-error" className="mt-1 text-xs text-red-600">
                    {errors.telefono}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="tipo"
                  className="mb-1 block text-sm font-medium text-ink-700"
                >
                  Tipo de proyecto
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  value={form.tipo}
                  onChange={onChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-300"
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
                  <label
                    htmlFor="presupuesto"
                    className="mb-1 block text-sm font-medium text-ink-700"
                  >
                    Presupuesto estimado
                  </label>
                  <select
                    id="presupuesto"
                    name="presupuesto"
                    value={form.presupuesto}
                    onChange={onChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-300"
                  >
                    <option>A definir</option>
                    <option>Hasta L. 25,000</option>
                    <option>L. 25,000 — 75,000</option>
                    <option>L. 75,000 — 150,000</option>
                    <option>Más de L. 150,000</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="plazo"
                    className="mb-1 block text-sm font-medium text-ink-700"
                  >
                    Plazo
                  </label>
                  <select
                    id="plazo"
                    name="plazo"
                    value={form.plazo}
                    onChange={onChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-300"
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
              <label
                htmlFor="mensaje"
                className="mb-1 block text-sm font-medium text-ink-700"
              >
                Mensaje o descripción *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={onChange}
                rows={6}
                placeholder="Cuéntenos objetivos, funcionalidades y referencias..."
                className={`w-full rounded-lg border px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.mensaje
                    ? 'border-red-300 focus:ring-red-300'
                    : 'border-slate-300 focus:ring-brand-300'
                }`}
                required
                aria-invalid={!!errors.mensaje}
                aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
              />
              {errors.mensaje && (
                <p id="mensaje-error" className="mt-1 text-xs text-red-600">
                  {errors.mensaje}
                </p>
              )}
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm text-ink-700">
              <input
                type="checkbox"
                name="acepta"
                checked={form.acepta}
                onChange={onChange}
                className="mt-1 size-4 rounded border-slate-300 text-brand-600 transition-colors focus:ring-2 focus:ring-brand-400"
                aria-invalid={!!errors.acepta}
              />
              <span>
                Acepto ser contactado por MIMAR Solutions para recibir mi
                cotización y próximos pasos.
              </span>
            </label>
            {errors.acepta && (
              <p className="mt-1 text-xs text-red-600">{errors.acepta}</p>
            )}

            {/* Acciones */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                onClick={sendWhatsApp}
                type="button"
                className="btn-primary flex items-center justify-center gap-2 bg-brand-600 transition-all hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!isValid}
                aria-label="Enviar por WhatsApp"
              >
                <span>Enviar por WhatsApp</span>
              </button>
              <button
                onClick={sendEmail}
                type="button"
                className="btn-ghost flex items-center justify-center gap-2 ring-gold-300 transition-all hover:bg-gold-50 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!isValid}
                aria-label="Enviar por correo"
              >
                <span>Enviar por correo</span>
              </button>
            </div>

            <p className="mt-3 text-center text-xs text-ink-500">
              Respetamos su privacidad. Solo usaremos sus datos para contactarle
              respecto a esta solicitud.
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
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition-colors hover:bg-slate-50"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100">
                  <span className="size-4 rounded-full bg-brand-600" />
                </span>
                <div>
                  <div className="text-sm font-medium">Correo</div>
                  <div className="text-sm text-ink-600">{COMPANY.email}</div>
                </div>
              </a>

              <a
                href={`tel:+${COMPANY.phoneRaw}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition-colors hover:bg-slate-50"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-gold-50 ring-1 ring-gold-200">
                  <span className="size-4 rounded-full bg-gold-500" />
                </span>
                <div>
                  <div className="text-sm font-medium">Celular</div>
                  <div className="text-sm text-ink-600">{COMPANY.phone}</div>
                </div>
              </a>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-xs text-ink-600">
              <div className="font-medium text-ink-700">
                Horario de atención
              </div>
              <div>Lunes a viernes — 8:00 am a 6:00 pm</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
