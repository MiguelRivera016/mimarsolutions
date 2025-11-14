import { Metadata } from 'next';
import Websites from '@/components/Websites';

export const metadata: Metadata = {
  title: 'Sitios Web',
  description:
    'Tipos de sitios web que desarrollamos: corporativos, e-commerce, landing pages, portales y más. Diseño responsivo y optimizado para SEO.',
  openGraph: {
    title: 'Tipos de Sitios Web | MIMAR Solutions',
    description:
      'Desarrollamos sitios web profesionales: corporativos, tiendas online, landing pages y portales empresariales.',
  },
};

export default function SitiosWebPage() {
  return <Websites />;
}
