import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import { SITE_CONFIG } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: 'es_HN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Schema.org markup for Organization */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE_CONFIG.name,
              description: SITE_CONFIG.description,
              url: SITE_CONFIG.url,
              logo: `${SITE_CONFIG.url}/logo.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: SITE_CONFIG.contact.phone,
                contactType: 'customer service',
                availableLanguage: 'Spanish',
                areaServed: 'HN',
              },
              sameAs: [SITE_CONFIG.social.facebook, SITE_CONFIG.social.instagram, SITE_CONFIG.social.linkedin],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'HN',
                addressLocality: 'Tegucigalpa',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen pt-16 md:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />

        {/* Google Analytics - Agregar tu ID */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script> */}
      </body>
    </html>
  );
}

