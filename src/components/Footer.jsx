import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const hoverVariants = {
    hover: { scale: 1.1, color: '#D1D5DB', transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-[#000000] text-[#ffffff] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#ffffff]">About Zelox</h3>
            <p className="text-[#D1D5DB] text-sm leading-relaxed">
              Zelox is dedicated to transforming ideas into innovative digital solutions. From web and mobile development to system design and branding, we deliver excellence.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook size={20} />, href: 'https://www.instagram.com/zelox_industries/' },
                { icon: <FaTwitter size={20} />, href: 'https://x.com/zeloxIndustries' },
                { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/zelox-industries-54124b378/' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={hoverVariants}
                  whileHover="hover"
                  aria-label={`Visit our ${social.icon.type.name}`}
                  className="text-[#ffffff] hover:text-[#D1D5DB]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#ffffff]">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'Contact'].map((link) => (
                <motion.li
                  key={link}
                  variants={hoverVariants}
                  whileHover="hover"
                >
                  <a
                    href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-[#D1D5DB] hover:text-[#ffffff] text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#ffffff]">Contact Us</h3>
            <ul className="space-y-2 text-[#D1D5DB] text-sm">
              <li>Nairobi Kenya</li>
              <li>
                <a href="mailto:zeloxindustries@gmail.com" className="hover:text-[#ffffff] transition-colors duration-300">
                  contact@zelox.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-[#ffffff] transition-colors duration-300">
                  +2541 1209 9003
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="w-full p-2 border border-[#4B5563] rounded bg-[#000000] text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff]"
              />
              <motion.button
                className="mt-2 bg-[#ffffff] text-[#000000] px-4 py-2 rounded font-medium hover:bg-[#D1D5DB] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-[#4B5563] text-center text-[#D1D5DB] text-sm"
        >
          <p>© 2025 Zelox. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;