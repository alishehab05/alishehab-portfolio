import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedText from '../components/AnimatedText';
import Card3D from '../components/Card3D';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Framer Motion', level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 80 },
        { name: 'CI/CD', level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <AnimatedText
            as="h2"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Skills & Expertise
          </AnimatedText>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 0.2}>
              <Card3D>
                <div className="glass rounded-2xl p-8 h-full">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/90 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-white/60 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

