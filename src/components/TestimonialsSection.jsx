import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/Testimonials.jsx';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#ffffff] dark:bg-[#000000] transition-colors duration-300 snap-center">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#000000] dark:text-[#ffffff]">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#4B5563] dark:text-[#D1D5DB] mb-12 max-w-3xl mx-auto leading-relaxed">
            Hear from our satisfied clients about how Zelox’s solutions have transformed their businesses.
          </p>
          <motion.div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`absolute w-full ${index === currentIndex ? 'block' : 'hidden'}`}
                variants={cardVariants}
                initial="hidden"
                animate={index === currentIndex ? 'visible' : 'hidden'}
                exit="exit"
              >
                <div
                  className="bg-[#ffffff] dark:bg-[#000000] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mx-auto max-w-lg"
                  role="region"
                  aria-label={`Testimonial from ${testimonial.name}`}
                >
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}, ${testimonial.role}`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-[#4B5563] dark:text-[#D1D5DB] italic mb-4">"{testimonial.quote}"</p>
                  <h3 className="text-xl font-bold text-[#000000] dark:text-[#ffffff] mb-2">{testimonial.name}</h3>
                  <p className="text-[#4B5563] dark:text-[#D1D5DB] font-medium">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;