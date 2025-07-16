import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const ExperienceTab: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Mumbai, India',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Increased application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline',
        'Reduced deployment time by 60%'
      ]
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Digital Innovations Ltd',
      location: 'Pune, India',
      period: '2021 - 2022',
      description: 'Developed responsive web applications and collaborated with design teams to create intuitive user interfaces.',
      achievements: [
        'Built 15+ responsive web applications',
        'Improved user engagement by 25%',
        'Collaborated with UX/UI designers',
        'Implemented modern JavaScript frameworks'
      ]
    },
    {
      type: 'work',
      title: 'Junior Web Developer',
      company: 'StartupHub',
      location: 'Bangalore, India',
      period: '2020 - 2021',
      description: 'Started career developing web applications and learning modern development practices in a fast-paced startup environment.',
      achievements: [
        'Completed 10+ client projects',
        'Learned React and Node.js',
        'Contributed to open source projects',
        'Received "Rising Star" award'
      ]
    }
  ];

  const education = [
    {
      type: 'education',
      degree: 'Bachelor of Computer Engineering',
      institution: 'University of Mumbai',
      location: 'Mumbai, India',
      period: '2016 - 2020',
      description: 'Graduated with First Class honors. Specialized in web technologies and software engineering.',
      achievements: [
        'CGPA: 8.7/10',
        'President of Computer Society',
        'Winner of College Hackathon 2019',
        'Published research paper on ML'
      ]
    },
    {
      type: 'education',
      degree: 'Higher Secondary Certificate',
      institution: 'ABC Junior College',
      location: 'Maharashtra, India',
      period: '2014 - 2016',
      description: 'Completed with Science stream focusing on Mathematics and Computer Science.',
      achievements: [
        'Score: 92%',
        'Top 5% in state board',
        'Computer Science topper',
        'Mathematics olympiad winner'
      ]
    }
  ];

  const allItems = [...experiences, ...education].sort((a, b) => {
    const yearA = parseInt(a.period.split(' - ')[1] === 'Present' ? '2024' : a.period.split(' - ')[1]);
    const yearB = parseInt(b.period.split(' - ')[1] === 'Present' ? '2024' : b.period.split(' - ')[1]);
    return yearB - yearA;
  });

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Professional Journey</h2>
        <p className="text-gray-300">
          My career progression and educational background
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500"></div>

        <div className="space-y-8">
          {allItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex items-start space-x-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  {item.type === 'work' ? (
                    <Briefcase className="w-8 h-8 text-white" />
                  ) : (
                    <GraduationCap className="w-8 h-8 text-white" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.type === 'work' ? item.title : item.degree}
                    </h3>
                    <p className="text-orange-400 font-medium mb-2">
                      {item.type === 'work' ? item.company : item.institution}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-medium mb-3 text-orange-400">
                      {item.type === 'work' ? 'Key Achievements:' : 'Highlights:'}
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;