import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Database, Layers, Play, CheckCircle } from 'lucide-react';

const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState('optimize');

  const capabilities = [
    {
      id: 'optimize',
      title: 'Optimize Your Business',
      subtitle: 'with AI-Powered Solutions',
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
    { command: '$ npm run build', status: 'completed', time: '2.3s', color: 'text-green-400' },
    { command: '$ npm run test', status: 'completed', time: '1.8s', color: 'text-green-400' },
    { command: '$ npm run deploy', status: 'running', time: '...', color: 'text-cyan-400' },
    { command: '✓ Build optimized', status: 'success', time: '0.5s', color: 'text-green-400' },
    { command: '✓ Tests passed (47/47)', status: 'success', time: '1.2s', color: 'text-green-400' },
    { command: '✓ Deployed to production', status: 'success', time: '3.1s', color: 'text-purple-400' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background neon effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-green-500/8 via-blue-500/8 to-violet-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
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

            {/* Feature List with enhanced neon styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {capabilities[0].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="relative group flex items-center space-x-4 p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="relative">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <div className="absolute inset-0 text-green-400 blur-sm opacity-50 group-hover:opacity-75 transition-opacity">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{feature}</span>
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button className="relative group bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-full blur-md opacity-50 animate-pulse" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced Code Interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Code Editor with intense neon styling */}
            <div className="relative bg-black/60 backdrop-blur-lg rounded-2xl border border-cyan-500/30 overflow-hidden group">
              {/* Intense glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              {/* Editor Header */}
              <div className="relative flex items-center justify-between px-4 py-3 bg-black/40 border-b border-cyan-500/20">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm font-medium">development-workflow.js</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <Play className="w-4 h-4 text-green-400" />
                </div>
              </div>

              {/* Code Content with syntax highlighting effect */}
              <div className="relative p-4 text-sm font-mono bg-black/20">
                <pre className="text-gray-300 leading-relaxed">
                  <code className="language-javascript">
                    <span className="text-purple-400">// AI-Powered Development Workflow</span>
                    {'\n'}<span className="text-cyan-400">const</span> <span className="text-white">developmentPipeline</span> = {'{'}
                    {'\n  '}<span className="text-pink-400">planning</span>: {'{'}
                    {'\n    '}<span className="text-green-400">requirements</span>: <span className="text-yellow-300">"Analyze project scope"</span>,
                    {'\n    '}<span className="text-green-400">architecture</span>: <span className="text-yellow-300">"Design scalable solution"</span>,
                    {'\n    '}<span className="text-green-400">timeline</span>: <span className="text-yellow-300">"Estimate delivery milestones"</span>
                    {'\n  '}{'},'}
                    {'\n'}
                    {'\n  '}<span className="text-pink-400">development</span>: {'{'}
                    {'\n    '}<span className="text-green-400">frontend</span>: <span className="text-yellow-300">"React + TypeScript"</span>,
                    {'\n    '}<span className="text-green-400">backend</span>: <span className="text-yellow-300">"Node.js + Express"</span>,
                    {'\n    '}<span className="text-green-400">database</span>: <span className="text-yellow-300">"PostgreSQL/MongoDB"</span>
                    {'\n  '}{'},'}
                    {'\n'}
                    {'\n  '}<span className="text-pink-400">optimization</span>: {'{'}
                    {'\n    '}<span className="text-green-400">performance</span>: <span className="text-yellow-300">"Code splitting & lazy loading"</span>,
                    {'\n    '}<span className="text-green-400">security</span>: <span className="text-yellow-300">"Authentication & authorization"</span>
                    {'\n  '}{'}'} 
                    {'\n'}{'}'}
                    {'\n'}
                    {'\n'}<span className="text-purple-400">// Execute intelligent workflow</span>
                    {'\n'}<span className="text-cyan-400">await</span> <span className="text-blue-400">executeSmartDevelopment</span>(requirements);
                  </code>
                </pre>
              </div>
            </div>

            {/* Terminal with enhanced neon effects */}
            <div className="relative bg-black/80 backdrop-blur-lg rounded-2xl border border-green-500/30 overflow-hidden group">
              {/* Terminal glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-green-500/10 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              {/* Terminal Header */}
              <div className="relative flex items-center justify-between px-4 py-3 bg-black/60 border-b border-green-500/20">
                <div className="flex items-center space-x-3">
                  <Terminal className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300 text-sm font-medium">Terminal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="text-green-400 text-xs font-medium">Active</div>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="relative p-4 space-y-2 text-sm font-mono bg-black/40">
                {terminalCommands.map((cmd, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between group"
                  >
                    <span className={`${cmd.color} group-hover:brightness-125 transition-all`}>
                      {cmd.command}
                    </span>
                    <span className="text-gray-500 text-xs">{cmd.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative bg-black/30 backdrop-blur-lg rounded-xl p-4 border border-green-500/30 group">
                <div className="flex items-center space-x-3">
                  <div className="relative w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Database className="w-4 h-4 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">98%</div>
                    <div className="text-gray-400 text-xs">Uptime</div>
                  </div>
                </div>
                {/* Card glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity" />
              </div>

              <div className="relative bg-black/30 backdrop-blur-lg rounded-xl p-4 border border-cyan-500/30 group">
                <div className="flex items-center space-x-3">
                  <div className="relative w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Layers className="w-4 h-4 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">2.3s</div>
                    <div className="text-gray-400 text-xs">Load Time</div>
                  </div>
                </div>
                {/* Card glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;