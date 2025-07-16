import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Code, Award } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      number: "50+",
      label: "Projects Delivered",
      description: "Successful projects across various industries",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "2020",
      label: "Started Journey",
      description: "Years of professional development experience",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "100+",
      label: "Technologies Mastered",
      description: "Modern frameworks and tools in stack",
      icon: Award,
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "24/7",
      label: "Availability",
      description: "Dedicated support and maintenance",
      icon: Users,
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    "AI in Our Capabilities",
    "Powerful AI Agent Framework",
    "No-Code Priority First",
    "Technology Stack Integration",
    "Automated Testing"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="block text-gray-400">Accelerate productivity and drive</span>
                <span className="block text-gray-400">innovation with powerful</span>
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Development Solutions
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-white font-medium"
              >
                The future is happening now
              </motion.p>
            </div>

            {/* Achievement List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-300">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take your business to the next level with MoonRow built-in AI solutions for risk and 
              profit management; automatic decision-making and optimized growth strategies.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;