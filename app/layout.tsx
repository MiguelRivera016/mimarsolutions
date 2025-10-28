import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mimar.solutions"),
  title: {
    default: "MIMAR Solutions — Innovación digital para su empresa",
    template: "%s | MIMAR Solutions",
  },
  description:
    "Desarrollamos sistemas de inventario, POS, apps móviles y sitios web modernos con soporte local. MIMAR Solutions es una marca de MIMAR GROUP S. de R.L.",
  openGraph: {
    type: "website",
    url: "https://mimar.solutions",
    title: "MIMAR Solutions — Innovación digital para su empresa",
    description:
      "Soluciones tecnológicas para empresas: inventario, POS, apps y sitios web. Soporte local, calidad empresarial.",
    siteName: "MIMAR Solutions",
    images: [{ url: "/assets/images/responsive-devices.png", width: 1200, height: 630, alt: "MIMAR Solutions" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://mimar.solutions" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MIMAR Solutions",
    url: "https://mimar.solutions",
    parentOrganization: "MIMAR GROUP S. de R.L.",
    email: "mimargrouphn@gmail.com",
    telephone: "+50493870479",
    address: { "@type": "PostalAddress", addressCountry: "HN", addressLocality: "San Pedro Sula" },
    sameAs: [
      "https://www.linkedin.com", // actualiza con tu perfil
      "https://www.facebook.com"  // actualiza con tu perfil
    ],
    logo: "https://mimar.solutions/assets/branding/isotipo-m.png",
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body className={poppins.className + " bg-white text-ink-900 antialiased"}>
        {/* Skip link accesible */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:rounded-md focus:bg-brand-600 focus:px-3 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>

        <Navbar />
        <main id="contenido" className="min-h-[60vh]">{children}</main>
        <Footer />

        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
