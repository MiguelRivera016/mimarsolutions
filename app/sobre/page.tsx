import { Metadata } from 'next';
import AboutIntro from '@/components/AboutIntro';
import AboutHighlights from '@/components/AboutHighlights';
import AboutTimeline from '@/components/AboutTimeline';
import AboutCulture from '@/components/AboutCulture';
import Team from '@/components/Team';
import ContactStrip from '@/components/ContactStrip';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description:
    'Conoce al equipo de MIMAR Solutions. Somos una empresa hondureña especializada en desarrollo web, apps móviles y soluciones digitales innovadoras.',
  openGraph: {
    title: 'Sobre Nosotros | MIMAR Solutions',
    description:
      'Equipo hondureño de desarrollo web y aplicaciones móviles con experiencia en soluciones digitales empresariales.',
  },
};

export default function SobrePage() {
  return (
    <>
      <AboutIntro />
      <AboutHighlights />
      <AboutTimeline />
      <Team />
      <AboutCulture />
      <ContactStrip />
      <CTA />
    </>
  );
}
