'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from '@/config/constants';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container-pro flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="MIMAR Solutions - Inicio">
          <img
            src="/assets/branding/isotipo-m.png"
            alt="MIMAR Solutions"
            className="h-8 w-8"
            width={32}
            height={32}
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
          aria-label="Abrir menú de navegación"
          aria-expanded={isMenuOpen}
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
        <div className="border-t bg-white md:hidden">
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
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/cotizar"
              className="mt-2 rounded-xl bg-brand-500 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Cotizar Proyecto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
