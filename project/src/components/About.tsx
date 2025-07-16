import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Calendar, MapPin, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '68%', label: 'MCA Score', description: 'Master\'s Degree' },
    { number: '77%', label: 'BCA Score', description: 'Bachelor\'s Degree' },
    { number: '2024', label: 'Graduate', description: 'Fresh Talent' },
    { number: '5+', label: 'Projects', description: 'Completed' },
  ];

  const educationData = [
    {
      degree: 'Master of Computer Application (MCA)',
      percentage: '68%',
      institution: 'Yashwantrao Chavan School of Rural Development, Shivaji University',
      duration: '2022–2024',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600',
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      percentage: '77%',
      institution: 'Kamala College, Shivaji University',
      duration: '2019–2022',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Native' },
    { name: 'Marathi', level: 'Native' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0a0b2e] to-[#1e1b4b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate DevOps engineer dedicated to building efficient, scalable, and automated infrastructure solutions.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Career Objective */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Career Objective</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Seeking an entry-level position in DevOps Engineering where I can apply my technical skills in cloud computing, 
                automation, and infrastructure management to contribute to organizational growth while advancing my professional development.
              </p>
              
              {/* Languages */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-400" />
                  Languages
                </h4>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-full border border-blue-500/30 text-sm">
                      {lang.name} - {lang.level}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span>Based in Ravet, Pune, Maharashtra</span>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-r ${edu.color} rounded-xl flex-shrink-0`}>
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                      <p className="text-gray-300 mb-2">{edu.institution}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.duration}
                        </div>
                        <div className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                          {edu.percentage}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
