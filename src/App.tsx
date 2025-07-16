import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Stats from './components/Stats';
import Capabilities from './components/Capabilities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0b2e] via-[#1e1b4b] to-[#312e81] text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <Features />
          <Showcase />
          <Stats />
          <Capabilities />
        </motion.main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;