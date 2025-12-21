// IMPORTANTE: Enfoque en conseguir primeros clientes, no en parecer grande

import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import Pricing from '@/components/home/Pricing';
import Team from '@/components/home/Team';
import CTA from '@/components/home/CTA';
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <Team />
      <CTA />
      <WhatsAppButton />
    </>
  );
}

