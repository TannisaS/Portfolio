import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLink from './SocialLink';
import SectionTitle from './SectionTitle';
import ScrollReveal from './ScrollReveal';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <SectionTitle title="Get In Touch" />
        <div className="max-w-lg mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <SocialLink 
              href="https://github.com/TannisaS/" 
              icon={<Github className="w-8 h-8" />}
              label="GitHub"
              delay={150}
            />
            <SocialLink 
              href="https://www.linkedin.com/in/tannisa-sinha" 
              icon={<Linkedin className="w-8 h-8" />}
              label="LinkedIn"
              delay={300}
            />
            <SocialLink 
              href="mailto:tannisasinha@gmail.com" 
              icon={<Mail className="w-8 h-8" />}
              label="Email"
              delay={450}
            />
          </div>
          <ScrollReveal delay={600}>
            <p className="text-gray-300 mt-6">
              Feel free to reach out to me through any of these platforms. I'm always open to discussing new opportunities and collaborations!
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;