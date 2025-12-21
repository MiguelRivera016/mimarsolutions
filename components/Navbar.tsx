'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from '@/config/constants';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DropdownMenu from '@/components/ui/DropdownMenu';
import BadgeNew from '@/components/ui/BadgeNew';
import type { NavDropdownItem, NavLinkItem, NavigationItem } from '@/config/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<Record<string, boolean>>({});

  const navItems = NAVIGATION as readonly NavigationItem[];
  const ctaItems = navItems.filter((it) => it.type === 'link' && it.highlight) as NavLinkItem[];
  const mainItems = navItems.filter(
    (it) => !(it.type === 'link' && it.highlight)
  ) as readonly NavigationItem[];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileDropdown({});
  };

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
          {mainItems.map((item) => {
            if (item.type === 'dropdown') {
              return (
                <DropdownMenu
                  key={item.name}
                  label={item.name}
                  items={(item as NavDropdownItem).items}
                  pathname={pathname}
                />
              );
            }

            const link = item as NavLinkItem;
            const active = pathname === link.href || pathname.startsWith(link.href + '/');
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
                <span className="inline-flex items-center gap-2">
                  <span>{link.name}</span>
                  {link.badge && <BadgeNew variant={link.badge} />}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-2 md:flex">
          {ctaItems.length ? (
            ctaItems.map((cta) => (
              <Link key={cta.href} href={cta.href} className="btn-primary">
                <span className="inline-flex items-center gap-2">
                  <span>{cta.name || 'Cotizar'}</span>
                  {cta.badge && <BadgeNew variant={cta.badge} className="bg-white/20 text-white ring-white/30" />}
                </span>
              </Link>
            ))
          ) : (
            <Link href="/cotizar" className="btn-primary">
              Cotizar Proyecto
            </Link>
          )}
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="border-t bg-white md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <nav className="container-pro flex flex-col py-4" aria-label="Navegación móvil">
              {mainItems.map((item) => {
                if (item.type === 'dropdown') {
                  const d = item as NavDropdownItem;
                  const isOpen = !!openMobileDropdown[d.name];
                  const hasActive = d.items.some(
                    (it) => pathname === it.href || pathname.startsWith(it.href + '/')
                  );

                  return (
                    <div key={d.name} className="rounded-xl">
                      <button
                        type="button"
                        className={
                          'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-50 ' +
                          (hasActive ? 'text-brand-600' : 'text-ink-600')
                        }
                        aria-expanded={isOpen}
                        aria-controls={`mobile-dd-${d.name}`}
                        onClick={() =>
                          setOpenMobileDropdown((s) => ({ ...s, [d.name]: !s[d.name] }))
                        }
                      >
                        <span className="inline-flex items-center gap-2">
                          <span>{d.name}</span>
                          {hasActive && (
                            <span className="inline-block size-2 rounded-full bg-brand-500" aria-hidden="true" />
                          )}
                        </span>
                        <motion.svg
                          className="h-5 w-5 text-ink-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.18 }}
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"
                            clipRule="evenodd"
                          />
                        </motion.svg>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`mobile-dd-${d.name}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 space-y-1 pl-2">
                              {d.items.map((it) => {
                                const active = pathname === it.href || pathname.startsWith(it.href + '/');
                                return (
                                  <Link
                                    key={it.href}
                                    href={it.href}
                                    className={
                                      'flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-slate-50 ' +
                                      (active ? 'text-brand-600' : 'text-ink-600')
                                    }
                                    onClick={closeMobileMenu}
                                    aria-current={active ? 'page' : undefined}
                                  >
                                    <span className="inline-flex items-center gap-2">
                                      <span>{it.name}</span>
                                      {it.badge && <BadgeNew variant={it.badge} />}
                                    </span>
                                    <svg
                                      className="h-4 w-4 text-slate-400"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      aria-hidden="true"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const link = item as NavLinkItem;
                const active = pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-50 ' +
                      (active ? 'text-brand-600' : 'text-ink-600')
                    }
                    onClick={closeMobileMenu}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span>{link.name}</span>
                      {link.badge && <BadgeNew variant={link.badge} />}
                    </span>
                  </Link>
                );
              })}

              {/* CTA (highlight) */}
              {ctaItems.length ? (
                <div className="mt-2 flex flex-col gap-2">
                  {ctaItems.map((cta) => (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      className="btn-primary w-full justify-center"
                      onClick={closeMobileMenu}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span>{cta.name || 'Cotizar'}</span>
                        {cta.badge && <BadgeNew variant={cta.badge} className="bg-white/20 text-white ring-white/30" />}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href="/cotizar"
                  className="mt-2 rounded-xl bg-brand-500 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                  onClick={closeMobileMenu}
                >
                  Cotizar Proyecto
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
