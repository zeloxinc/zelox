import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Form submitted successfully! We will contact you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: '#D1D5DB', transition: { duration: 0.3 } },
  };

  const contactDetails = [
    { label: 'Location', value: 'Nairobi Kenya', href: null },
    { label: 'Email', value: 'zelox@zeloxindustries.com', href: 'mailto:zeloxindustries@gmail.com' },
    { label: 'Phone', value: '+2541 1209 9003', href: 'tel:+254112099003' },
  ];

  const socialLinks = [
    { platform: 'Twitter', href: 'https://x.com/zeloxIndustries', icon: <FaTwitter size={24} /> },
    { platform: 'LinkedIn', href: 'https://www.linkedin.com/in/zelox-industries-54124b378/', icon: <FaLinkedin size={24} /> },
    { platform: 'Facebook', href: 'https://www.instagram.com/zelox_industries/', icon: <FaFacebook size={24} /> },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center bg-[#ffffff] dark:bg-[#000000] transition-colors duration-300 snap-center"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Left: Contact Details and Social Links */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] dark:text-[#ffffff] mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <p className="text-[#4B5563] dark:text-[#D1D5DB] font-medium">{detail.label}</p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-[#000000] dark:text-[#ffffff] hover:text-[#D1D5DB] transition-colors duration-300"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-[#000000] dark:text-[#ffffff]">{detail.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#000000] dark:text-[#ffffff]">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-[#000000] dark:text-[#ffffff] hover:text-[#D1D5DB]"
                    variants={linkVariants}
                    whileHover="hover"
                    aria-label={`Visit our ${link.platform}`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] dark:text-[#ffffff] mb-6 text-center md:text-left">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] transition-all duration-300"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] transition-all duration-300"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] transition-all duration-300"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity duration-300 disabled:opacity-70"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                aria-label="Send message"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;