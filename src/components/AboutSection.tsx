import React from 'react';
import { BookOpen, Brain, Code2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface AboutSectionProps {
  profileImage: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ profileImage }) => {
  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={150}>
              <div className="relative">
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500 rounded-lg opacity-20"></div> */}
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal delay={300}>
                <h3 className="text-2xl font-semibold mb-4">Hii, I'm Tannisa </h3>
              </ScrollReveal>
              <ScrollReveal delay={450}>
                <p className="text-gray-300 mb-6">
                  I have a strong passion for full-stack development, machine learning, and AI-driven applications. 
                  With experience in React, Flask, Express.js, MongoDB, and Tailwind CSS, I enjoy solving complex 
                  problems and creating efficient, user-friendly solutions.
                  Beyond coding, I am always eager to learn new technologies, explore innovative ideas, and improve 
                  my skills. I thrive in dynamic environments where I can collaborate, innovate, and make an impact.
                </p>
              </ScrollReveal>
              <div className="space-y-4">
                <ScrollReveal delay={600}>
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-blue-400" />
                    <span>Currently pursuing B.Tech in CSE</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={700}>
                  <div className="flex items-center gap-3">
                    <Brain className="text-blue-400" />
                    <span>Focused on AI & Machine Learning</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={800}>
                  <div className="flex items-center gap-3">
                    <Code2 className="text-blue-400" />
                    <span>Full-stack Development Enthusiast</span>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;