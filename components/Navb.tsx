"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/apps", label: "Aplicaciones" },
  { href: "/blog", label: "Blog" },
  { href: "/cotizar", label: "Cotizar" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#0B78C4] to-[#00C2FF] text-white shadow">
            M
          </span>
          <span className="text-sm font-semibold text-slate-900">MIMAR GROUP</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-100 ${
                pathname === l.href ? "text-[#0B78C4]" : "text-slate-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/cotizar"
            className="rounded-xl bg-[#0B78C4] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0a6dad]"
          >
            Cotizar
          </Link>
        </div>
      </div>
    </header>
  );
}

