import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

interface AchievementCardProps {
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  delay?: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ 
  title, 
  description, 
  date, 
  icon,
  delay = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-gray-700 p-6 rounded-lg hover:transform hover:scale-105 transition group relative overflow-hidden h-[320px]">
        <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
        <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-blue-500/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
        <div className="relative h-full flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-blue-400 transform group-hover:scale-110 transition-transform">{icon}</div>
            <div className="text-sm text-blue-400 font-semibold">{date}</div>
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
          <div className={`relative ${isExpanded ? 'h-auto' : 'h-[120px] overflow-hidden'}`}>
            <p className="text-gray-300">{description}</p>
            {!isExpanded && description.length > 150 && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-700"></div>
            )}
          </div>
          {description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-400 hover:text-blue-300 mt-2 transition-colors text-sm font-medium"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default AchievementCard;