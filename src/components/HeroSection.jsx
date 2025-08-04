import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3, yoyo: Infinity } },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="hero"
      className="bg-[#000000] h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 60%, #4B5563 100%)',
      }}
    >
      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60 dark:bg-black/80 z-0"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
      ></motion.div>

      <motion.div
        className="text-center z-10 px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-[#ffffff] mb-6 tracking-tight"
          variants={itemVariants}
        >
          ZELOX
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-[#D1D5DB] mt-4 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Transforming Ideas into Digital Reality
        </motion.p>
        <motion.p
          className="text-base text-[#4B5563] dark:text-[#D1D5DB] mt-2 italic"
          variants={itemVariants}
        >
          Innovate. Create. Succeed.
        </motion.p>
        <motion.div className="flex justify-center gap-4 mt-8" variants={itemVariants}>
          <motion.a
            href="#services"
            className="inline-block bg-[#ffffff] text-[#000000] px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-[#D1D5DB] transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Get Started with Zelox Services"
          >
            Get Started
          </motion.a>
          <motion.div
            className="inline-block bg-transparent border-2 border-[#ffffff] text-[#ffffff] px-6 py-3 rounded-lg font-medium hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Contact Zelox"
          >
            <Link to="/contact">Contact Us</Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;