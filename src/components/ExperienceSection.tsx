import React from 'react';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import SectionTitle from './SectionTitle';

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800" id="experience">
      <div className="container mx-auto px-4">
        <SectionTitle title="Work Experience" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExperienceCard
            title="R&D Intern"
            company="Encrypta"
            period="December 2024 - April 2025"
            description="Conducted research to identify necessary improvements for a JavaScript-based browser extension. I worked on bug fixes, performance optimizations, and feature enhancements, contributing to the development of a new build with improved stability and functionality. This experience strengthened my skills in JavaScript and browser APIs."
            icon={<Briefcase className="w-8 h-8" />}
            delay={150}
          />
          <ExperienceCard
            title="Infosys Springboard Intern"
            company="Infosys"
            period="December 2024 - January 2025"
            description="Worked on a Real-Time AI Sales Call Assistant designed to enhance conversation strategies. The project involved AI-driven speech analysis, sentiment detection, and real-time suggestions to improve sales interactions. It integrated NLP, speech recognition, and automation to provide data-driven insights for better engagement and decision-making."
            icon={<Briefcase className="w-8 h-8" />}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;