import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0b2e] via-[#1e1b4b] to-[#312e81] text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <motion.main 
          className="flex-1 flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
        </motion.main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;