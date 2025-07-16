import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      {/* Additional neon effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-500/30 relative group"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-gray-300 font-medium">AI-Powered Development</span>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
        >
          <span className="block text-white mb-4">Efficient Automation</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
            Made Easy.
            {/* Text glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-lg opacity-50" />
          </span>
        </motion.h1>

        {/* Subheadline - Concise value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Transform your workflow with intelligent automation. Boost efficiency, 
          reduce manual tasks, and deliver exceptional results effortlessly.
        </motion.p>

        {/* Centered CTA Button with glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16"
        >
          {/* Primary CTA with intense glow */}
          <button className="relative group bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center space-x-3">
              <span>Get Started</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            
            {/* Multiple glow layers for intensity */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-full blur-md opacity-50 animate-pulse" />
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          </button>
          
          {/* Secondary action */}
          <button className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
            <div className="relative w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/60 transition-colors border border-cyan-500/30">
              <Play className="w-6 h-6 ml-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity" />
            </div>
            <span className="font-medium text-lg">Watch Demo</span>
          </button>
        </motion.div>

        {/* Feature indicators with neon styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
        >
          {[
            { label: 'AI for Service', color: 'from-cyan-400 to-blue-500' },
            { label: 'AI for Process', color: 'from-purple-400 to-violet-500' },
            { label: 'AI for Work', color: 'from-pink-400 to-rose-500' },
            { label: 'AI for Growth', color: 'from-green-400 to-emerald-500' }
          ].map((feature, index) => (
            <div key={index} className="relative group">
              <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:border-white/20 transition-colors">
                <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{feature.label}</span>
              </div>
              {/* Subtle glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity`} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator with neon styling */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2 animate-bounce"></div>
          {/* Glow effect */}
          <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full blur-sm"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
