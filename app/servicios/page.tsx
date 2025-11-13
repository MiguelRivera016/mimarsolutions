import { Metadata } from 'next';
import Services from '@/components/Services';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Desarrollo web, aplicaciones móviles, e-commerce, SEO, diseño UI/UX y mantenimiento. Soluciones digitales completas para tu negocio en Honduras.',
  keywords: [
    'desarrollo web Honduras',
    'apps móviles',
    'e-commerce',
    'SEO',
    'diseño web',
    'UI/UX',
  ],
  openGraph: {
    title: 'Nuestros Servicios | MIMAR Solutions',
    description:
      'Servicios profesionales de desarrollo web, apps móviles, e-commerce y más. Soluciones digitales a medida.',
  },
};

export default function ServiciosPage() {
  return <Services />;
}
