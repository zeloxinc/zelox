import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  // Handle scroll to show/hide scroll to top button
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
      behavior: 'smooth'
    });
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ServicesSection />
              <AboutUsSection />
              <ContactForm />
            </>
          } />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
        
        {/* Scroll to top button */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-black dark:bg-white text-white dark:text-black p-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
      </Router>
    </div>
  );
}

export default App;