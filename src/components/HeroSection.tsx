import React from 'react';
import ScrollReveal from './ScrollReveal';

const HeroSection: React.FC = () => {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Tannisa Sinha
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Innovating with Code, Solving with Logic.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex justify-center gap-4">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition">
                Contact Me
              </a>
              <a href="#projects" className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition">
                View Projects
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;