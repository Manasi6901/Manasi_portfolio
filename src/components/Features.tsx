import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Palette, HelpCircle, MessageCircle, User } from 'lucide-react';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState('service');

  const tabItems = [
    { id: 'service', label: 'AI for Service', active: true },
    { id: 'process', label: 'AI for Process', active: false },
    { id: 'work', label: 'AI for Work', active: false },
    { id: 'growth', label: 'AI for Growth', active: false }
  ];

  const features = {
    service: [
      { icon: Shield, label: "Instant Helpful", description: "Replies", color: "from-cyan-400 to-blue-500" },
      { icon: Zap, label: "Personalized", description: "Experiences", color: "from-purple-400 to-violet-500" }, 
      { icon: HelpCircle, label: "Support That", description: "Never Sleeps", color: "from-pink-400 to-rose-500" }
    ],
    process: [
      { icon: Zap, label: "Workflow", description: "Automation", color: "from-green-400 to-emerald-500" },
      { icon: Shield, label: "Quality", description: "Assurance", color: "from-cyan-400 to-blue-500" },
      { icon: Palette, label: "Process", description: "Optimization", color: "from-purple-400 to-violet-500" }
    ],
    work: [
      { icon: MessageCircle, label: "Smart", description: "Collaboration", color: "from-pink-400 to-rose-500" },
      { icon: Zap, label: "Task", description: "Management", color: "from-cyan-400 to-blue-500" },
      { icon: Shield, label: "Project", description: "Tracking", color: "from-green-400 to-emerald-500" }
    ],
    growth: [
      { icon: Zap, label: "Analytics", description: "Insights", color: "from-purple-400 to-violet-500" },
      { icon: Shield, label: "Performance", description: "Metrics", color: "from-cyan-400 to-blue-500" },
      { icon: Palette, label: "Growth", description: "Strategies", color: "from-pink-400 to-rose-500" }
    ]
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background neon effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/8 via-blue-500/8 to-violet-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tab Navigation with neon styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="relative bg-black/40 backdrop-blur-lg rounded-full p-1 border border-cyan-500/30">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-md opacity-50" />
            
            <div className="relative flex">
              {tabItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === item.id
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-full shadow-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  {activeTab === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full blur-md opacity-60" />
                  )}
                </button>
              ))}
            </div>
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
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="block text-white">Always On,</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Always Helpful
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {features[activeTab as keyof typeof features].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className={`relative p-3 bg-gradient-to-r ${item.color} rounded-lg shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {item.label}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Proof Point with neon styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30 group"
            >
              <h4 className="text-white font-semibold mb-2 text-lg">Proof Point:</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our AI for Service platform cuts up to 4X drop in first response time and a 
                25% increase in customer happiness scores — all while saving support costs.
              </p>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 font-medium">
                → Learn more about AI for Service
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl border border-cyan-500/30 overflow-hidden">
              {/* Glassmorphism glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />
              
              <div className="relative p-6">
                {/* Chat Header with neon styling */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-cyan-500/20">
                  <div className="relative w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-5 h-5 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-50" />
                  </div>
                  <div>
                    <div className="text-white font-medium">AI-Powered Chat Bots</div>
                    <div className="text-gray-400 text-sm">Hi, I'm having an issue!</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Chat Messages with neon styling */}
                <div className="space-y-4 mb-6">
                  {/* User message */}
                  <div className="text-right">
                    <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-2xl rounded-tr-md max-w-xs shadow-lg">
                      Hi! I need to clear some store permissions
                    </div>
                  </div>

                  {/* Bot response */}
                  <div className="text-left">
                    <div className="inline-block bg-black/50 backdrop-blur-sm border border-white/20 text-gray-300 px-4 py-3 rounded-2xl rounded-tl-md max-w-xs">
                      Looking for that now! Thank you for waiting!
                    </div>
                  </div>

                  {/* Loading indicator */}
                  <div className="text-left">
                    <div className="inline-block bg-black/50 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-2xl rounded-tl-md">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons with neon styling */}
                <div className="space-y-3">
                  <button className="w-full text-left bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 p-4 rounded-lg border border-white/10 hover:border-cyan-500/30 group">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">Delivery delay (No message in over)</span>
                    </div>
                  </button>
                  
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 text-sm font-medium">
                    Instantly increase through live chat
                  </div>
                  
                  <button className="text-gray-400 text-sm hover:text-white transition-colors hover:bg-white/5 px-3 py-2 rounded-lg">
                    Other Issue
                  </button>
                </div>
              </div>
            </div>

            {/* Floating "Collaboration Tools" highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              <span className="relative z-10">Collaboration Tools</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full blur-md opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;