import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Portfolio', href: '#showcase' },
    { label: 'Projects', href: '#projects' },
    { label: 'About Me', href: '#stats' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/manasi-patil6', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Manasi6901', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/manasi', label: 'Twitter' },
    { icon: Mail, href: 'mailto:manasipatil.6901@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="w-full py-12 px-6 border-t border-white/10 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ManRow
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              ManRow combines innovative development practices with AI-powered solutions to 
              deliver exceptional results. Transform your ideas into scalable, production-ready applications.
            </p>
            <p className="text-gray-500 text-xs">
              Professional development services with a focus on quality, performance, and user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
            <div className="text-gray-500 text-xs">
              <p>Available for opportunities</p>
              <p>Response within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Manasi Patil. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Additional Footer Info */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <div className="text-center text-gray-500 text-xs">
              <p className="mb-2">
                Built with React, TypeScript, Tailwind CSS, and Framer Motion. 
                Deployed on Netlify with continuous integration.
              </p>
              <p>
                This portfolio showcases real projects and professional capabilities. 
                All code examples and project demonstrations are based on actual implementations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;