import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Database, Layers, Play, CheckCircle } from 'lucide-react';

const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState('optimize');

  const capabilities = [
    {
      id: 'optimize',
      title: 'Optimize Your Business',
      subtitle: 'with AI-Powered',
      description: 'Take your business to the next level with ManRow built-in AI solutions for risk and profit management; automatic decision-making and optimized growth strategies.',
      features: [
        'Powerful AI Agent Framework',
        'No-Code Priority First', 
        'Technology Stack Integration'
      ]
    }
  ];

  const codeExample = `// AI-Powered Development Workflow
const developmentPipeline = {
  planning: {
    requirements: "Analyze project scope",
    architecture: "Design scalable solution",
    timeline: "Estimate delivery milestones"
  },
  
  development: {
    frontend: "React + TypeScript",
    backend: "Node.js + Express",
    database: "PostgreSQL/MongoDB",
    deployment: "Docker + AWS/Vercel"
  },
  
  optimization: {
    performance: "Code splitting & lazy loading",
    seo: "Meta tags & structured data", 
    security: "Authentication & authorization",
    monitoring: "Error tracking & analytics"
  },
  
  delivery: {
    testing: "Unit + Integration tests",
    ci_cd: "Automated deployment pipeline",
    documentation: "API docs & user guides",
    support: "24/7 maintenance & updates"
  }
};

// Execute intelligent workflow
await executeSmartDevelopment(requirements);`;

  const terminalCommands = [
    { command: '$ npm run build', status: 'completed', time: '2.3s' },
    { command: '$ npm run test', status: 'completed', time: '1.8s' },
    { command: '$ npm run deploy', status: 'running', time: '...' },
    { command: '✓ Build optimized', status: 'success', time: '0.5s' },
    { command: '✓ Tests passed (47/47)', status: 'success', time: '1.2s' },
    { command: '✓ Deployed to production', status: 'success', time: '3.1s' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                {capabilities[0].title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {capabilities[0].subtitle}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg leading-relaxed mb-8"
              >
                {capabilities[0].description}
              </motion.p>
            </div>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {capabilities[0].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Code Interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Code Editor */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">development-workflow.js</span>
                  </div>
                </div>
                <Play className="w-4 h-4 text-green-400" />
              </div>

              {/* Code Content */}
              <div className="p-4 text-sm font-mono">
                <pre className="text-gray-300 leading-relaxed">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </div>

            {/* Terminal */}
            <div className="bg-black/60 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <Terminal className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400 text-sm">Terminal</span>
                </div>
                <div className="text-green-400 text-xs">Active</div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 space-y-2 text-sm font-mono">
                {terminalCommands.map((cmd, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <span className={`${
                      cmd.status === 'success' ? 'text-green-400' :
                      cmd.status === 'running' ? 'text-yellow-400' :
                      'text-gray-300'
                    }`}>
                      {cmd.command}
                    </span>
                    <span className="text-gray-500 text-xs">{cmd.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">98%</div>
                    <div className="text-gray-400 text-xs">Uptime</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Layers className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">2.3s</div>
                    <div className="text-gray-400 text-xs">Load Time</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;