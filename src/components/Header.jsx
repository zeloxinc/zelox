import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: '#D1D5DB', transition: { duration: 0.3 } },
  };

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

        <motion.div
          className={`md:flex md:items-center md:w-auto ${isOpen ? 'fixed inset-0 bg-[#ffffff] dark:bg-[#000000] flex flex-col justify-center items-center' : 'hidden'}`}
          variants={menuVariants}
          initial="hidden"
          animate={isOpen || window.innerWidth >= 768 ? 'visible' : 'hidden'}
        >
          <div className="text-sm md:flex-grow flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {['Home', 'Services', 'About Us', 'Contact'].map((link) => (
              <motion.div
                key={link}
                variants={linkVariants}
                whileHover="hover"
              >
                <Link
                  to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                  className="block py-4 md:py-0 md:inline-block text-[#000000] dark:text-[#ffffff] hover:text-[#D1D5DB] transition-colors duration-300 text-xl md:text-base font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D1D5DB] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link}
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