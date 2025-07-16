import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Manasi6901',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/manasi-patil6',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      href: 'mailto:manasipatil.6901@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:text-emerald-400',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-[#0a0b2e] to-[#1e1b4b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">MP</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg animate-pulse" />
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold text-white">Manasi Patil</h3>
                <p className="text-gray-400">DevOps Engineer</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Passionate about automating infrastructure and building scalable cloud solutions. 
              Always eager to learn and contribute to innovative DevOps practices.
            </p>
            
            <div className="flex items-center text-gray-400 mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Ravet, Pune, Maharashtra, India</span>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 rounded-xl text-gray-400 ${link.color} transition-all duration-300 hover:bg-white/10 hover:scale-110`}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-flex items-center"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <a
                  href="mailto:manasipatil.6901@gmail.com"
                  className="text-white hover:text-emerald-400 transition-colors duration-300"
                >
                  manasipatil.6901@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/manasi-patil6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                >
                  linkedin.com/in/manasi-patil6
                </a>
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Manasi Patil. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button
                onClick={() => handleNavClick('#hero')}
                className="hover:text-white transition-colors duration-300"
              >
                Back to Top
              </button>
              <span>•</span>
              <span>DevOps Engineer</span>
              <span>•</span>
              <span>Pune, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;