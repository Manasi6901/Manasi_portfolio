import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add smooth scrolling to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0b2e] via-[#1e1b4b] to-[#312e81] text-white">
      <Navigation activeSection={activeSection} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        {/* New sections for navigation */}
        <section id="ai-offering" className="py-24 bg-glass-bg backdrop-blur-glass border-b border-neon-cyan/20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">AI Offering</h2>
            <p className="text-lg text-gray-300 mb-6">Discover our suite of AI-powered automation tools and services.</p>
            <div className="h-32 flex items-center justify-center text-neon-cyan font-bold text-2xl">[Feature Tabs & Chat Mockup Coming Soon]</div>
          </div>
        </section>
        <section id="agent-platform" className="py-24 bg-glass-bg backdrop-blur-glass border-b border-neon-magenta/20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Agent Platform</h2>
            <p className="text-lg text-gray-300 mb-6">Build, deploy, and manage intelligent agents for your business.</p>
            <div className="h-32 flex items-center justify-center text-neon-magenta font-bold text-2xl">[Platform Features Coming Soon]</div>
          </div>
        </section>
        <section id="ai-solutions" className="py-24 bg-glass-bg backdrop-blur-glass border-b border-neon-green/20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">AI Solutions</h2>
            <p className="text-lg text-gray-300 mb-6">Tailored AI solutions for service, process, work, and growth.</p>
            <div className="h-32 flex items-center justify-center text-neon-green font-bold text-2xl">[Solution Grid Coming Soon]</div>
          </div>
        </section>
        <section id="resources" className="py-24 bg-glass-bg backdrop-blur-glass border-b border-neon-violet/20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Resources</h2>
            <p className="text-lg text-gray-300 mb-6">Guides, documentation, and learning materials for automation and AI.</p>
            <div className="h-32 flex items-center justify-center text-neon-violet font-bold text-2xl">[Resource Links Coming Soon]</div>
          </div>
        </section>
        <section id="company" className="py-24 bg-glass-bg backdrop-blur-glass border-b border-neon-cyan/20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Company</h2>
            <p className="text-lg text-gray-300 mb-6">Learn more about our mission, vision, and team.</p>
            <div className="h-32 flex items-center justify-center text-neon-cyan font-bold text-2xl">[Company Info Coming Soon]</div>
          </div>
        </section>
        <section id="academy" className="py-24 bg-glass-bg backdrop-blur-glass border-b border-neon-magenta/20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Academy</h2>
            <p className="text-lg text-gray-300 mb-6">Upskill with our academy: courses, webinars, and certifications.</p>
            <div className="h-32 flex items-center justify-center text-neon-magenta font-bold text-2xl">[Academy Content Coming Soon]</div>
          </div>
        </section>
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </motion.main>
      
      <Footer />
    </div>
  );
}

export default App;