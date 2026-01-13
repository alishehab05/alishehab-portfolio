import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedText from '../components/AnimatedText';
import Card3D from '../components/Card3D';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A modern, full-stack e-commerce solution with real-time inventory management.',
      longDescription:
        'Built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, admin dashboard, and real-time order tracking. Optimized for performance with code splitting and lazy loading.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'gradient-1',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates and team collaboration.',
      longDescription:
        'A comprehensive project management solution featuring drag-and-drop task organization, real-time collaboration, file attachments, and advanced filtering. Built with Next.js and WebSockets for real-time updates.',
      technologies: ['Next.js', 'TypeScript', 'WebSockets', 'MongoDB', 'Tailwind'],
      image: 'gradient-2',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description:
        'Beautiful data visualization dashboard with interactive charts and real-time metrics.',
      longDescription:
        'A powerful analytics platform that transforms complex data into actionable insights. Features include customizable dashboards, real-time data updates, export functionality, and responsive design for all devices.',
      technologies: ['React', 'D3.js', 'TypeScript', 'Express', 'Chart.js'],
      image: 'gradient-3',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description:
        'Modern social networking platform with real-time messaging and content sharing.',
      longDescription:
        'A feature-rich social media platform with user profiles, posts, comments, likes, real-time messaging, and notification system. Built with React, Node.js, and Socket.io for real-time features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS S3'],
      image: 'gradient-4',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  const getGradientClass = (image: string) => {
    const gradients: Record<string, string> = {
      'gradient-1': 'bg-gradient-to-br from-purple-500 to-pink-500',
      'gradient-2': 'bg-gradient-to-br from-blue-500 to-cyan-500',
      'gradient-3': 'bg-gradient-to-br from-orange-500 to-red-500',
      'gradient-4': 'bg-gradient-to-br from-green-500 to-emerald-500',
    };
    return gradients[image] || gradients['gradient-1'];
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 sm:px-8 lg:px-12 bg-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <AnimatedText
            as="h2"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Featured Projects
          </AnimatedText>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <Card3D>
                <motion.div
                  className="glass rounded-2xl overflow-hidden h-full cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      className={`w-full h-full ${getGradientClass(project.image)}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-white/60 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">View Details</span>
                      <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Card3D>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
            className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <FiX size={24} />
              </button>
              <div className={`h-64 ${getGradientClass(selectedProject.image)}`} />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {selectedProject.longDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {selectedProject.liveUrl && (
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink />
                    Live Demo
                  </motion.a>
                )}
                {selectedProject.githubUrl && (
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub />
                    View Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

