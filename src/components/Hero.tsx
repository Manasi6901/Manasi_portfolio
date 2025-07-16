import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Manasi_Patil_Resume.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b2e] via-[#1e1b4b] to-[#312e81]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                DevOps Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Efficient DevOps
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Made Simple.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Transform your infrastructure with intelligent automation. I design, implement, and optimize CI/CD pipelines that deliver exceptional results effortlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleResumeDownload}
                className="px-8 py-4 border border-gray-600 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ravet, Pune</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href="https://github.com/Manasi6901" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  @Manasi6901
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Visual elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Professional avatar */}
            <div className="relative mx-auto lg:mx-0 w-fit">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1 mb-6">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#1e1b4b] to-[#312e81] flex items-center justify-center">
                  <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">MP</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm opacity-80">Projects</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-2xl">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">2024</div>
                  <div className="text-sm opacity-80">Graduate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
