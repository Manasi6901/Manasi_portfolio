import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Palette, HelpCircle } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Always On",
      subtitle: "Always Helpful",
      items: [
        { icon: Shield, label: "Instant Helpful", description: "Replies" },
        { icon: Zap, label: "Personalized", description: "Experiences" }, 
        { icon: HelpCircle, label: "Support That", description: "Never Sleeps" }
      ]
    }
  ];

  const tabItems = [
    { id: 'all', label: 'All Service', active: true },
    { id: 'process', label: 'AI for Process', active: false },
    { id: 'work', label: 'AI for Work', active: false },
    { id: 'growth', label: 'AI for Growth', active: false }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
            {tabItems.map((item) => (
              <button
                key={item.id}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  item.active 
                    ? 'bg-white/20 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Feature content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="block text-white">Always On,</span>
                <span className="block text-white">Always Helpful</span>
              </h2>
            </div>

            <div className="space-y-6">
              {features[0].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.label}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Proof Point */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h4 className="text-white font-semibold mb-2">Proof Point:</h4>
              <p className="text-gray-300 text-sm mb-4">
                Our AI for Service platform cuts up to 4X drop in first response time and a 
                25% increase in customer happiness scores — all while saving support costs.
              </p>
              <div className="text-cyan-400 text-sm font-medium">
                → Learn more about AI for Service
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Chat Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              {/* Chat Header */}
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/20">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Chat Support</div>
                  <div className="text-gray-400 text-sm">Hi, I'm having an issue!</div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                {/* User message */}
                <div className="text-right">
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-md max-w-xs">
                    Hi! I need to clear some store permissions
                  </div>
                </div>

                {/* Bot response */}
                <div className="text-left">
                  <div className="inline-block bg-white/10 text-gray-300 px-4 py-2 rounded-2xl rounded-tl-md max-w-xs">
                    Looking for that now! Thank you for waiting!
                  </div>
                </div>

                {/* Loading indicator */}
                <div className="text-left">
                  <div className="inline-block bg-white/10 px-4 py-2 rounded-2xl rounded-tl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="space-y-2">
                  <button className="w-full text-left bg-white/5 hover:bg-white/10 transition-colors p-3 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Delivery delay (No message in over)</span>
                    </div>
                  </button>
                  
                  <div className="text-cyan-400 text-sm">
                    Instantly increase through live chat
                  </div>
                  
                  <button className="text-gray-400 text-sm hover:text-white transition-colors">
                    Other Issue
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;