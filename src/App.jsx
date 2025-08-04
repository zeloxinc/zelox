import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRefs = useRef([]);
  const scrollTimeout = useRef(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Scroll snapping logic
  useEffect(() => {
    const sections = sectionRefs.current;
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return;
      isScrolling = true;

      const delta = e.deltaY;
      const currentScroll = window.scrollY;
      let targetSection = null;

      // Find the current section
      const currentSection = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > 0;
      });

      // Scroll to next or previous section
      if (delta > 0 && currentSection < sections.length - 1) {
        // Scroll down
        targetSection = sections[currentSection + 1];
      } else if (delta < 0 && currentSection > 0) {
        // Scroll up
        targetSection = sections[currentSection - 1];
      }

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Debounce scroll to prevent rapid firing
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Assign refs to sections
  const setSectionRef = (index) => (el) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="snap-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <motion.div ref={setSectionRef(0)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <HeroSection />
                  </motion.div>
                  <motion.div ref={setSectionRef(1)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                    <ServicesSection />
                  </motion.div>
                  <motion.div ref={setSectionRef(2)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                    <AboutUsSection />
                  </motion.div>
                  <motion.div ref={setSectionRef(3)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
                    <ContactForm />
                  </motion.div>
                </>
              }
            />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/about" element={<AboutUsSection />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer />
        </div>

        {/* Scroll to top button */}
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] p-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 z-50"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </Router>
    </div>
  );
}

export default App;