import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { PageHero } from '../components/PageHero';
import { ShopSection } from '../components/ShopSection';

export function ShopPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Shop"
        title="Books by Milton"
        subtitle="Ideas that transform — available in the Improvement Series and Hunt for Greatness collections."
        backgroundImage="/milton8.jpeg"
      />
      <ShopSection />
    </PageTransition>
  );
}
