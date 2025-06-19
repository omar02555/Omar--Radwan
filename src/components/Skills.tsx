import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const languages = [
    { name: 'Arabic', percentage: 100 },
    { name: 'English', percentage: 65 },
  ];

  const technicalSkills = [
    { name: 'Microsoft Office', percentage: 100 },
    { name: 'HTML', percentage: 60 },
    { name: 'Fusion 360', percentage: 85 },
    { name: 'CSS', percentage: 65 },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Languages</h3>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={lang.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{lang.name}</span>
                    <span className="text-primary font-bold">{lang.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-8">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-300"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        className="text-primary"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        initial={{ strokeDasharray: '0 100' }}
                        animate={inView ? { strokeDasharray: `${skill.percentage} 100` } : {}}
                        transition={{ duration: 1.5, delay: 0.7 + index * 0.2 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{skill.percentage}%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-700">{skill.name}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;