import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Cloud, Code, Database, GitBranch, Monitor, 
  Users, MessageSquare, Clock, Target, Lightbulb, Brain,
  Zap, Shield, Gauge, Workflow
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'DevOps & Automation',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Jenkins', level: 85 },
        { name: 'Ansible', level: 80 },
        { name: 'Terraform', level: 75 },
        { name: 'GitOps', level: 70 },
      ],
      color: 'from-blue-500 to-blue-600',
      description: 'Building robust CI/CD pipelines and infrastructure automation',
    },
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'AWS EC2', level: 85 },
        { name: 'AWS S3', level: 80 },
        { name: 'AWS EKS', level: 75 },
        { name: 'AWS Lambda', level: 70 },
      ],
      color: 'from-emerald-500 to-emerald-600',
      description: 'Scalable cloud infrastructure and serverless solutions',
    },
    {
      title: 'Containers & Orchestration',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Docker Compose', level: 85 },
        { name: 'Helm', level: 70 },
      ],
      color: 'from-purple-500 to-purple-600',
      description: 'Containerization and microservices architecture',
    },
    {
      title: 'Monitoring & Security',
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: 'Prometheus', level: 80 },
        { name: 'Grafana', level: 75 },
        { name: 'ELK Stack', level: 70 },
        { name: 'Security Scanning', level: 65 },
      ],
      color: 'from-orange-500 to-orange-600',
      description: 'Comprehensive monitoring and security practices',
    },
    {
      title: 'Programming & Scripting',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Bash/Shell', level: 90 },
        { name: 'YAML', level: 85 },
        { name: 'Go', level: 60 },
      ],
      color: 'from-red-500 to-red-600',
      description: 'Automation scripts and infrastructure as code',
    },
    {
      title: 'Version Control & Collaboration',
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'GitLab CI', level: 75 },
        { name: 'Argo CD', level: 70 },
      ],
      color: 'from-indigo-500 to-indigo-600',
      description: 'Modern DevOps workflows and team collaboration',
    },
  ];

  const softSkills = [
    {
      title: 'Problem Solving',
      icon: <Lightbulb className="w-6 h-6" />,
      description: 'Analytical thinking and creative solutions for complex infrastructure challenges',
      level: 90,
    },
    {
      title: 'Team Collaboration',
      icon: <Users className="w-6 h-6" />,
      description: 'Effective cross-functional teamwork and knowledge sharing',
      level: 85,
    },
    {
      title: 'Communication',
      icon: <MessageSquare className="w-6 h-6" />,
      description: 'Clear technical documentation and stakeholder communication',
      level: 80,
    },
    {
      title: 'Continuous Learning',
      icon: <Brain className="w-6 h-6" />,
      description: 'Staying updated with emerging technologies and best practices',
      level: 95,
    },
    {
      title: 'Time Management',
      icon: <Clock className="w-6 h-6" />,
      description: 'Efficient project delivery and deadline management',
      level: 85,
    },
    {
      title: 'Leadership',
      icon: <Target className="w-6 h-6" />,
      description: 'Initiative taking and mentoring junior team members',
      level: 75,
    },
  ];

  const achievements = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automation Expert',
      description: 'Reduced deployment time by 80% through CI/CD optimization',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Focused',
      description: 'Implemented security scanning in all pipeline stages',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Performance Optimized',
      description: 'Achieved 99.9% uptime through monitoring and alerting',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Process Innovator',
      description: 'Streamlined workflows using GitOps methodologies',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#1e1b4b] to-[#0a0b2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for modern DevOps practices and cloud-native development.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <p className="text-gray-400 text-sm mb-6">{category.description}</p>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <div className={`inline-flex p-4 bg-gradient-to-r ${achievement.color} rounded-2xl mb-4`}>
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">Professional Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{skill.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{skill.description}</p>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;