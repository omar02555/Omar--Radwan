import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Sucker Rod Pump',
      description: 'Mechanical lift system that uses a series of connected rods to transmit the up-and-down motion from a surface pump jack to a downhole pump, lifting fluid from the well.',
      image: 'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-162568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Centrifugal Pump',
      description: 'It operates by converting rotational kinetic energy, typically from a motor, into hydrodynamic energy, forcing fluid to move through the pump and out at high pressure.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Progressive Cavity Pump (PCP)',
      description: 'Uses a rotating helical rotor inside a stator to push fluids through the pump, commonly used for handling viscous fluids or slurry.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Heat Exchanger',
      description: 'It transfers heat between two or more fluids (liquid or gas) without them mixing, through conduction across solid barriers, typically used in cooling or heating processes.',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Blowout Preventer (BOP)',
      description: 'A safety device used on oil rigs to prevent the uncontrolled release of pressure or fluids from the well, effectively sealing the well in case of a blowout.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Gear Pump',
      description: 'It operates by using meshing gears to pump fluid by displacement, as the gears rotate, they create suction to pull the fluid into the pump and then displace it through the outlet.',
      image: 'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-162568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;