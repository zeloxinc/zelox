import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobileAlt, FaLayerGroup, FaPaintBrush } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ icon, title, description, link, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#ffffff] dark:bg-[#000000] p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <Link to={link} className="block">
        <div className="bg-[#4B5563] w-16 h-16 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#000000] dark:text-[#ffffff]">{title}</h3>
        <p className="text-[#4B5563] dark:text-[#D1D5DB]">{description}</p>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="min-h-screen w-full flex items-center justify-center bg-[#ffffff] dark:bg-[#000000] transition-colors duration-300 snap-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#000000] dark:text-[#ffffff]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<FaCode size={30} className="text-[#ffffff]" />}
            title="Web Development"
            description="Build scalable and responsive websites using modern technologies."
            link="/services/web-development"
            index={0}
          />
          <ServiceCard
            icon={<FaMobileAlt size={30} className="text-[#ffffff]" />}
            title="Mobile Development"
            description="Native and cross-platform apps for iOS and Android."
            link="/services/mobile-development"
            index={1}
          />
          <ServiceCard
            icon={<FaLayerGroup size={30} className="text-[#ffffff]" />}
            title="System Design"
            description="Architecture and design of scalable software systems."
            link="/services/system-design"
            index={2}
          />
          <ServiceCard
            icon={<FaPaintBrush size={30} className="text-[#ffffff]" />}
            title="Logo Design"
            description="Creative and professional branding & logo design."
            link="/services/logo-design"
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;