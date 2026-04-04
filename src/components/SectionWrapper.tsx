import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function SectionWrapper({
  children,
  className = '',
  id,
  dark = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-section-sm md:py-section ${
        dark ? 'bg-primary' : 'bg-neutral-50'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}
