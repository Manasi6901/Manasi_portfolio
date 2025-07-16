import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Globe, Database, Smartphone } from 'lucide-react';

const Showcase: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack solution with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/api/placeholder/400/250",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/manasi/ecommerce",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "AI Chat Interface",
      description: "Intelligent chat system with real-time responses",
      technologies: ["React", "Socket.io", "OpenAI", "Node.js"],
      image: "/api/placeholder/400/250",
      liveUrl: "https://ai-chat-demo.com",
      githubUrl: "https://github.com/manasi/ai-chat",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Data visualization and business intelligence platform",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      image: "/api/placeholder/400/250",
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/manasi/analytics",
      category: "Data"
    }
  ];

  const capabilities = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern React applications with TypeScript and advanced UI frameworks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Scalable APIs, microservices, and database optimization",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description: "End-to-end application development and deployment",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Experience",
      description: "Responsive design and progressive web applications",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects & Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-cyan-400 opacity-50" />
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
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
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center space-x-2 bg-white/10 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${capability.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <capability.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {capability.title}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;