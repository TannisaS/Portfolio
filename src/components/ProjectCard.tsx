import React from 'react';
import ScrollReveal from './ScrollReveal';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tech, 
  image, 
  githubUrl,
  delay = 0
}) => {
  return (
    <ScrollReveal delay={delay}>
      <a 
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition"
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span key={i} className="bg-blue-500 px-3 py-1 rounded-full text-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </ScrollReveal>
  );
};

export default ProjectCard;