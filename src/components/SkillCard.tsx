import React from 'react';
import ScrollReveal from './ScrollReveal';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0,
  className = "" 
}) => {
  return (
    <ScrollReveal delay={delay}>
      <div className={`bg-gray-700 p-6 rounded-lg hover:transform hover:scale-105 transition flex flex-col h-full ${className}`}>
        <div className="text-blue-400 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 flex-grow">{description}</p>
      </div>
    </ScrollReveal>
  );
};

export default SkillCard;