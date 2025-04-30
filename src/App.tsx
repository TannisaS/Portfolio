import React from 'react';
import './styles/animations.css';

// Components
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Images
import img1 from "../img/ant-rozetsky--c0PJUAtpSo-unsplash.jpg";
import img2 from "../img/bank-phrom-Tzm3Oyu_6sk-unsplash.jpg";
import img3 from "../img/imgg.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <section><HeroSection /></section>
      <section><AboutSection profileImage={img3} /></section>
      <section><ExperienceSection /></section>
      <section><SkillsSection /></section>
      <section><AchievementsSection /></section>
      <section id="projects" className="scroll-mt-40"><ProjectsSection images={{ img1, img2 }} /></section>
      <section id="contact" className="scroll-mt-40"><ContactMeSection/></section>
      <section ><ContactSection /></section>
      <Footer />
    </div>
  );
}


export default App;