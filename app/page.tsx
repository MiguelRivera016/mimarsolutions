import Hero from '@/components/Hero';
import LiveStats from '@/components/LiveStats';
import ValueProps from '@/components/ValueProps';
import Services from '@/components/Services';
import EnterpriseFeatures from '@/components/EnterpriseFeatures';
import TrustBadges from '@/components/TrustBadges';
import Integrations from '@/components/Integrations';
import ImplementationTimeline from '@/components/ImplementationTimeline';
import PricingComparison from '@/components/PricingComparison';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactStrip from '@/components/ContactStrip';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LiveStats />
      <ValueProps />
      <Services />
      <EnterpriseFeatures />
      <TrustBadges />
      <Integrations />
      <ImplementationTimeline />
      <PricingComparison />
      <Portfolio withCTA />
      <Testimonials />
      <FAQ />
      <ContactStrip />
      <CTA />
    </>
  );
}
