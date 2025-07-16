import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle, Star, TrendingUp } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Automate Linux Potential with GenAI',
      provider: 'Udemy',
      date: 'December 2024',
      description: 'Advanced automation techniques combining Linux system administration with Generative AI applications for enhanced productivity and intelligent automation workflows.',
      skills: ['Linux Administration', 'GenAI Integration', 'Automation Scripts', 'System Optimization'],
      color: 'from-blue-500 to-blue-600',
      certificateUrl: 'https://www.udemy.com/certificate/UC-745379f2-6829-4bfa-8658-0587aa835f1c/',
      level: 'Advanced',
      duration: '40 hours',
      rating: 4.8,
    },
    {
      title: 'Mastering Git & GitHub',
      provider: 'Udemy',
      date: 'January 2025',
      description: 'Comprehensive version control mastery covering advanced Git workflows, GitHub collaboration, and best practices for software development teams and DevOps processes.',
      skills: ['Git Workflows', 'GitHub Actions', 'Team Collaboration', 'Version Control'],
      color: 'from-emerald-500 to-emerald-600',
      certificateUrl: 'https://www.udemy.com/certificate/UC-737ce394-4cf6-494b-8726-cd3c86eb2008/',
      level: 'Intermediate',
      duration: '25 hours',
      rating: 4.9,
    },
  ];

  const learningStats = [
    { number: '65+', label: 'Learning Hours', description: 'This quarter' },
    { number: '4.8', label: 'Average Rating', description: 'Course performance' },
    { number: '2', label: 'Certifications', description: 'Recently earned' },
    { number: '100%', label: 'Completion Rate', description: 'Course success' },
  ];

  const upcomingGoals = [
    {
      title: 'AWS Solutions Architect',
      provider: 'Amazon Web Services',
      target: 'Q2 2025',
      priority: 'High',
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: 'Certified Kubernetes Administrator',
      provider: 'Cloud Native Computing Foundation',
      target: 'Q3 2025',
      priority: 'High',
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: 'Terraform Associate',
      provider: 'HashiCorp',
      target: 'Q4 2025',
      priority: 'Medium',
      icon: <Award className="w-5 h-5" />,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium border border-amber-500/30 mb-4">
            Continuous Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications & Growth</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Committed to continuous learning and professional development in cutting-edge technologies and industry best practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {learningStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-8"
          >
            Recent Achievements
          </motion.h3>
          
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 bg-gradient-to-r ${cert.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">{cert.title}</h4>
                          <p className="text-gray-400">{cert.provider}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                          <CheckCircle className="w-3 h-3 inline mr-1" />
                          Completed
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{cert.description}</p>

                    <div>
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-400" />
                        Skills Gained
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        View Certificate
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h5 className="text-white font-semibold mb-4 flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                        Certificate Details
                      </h5>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Date Earned</span>
                          <span className="text-white font-medium">{cert.date}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Level</span>
                          <span className="text-white font-medium">{cert.level}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Duration</span>
                          <span className="text-white font-medium">{cert.duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Rating</span>
                          <div className="flex items-center">
                            <span className="text-white font-medium mr-1">{cert.rating}</span>
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8 flex items-center justify-center">
            <TrendingUp className="w-8 h-8 mr-3 text-blue-400" />
            Learning Roadmap 2025
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex-shrink-0">
                    {goal.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{goal.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{goal.provider}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Target: {goal.target}</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        goal.priority === 'High' 
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {goal.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Learning Never Stops</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Passionate about staying current with emerging technologies and industry best practices. Always eager to learn and apply new skills to real-world challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                Continuous Learner
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full">
                <Star className="w-4 h-4 mr-2" />
                Growth Mindset
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
