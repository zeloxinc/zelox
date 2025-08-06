import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { products } from '../products/products'; // Adjusted import path

const Shop = () => {
  const [formData, setFormData] = useState({ name: '', email: '', product: products[0].name, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Request for ${formData.product} submitted successfully! We will contact you soon.`);
      setFormData({ name: '', email: '', product: products[0].name, message: '' });
      setIsModalOpen(false);
    }, 1500);
  };

  const openModal = (productName) => {
    setFormData({ ...formData, product: productName || products[0].name });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);

  // Focus trapping in modal
  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.querySelector('input')?.focus();
    }
  }, [isModalOpen]);

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

  const modalVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#ffffff] dark:bg-[#000000] transition-colors duration-300 snap-center">
      <div className="container mx-auto px-4 py-16 relative">
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
            Discover powerful software solutions designed to transform your business operations. Explore our systems below.
          </motion.p>

          {/* Product Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-[#ffffff] dark:bg-[#000000] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 product-card"
                variants={cardVariants}
                whileHover="hover"
                role="region"
                aria-label={product.name}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#000000] dark:text-[#ffffff]">{product.name}</h3>
                <p className="text-[#4B5563] dark:text-[#D1D5DB] mb-6">{product.description}</p>
                <h4 className="text-xl font-semibold mb-4 text-[#000000] dark:text-[#ffffff]">Key Features</h4>
                <ul className="space-y-4 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#4B5563] dark:text-[#D1D5DB]">
                      <span className="text-[#000000] dark:text-[#ffffff] mr-2">{feature.icon}</span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <p className="text-[#4B5563] dark:text-[#D1D5DB] mb-6">{product.pricing}</p>
                <motion.button
                  onClick={() => openModal(product.name)}
                  className="inline-block bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Request a demo for ${product.name}`}
                >
                  Request Demo
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Action Button */}
        <motion.button
          onClick={() => openModal()}
          className="fixed bottom-6 right-6 bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open purchase or demo request form"
        >
          <FaShoppingCart size={24} />
        </motion.button>

        {/* Modal Form */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-[#000000]/50 dark:bg-[#ffffff]/20 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                ref={modalRef}
                className="bg-[#ffffff] dark:bg-[#000000] p-6 rounded-lg max-w-md w-full mx-4 shadow-xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-[#000000] dark:text-[#ffffff]">
                    Request a Demo or Purchase
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-[#4B5563] dark:text-[#D1D5DB] hover:text-[#000000] dark:hover:text-[#ffffff]"
                    aria-label="Close form"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
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
                      aria-label="Your name"
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
                      aria-label="Your email"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] transition-all duration-300"
                      aria-label="Select product for demo or purchase"
                    >
                      {products.map((product, index) => (
                        <option key={index} value={product.name}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <textarea
                      name="message"
                      placeholder={`Tell us about your needs for ${formData.product}`}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] transition-all duration-300"
                      aria-label={`Your message for ${formData.product}`}
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
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Shop;