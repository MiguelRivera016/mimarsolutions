import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import EnterpriseFeatures from '@/components/EnterpriseFeatures';
import TrustBadges from '@/components/TrustBadges';
import Integrations from '@/components/Integrations';
import PricingComparison from '@/components/PricingComparison';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <EnterpriseFeatures />
      <TrustBadges />
      <Integrations />
      <PricingComparison />
      <Portfolio withCTA={false} />
      <FAQ />
      <CTA />
    </>
  );
}
