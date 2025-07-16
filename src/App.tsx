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
    <div className="min-h-screen bg-gradient-to-br from-[#0a0518] via-[#1a0b2e] to-[#2d1b3d] text-white overflow-x-hidden">
      {/* Neon background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15 rounded-full blur-2xl animate-pulse delay-700" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-30" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} />
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