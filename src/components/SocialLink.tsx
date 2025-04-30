import React from 'react';
import ScrollReveal from './ScrollReveal';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  delay?: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ 
  href, 
  icon, 
  label,
  delay = 0
}) => {
  return (
    <ScrollReveal delay={delay}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition group"
      >
        <div className="transform group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className="mt-2 text-sm">{label}</span>
      </a>
    </ScrollReveal>
  );
};

export default SocialLink;