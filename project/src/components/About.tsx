import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Globe, Target } from 'lucide-react';

const About: React.FC = () => {
  const educationData = [
    {
      degree: 'MCA',
      percentage: '68%',
      institution: 'YCSRD',
      duration: '2022–2024',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      degree: 'BCA',
      percentage: '77%',
      institution: 'Kamala College',
      duration: '2019–2022',
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const languages = ['English', 'Hindi', 'Marathi'];

  return (
    <section id="about" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-[#fa5814] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[#fa5814] mr-3" />
                <h3 className="text-2xl font-bold text-white">Career Objective</h3>
              </div>
              <p className="text-[#cbd5e1] text-lg leading-relaxed mb-8">
                To apply automation and cloud skills to solve real-world DevOps challenges while continuously learning and innovating in the field of cloud-native technologies and AI-driven automation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-[#fa5814] mr-3" />
                  <div>
                    <h4 className="text-white font-semibold">Passion</h4>
                    <p className="text-[#cbd5e1] text-sm">DevOps, Cloud, Linux, GenAI</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-[#fa5814] mr-3" />
                  <div>
                    <h4 className="text-white font-semibold">Languages</h4>
                    <p className="text-[#cbd5e1] text-sm">{languages.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-gray-800 hover:border-[#fa5814] transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="bg-[#fa5814] rounded-full p-3 mr-4">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                        <span className="text-[#fa5814] font-semibold text-lg">{edu.percentage}</span>
                      </div>
                      <div className="flex justify-between items-center text-[#cbd5e1]">
                        <span>{edu.institution}</span>
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-[#fa5814]/10 to-[#ff6d33]/10 rounded-xl border border-[#fa5814]/20"
            >
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-[#fa5814] mr-3" />
                <h4 className="text-lg font-semibold text-white">Hobbies & Interests</h4>
              </div>
              <p className="text-[#cbd5e1]">
                When I'm not architecting cloud solutions or automating deployments, you'll find me tending to my garden - a peaceful pursuit that teaches patience and nurtures growth, much like DevOps practices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;