import { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import MissionStatement from '../components/sections/MissionStatement';
import ServicesPreview from '../components/sections/ServicesPreview';
import AIShowcase from '../components/sections/AIShowcase';
import FeaturedNews from '../components/sections/FeaturedNews';
import PartnersCarousel from '../components/sections/PartnersCarousel';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  useEffect(() => {
    document.title = 'WKU DSOC - Working Together to Move Forward';
  }, []);

  return (
    <PageTransition>
      <Hero />
      <StatsBar />
      <MissionStatement />
      <ServicesPreview />
      <AIShowcase />
      <FeaturedNews />
      <PartnersCarousel />
      <CTASection />
    </PageTransition>
  );
}
