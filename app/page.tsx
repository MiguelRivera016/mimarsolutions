import Hero from '@/components/Hero';
import Services from '@/components/Services';
import EnterpriseFeatures from '@/components/EnterpriseFeatures';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <EnterpriseFeatures />
      <Portfolio withCTA={false} />
      <Testimonials />
      <CTA />
    </>
  );
}
