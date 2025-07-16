import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'AI Offering', href: '#ai-offering' },
    { name: 'Agent Platform', href: '#agent-platform' },
    { name: 'AI Solutions', href: '#ai-solutions' },
    { name: 'Resources', href: '#resources' },
    { name: 'Company', href: '#company' },
    { name: 'Academy', href: '#academy' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Manasi6901',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/manasi-patil6',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Email',
      href: 'mailto:manasipatil.6901@gmail.com',
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0b2e]/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-lg lg:text-xl font-bold text-white">MP</span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg animate-pulse" />
            </div>
            <div className="ml-3 hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-white">Manasi Patil</h1>
              <p className="text-xs lg:text-sm text-gray-400">DevOps Engineer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'bg-gradient-to-r from-neon-cyan/30 to-neon-magenta/30 text-white border border-neon-cyan/40 shadow-neon-cyan'
                    : 'text-gray-300 hover:text-neon-cyan hover:bg-glass-bg hover:shadow-neon-cyan'
                }`}
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Social Links & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + (0.1 * index) }}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
            
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onClick={() => handleNavClick('#contact')}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              Let's Talk
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-[#0a0b2e]/95 backdrop-blur-md border-t border-white/10"
      >
        <div className="px-4 py-6 space-y-3">
          {/* Mobile Navigation Links */}
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                x: isMenuOpen ? 0 : -20 
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => handleNavClick(link.href)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </motion.button>
          ))}

          {/* Mobile Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0, 
              y: isMenuOpen ? 0 : 20 
            }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="pt-4 border-t border-white/10"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              Let's Talk
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;