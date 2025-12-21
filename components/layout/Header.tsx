'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { NAVIGATION } from '@/lib/constants';
import Badge from '@/components/ui/Badge';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const { links, cta } = useMemo(() => {
    const ctaItem = NAVIGATION.find((l) => 'highlight' in l && l.highlight);
    const rest = NAVIGATION.filter((l) => !('highlight' in l));
    return {
      links: rest,
      cta: ctaItem ?? { name: 'Contacto', href: '/contacto' },
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container-pro flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900">MIMAR</span>
            <Badge className="bg-amber-50 text-amber-700 ring-amber-200">🔥 Oferta</Badge>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-50 ' +
                  (active ? 'text-brand-600' : 'text-slate-700')
                }
              >
                {l.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <Link href={cta.href} className="btn-primary">
            {cta.name}
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden rounded-md p-2 text-slate-700 hover:bg-slate-50"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="container-pro flex flex-col px-6 py-4" aria-label="Navegación móvil">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {l.name}
              </Link>
            ))}
            <Link
              href={cta.href}
              className="mt-2 rounded-xl bg-brand-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-brand-700"
              onClick={() => setOpen(false)}
            >
              {cta.name}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

