import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaEye, FaHeart } from 'react-icons/fa';

const AboutUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  const content = [
    {
      icon: <FaRocket size={30} className="text-[#ffffff]" />,
      title: 'Our Mission',
      description:
        'At Zelox, we empower businesses to transcend boundaries through transformative digital solutions. By blending cutting-edge technology with creative ingenuity, we craft web, mobile, and system designs that inspire, connect, and drive success.',
    },
    {
      icon: <FaEye size={30} className="text-[#ffffff]" />,
      title: 'Our Vision',
      description:
        'To be the global catalyst for digital transformation, redefining how businesses engage with technology and creativity.',
    },
    {
      icon: <FaHeart size={30} className="text-[#ffffff]" />,
      title: 'Our Values',
      description:
        'Innovation: Pioneering solutions that push boundaries. Collaboration: Partnering closely with clients. Excellence: Delivering with precision and quality.',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center bg-[#ffffff] dark:bg-[#000000] transition-colors duration-300 snap-center"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#000000] dark:text-[#ffffff]"
            variants={itemVariants}
          >
            About Zelox
          </motion.h2>
          <motion.p
            className="text-lg text-[#4B5563] dark:text-[#D1D5DB] text-center max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            At Zelox, we are passionate about turning visionary ideas into impactful digital realities. Our team of experts specializes in web development, mobile applications, system design, and creative branding, delivering solutions that exceed expectations.
          </motion.p>

          <motion.div
            className="bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] p-8 rounded-lg text-center mb-16 shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed">
              We empower businesses to transcend boundaries through transformative digital solutions, blending technology and creativity to drive success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {content.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#ffffff] dark:bg-[#000000] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
                role="region"
                aria-label={item.title}
              >
                <div className="bg-[#4B5563] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#000000] dark:text-[#ffffff]">{item.title}</h3>
                <p className="text-[#4B5563] dark:text-[#D1D5DB]">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-[#000000] dark:text-[#ffffff]">Why Choose Zelox?</h3>
            <p className="text-[#4B5563] dark:text-[#D1D5DB] max-w-3xl mx-auto mb-8 leading-relaxed">
              Our team of skilled developers, designers, and architects brings decades of experience to every project. We prioritize client collaboration, innovative solutions, and a relentless pursuit of excellence, ensuring your vision is realized with precision and impact.
            </p>
            <motion.a
              href="#contact"
              className="inline-block bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact us to learn more"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;