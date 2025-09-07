import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1_Ua9UNBL7ZDjE6XCHISgHDD3WE6-hsSj/view?usp=drivesdk';
    link.download = 'https://drive.google.com/file/d/1_Ua9UNBL7ZDjE6XCHISgHDD3WE6-hsSj/view?usp=drivesdk';
    link.click();
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-[#fa5814] to-[#ff6d33] p-1 mb-6 mx-auto">
                <div className="w-full h-full rounded-full bg-[#0f0f0f] flex items-center justify-center">
                  <img 
                    src="public/WhatsApp Image 2025-09-07 at 15.27.30_3da88552.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-[#fa5814] opacity-20 blur-xl animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Manasi Patil
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl text-[#fa5814] font-semibold mb-2">
              DevOps & Cloud Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm md:text-base text-[#cbd5e1]">
              <span>DevOps</span> <span>•</span>
              <span>Linux</span> <span>•</span>
              <span>Docker</span> <span>•</span>
              <span>Kubernetes</span> <span>•</span>
              <span>Python</span> <span>•</span>
              <span>AWS</span> <span>•</span>
              <span>Jenkins</span> <span>•</span>
              <span>Ansible</span> <span>•</span>
              <span>Terraform</span> <span>•</span>
              <span>GenAI</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-[#cbd5e1] mb-8 max-w-3xl mx-auto"
          >
            "Automating cloud-native DevOps solutions with precision and innovation."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center px-8 py-3 bg-[#fa5814] text-white text-lg font-medium rounded-lg hover:bg-[#ff6d33] transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-[#fa5814]/25"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center px-8 py-3 border-2 border-[#fa5814] text-[#fa5814] text-lg font-medium rounded-lg hover:bg-[#fa5814] hover:text-white transition-all duration-200 hover:scale-105"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center text-[#cbd5e1]"
          >
            <MapPin className="w-5 h-5 mr-2 text-[#fa5814]" />
            <span>Ravet, Pune</span>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#fa5814] rounded-full opacity-10"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
