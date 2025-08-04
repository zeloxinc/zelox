import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <section 
      id="contact"
      className="py-20 bg-[#ffffff] dark:bg-[#000000] transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#000000] dark:text-[#ffffff]">
            Contact Us
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff]"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff]"
              ></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="w-full bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity disabled:opacity-70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {['New York, NY', 'contact@zelox.com', '+1 (555) 123-4567'].map((item, index) => (
              <div 
                key={index}
                className="bg-[#D1D5DB] dark:bg-[#4B5563] p-6 rounded-lg text-center"
              >
                <div className="bg-[#ffffff] dark:bg-[#000000] border-2 border-dashed rounded-xl w-12 h-12 mx-auto mb-4" />
                <p className="text-[#000000] dark:text-[#ffffff]">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm; 