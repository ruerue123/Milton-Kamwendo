import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { HeroSection } from '../components/HeroSection';
import { AboutPreview } from '../components/AboutPreview';
import { PhilosophySection } from '../components/PhilosophySection';
import { ServicesSection } from '../components/ServicesSection';
import { ImageStrip } from '../components/ImageStrip';
import { VideoSection } from '../components/VideoSection';
import { TopicsSection } from '../components/TopicsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <AboutPreview />
      <PhilosophySection />
      <ServicesSection />
      <ImageStrip />
      <VideoSection />
      <TopicsSection />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}
