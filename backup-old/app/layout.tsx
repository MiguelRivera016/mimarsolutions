import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { COMPANY, METADATA } from '@/config/constants';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: METADATA.default.title,
    template: '%s | MIMAR Solutions',
  },
  description: METADATA.default.description,
  keywords: METADATA.default.keywords,
  openGraph: {
    type: 'website',
    url: COMPANY.url,
    title: METADATA.default.title,
    description: METADATA.default.description,
    siteName: COMPANY.name,
    locale: METADATA.openGraph.locale,
    images: [
      {
        url: '/assets/images/responsive-devices.png',
        width: 1200,
        height: 630,
        alt: 'MIMAR Solutions',
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: COMPANY.url },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: COMPANY.url,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'HN',
      addressLocality: COMPANY.location.city,
    },
    sameAs: [
      COMPANY.social.linkedin,
      COMPANY.social.facebook,
      COMPANY.social.instagram,
    ],
    logo: `${COMPANY.url}/assets/branding/isotipo-m.png`,
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body className={poppins.className + ' bg-white text-ink-900 antialiased'}>
        {/* Skip link accesible */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-brand-600 focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
        >
          Saltar al contenido
        </a>

        <Navbar />
        <main id="contenido" className="min-h-[60vh]">
          {children}
        </main>
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
