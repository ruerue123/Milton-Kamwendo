import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { HeroSection } from '../components/HeroSection';
import { FeaturedAppBanner } from '../components/FeaturedAppBanner';
import { AboutPreview } from '../components/AboutPreview';
import { PhilosophySection } from '../components/PhilosophySection';
import { ServicesSection } from '../components/ServicesSection';
import { OtherBooksStrip } from '../components/OtherBooksStrip';
import { ImageStrip } from '../components/ImageStrip';
import { TopicsSection } from '../components/TopicsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ImpactSection } from '../components/ImpactSection';
import { LogoStrip } from '../components/LogoStrip';
import { CTASection } from '../components/CTASection';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function HomePage() {
  useDocumentMeta(
    '',
    'Milton Kamwendo delivers transformation through thought, strategy, and action — empowering leaders and organizations to achieve greatness.'
  );
  return (
    <PageTransition>
      <HeroSection />
      <FeaturedAppBanner />
      <AboutPreview />
      <ImpactSection />
      <LogoStrip />
      <PhilosophySection />
      <ServicesSection />
      <OtherBooksStrip />
      <ImageStrip />
      <TopicsSection />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}
