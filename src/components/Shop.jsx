import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaMoneyBillWave, FaTools, FaChartLine } from 'react-icons/fa';

const Shop = () => {
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
      alert('Request submitted successfully! We will contact you soon.');
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

  const cardVariants = {
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  const product = {
    name: 'Zelox Apartment Management System',
    description:
      'A comprehensive property management solution designed for residential and multi-family properties. Streamline tenant management, rent collection, maintenance tracking, and financial reporting with an intuitive, cloud-based platform.',
    features: [
      { icon: <FaBuilding size={24} />, text: 'Tenant Management: Track tenant information, leases, and communications.' },
      { icon: <FaMoneyBillWave size={24} />, text: 'Automated Rent Collection: Integrate with payment systems for seamless rent payments.' },
      { icon: <FaTools size={24} />, text: 'Maintenance Tracking: Manage requests and maintenance schedules efficiently.' },
      { icon: <FaChartLine size={24} />, text: 'Financial Reporting: Generate reports on revenue, expenses, and cash flow.' },
    ],
    pricing: 'Contact us for pricing or to schedule a free demo.',
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#ffffff] dark:bg-[#000000] transition-colors duration-300 snap-center">
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#000000] dark:text-[#ffffff]"
            variants={itemVariants}
          >
            Shop Our Systems
          </motion.h2>
          <motion.p
            className="text-lg text-[#4B5563] dark:text-[#D1D5DB] text-center max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Discover powerful software solutions designed to transform your business operations. Explore the Zelox Apartment Management System below.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {/* Product Card */}
            <motion.div
              className="bg-[#ffffff] dark:bg-[#000000] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
              role="region"
              aria-label={product.name}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#000000] dark:text-[#ffffff]">{product.name}</h3>
              <p className="text-[#4B5563] dark:text-[#D1D5DB] mb-6">{product.description}</p>
              <h4 className="text-xl font-semibold mb-4 text-[#000000] dark:text-[#ffffff]">Key Features</h4>
              <ul className="space-y-4 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-[#4B5563] dark:text-[#D1D5DB]">
                    <span className="text-[#000000] dark:text-[#ffffff] mr-2">{feature.icon}</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <p className="text-[#4B5563] dark:text-[#D1D5DB] mb-6">{product.pricing}</p>
              <motion.a
                href="#demo-form"
                className="inline-block bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Request a demo for Zelox Apartment Management System"
              >
                Request Demo
              </motion.a>
            </motion.div>

            {/* Demo Request Form */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-[#000000] dark:text-[#ffffff] text-center md:text-left">
                Request a Demo or Purchase
              </h3>
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
                    placeholder="Tell us about your needs (e.g., demo or purchase inquiry)"
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
                  aria-label="Submit demo or purchase request"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;