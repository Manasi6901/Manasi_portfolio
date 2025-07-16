import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

const SkillsTab: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 },
        { name: "Microservices", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Database & Cloud",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 70 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 80 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      icon: Palette,
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 75 },
        { name: "Git/GitHub", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Jira", level: 80 }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
        <p className="text-gray-300">
          Comprehensive skillset across the full development stack
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            {/* Category Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-orange-400 text-sm font-medium">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills */}
      <motion.div
        className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <Globe className="w-5 h-5 text-orange-400" />
          <span>Additional Expertise</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Agile/Scrum",
            "Test-Driven Development",
            "CI/CD",
            "Performance Optimization",
            "Code Review",
            "Team Leadership",
            "Project Management",
            "Technical Writing"
          ].map((skill, index) => (
            <motion.div
              key={skill}
              className="text-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
            >
              <span className="text-gray-300 text-sm font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsTab;