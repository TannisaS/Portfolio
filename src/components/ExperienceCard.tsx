import React, { useState } from 'react';
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
  delay = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = description.length > 150;

  return (
    <ScrollReveal delay={delay}>
      <div
        className={`bg-gray-700 p-6 rounded-lg hover:scale-105 transition group relative overflow-hidden ${
          isExpanded ? 'h-auto' : 'h-[320px]'
        } flex flex-col justify-between`}
      >
        {/* Decorative bubbles */}
        <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
        <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-blue-500/10 rounded-full group-hover:scale-150 transition-transform duration-500" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-4 mb-2">
            <div className="text-blue-400 transform group-hover:scale-110 transition-transform">{icon}</div>
            <div className="text-sm text-blue-400 font-semibold">{period}</div>
          </div>
          <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">{title}</h3>
          <h4 className="text-md text-blue-300 mb-2">{company}</h4>

          {/* Description */}
          <div className={`relative text-sm ${isExpanded ? 'h-auto' : 'h-[110px] overflow-hidden'}`}>
            <p className="text-gray-300">{description}</p>
            {!isExpanded && shouldTruncate && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-700" />
            )}
          </div>

          {/* Read More / Read Less */}
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-400 hover:text-blue-300 mt-2 transition-colors text-sm font-medium self-start"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ExperienceCard;
