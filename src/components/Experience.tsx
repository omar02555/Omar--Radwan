import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      period: 'August 2024 - Present',
      title: 'Summer Training',
      description: [
        'Schlumberger Company. Online Training (Arab oil and gas Academy)',
        'Royal wells alliance Company (Drilling)',
        'PetroGulf Company (Field Operations)',
        'Triple L Oil Services (Drilling)',
        'NAPESCO (Drilling)',
        'Petrogas (Factory Operations)',
        'Midco Oilfield services',
        'Axiom Egypt Oil Service Company (Office)',
      ],
    },
  ];

  const courses = [
    {
      period: 'September 2023 - June 2024',
      title: 'Oil & Gas Courses',
      description: [
        'Quality Control, Corrosion and Hydrocarbon Analyses',
        'Technology of Oil and Gas Plants Operation, and Control',
        'Technology of Natural Gas Processing and Compression',
        'Technology of Offshore and Subsea Operation',
        'Water Injection Principles, Operation and Treatment',
        'Oil Storage Tanks, Pipelines and Valves',
        'Oil and Gas Wells Production Operation and Well Testing',
        'Artificial Lift Systems and Surface Pumps',
        'Basics of Preventive and Predictive Maintenance',
      ],
    },
    {
      period: 'August 2023 - September 2024',
      title: 'Extracurricular Activities',
      description: [
        'Social Media & Marketing Head at NCTU Petroleum Tech (2023)',
        'Social & Design Head at NCTU Petroleum Tech (2024)',
      ],
    },
    {
      period: 'September 2022 - June 2024',
      title: 'Safety Courses',
      description: [
        'Basic Health And Safety Environment',
        'Health, Safety and Environment Surface Production Operation',
        'Safety in Process',
        'Process Safety & Environment Production',
      ],
    },
  ];

  const education = [
    {
      period: '2022 - 2026',
      title: 'Undergraduate Technologist - NCTU University',
      description: ['2nd year: 94%'],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Experience & Courses */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-secondary mb-6">Experience</h3>
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg mb-6">
                  <div className="text-primary font-semibold mb-2">{exp.period}</div>
                  <h4 className="text-xl font-bold text-secondary mb-3">{exp.title}</h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-secondary mb-6">Courses</h3>
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg mb-6">
                  <div className="text-primary font-semibold mb-2">{course.period}</div>
                  <h4 className="text-xl font-bold text-secondary mb-3">{course.title}</h4>
                  <ul className="space-y-2">
                    {course.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-secondary mb-6">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg mb-6">
                  <div className="text-primary font-semibold mb-2">{edu.period}</div>
                  <h4 className="text-xl font-bold text-secondary mb-3">{edu.title}</h4>
                  <ul className="space-y-2">
                    {edu.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;