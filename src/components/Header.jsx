import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun, FaHome, FaCogs, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuVariants = {
    hidden: { opacity: 0, scaleY: 0, transformOrigin: 'top' },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.3, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.05, color: '#D1D5DB', transition: { duration: 0.2 } },
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome className="inline-block mr-2" /> },
    { name: 'Services', path: '/services', icon: <FaCogs className="inline-block mr-2" /> },
    { name: 'About Us', path: '/about', icon: <FaInfoCircle className="inline-block mr-2" /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope className="inline-block mr-2" /> },
  ];

  return (
    <nav className="bg-[#ffffff] dark:bg-[#000000] fixed w-full z-50 top-0 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-extrabold text-[#000000] dark:text-[#ffffff] hover:opacity-80 transition-opacity duration-300">
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

          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer md:hidden z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes size={25} className="text-[#000000] dark:text-[#ffffff]" /> : <FaBars size={25} className="text-[#000000] dark:text-[#ffffff]" />}
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:w-auto">
          <div className="text-sm md:flex-grow flex flex-row items-center gap-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={linkVariants}
                whileHover="hover"
              >
                <Link
                  to={link.path}
                  className="flex items-center text-[#000000] dark:text-[#ffffff] hover:text-[#D1D5DB] transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D1D5DB] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.icon}
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <motion.div
          className={`md:hidden absolute top-full right-0 mt-2 w-64 bg-[#ffffff] dark:bg-[#000000] rounded-lg shadow-xl border border-[#D1D5DB] dark:border-[#4B5563] overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
          variants={menuVariants}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
        >
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={linkVariants}
                whileHover="hover"
              >
                <Link
                  to={link.path}
                  className="flex items-center py-2 px-4 text-[#000000] dark:text-[#ffffff] hover:text-[#D1D5DB] transition-colors duration-300 text-base font-medium"
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