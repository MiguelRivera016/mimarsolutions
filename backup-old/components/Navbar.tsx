'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CONTACT, NAVIGATION } from '@/config/constants';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuId = 'mobile-menu';
  const navLinks = NAVIGATION.filter((l) => !('highlight' in l));
  const cta =
    NAVIGATION.find((l) => 'highlight' in l && l.highlight) ?? {
      name: 'Cotizar Proyecto',
      href: '/cotizar',
    };
  const waHref = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(CONTACT.whatsapp.message)}`;

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
          <div className="relative">
            <Image
              src="/assets/branding/isotipo-m.png"
              alt="MIMAR Solutions"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <span className="pointer-events-none absolute -right-8 -top-2 hidden select-none rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold leading-none text-white shadow-sm md:inline-flex">
              🔥 Oferta
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">MIMAR Solutions</span>
            <span className="inline-flex select-none items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200 md:hidden">
              🔥 Oferta
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => {
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
          <Link href={cta.href} className="btn-primary">
            {cta.name}
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
            {navLinks.map((link) => {
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
              href={cta.href}
              className="mt-2 rounded-xl bg-brand-500 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              {cta.name}
            </Link>
          </nav>
        </div>
      )}

      {/* WhatsApp flotante (móvil) */}
      <a
        href={waHref}
        className="md:hidden fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        aria-label="Abrir WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
          <path d="M20 3.5A10 10 0 0 0 3 18.4l-1 3.6 3.7-1A10 10 0 1 0 20 3.5Zm-8 16a8 8 0 0 1-4.1-1.1l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 19.5Zm4-5.3c-.2-.1-1.2-.6-1.3-.6s-.3-.1-.5.1-.6.7-.8.9-.3.2-.5.1a6.6 6.6 0 0 1-3-2.6c-.2-.3 0-.4.1-.5l.3-.3c.1-.1.1-.2.2-.4s0-.3 0-.4l-.6-1.4c-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.4.2-.6.4a2 2 0 0 0-.6 1.5 3.6 3.6 0 0 0 .8 2.1 8 8 0 0 0 3 2.7 5.1 5.1 0 0 0 2.4.6 2.1 2.1 0 0 0 1.4-.7 1.8 1.8 0 0 0 .4-1.1c0-.2 0-.3-.1-.4Z" />
        </svg>
        <span>WhatsApp</span>
      </a>
    </header>
  );
}
