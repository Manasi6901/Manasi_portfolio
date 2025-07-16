import React from 'react';
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Portfolio', href: '#profile' },
    { label: 'Projects', href: '#projects' },
    { label: 'About Me', href: '#experience' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/manasi', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/manasi', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/manasi', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/@manasi', label: 'YouTube' }
  ];

  return (
    <footer className="w-full py-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">Manasi Portfolio</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Passionate full-stack developer creating innovative web solutions. 
              Always eager to take on new challenges and deliver exceptional results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-wrap gap-4">
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

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
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

            {/* Disclaimer */}
            <p className="text-gray-500 text-xs max-w-md text-center md:text-right">
              This portfolio showcases personal projects and professional experience. 
              Past performance doesn't guarantee future results. 
              Contact me for professional inquiries and collaboration opportunities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;