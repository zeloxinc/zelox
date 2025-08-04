import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  return (
    <section 
      id="about"
      className="py-20 bg-[#ffffff] dark:bg-[#000000] transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#000000] dark:text-[#ffffff]">
            About Us
          </h2>
          <p className="text-lg text-[#4B5563] dark:text-[#D1D5DB] text-center max-w-3xl mx-auto leading-relaxed">
            At Zelox, we are passionate about delivering innovative digital solutions. Our team of experts specializes in web development, mobile applications, system design, and creative design services. We believe in turning ideas into reality, ensuring every project meets the highest standards of quality and innovation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="bg-[#ffffff] dark:bg-[#000000] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <div className="bg-[#D1D5DB] dark:bg-[#4B5563] border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#000000] dark:text-[#ffffff]">Our Mission</h3>
                <p className="text-[#4B5563] dark:text-[#D1D5DB]">
                  To deliver cutting-edge digital solutions that transform businesses and exceed expectations.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;