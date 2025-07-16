import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, Phone, Github, ExternalLink, MessageCircle, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'manasipatil.6901@gmail.com',
      link: 'mailto:manasipatil.6901@gmail.com',
      color: 'from-blue-500 to-blue-600',
      description: 'Drop me a line anytime',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/manasi-patil6',
      link: 'https://linkedin.com/in/manasi-patil6',
      color: 'from-blue-600 to-blue-700',
      description: 'Let\'s connect professionally',
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      value: 'github.com/Manasi6901',
      link: 'https://github.com/Manasi6901',
      color: 'from-gray-600 to-gray-700',
      description: 'Check out my code',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Ravet, Pune, Maharashtra',
      link: null,
      color: 'from-emerald-500 to-emerald-600',
      description: 'Based in India',
    },
  ];

  const quickActions = [
    {
      title: 'Schedule a Call',
      description: 'Book a 30-minute discussion about DevOps opportunities',
      icon: <Calendar className="w-5 h-5" />,
      action: 'mailto:manasipatil.6901@gmail.com?subject=Schedule a Call',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Project Collaboration',
      description: 'Discuss potential project partnerships',
      icon: <MessageCircle className="w-5 h-5" />,
      action: 'mailto:manasipatil.6901@gmail.com?subject=Project Collaboration',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0a0b2e] to-[#1e1b4b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30 mb-4">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next DevOps project? Let's discuss how we can build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl mr-4">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`p-3 bg-gradient-to-r ${info.color} rounded-xl flex-shrink-0`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-white mb-1">{info.title}</h4>
                        <p className="text-gray-400 text-sm mb-1 break-all">{info.value}</p>
                        <p className="text-gray-500 text-xs">{info.description}</p>
                      </div>
                      {info.link.startsWith('http') && (
                        <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                      )}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${info.color} rounded-xl flex-shrink-0`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">{info.title}</h4>
                        <p className="text-gray-400 text-sm mb-1">{info.value}</p>
                        <p className="text-gray-500 text-xs">{info.description}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10"
            >
              <h4 className="text-lg font-bold text-white mb-4">Quick Actions</h4>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <a
                    key={index}
                    href={action.action}
                    className="block p-4 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 bg-gradient-to-r ${action.color} rounded-lg flex-shrink-0`}>
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-semibold mb-1 group-hover:text-emerald-400 transition-colors">
                          {action.title}
                        </h5>
                        <p className="text-gray-400 text-sm">{action.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-bold text-white">Currently Available</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Open for DevOps opportunities, freelance projects, and technical consultations. 
                Usually respond within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;