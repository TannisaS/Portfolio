import React from 'react';
import img1 from "../img/ant-rozetsky--c0PJUAtpSo-unsplash.jpg";
import img2 from "../img/bank-phrom-Tzm3Oyu_6sk-unsplash.jpg";
import img3 from "../img/imgg.jpg";
import { Github, Linkedin, Mail, Terminal, Code2, Database, Globe, Cpu, Brain, BookOpen, Award, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Tannisa Sinha
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Innovating with Code, Solving with Logic.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition">
                Contact Me
              </a>
              <a href="#projects" className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-20 bg-gray-900" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <img 
                    src={img3} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500 rounded-lg opacity-20"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Hii, I'm Tannisa </h3>
                <p className="text-gray-300 mb-6">
                I have a strong passion for full-stack development, machine learning, and AI-driven applications. With experience in React, Flask, Express.js, MongoDB, and Tailwind CSS, I enjoy solving complex problems and creating efficient, user-friendly solutions.
Beyond coding, I am always eager to learn new technologies, explore innovative ideas, and improve my skills. I thrive in dynamic environments where I can collaborate, innovate, and make an impact.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-blue-400" />
                    <span>Currently pursuing B.Tech in CSE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Brain className="text-blue-400" />
                    <span>Focused on AI & Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code2 className="text-blue-400" />
                    <span>Full-stack Development Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 bg-gray-800" id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <ExperienceCard
                title="R&D Intern"
                company="Encrypta"
                period="December 2024 - April 2025"
                description="Conducted research to identify necessary improvements for a JavaScript-based browser extension. I worked on bug fixes, performance optimizations, and feature enhancements, contributing to the development of a new build with improved stability and functionality. This experience strengthened my skills in JavaScript and browser APIs."
                icon={<Briefcase className="w-8 h-8" />}
              />
            <ExperienceCard
              title="Infosys Springboard Intern"
              company="Infosys"
              period="December 2024 - January 2025"
              description="Worked on a Real-Time AI Sales Call Assistant designed to enhance conversation strategies. The project involved AI-driven speech analysis, sentiment detection, and real-time suggestions to improve sales interactions. It integrated NLP, speech recognition, and automation to provide data-driven insights for better engagement and decision-making."
              icon={<Briefcase className="w-8 h-8" />}
            />
            
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard icon={<Code2 className="w-8 h-8" />} title="Programming" description="Java, Python, C" />
            <SkillCard icon={<Terminal className="w-8 h-8" />} title="Web Development" description="React, Node.js, HTML/CSS, Tailwind , Express.js , Creating and handling APIs" />
            <SkillCard icon={<Database className="w-8 h-8" />} title="Databases" description="MySQL, MongoDB, PostgreSQL" />
            <SkillCard icon={<Brain className="w-8 h-8" />} title="Machine Learning" description="Scikit-Learn, TensorFlow & Keras, PyTorch, Pandas & NumPy, Matplotlib & Seaborn, OpenCV, LangChain" />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-800" id="achievements">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
          <div className="max-w-4xl mx-auto">
            <AchievementCard
              title="Winner - IIT Indore Fluxus HCMS Hackathon"
              description="Led a team to victory in developing an comprehensive Healthcare Management System to streamline patient care and medical record management. The system included basic diagnosis using symptoms, medical certificate generation, student health record management, appointment scheduling, an automated documentation system, and a personalized chatbot for user support and guidance."
              date="2025"
              icon={<Award className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="AgroPredict"
              description="A data-driven agricultural prediction system that provides crop recommendations, fertilizer suggestions, price forecasts, and plant disease detection to assist farmers in making informed decisions."
              tech={['React', 'Tailwind CSS', 'Node.js' , 'ML']}
              image={img1}// Alternative crop image
              githubUrl="https://agropredict-frontend.pages.dev/"
            />
            <ProjectCard
              title="Note Ninja"
              description="A smart note-taking and organization tool designed for meeting proceedings, helping users efficiently capture, categorize, and retrieve key discussions and action points with ease."
              tech={['React', 'Flask', 'Transformer']}
              image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" // Seminar/Meeting image
              githubUrl="https://github.com/TannisaS/Note-Ninja-"
            />
            <ProjectCard
              title="ArticleInsight"
              description="A news research tool that extracts, analyzes, and summarizes articles, enabling users to quickly gain key insights from multiple sources."
              tech={['NLP','Streamlit']}
              image={img2}
              githubUrl="https://github.com/TannisaS/Article-Insight"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-lg mx-auto text-center">
            <div className="flex justify-center space-x-8 mb-8">
              <SocialLink 
                href="https://github.com/TannisaS/" 
                icon={<Github className="w-8 h-8" />}
                label="GitHub"
              />
              <SocialLink 
                href="https://www.linkedin.com/in/tannisa-sinha" 
                icon={<Linkedin className="w-8 h-8" />}
                label="LinkedIn"
              />
              <SocialLink 
                href="mailto:tannisasinha@gmail.com" 
                icon={<Mail className="w-8 h-8" />}
                label="Email"
              />
            </div>
            <p className="text-gray-300 mt-6">
              Feel free to reach out to me through any of these platforms. I'm always open to discussing new opportunities and collaborations!
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Tannisa Sinha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg hover:transform hover:scale-105 transition">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function ExperienceCard({ title, company, period, description, icon }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg hover:transform hover:scale-105 transition">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <h4 className="text-lg text-blue-400 mb-2">{company}</h4>
      <p className="text-sm text-gray-400 mb-3">{period}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function AchievementCard({ title, description, date, icon }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg hover:transform hover:scale-105 transition">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-blue-400">{icon}</div>
        <div className="text-sm text-blue-400">{date}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, tech, image, githubUrl }) {
  return (
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
  );
}

function SocialLink({ href, icon, label }) {
  return (
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
  );
}

export default App;