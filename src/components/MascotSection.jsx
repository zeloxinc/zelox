import React from 'react';
import { motion } from 'framer-motion';
import { FaPaw } from 'react-icons/fa';

const MascotSection = () => {
  const mascotVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const tailVariants = {
    glow: {
      opacity: [0.5, 1, 0.5],
      transition: { repeat: Infinity, duration: 2 },
    },
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#ffffff] dark:bg-[#000000] transition-colors duration-300 snap-center">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#000000] dark:text-[#ffffff]">
            Meet Zelo the CodeFox
          </h2>
          <p className="text-lg text-[#4B5563] dark:text-[#D1D5DB] mb-12 max-w-3xl mx-auto leading-relaxed">
            Zelo is our clever, code-savvy mascot who guides you through Zelox’s innovative digital solutions with a wag of its glowing tail!
          </p>
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8"
            variants={mascotVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Zelo the CodeFox"
              className="w-full h-full object-cover rounded-full"
            />
            <motion.div
              className="absolute -bottom-2 -right-2 text-[#D1D5DB] dark:text-[#4B5563] text-4xl"
              variants={tailVariants}
              animate="glow"
            >
              <FaPaw />
            </motion.div>
          </motion.div>
          <p className="text-[#4B5563] dark:text-[#D1D5DB] max-w-lg mx-auto">
            With a tail shaped like a code bracket, Zelo embodies the spirit of innovation and agility. Ask our chatbot about Zelo or explore our products to see it in action!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MascotSection;