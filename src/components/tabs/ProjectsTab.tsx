import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const ProjectsTab: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/manasi/ecommerce",
      date: "2024",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      liveUrl: "https://taskmaster-app.com",
      githubUrl: "https://github.com/manasi/taskmaster",
      date: "2023",
      status: "Completed"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Interactive weather dashboard with data visualization, forecasting, and location-based weather insights using external APIs.",
      technologies: ["React", "D3.js", "OpenWeather API", "Chart.js"],
      liveUrl: "https://weather-analytics.com",
      githubUrl: "https://github.com/manasi/weather-dashboard",
      date: "2023",
      status: "Completed"
    },
    {
      id: 4,
      title: "AI-Powered Portfolio",
      description: "Modern portfolio website with AI-inspired design, smooth animations, and responsive layout. Built with latest web technologies.",
      technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/manasi/portfolio",
      date: "2024",
      status: "In Progress"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-300">
          A collection of my recent work showcasing various technologies and skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Project Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex space-x-4">
              <motion.a
                href={project.liveUrl}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </motion.a>
              <motion.a
                href={project.githubUrl}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;