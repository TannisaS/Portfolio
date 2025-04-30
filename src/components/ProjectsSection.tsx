import React from 'react';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';
import ScrollReveal from './ScrollReveal';

interface ProjectsSectionProps {
  images: {
    img1: string;
    img2: string;
  };
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({images }) => {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <SectionTitle title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="AgroPredict"
            description="A data-driven agricultural prediction system that provides crop recommendations, fertilizer suggestions, price forecasts, and plant disease detection to assist farmers in making informed decisions."
            tech={['React', 'Tailwind CSS', 'Node.js', 'ML']}
            image={images.img1}
            githubUrl="https://agropredict-frontend.pages.dev/"
            delay={150}
          />
          <ProjectCard
            title="Note Ninja"
            description="A smart note-taking and organization tool designed for meeting proceedings, helping users efficiently capture, categorize, and retrieve key discussions and action points with ease."
            tech={['React', 'Flask', 'Transformer']}
            image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
            githubUrl="https://github.com/TannisaS/Note-Ninja-"
            delay={300}
          />
          <ProjectCard
            title="ArticleInsight"
            description="A news research tool that extracts, analyzes, and summarizes articles, enabling users to quickly gain key insights from multiple sources."
            tech={['NLP','Streamlit']}
            image={images.img2}
            githubUrl="https://github.com/TannisaS/Article-Insight"
            delay={450}
          />
        </div>
        <ScrollReveal delay={600}>
          <div className="text-center mt-12">
            <a 
              href="https://github.com/TannisaS?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition"
            >
              View More Projects
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;