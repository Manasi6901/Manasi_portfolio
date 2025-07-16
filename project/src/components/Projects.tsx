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
      githubUrl: 'https://github.com/Manasi6901/ci-cd-pipeline-project'
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
      githubUrl: 'https://github.com/Manasi6901/myapp'
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
      githubUrl: 'https://github.com/Manasi6901/flask-mysql-k8s'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">Projects</h2>
          <div className="w-24 h-1 bg-highlight-orange mx-auto rounded-full mb-4" />
          <p className="text-text-gray text-lg max-w-3xl mx-auto">
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
              className="group relative bg-gradient-to-br from-background-dark to-[#2a2a2a] rounded-2xl p-6 border border-gray-800 hover:border-highlight-orange transition-all duration-300 hover:shadow-xl hover:shadow-highlight-orange/10"
            >
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-r ${project.color} rounded-full p-3 mr-4`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-text-light group-hover:text-highlight-orange transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              <p className="text-text-gray mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-highlight-orange mb-2">KEY FEATURES:</h4>
                <ul className="text-sm text-text-gray space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-highlight-orange mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-highlight-orange mb-2">TECH STACK:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-highlight-orange/20 text-highlight-orange text-xs font-medium rounded-full border border-highlight-orange/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-highlight-orange text-text-light text-sm font-medium rounded-lg hover:bg-[#ff6d33] transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-highlight-orange/25" >
                  <Github className="w-4 h-4 mr-2" />
                    View Code
              </a>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-highlight-orange/0 to-[#ff6d33]/0 group-hover:from-highlight-orange/5 group-hover:to-[#ff6d33]/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
