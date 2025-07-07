import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Cloud, Code, Database, 
  GitBranch, Monitor, Users, MessageSquare,
  Clock, Target, Lightbulb, Brain
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'DevOps Tools',
      icon: <Server className="w-6 h-6" />,
      skills: ['Jenkins', 'Git', 'GitHub', 'Ansible', 'Terraform', 'Argo CD'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS EC2', 'AWS S3', 'AWS IAM', 'AWS EKS'],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Programming & Scripting',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'YAML', 'Bash', 'Shell Script'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Containers & Monitoring',
      icon: <Database className="w-6 h-6" />,
      skills: ['Docker', 'Docker Compose', 'Kubernetes', 'Prometheus', 'Grafana'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Concepts & Practices',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['CI/CD', 'SDLC', 'GenAI applications', 'Infrastructure as Code'],
      color: 'from-red-500 to-red-600',
    },
  ];

  const softSkills = [
    {
      title: 'Problem Solving',
      icon: <Lightbulb className="w-5 h-5" />,
      description: 'Analytical thinking and creative solutions',
    },
    {
      title: 'Collaboration',
      icon: <Users className="w-5 h-5" />,
      description: 'Effective teamwork and cross-functional coordination',
    },
    {
      title: 'Communication',
      icon: <MessageSquare className="w-5 h-5" />,
      description: 'Clear technical documentation and presentation',
    },
    {
      title: 'Time Management',
      icon: <Clock className="w-5 h-5" />,
      description: 'Efficient project delivery and prioritization',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-[#fa5814] mx-auto rounded-full mb-4" />
          <p className="text-[#cbd5e1] text-lg max-w-3xl mx-auto">
            Comprehensive skill set in modern DevOps practices, cloud technologies, and automation tools.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-6 border border-gray-800 hover:border-[#fa5814] transition-all duration-300 hover:shadow-xl hover:shadow-[#fa5814]/10"
              >
                <div className="flex items-center mb-4">
                  <div className={`bg-gradient-to-r ${category.color} rounded-full p-3 mr-4`}>
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white">{category.title}</h4>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-2 bg-[#0f0f0f] rounded-lg"
                    >
                      <span className="text-[#cbd5e1] font-medium">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 4 ? 'bg-[#fa5814]' : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-gray-800 hover:border-[#fa5814] transition-all duration-300 text-center group"
              >
                <div className="bg-[#fa5814] rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-[#ff6d33] transition-colors duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{skill.title}</h4>
                <p className="text-[#cbd5e1] text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;