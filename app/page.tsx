// IMPORTANTE: Enfoque en conseguir primeros clientes, no en parecer grande

import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Pricing from '@/components/home/Pricing';
import Process from '@/components/home/Process';
import Team from '@/components/home/Team';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <Team />
      <CTA />
    </>
  );
}

