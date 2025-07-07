import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Server, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CI/CD Pipeline Project',
      description: 'Complete CI/CD pipeline implementation with Jenkins, Ansible, and Docker. Manual setup without DockerHub, featuring full pipeline flow from code pull to deployment on Linux VM.',
      techStack: ['Jenkins', 'Ansible', 'Docker', 'Linux VM'],
      features: [
        'Manual Jenkins installation and configuration',
        'Ansible playbook automation',
        'Docker container management',
        'Full deployment pipeline workflow'
      ],
      icon: <Server className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Full DevOps CI/CD Workflow',
      description: 'Advanced DevOps pipeline integrating Jenkins, Ansible, Docker, and Kubernetes. Manual installation with comprehensive pipeline flow using Kubernetes Service for scalable deployments.',
      techStack: ['Jenkins', 'Ansible', 'Docker', 'Kubernetes'],
      features: [
        'Kubernetes Service implementation',
        'Multi-stage pipeline configuration',
        'Container orchestration',
        'Automated testing and deployment'
      ],
      icon: <Code className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Flask + MySQL on Kubernetes (AWS EC2)',
      description: 'Containerized Flask application with MySQL database deployed on Kubernetes cluster. Custom Docker images and YAML configurations with NodePort service on AWS EC2.',
      techStack: ['Flask', 'MySQL', 'Kubernetes', 'Docker', 'AWS EC2', 'Minikube'],
      features: [
        'Custom Docker image creation',
        'Kubernetes YAML manifests',
        'NodePort service configuration',
        'Database persistence with MySQL'
      ],
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-[#fa5814] mx-auto rounded-full mb-4" />
          <p className="text-[#cbd5e1] text-lg max-w-3xl mx-auto">
            Explore my DevOps and Cloud engineering projects showcasing automation, containerization, and infrastructure as code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-6 border border-gray-800 hover:border-[#fa5814] transition-all duration-300 hover:shadow-xl hover:shadow-[#fa5814]/10"
            >
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-r ${project.color} rounded-full p-3 mr-4`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#fa5814] transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              <p className="text-[#cbd5e1] mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#fa5814] mb-2">KEY FEATURES:</h4>
                <ul className="text-sm text-[#cbd5e1] space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-[#fa5814] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#fa5814] mb-2">TECH STACK:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#fa5814]/20 text-[#fa5814] text-xs font-medium rounded-full border border-[#fa5814]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-auto">
                <button className="flex items-center px-4 py-2 bg-[#fa5814] text-white text-sm font-medium rounded-lg hover:bg-[#ff6d33] transition-colors duration-200 opacity-60 cursor-not-allowed">
                  <Github className="w-4 h-4 mr-2" />
                  Private Repo
                </button>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#fa5814]/0 to-[#ff6d33]/0 group-hover:from-[#fa5814]/5 group-hover:to-[#ff6d33]/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;