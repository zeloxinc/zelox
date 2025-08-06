import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com', icon: <FaTwitter className="h-6 w-6" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <FaTwitter className="h-6 w-6" /> },
    { name: 'GitHub', href: 'https://github.com', icon: <FaGithub className="h-6 w-6" /> },
  ];

  const linkVariants = {
    hover: { scale: 1.05, color: '#D1D5DB', transition: { duration: 0.2 } },
  };

  return (
    <footer className="bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4">ZELOX</h3>
            <p className="text-[#4B5563] dark:text-[#D1D5DB] mb-4">
              Empowering businesses with innovative digital solutions since 2023.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4B5563] dark:text-[#D1D5DB] hover:text-[#D1D5DB] dark:hover:text-[#ffffff] transition-colors duration-300"
                  aria-label={social.name}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Link
                    to={link.path}
                    className="text-[#4B5563] dark:text-[#D1D5DB] hover:text-[#D1D5DB] dark:hover:text-[#ffffff] transition-colors duration-300"
                    aria-label={link.name}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
            <p className="text-[#4B5563] dark:text-[#D1D5DB] mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="p-2 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff]"
                aria-label="Newsletter email"
              />
              <motion.button
                type="submit"
                className="bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] px-4 py-2 rounded hover:opacity-80 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-[#4B5563] dark:text-[#D1D5DB]">
          &copy; {new Date().getFullYear()} Zelox. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;