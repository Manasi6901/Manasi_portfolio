import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Code, Award, Star } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      number: "400+",
      label: "Enterprises Served",
      description: "Global companies trust our solutions",
      icon: Users,
      color: "from-cyan-400 to-blue-500"
    },
    {
      number: "Since 2015",
      label: "Years of Excellence",
      description: "Continuous innovation and growth",
      icon: Award,
      color: "from-purple-400 to-violet-500"
    },
    {
      number: "1000+",
      label: "Team Members",
      description: "Expert developers and AI specialists",
      icon: Code,
      color: "from-pink-400 to-rose-500"
    }
  ];

  const achievements = [
    "AI in Our Capabilities",
    "Powerful AI Agent Framework",
    "No-Code Priority First",
    "Technology Stack Integration",
    "Automated Testing & Deployment"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background neon effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-green-500/8 via-blue-500/8 to-violet-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Statistics Section - Horizontal layout with large numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gray-400">Accelerate productivity and drive</span>
            <br />
            <span className="text-gray-400">innovation with powerful</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white font-medium mb-16"
          >
            The future is happening now
          </motion.p>

          {/* Horizontal Statistics Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Glowing separator lines */}
                {index < stats.length - 1 && (
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-0.5 h-24 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent hidden md:block" />
                )}
                
                <div className="text-center">
                  {/* Large Number */}
                  <motion.div
                    className="relative mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl shadow-lg mb-4 group-hover:shadow-2xl transition-shadow`}>
                      <stat.icon className="w-8 h-8 text-white" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`} />
                    </div>
                    
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    
                    {/* Glow effect under number */}
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r ${stat.color} blur-sm opacity-50 group-hover:opacity-75 transition-opacity`} />
                  </motion.div>
                  
                  {/* Label */}
                  <div className="text-lg font-medium text-gray-300 mb-2">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Achievement List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievement List with neon styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Core Capabilities</h3>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{achievement}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <div className="relative bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 group">
              <div className="text-center">
                <div className="flex justify-center items-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Industry Leading</h3>
                <p className="text-gray-300 mb-4">
                  Trusted by Fortune 500 companies worldwide for mission-critical AI implementations
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">98%</div>
                    <div className="text-sm text-gray-400">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </div>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>

            {/* Security Badge */}
            <div className="relative bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 group">
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur-md opacity-50" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">SOC 2 Compliant</h4>
                  <p className="text-gray-400 text-sm">Enterprise-grade security standards</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section with intense neon styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative bg-black/30 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-cyan-500/30 group">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Transform</span> Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies using our AI solutions to automate processes, 
              boost productivity, and drive unprecedented growth.
            </p>
            <button className="relative group bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-full blur-md opacity-50 animate-pulse" />
            </button>
            
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;