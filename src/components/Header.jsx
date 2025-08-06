import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun, FaHome, FaCogs, FaInfoCircle, FaEnvelope, FaShoppingCart, FaUsers, FaQuoteLeft } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.1 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.05, color: '#D1D5DB', transition: { duration: 0.2 } },
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome className="inline-block mr-2" /> },
    { name: 'Services', path: '/services', icon: <FaCogs className="inline-block mr-2" /> },
    { name: 'Shop', path: '/shop', icon: <FaShoppingCart className="inline-block mr-2" /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle className="inline-block mr-2" /> },
    { name: 'Team', path: '/team', icon: <FaUsers className="inline-block mr-2" /> },
    { name: 'Testimonials', path: '/testimonials', icon: <FaQuoteLeft className="inline-block mr-2" /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope className="inline-block mr-2" /> },
  ];

  return (
    <nav className="bg-[#ffffff] dark:bg-[#000000] fixed w-full z-50 top-0 shadow-md transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-2xl font-extrabold text-[#000000] dark:text-[#ffffff] hover:opacity-80 transition-opacity duration-300"
            aria-label="Zelox Home"
          >
            ZELOX
          </Link>
          <span className="ml-2 text-sm text-[#4B5563] dark:text-[#D1D5DB] hidden md:inline">Digital Innovation</span>
        </div>

        <div className="flex items-center">
          <motion.button
            onClick={toggleDarkMode}
            className="mr-4 p-2 rounded-full hover:bg-[#D1D5DB] dark:hover:bg-[#4B5563] transition-colors duration-300"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FaSun className="text-[#ffffff]" size={20} /> : <FaMoon className="text-[#000000]" size={20} />}
          </motion.button>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#000000] dark:text-[#ffffff]"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:w-auto">
          <motion.div variants={menuVariants} initial="hidden" animate="visible" className="flex flex-row items-center gap-6">
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={linkVariants} whileHover="hover">
                <Link
                  to={link.path}
                  className={`flex items-center text-[#000000] dark:text-[#ffffff] hover:text-[#D1D5DB] transition-colors duration-300 font-medium relative ${
                    location.pathname === link.path ? 'after:w-full after:bg-[#D1D5DB]' : 'after:w-0'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#D1D5DB] after:transition-all after:duration-300 hover:after:w-full`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Dropdown Menu */}
        <motion.div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#ffffff] dark:bg-[#000000] shadow-xl border-t border-[#D1D5DB] dark:border-[#4B5563] ${isOpen ? 'block' : 'hidden'}`}
          variants={menuVariants}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={linkVariants} whileHover="hover">
                <Link
                  to={link.path}
                  className="flex items-center py-2 text-[#000000] dark:text-[#ffffff] hover:text-[#D1D5DB] transition-colors duration-300 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;