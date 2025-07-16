import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Globe, Database, Smartphone, Zap, Brain, Shield } from 'lucide-react';

const Showcase: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Chat Bots",
      description: "Intelligent conversational AI with real-time responses",
      technologies: ["React", "OpenAI", "Node.js", "Socket.io"],
      liveUrl: "https://ai-chat-demo.com",
      githubUrl: "https://github.com/manasi/ai-chat",
      category: "AI/ML",
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 2,
      title: "High-Performance Solutions",
      description: "Scalable microservices and optimized workflows",
      technologies: ["React", "Node.js", "Docker", "Kubernetes"],
      liveUrl: "https://performance-demo.com",
      githubUrl: "https://github.com/manasi/performance",
      category: "Performance",
      color: "from-purple-400 to-violet-500"
    },
    {
      id: 3,
      title: "Global Customization",
      description: "Multi-language, multi-region platform solutions",
      technologies: ["React", "i18n", "GraphQL", "AWS"],
      liveUrl: "https://global-demo.com",
      githubUrl: "https://github.com/manasi/global",
      category: "Global",
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 4,
      title: "Data Integration",
      description: "Advanced analytics and business intelligence",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://data-demo.com",
      githubUrl: "https://github.com/manasi/data",
      category: "Data",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Chat Bots",
      description: "Intelligent automation for customer service",
      color: "from-cyan-400 to-blue-500",
      highlighted: false
    },
    {
      icon: Zap,
      title: "High-Performance Solutions", 
      description: "Optimized for speed and efficiency",
      color: "from-purple-400 to-violet-500",
      highlighted: false
    },
    {
      icon: Globe,
      title: "Global Customization",
      description: "Localized experiences worldwide",
      color: "from-pink-400 to-rose-500",
      highlighted: false
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless data flow and analytics",
      color: "from-green-400 to-emerald-500",
      highlighted: false
    },
    {
      icon: Shield,
      title: "Collaboration Tools",
      description: "Team productivity and communication",
      color: "from-orange-400 to-red-500",
      highlighted: true // This one will be highlighted
    },
    {
      icon: Code,
      title: "Automated Testing",
      description: "Quality assurance and reliability",
      color: "from-violet-400 to-purple-500",
      highlighted: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background neon effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-green-500/8 via-blue-500/8 to-violet-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge AI solutions and professional development services
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Left side - Featured Projects */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Recent Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  {/* Project Header */}
                  <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden p-4`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex items-center justify-between h-full">
                      <div>
                        <div className="text-xs font-medium text-white/80 mb-1">{project.category}</div>
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-white/80">Live</div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-2 rounded-lg text-xs font-medium hover:shadow-lg transition-all"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 flex items-center justify-center space-x-2 bg-white/10 text-gray-300 px-3 py-2 rounded-lg text-xs font-medium hover:bg-white/20 transition-all"
                      >
                        <Github className="w-3 h-3" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity`} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Grid/Tile Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Core Capabilities</h3>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group p-6 rounded-2xl border transition-all duration-300 ${
                    feature.highlighted 
                      ? 'bg-black/40 border-cyan-500/50 shadow-lg shadow-cyan-500/25' 
                      : 'bg-black/20 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`} />
                  </div>

                  {/* Content */}
                  <h4 className={`font-semibold mb-2 ${feature.highlighted ? 'text-white' : 'text-gray-300'}`}>
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlight overlay for Collaboration Tools */}
                  {feature.highlighted && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-md" />
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    </>
                  )}

                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                </motion.div>
              ))}
            </div>

            {/* Collaboration Tools Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 p-[1px] rounded-2xl"
            >
              <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">Collaboration Tools</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Enhanced team productivity with AI-powered collaboration features
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                  Learn More
                </button>
              </div>
              {/* Intense glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-2xl blur-xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;