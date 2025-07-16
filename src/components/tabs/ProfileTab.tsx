import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, Download } from 'lucide-react';

const ProfileTab: React.FC = () => {
  const handleResumeDownload = () => {
    // Replace with actual resume URL
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Manasi_Patil_Resume.pdf';
    link.click();
  };

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
          MP
        </div>
        <h2 className="text-3xl font-bold mb-2">Manasi Patil</h2>
        <p className="text-xl text-orange-400 mb-4">Full Stack Developer</p>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Passionate software developer with expertise in modern web technologies. 
          I love creating innovative solutions and building user-friendly applications 
          that make a difference.
        </p>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <MapPin className="w-5 h-5 text-orange-400" />
            <span className="font-medium">Location</span>
          </div>
          <p className="text-gray-300">Maharashtra, India</p>
        </motion.div>

        <motion.div 
          className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <Calendar className="w-5 h-5 text-orange-400" />
            <span className="font-medium">Experience</span>
          </div>
          <p className="text-gray-300">3+ Years</p>
        </motion.div>

        <motion.div 
          className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <Mail className="w-5 h-5 text-orange-400" />
            <span className="font-medium">Email</span>
          </div>
          <p className="text-gray-300">manasi.dev@email.com</p>
        </motion.div>

        <motion.div 
          className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <Phone className="w-5 h-5 text-orange-400" />
            <span className="font-medium">Phone</span>
          </div>
          <p className="text-gray-300">+91 XXX XXX XXXX</p>
        </motion.div>
      </div>

      {/* Download Resume Button */}
      <div className="text-center">
        <motion.button
          onClick={handleResumeDownload}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-medium flex items-center space-x-2 mx-auto hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5" />
          <span>Download Resume</span>
        </motion.button>
      </div>
    </div>
  );
};

export default ProfileTab;