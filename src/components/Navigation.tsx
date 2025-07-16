import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'AI Offering', href: '#skills' },
    { label: 'Agent Platform', href: '#platform' },
    { label: 'AI Solutions', href: '#solutions' },
    { label: 'Resources', href: '#resources' },
    { label: 'Company', href: '#about' },
    { label: 'Academy', href: '#experience' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-cyan-500/20">
      {/* Neon glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-pink-500/5 blur-sm" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
              ManRow
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium group"
              >
                {item.label}
                {/* Hover glow effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:to-pink-500/10 rounded-lg transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center space-x-4"
          >
            <button className="relative group bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
              <span className="relative z-10">Get Started</span>
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-full animate-pulse" />
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-300 hover:text-white transition-colors rounded-lg group"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:to-pink-500/20 rounded-lg transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-cyan-500/20"
          >
            <div className="flex flex-col space-y-3 bg-black/40 backdrop-blur-lg rounded-lg p-4 border border-cyan-500/20">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-pink-500/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium mt-4 w-full relative group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;