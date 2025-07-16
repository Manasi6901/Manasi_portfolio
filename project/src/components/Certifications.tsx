import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Automate Linux Potential with GenAI',
      provider: 'Udemy',
      date: 'December 2024',
      description: 'Advanced automation techniques combining Linux system administration with Generative AI applications for enhanced productivity and intelligent automation.',
      skills: ['Linux Administration', 'GenAI Integration', 'Automation', 'System Optimization'],
      color: 'from-blue-500 to-blue-600',
      certificateUrl: 'https://www.udemy.com/certificate/UC-745379f2-6829-4bfa-8658-0587aa835f1c/',
    },
    {
      title: 'Mastering Git & GitHub',
      provider: 'Udemy',
      date: 'January 2025',
      description: 'Comprehensive version control mastery covering advanced Git workflows, GitHub collaboration, and best practices for software development teams.',
      skills: ['Git Workflows', 'GitHub Actions', 'Collaboration', 'Version Control'],
      color: 'from-green-500 to-green-600',
      certificateUrl: 'https://www.udemy.com/certificate/UC-737ce394-4cf6-494b-8726-cd3c86eb2008/',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-background-dark to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-highlight-orange mx-auto rounded-full mb-4" />
          <p className="text-text-gray text-lg max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-background-dark to-[#2a2a2a] rounded-2xl p-8 border border-gray-800 hover:border-highlight-orange transition-all duration-300 hover:shadow-xl hover:shadow-highlight-orange/10"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className={`bg-gradient-to-r ${cert.color} rounded-full p-3 mr-4`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-light group-hover:text-highlight-orange transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-highlight-orange font-semibold">{cert.provider}</p>
                  </div>
                </div>
                <div className="flex items-center text-text-gray text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {cert.date}
                </div>
              </div>

              <p className="text-text-gray mb-6 leading-relaxed">
                {cert.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-highlight-orange mb-3">KEY SKILLS ACQUIRED:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-highlight-orange/20 text-highlight-orange text-xs font-medium rounded-full border border-highlight-orange/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-text-gray text-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse" />
                  Verified Certificate
                </div>
                <button className="flex items-center px-4 py-2 bg-highlight-orange text-text-light text-sm font-medium rounded-lg hover:bg-[#ff6d33] transition-colors duration-200 opacity-60 cursor-not-allowed">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </button>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-highlight-orange/0 to-[#ff6d33]/0 group-hover:from-highlight-orange/5 group-hover:to-[#ff6d33]/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-highlight-orange/10 to-[#ff6d33]/10 rounded-xl p-8 border border-highlight-orange/20">
            <h3 className="text-2xl font-bold text-text-light mb-4">Continuous Learning</h3>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Committed to staying current with emerging technologies and industry best practices. 
              Currently pursuing additional certifications in cloud architecture and AI/ML integration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
