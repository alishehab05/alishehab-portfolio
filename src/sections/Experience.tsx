import { motion } from 'framer-motion';
import { FiBriefcase, FiGraduationCap } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedText from '../components/AnimatedText';

interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: typeof FiBriefcase | typeof FiGraduationCap;
}

const Experience = () => {
  const timelineItems: TimelineItem[] = [
    {
      type: 'work',
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      period: '2021 - Present',
      description: [
        'Led development of multiple high-traffic web applications',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with cross-functional teams to deliver products on time',
      ],
      icon: FiBriefcase,
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Startup Inc.',
      period: '2019 - 2021',
      description: [
        'Developed and maintained React-based frontend applications',
        'Built RESTful APIs using Node.js and Express',
        'Optimized application performance resulting in 40% faster load times',
        'Participated in agile development processes',
      ],
      icon: FiBriefcase,
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2018 - 2019',
      description: [
        'Created responsive web designs using modern CSS frameworks',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Improved website accessibility and SEO',
      ],
      icon: FiBriefcase,
    },
    {
      type: 'education',
      title: 'Bachelor of Science',
      company: 'Computer Science',
      period: '2014 - 2018',
      description: [
        'Graduated with honors',
        'Specialized in Software Engineering',
        'Relevant coursework: Data Structures, Algorithms, Web Development',
      ],
      icon: FiGraduationCap,
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <AnimatedText
            as="h2"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Experience & Education
          </AnimatedText>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4" />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div
                    className={`relative flex items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/50"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: 'spring',
                          stiffness: 200,
                          delay: index * 0.1,
                        }}
                      >
                        <Icon className="text-white" size={24} />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                        isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                    >
                      <motion.div
                        className="glass rounded-2xl p-6"
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {item.title}
                            </h3>
                            <p className="text-purple-400 font-medium">
                              {item.company}
                            </p>
                          </div>
                          <span className="text-white/60 text-sm whitespace-nowrap ml-4">
                            {item.period}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {item.description.map((desc, descIndex) => (
                            <li
                              key={descIndex}
                              className="text-white/70 flex items-start"
                            >
                              <span className="text-purple-400 mr-2">▹</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

