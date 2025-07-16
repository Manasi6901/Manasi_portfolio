import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Server, Database, Play, Star, GitBranch } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CI/CD Pipeline Project',
      shortDescription: 'Complete CI/CD pipeline with Jenkins, Ansible, and Docker',
      description: 'End-to-end CI/CD pipeline implementation featuring manual Jenkins installation, Ansible automation, and Docker containerization. Built without DockerHub dependency, showcasing full pipeline workflow from code deployment to Linux VM.',
      techStack: ['Jenkins', 'Ansible', 'Docker', 'Linux VM', 'Bash'],
      features: [
        'Manual Jenkins installation and configuration',
        'Ansible playbook automation for deployment',
        'Docker container management and orchestration',
        'Complete pipeline workflow implementation',
        'Linux VM deployment target'
      ],
      icon: <Server className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      githubUrl: 'https://github.com/Manasi6901/ci-cd-pipeline-project',
      status: 'Completed',
      metrics: {
        commits: '45+',
        deployments: '20+',
        uptime: '99%'
      }
    },
    {
      title: 'Full DevOps CI/CD Workflow',
      shortDescription: 'Advanced DevOps pipeline with Kubernetes orchestration',
      description: 'Sophisticated DevOps pipeline integrating Jenkins, Ansible, Docker, and Kubernetes. Features manual installation approach with comprehensive multi-stage pipeline and Kubernetes Service implementation for scalable cloud-native deployments.',
      techStack: ['Jenkins', 'Ansible', 'Docker', 'Kubernetes', 'YAML', 'AWS'],
      features: [
        'Kubernetes Service implementation',
        'Multi-stage pipeline configuration',
        'Container orchestration at scale',
        'Automated testing and deployment',
        'Infrastructure as Code practices'
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-emerald-500 to-emerald-600',
      githubUrl: 'https://github.com/Manasi6901/myapp',
      status: 'Completed',
      metrics: {
        services: '5+',
        environments: '3',
        reliability: '99.5%'
      }
    },
    {
      title: 'Flask + MySQL on Kubernetes',
      shortDescription: 'Containerized web application with database persistence',
      description: 'Production-ready Flask application with MySQL database deployed on Kubernetes cluster. Features custom Docker images, comprehensive YAML configurations, and NodePort service implementation on AWS EC2 with Minikube.',
      techStack: ['Flask', 'MySQL', 'Kubernetes', 'Docker', 'AWS EC2', 'Minikube', 'Python'],
      features: [
        'Custom Docker image creation and optimization',
        'Kubernetes YAML manifests and deployments',
        'NodePort service configuration',
        'Persistent MySQL database storage',
        'AWS EC2 infrastructure setup'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      githubUrl: 'https://github.com/Manasi6901/flask-mysql-k8s',
      status: 'Completed',
      metrics: {
        pods: '10+',
        requests: '1K+',
        storage: '5GB'
      }
    },
  ];

  const stats = [
    { number: '10+', label: 'Repositories', description: 'Open source projects' },
    { number: '50+', label: 'Commits', description: 'This month' },
    { number: '5+', label: 'Technologies', description: 'Mastered' },
    { number: '99%', label: 'Uptime', description: 'Average' },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0a0b2e] to-[#1e1b4b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30 mb-4">
            Portfolio Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world DevOps solutions that demonstrate expertise in modern infrastructure automation and cloud-native technologies.
          </p>
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 bg-gradient-to-r ${project.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400">{project.shortDescription}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-300 rounded-full text-sm border border-gray-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full hover:from-gray-600 hover:to-gray-500 transition-all duration-300 group/btn"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <button className="inline-flex items-center px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300">
                      <Play className="w-4 h-4 mr-2" />
                      Live Demo
                    </button>
                  </div>
                </div>

                {/* Project Details Sidebar */}
                <div className="space-y-6">
                  {/* Key Features */}
                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10">
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Metrics */}
                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10">
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <GitBranch className="w-4 h-4 mr-2 text-blue-400" />
                      Project Metrics
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                        <div key={metricIndex} className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm capitalize">{key}</span>
                          <span className="text-white font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Explore More Projects</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for more open-source contributions and experimental projects in DevOps, cloud computing, and automation.
            </p>
            <a
              href="https://github.com/Manasi6901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
