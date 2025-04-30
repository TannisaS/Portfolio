import React from 'react';
import ScrollReveal from './ScrollReveal';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  company, 
  period, 
  description, 
  icon,
  delay = 0
}) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-gray-700 p-6 rounded-lg hover:transform hover:scale-105 transition">
        <div className="text-blue-400 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <h4 className="text-lg text-blue-400 mb-2">{company}</h4>
        <p className="text-sm text-gray-400 mb-3">{period}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </ScrollReveal>
  );
};

export default ExperienceCard;