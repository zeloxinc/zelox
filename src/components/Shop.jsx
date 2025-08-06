import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { products } from '../data/products';

const Shop = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: products[0]?.title || '',
    demoDate: new Date(),
    demoTime: '10:00 AM',
  });

  const timeSlots = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Demo Request Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nProduct: ${formData.product}\nDate: ${formData.demoDate.toLocaleDateString()}\nTime: ${formData.demoTime}`
    );
    setFormData({ name: '', email: '', product: products[0]?.title || '', demoDate: new Date(), demoTime: '10:00 AM' });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#ffffff] dark:bg-[#000000] transition-colors duration-300 snap-center">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#000000] dark:text-[#ffffff] text-center">
            Our Products
          </h2>
          <p className="text-lg text-[#4B5563] dark:text-[#D1D5DB] mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            Explore our innovative digital solutions designed to streamline your business operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="product-card bg-[#ffffff] dark:bg-[#000000] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                role="region"
                aria-label={`Product ${product.title}`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-[#000000] dark:text-[#ffffff] mb-2">{product.title}</h3>
                <p className="text-[#4B5563] dark:text-[#D1D5DB] mb-4">{product.description}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] px-4 py-2 rounded hover:opacity-80 transition-opacity duration-300"
                  aria-label={`Learn more about ${product.title}`}
                >
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>

          {/* Demo Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#ffffff] dark:bg-[#000000] p-8 rounded-lg shadow-md max-w-lg mx-auto"
          >
            <h3 className="text-2xl font-bold text-[#000000] dark:text-[#ffffff] mb-6 text-center">
              Request a Demo
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#4B5563] dark:text-[#D1D5DB] mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full p-2 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff]"
                  aria-label="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#4B5563] dark:text-[#D1D5DB] mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full p-2 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff]"
                  aria-label="Your email"
                />
              </div>
              <div>
                <label htmlFor="product" className="block text-[#4B5563] dark:text-[#D1D5DB] mb-1">
                  Product
                </label>
                <select
                  id="product"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full p-2 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff]"
                  aria-label="Select product"
                >
                  {products.map((product, index) => (
                    <option key={index} value={product.title}>
                      {product.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[#4B5563] dark:text-[#D1D5DB] mb-1">Demo Date</label>
                <Calendar
                  onChange={(date) => setFormData({ ...formData, demoDate: date })}
                  value={formData.demoDate}
                  className="w-full border border-[#D1D5DB] dark:border-[#4B5563] rounded bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff]"
                />
              </div>
              <div>
                <label htmlFor="demoTime" className="block text-[#4B5563] dark:text-[#D1D5DB] mb-1">
                  Demo Time
                </label>
                <select
                  id="demoTime"
                  value={formData.demoTime}
                  onChange={(e) => setFormData({ ...formData, demoTime: e.target.value })}
                  className="w-full p-2 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff]"
                  aria-label="Select demo time"
                >
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] px-4 py-2 rounded hover:opacity-80 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Submit demo request"
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;