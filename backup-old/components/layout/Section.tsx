import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'brand';
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white'
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    brand: 'bg-brand-500 text-white',
  };

  return (
    <section
      id={id}
      className={`section-pad ${bgClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
