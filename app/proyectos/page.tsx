import { Metadata } from 'next';
import Portfolio from '@/components/Portfolio';

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Explora nuestro portafolio de proyectos. Sistemas de inventario, POS, apps móviles y sitios web desarrollados para empresas hondureñas.',
  openGraph: {
    title: 'Proyectos Realizados | MIMAR Solutions',
    description:
      'Portafolio de proyectos: sistemas empresariales, apps móviles y sitios web profesionales.',
  },
};

export default function ProyectosPage() {
  return <Portfolio />;
}
