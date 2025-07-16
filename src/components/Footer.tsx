import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'AI Solutions', href: '#showcase' },
    { label: 'Services', href: '#features' },
    { label: 'About Us', href: '#stats' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/manasi-patil6', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Github, href: 'https://github.com/Manasi6901', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Twitter, href: 'https://twitter.com/manasi', label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: Mail, href: 'mailto:manasipatil.6901@gmail.com', label: 'Email', color: 'hover:text-pink-400' }
  ];

  return (
    <footer className="relative w-full py-12 px-6 border-t border-cyan-500/20 bg-black/40 backdrop-blur-lg">
      {/* Background neon effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/3 via-blue-500/3 to-violet-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
                ManRow
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              ManRow combines innovative AI technologies with cutting-edge development practices 
              to deliver exceptional automation solutions. Transform your business with our 
              intelligent platform.
            </p>
            
            <div className="relative bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 group">
              <p className="text-gray-400 text-sm mb-2">
                <span className="text-cyan-400 font-medium">Enterprise-grade solutions</span> with 
                24/7 support and 99.9% uptime guarantee.
              </p>
              <div className="flex items-center space-x-4 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-500">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                  <span className="text-gray-500">ISO 27001 Certified</span>
                </div>
              </div>
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white">Solutions</h3>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-all duration-300 text-sm relative group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
            
            {/* Additional links */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="font-medium text-white mb-3">Resources</h4>
              <div className="space-y-2">
                <a href="#docs" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Documentation</a>
                <a href="#api" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">API Reference</a>
                <a href="#support" className="block text-gray-400 hover:text-pink-400 transition-colors text-sm">Support</a>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white">Connect</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group flex items-center space-x-2 p-3 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{social.label}</span>
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                </a>
              ))}
            </div>
            
            {/* Status indicator */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-green-500/30">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Available for projects</span>
              </div>
              <p className="text-gray-400 text-xs">Response within 2 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">ManRow AI Solutions</span>. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
              <a href="#privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a href="#terms" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-600">•</span>
              <a href="#cookies" className="hover:text-pink-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Technical Footer */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="text-center">
              <p className="text-gray-500 text-xs mb-3">
                Built with <span className="text-cyan-400">React</span>, <span className="text-blue-400">TypeScript</span>, 
                <span className="text-purple-400"> Tailwind CSS</span>, and <span className="text-pink-400">Framer Motion</span>
              </p>
              <p className="text-gray-600 text-xs leading-relaxed max-w-3xl mx-auto">
                This platform showcases enterprise-grade AI solutions and professional development capabilities. 
                All demonstrations are based on real implementations and production-ready technologies. 
                Contact us for custom AI automation solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;