'use client';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import BadgeNew from '@/components/ui/BadgeNew';
import type { NavLinkItem } from '@/config/constants';

type Props = {
  label: string;
  items: NavLinkItem[];
  pathname?: string | null;
  onNavigate?: () => void;
};

function useIsDesktop(breakpointPx = 768) {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpointPx}px)`);
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, [breakpointPx]);

  return isDesktop;
}

export default function DropdownMenu({ label, items, pathname, onNavigate }: Props) {
  const isDesktop = useIsDesktop(768); // md
  const id = useId();
  const triggerId = `${id}-trigger`;
  const menuId = `${id}-menu`;

  const rootRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);
  const [alignRight, setAlignRight] = useState(false);

  const hasActiveChild = useMemo(() => {
    if (!pathname) return false;
    return items.some((it) => pathname === it.href || pathname.startsWith(it.href + '/'));
  }, [items, pathname]);

  // Cerrar al hacer click fuera + Escape
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      const el = rootRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // Posicionamiento para no salirse de pantalla
  useEffect(() => {
    if (!open) return;
    const t = triggerRef.current;
    const m = menuRef.current;
    if (!t || !m) return;

    const raf = window.requestAnimationFrame(() => {
      const tRect = t.getBoundingClientRect();
      const mRect = m.getBoundingClientRect();
      const padding = 12;

      const wouldOverflowRight = tRect.left + mRect.width + padding > window.innerWidth;
      setAlignRight(wouldOverflowRight);
    });

    return () => window.cancelAnimationFrame(raf);
  }, [open, items.length]);

  const openDesktop = () => setOpen(true);
  const closeDesktop = () => setOpen(false);

  const toggleMobile = () => setOpen((v) => !v);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={isDesktop ? openDesktop : undefined}
      onMouseLeave={isDesktop ? closeDesktop : undefined}
      onFocusCapture={isDesktop ? openDesktop : undefined}
      onBlurCapture={
        isDesktop
          ? () => {
              // Cierra cuando el foco sale completamente del dropdown
              window.setTimeout(() => {
                const root = rootRef.current;
                if (!root) return;
                const active = document.activeElement;
                if (active && active instanceof Node && !root.contains(active)) setOpen(false);
              }, 0);
            }
          : undefined
      }
    >
      <button
        ref={triggerRef}
        id={triggerId}
        type="button"
        className={
          'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-50 ' +
          (hasActiveChild ? 'text-brand-600' : 'text-ink-600')
        }
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={!isDesktop ? toggleMobile : undefined}
      >
        <span>{label}</span>
        <motion.svg
          className="h-4 w-4 text-ink-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          animate={{ rotate: open ? 180 : 0 }}
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

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            aria-labelledby={triggerId}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className={
              'absolute z-50 mt-2 w-[min(22rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-200 ' +
              (alignRight ? 'right-0' : 'left-0')
            }
            ref={menuRef}
          >
            <div className="p-2">
              {items.map((it) => {
                const active = pathname ? pathname === it.href || pathname.startsWith(it.href + '/') : false;
                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    role="menuitem"
                    className={
                      'group flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-slate-50 focus:bg-slate-50 focus:outline-none ' +
                      (active ? 'text-brand-700' : 'text-ink-700')
                    }
                    onClick={() => {
                      setOpen(false);
                      onNavigate?.();
                    }}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{it.name}</span>
                        {it.badge && <BadgeNew variant={it.badge} />}
                      </div>
                      {it.description && (
                        <div className="mt-0.5 text-xs text-ink-600">{it.description}</div>
                      )}
                    </div>
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400 opacity-0 transition group-hover:opacity-100"
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

