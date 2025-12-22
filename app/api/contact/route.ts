import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Nota: endpoint mínimo para el rediseño.
  // En producción se conectará a email/CRM. Por ahora valida y responde OK.
  const contentType = request.headers.get('content-type') ?? '';

  // Soportamos form POST (application/x-www-form-urlencoded o multipart) y JSON.
  let data: Record<string, string> = {};

  try {
    if (contentType.includes('application/json')) {
      const body = (await request.json()) as { name?: string; email?: string; message?: string };
      data = {
        name: String(body?.name ?? ''),
        email: String(body?.email ?? ''),
        message: String(body?.message ?? ''),
      };
    } else {
      const form = await request.formData();
      data = {
        name: String(form.get('name') ?? ''),
        email: String(form.get('email') ?? ''),
        message: String(form.get('message') ?? ''),
      };
    }
  } catch {
    return NextResponse.json({ ok: false, error: 'Payload inválido' }, { status: 400 });
  }

  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ ok: false, error: 'Faltan campos requeridos' }, { status: 400 });
  }

  // Evitar loggear datos sensibles en exceso; dejamos un log mínimo.
  console.info('[contact] message received', { email: data.email });

  // Si viene de un formulario HTML, redirigir a /contacto con estado.
  if (!contentType.includes('application/json')) {
    return NextResponse.redirect(new URL('/contacto?enviado=1', request.url));
  }

  return NextResponse.json({ ok: true });
}

