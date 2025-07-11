import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#fa5814] to-[#ff6d33] p-1">
              <div className="w-full h-full rounded-full bg-[#0f0f0f] flex items-center justify-center">
                <span className="text-lg font-bold text-[#fa5814]">MP</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Manasi Patil</h3>
          <p className="text-[#fa5814] font-semibold mb-4">DevOps & Cloud Engineer</p>
          <p className="text-[#cbd5e1] mb-6">Ravet, Pune</p>

          <div className="flex items-center justify-center mb-8 text-[#cbd5e1]">
            <span className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-2 text-[#fa5814] fill-current" /> and 
              <Code className="w-4 h-4 mx-2 text-[#fa5814]" /> powered by 
              <Coffee className="w-4 h-4 mx-2 text-[#fa5814]" />
            </span>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-[#cbd5e1] text-sm">
              © {currentYear} Manasi Patil - DevOps & Cloud Engineer | All rights reserved
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Automating cloud-native DevOps solutions with precision and innovation
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;