import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { PageHero } from '../components/PageHero';
import { ShopSection } from '../components/ShopSection';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ShopPage() {
  useDocumentMeta(
    'Books',
    'Best-selling books by Milton Kamwendo — the Improvement Series and Hunt for Greatness collections.'
  );
  return (
    <PageTransition>
      <PageHero
        eyebrow="Books"
        title="Playbooks for Greatness"
        subtitle="Simple, practical, unflinching. The Improvement Series and the Hunt for Greatness collection — written to be used, not just read."
        backgroundImage="/milton8.jpeg"
      />
      <ShopSection />
    </PageTransition>
  );
}
