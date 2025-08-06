import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaComment, FaTimes } from 'react-icons/fa';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import ContactForm from './components/ContactForm';
import Shop from './components/Shop';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import ServicePage from './components/ServicePage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [chatInput, setChatInput] = useState('');
  const sectionRefs = useRef([]);
  const chatInputRef = useRef(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  // Chatbot logic
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setChatMessages([...chatMessages, { sender: 'user', text: chatInput }]);

    setTimeout(() => {
      const userMessage = chatInput.toLowerCase();
      let botResponse = 'I’m not sure how to help with that. Could you provide more details?';
      if (userMessage.includes('product') || userMessage.includes('ecomass') || userMessage.includes('sales') || userMessage.includes('apartment')) {
        botResponse = 'Interested in our products? Visit the Shop page or request a demo for Zelox Ecomass System, Sales KeepUp PWA, or Apartment Management System!';
      } else if (userMessage.includes('demo')) {
        botResponse = 'You can request a demo by filling out the form on our Shop or Contact page. Want to know more about a specific product?';
      } else if (userMessage.includes('hi') || userMessage.includes('hello')) {
        botResponse = 'Hi there! I’m here to answer questions about Zelox products and services. What’s on your mind?';
      } else if (userMessage.includes('team')) {
        botResponse = 'Curious about our team? Check out the Team page to meet the experts behind Zelox!';
      } else if (userMessage.includes('testimonial') || userMessage.includes('review') || userMessage.includes('customer')) {
        botResponse = 'Want to hear from our clients? Visit the Testimonials page to see how Zelox has transformed businesses!';
      }

      setChatMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 500);

    setChatInput('');
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setIsMenuOpen(false);
    if (!isChatOpen) {
      setTimeout(() => chatInputRef.current?.focus(), 100);
    }
  };

  // Scroll snapping logic
  useEffect(() => {
    const sections = sectionRefs.current.filter((ref) => ref);
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling || isChatOpen) return;
      isScrolling = true;

      const delta = e.deltaY;
      const currentSection = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > 0;
      });

      let targetSection = null;
      if (delta > 0 && currentSection < sections.length - 1) {
        targetSection = sections[currentSection + 1];
      } else if (delta < 0 && currentSection > 0) {
        targetSection = sections[currentSection - 1];
      }

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(window.scrollTimeout);
    };
  }, [isChatOpen]);

  // Assign refs to sections
  const setSectionRef = (index) => (el) => {
    sectionRefs.current[index] = el;
  };

  // Service page data
  const services = [
    {
      title: 'Web Development',
      description: 'Build scalable and responsive websites using modern technologies.',
      details:
        'Our web development services deliver high-performance, responsive websites tailored to your business needs. From e-commerce platforms to corporate sites, we ensure seamless user experiences, accessibility, and robust functionality. We handle front-end, back-end, and full-stack development, integrating modern frameworks and tools to meet your goals.',
      frameworks: [
        { name: 'React', pros: 'Flexible component-based architecture, large community, fast rendering with virtual DOM.', cons: 'Steep learning curve for beginners, requires additional libraries for state management.' },
        { name: 'Angular', pros: 'Comprehensive framework with built-in tools, strong typing with TypeScript, ideal for enterprise apps.', cons: 'Complex syntax, heavier bundle size compared to React.' },
        { name: 'Vite', pros: 'Lightning-fast build tool, supports modern ES modules, excellent development experience.', cons: 'Less mature ecosystem, limited plugin support compared to Webpack.' },
      ],
      tools: [
        'Tailwind CSS for rapid, responsive styling',
        'Google Auth for secure user authentication',
        'Firebase for real-time databases and hosting',
        'Node.js and Express for scalable back-end APIs',
        'Next.js for server-side rendering and static site generation',
      ],
      path: '/services/web-development',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform apps for iOS and Android.',
      details:
        'We create intuitive and powerful mobile applications that engage users across iOS and Android platforms. Our services include native app development for optimal performance and cross-platform solutions for cost efficiency. We prioritize user experience, performance optimization, and integration with modern APIs.',
      frameworks: [
        { name: 'React Native', pros: 'Cross-platform development, reusable code, large community support.', cons: 'Performance slower than native, limited access to some native APIs.' },
        { name: 'Flutter', pros: 'Fast development with hot reload, consistent UI across platforms, high performance.', cons: 'Larger app size, less mature ecosystem compared to React Native.' },
        { name: 'Swift', pros: 'Optimized for iOS, high performance, seamless integration with Apple ecosystem.', cons: 'iOS-only, steeper learning curve for non-Apple developers.' },
        { name: 'Kotlin', pros: 'Modern syntax, Android-first, excellent interoperability with Java.', cons: 'Android-only, slower compilation compared to Flutter.' },
      ],
      tools: [
        'Firebase for push notifications and analytics',
        'Expo for streamlined React Native development',
        'Fastlane for automated app deployment',
        'REST APIs for backend integration',
        'Google Play and App Store submission support',
      ],
      path: '/services/mobile-development',
    },
    {
      title: 'System Design',
      description: 'Architecture and design of scalable software systems.',
      details:
        'Our system design services focus on building scalable, reliable, and efficient architectures to support your business growth. We specialize in microservices, cloud-native solutions, and API integrations, ensuring high availability, fault tolerance, and performance optimization for complex applications.',
      frameworks: [
        { name: 'AWS', pros: 'Extensive service offerings, high scalability, robust security features.', cons: 'Complex pricing, steep learning curve for advanced services.' },
        { name: 'Azure', pros: 'Strong enterprise integration, hybrid cloud support, comprehensive AI tools.', cons: 'Higher costs for some services, less intuitive UI than AWS.' },
        { name: 'Docker', pros: 'Portable containers, simplifies deployment, supports microservices.', cons: 'Resource-intensive, requires orchestration for large-scale apps.' },
        { name: 'Kubernetes', pros: 'Powerful orchestration, auto-scaling, self-healing systems.', cons: 'Complex setup and management, steep learning curve.' },
      ],
      tools: [
        'GraphQL for efficient API queries',
        'REST APIs for standard integrations',
        'Prometheus for monitoring and alerting',
        'Terraform for infrastructure as code',
        'CI/CD pipelines with Jenkins or GitHub Actions',
      ],
      path: '/services/system-design',
    },
    {
      title: 'Logo Design',
      description: 'Creative and professional branding & logo design.',
      details:
        'We craft unique and memorable logos that reflect your brand identity. Our design process involves close collaboration to understand your vision, target audience, and business goals. We deliver versatile logos suitable for digital and print media, along with comprehensive brand guidelines.',
      frameworks: [
        { name: 'Adobe Illustrator', pros: 'Industry-standard for vector graphics, precise control, scalable designs.', cons: 'Subscription cost, requires design expertise.' },
        { name: 'Figma', pros: 'Cloud-based, real-time collaboration, easy prototyping.', cons: 'Less powerful for complex vector editing compared to Illustrator.' },
        { name: 'Canva', pros: 'User-friendly, quick design creation, affordable for small businesses.', cons: 'Limited customization, less professional for complex branding.' },
      ],
      tools: [
        'Adobe Fonts for premium typography',
        'Brand Guidelines for consistent branding',
        'Color Palette Generators for cohesive designs',
        'Mockup Tools for visualizing logos in real-world contexts',
        'Export in multiple formats (SVG, PNG, PDF)',
      ],
      path: '/services/logo-design',
    },
  ];

  const menuVariants = {
    hidden: { opacity: 0, scaleY: 0, transformOrigin: 'bottom' },
    visible: { opacity: 1, scaleY: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const chatVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
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
            <Route path="/team" element={<TeamSection ref={setSectionRef(4)} />} />
            <Route
              path="/shop"
              element={
                <motion.div
                  ref={setSectionRef(5)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Shop />
                </motion.div>
              }
            />
            <Route
              path="/testimonials"
              element={
                <motion.div
                  ref={setSectionRef(6)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <TestimonialsSection />
                </motion.div>
              }
            />
            {services.map((service, index) => (
              <Route
                key={service.path}
                path={service.path}
                element={
                  <motion.div
                    ref={setSectionRef(index + 7)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <ServicePage
                      title={service.title}
                      description={service.description}
                      details={service.details}
                      frameworks={service.frameworks}
                      tools={service.tools}
                    />
                  </motion.div>
                }
              />
            ))}
          </Routes>
          <Footer />
        </div>

        {/* Floating Action Button with Menu */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed bottom-6 right-6 bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] p-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 z-50"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaComment className="h-6 w-6" />}
        </motion.button>

        {/* Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed bottom-20 right-6 bg-[#ffffff] dark:bg-[#000000] rounded-lg shadow-lg border border-[#D1D5DB] dark:border-[#4B5563] z-50"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex flex-col p-2">
                <motion.button
                  onClick={scrollToTop}
                  className="flex items-center px-4 py-2 text-[#000000] dark:text-[#ffffff] hover:bg-[#D1D5DB] dark:hover:bg-[#4B5563] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  aria-label="Scroll to top"
                >
                  <FaArrowUp className="mr-2" /> Scroll to Top
                </motion.button>
                <motion.button
                  onClick={toggleChat}
                  className="flex items-center px-4 py-2 text-[#000000] dark:text-[#ffffff] hover:bg-[#D1D5DB] dark:hover:bg-[#4B5563] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  aria-label="Open chat area"
                >
                  <FaComment className="mr-2" /> Chat Area
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Area */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              className="fixed bottom-6 right-6 w-80 bg-[#ffffff] dark:bg-[#000000] rounded-lg shadow-lg border border-[#D1D5DB] dark:border-[#4B5563] z-50 flex flex-col max-h-[400px]"
              variants={chatVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex justify-between items-center p-4 border-b border-[#D1D5DB] dark:border-[#4B5563]">
                <h3 className="text-lg font-bold text-[#000000] dark:text-[#ffffff]">Zelox Chat</h3>
                <motion.button
                  onClick={toggleChat}
                  className="text-[#000000] dark:text-[#ffffff] hover:text-[#D1D5DB]"
                  aria-label="Close chat"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes />
                </motion.button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <span
                      className={`inline-block p-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-[#D1D5DB] dark:bg-[#4B5563] text-[#000000] dark:text-[#ffffff]'
                          : 'bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000]'
                      }`}
                    >
                      {message.text}
                    </span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="p-4 border-t border-[#D1D5DB] dark:border-[#4B5563]">
                <input
                  ref={chatInputRef}
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full p-2 border border-[#D1D5DB] dark:border-[#4B5563] rounded focus:outline-none focus:ring-2 focus:ring-[#000000] dark:focus:ring-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff]"
                  aria-label="Chat input"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;