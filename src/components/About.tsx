import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personalInfo = [
    { label: 'Age', value: '20' },
    { label: 'Residence', value: 'Egypt' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Address', value: 'Cairo' },
    { label: 'Phone', value: '(+20) 112 799 2297' },
    { label: 'E-mail', value: 'omarradwan781@gmail.com' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Omar Radwan"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-700">
              <p className="text-justify leading-relaxed">
                Hello! I'm Omar Radwan, a dedicated Petroleum Technologist specializing in petroleum production, 
                transportation, and processing. Currently in my third year at the New Cairo Technological University, 
                Petroleum Department, I'm gaining hands-on experience at the Egyptian Petroleum Research Institute (EPRI).
              </p>
              <p className="text-justify leading-relaxed">
                I have completed several courses, including Quality Control, Corrosion and Hydrocarbon Analyses, 
                Water Injection Principles, Operation and Treatment, and Basic Natural Gas Analysis and Measurements. 
                I have also worked at Axiom Egypt for Petroleum Services, and I'm currently employed at Manituba, 
                continuing to enhance my practical knowledge in the field.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <span className="font-semibold text-secondary min-w-[80px]">{info.label}:</span>
                  <span className="text-gray-600">{info.value}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="pt-6"
            >
              <motion.a
                href="/MagicalCV (1).pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <i className="fas fa-download"></i>
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;