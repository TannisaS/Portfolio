import React from 'react';
import { Code2, Terminal, Database, Brain } from 'lucide-react';
import SkillCard from './SkillCard';
import SectionTitle from './SectionTitle';

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900" id="skills">
      <div className="container mx-auto px-4">
        <SectionTitle title="Technical Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard 
            icon={<Code2 className="w-8 h-8" />} 
            title="Programming" 
            description="Java, Python, C" 
            delay={150}
            className="h-full"
          />
          <SkillCard 
            icon={<Terminal className="w-8 h-8" />} 
            title="Web Development" 
            description="React, Node.js, HTML/CSS, Tailwind, Express.js, Creating and handling APIs" 
            delay={300}
            className="h-full"
          />
          <SkillCard 
            icon={<Database className="w-8 h-8" />} 
            title="Databases" 
            description="MySQL, MongoDB, PostgreSQL" 
            delay={450}
            className="h-full"
          />
          <SkillCard 
            icon={<Brain className="w-8 h-8" />} 
            title="Machine Learning" 
            description="Scikit-Learn, TensorFlow & Keras, PyTorch, Pandas & NumPy, Matplotlib & Seaborn, OpenCV, LangChain" 
            delay={600}
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;