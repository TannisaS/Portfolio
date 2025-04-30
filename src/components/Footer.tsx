import React from 'react';
import ScrollReveal from './ScrollReveal';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <ScrollReveal>
          <p>© 2024 Tannisa Sinha. All rights reserved.</p>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;