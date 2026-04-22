import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { HeroSection } from '../components/HeroSection';
import { AboutPreview } from '../components/AboutPreview';
import { PhilosophySection } from '../components/PhilosophySection';
import { ServicesSection } from '../components/ServicesSection';
import { ImageStrip } from '../components/ImageStrip';
import { TopicsSection } from '../components/TopicsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
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
      <AboutPreview />
      <PhilosophySection />
      <ServicesSection />
      <ImageStrip />
      <TopicsSection />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}
