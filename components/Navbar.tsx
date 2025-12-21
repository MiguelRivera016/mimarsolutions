'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from '@/config/constants';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuId = 'mobile-menu';

  // Cerrar el menú si cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Cerrar con ESC + bloquear scroll cuando está abierto
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', onKeyDown);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.body.style.overflow = prevOverflow;
      };
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container-pro flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="MIMAR Solutions - Inicio">
          <Image
            src="/assets/branding/isotipo-m.png"
            alt="MIMAR Solutions"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="text-sm font-semibold">MIMAR Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {NAVIGATION.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-50 ' +
                  (active ? 'text-brand-600' : 'text-ink-600')
                }
                aria-current={active ? 'page' : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/cotizar" className="btn-primary">
            Cotizar Proyecto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-md p-2 text-ink-600 hover:bg-slate-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isMenuOpen}
          aria-controls={mobileMenuId}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-white md:hidden" id={mobileMenuId}>
          <nav className="container-pro flex flex-col py-4" aria-label="Navegación móvil">
            {NAVIGATION.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-50 ' +
                    (active ? 'text-brand-600' : 'text-ink-600')
                  }
                  aria-current={active ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/cotizar"
              className="mt-2 rounded-xl bg-brand-500 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Cotizar Proyecto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
