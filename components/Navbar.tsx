"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sitios-web", label: "Sitios Web" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container-pro flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/assets/branding/isotipo-m.png" alt="MIMAR Solutions" className="h-8 w-8" />
          <span className="text-sm font-semibold">MIMAR Solutions</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-50 " +
                  (active ? "text-brand-600" : "text-ink-600")
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/cotizar" className="btn-primary">Cotizar</Link>
        </div>
      </div>
    </header>
  );
}