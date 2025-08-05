import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServicePage = ({ title, description, details, frameworks, tools }) => {
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
      alert(`Request for ${title} submitted successfully! We will contact you soon.`);
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

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#ffffff] dark:bg-[#000000] transition-colors duration-300 snap-center">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#000000] dark:text-[#ffffff]"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg text-[#4B5563] dark:text-[#D1D5DB] text-center mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-[#000000] dark:text-[#ffffff] mb-4">What We Offer</h2>
            <p className="text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">{details}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-[#000000] dark:text-[#ffffff] mb-4">Frameworks & Technologies</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#D1D5DB] dark:border-[#4B5563]">
                  <th className="py-2 text-[#000000] dark:text-[#ffffff] font-medium">Framework</th>
                  <th className="py-2 text-[#000000] dark:text-[#ffffff] font-medium">Pros</th>
                  <th className="py-2 text-[#000000] dark:text-[#ffffff] font-medium">Cons</th>
                </tr>
              </thead>
              <tbody>
                {frameworks.map((tech, index) => (
                  <tr key={index} className="border-b border-[#D1D5DB] dark:border-[#4B5563]">
                    <td className="py-2 text-[#4B5563] dark:text-[#D1D5DB]">{tech.name}</td>
                    <td className="py-2 text-[#4B5563] dark:text-[#D1D5DB]">{tech.pros}</td>
                    <td className="py-2 text-[#4B5563] dark:text-[#D1D5DB]">{tech.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-[#000000] dark:text-[#ffffff] mb-4">Additional Tools & Services</h2>
            <ul className="list-disc list-inside text-[#4B5563] dark:text-[#D1D5DB]">
              {tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-center mb-6 text-[#000000] dark:text-[#ffffff]">
              Request a Quote
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
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
                  placeholder={`Tell us about your ${title} needs`}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] transition-all duration-300"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity полага

System: duration-300 disabled:opacity-70"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                aria-label={`Submit request for ${title}`}
              >
                {isSubmitting ? 'Sending...' : 'Request Quote'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;