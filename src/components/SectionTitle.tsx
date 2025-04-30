import React from 'react';
import ScrollReveal from './ScrollReveal';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <ScrollReveal>
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
    </ScrollReveal>
  );
};

export default SectionTitle;