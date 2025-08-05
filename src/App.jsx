import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ServicePage from './components/ServicePage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRefs = useRef([]);

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
    const sections = sectionRefs.current.filter((ref) => ref);
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return;
      isScrolling = true;

      const delta = e.deltaY;
      const currentScroll = window.scrollY;
      let targetSection = null;

      const currentSection = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > 0;
      });

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
  }, []);

  // Assign refs to sections
  const setSectionRef = (index) => (el) => {
    sectionRefs.current[index] = el;
  };

  // Service page data with detailed frameworks and tools
  const services = [
    {
      title: 'Web Development',
      description: 'Build scalable and responsive websites using modern technologies.',
      details:
        'Our web development services deliver high-performance, responsive websites tailored to your business needs. From e-commerce platforms to corporate sites, we ensure seamless user experiences, accessibility, and robust functionality. We handle front-end, back-end, and full-stack development, integrating modern frameworks and tools to meet your goals.',
      frameworks: [
        {
          name: 'React',
          pros: 'Flexible component-based architecture, large community, fast rendering with virtual DOM.',
          cons: 'Steep learning curve for beginners, requires additional libraries for state management.',
        },
        {
          name: 'Angular',
          pros: 'Comprehensive framework with built-in tools, strong typing with TypeScript, ideal for enterprise apps.',
          cons: 'Complex syntax, heavier bundle size compared to React.',
        },
        {
          name: 'Vite',
          pros: 'Lightning-fast build tool, supports modern ES modules, excellent development experience.',
          cons: 'Less mature ecosystem, limited plugin support compared to Webpack.',
        },
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
        {
          name: 'React Native',
          pros: 'Cross-platform development, reusable code, large community support.',
          cons: 'Performance slower than native, limited access to some native APIs.',
        },
        {
          name: 'Flutter',
          pros: 'Fast development with hot reload, consistent UI across platforms, high performance.',
          cons: 'Larger app size, less mature ecosystem compared to React Native.',
        },
        {
          name: 'Swift',
          pros: 'Optimized for iOS, high performance, seamless integration with Apple ecosystem.',
          cons: 'iOS-only, steeper learning curve for non-Apple developers.',
        },
        {
          name: 'Kotlin',
          pros: 'Modern syntax, Android-first, excellent interoperability with Java.',
          cons: 'Android-only, slower compilation compared to Flutter.',
        },
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
        {
          name: 'AWS',
          pros: 'Extensive service offerings, high scalability, robust security features.',
          cons: 'Complex pricing, steep learning curve for advanced services.',
        },
        {
          name: 'Azure',
          pros: 'Strong enterprise integration, hybrid cloud support, comprehensive AI tools.',
          cons: 'Higher costs for some services, less intuitive UI than AWS.',
        },
        {
          name: 'Docker',
          pros: 'Portable containers, simplifies deployment, supports microservices.',
          cons: 'Resource-intensive, requires orchestration for large-scale apps.',
        },
        {
          name: 'Kubernetes',
          pros: 'Powerful orchestration, auto-scaling, self-healing systems.',
          cons: 'Complex setup and management, steep learning curve.',
        },
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
        {
          name: 'Adobe Illustrator',
          pros: 'Industry-standard for vector graphics, precise control, scalable designs.',
          cons: 'Subscription cost, requires design expertise.',
        },
        {
          name: 'Figma',
          pros: 'Cloud-based, real-time collaboration, easy prototyping.',
          cons: 'Less powerful for complex vector editing compared to Illustrator.',
        },
        {
          name: 'Canva',
          pros: 'User-friendly, quick design creation, affordable for small businesses.',
          cons: 'Limited customization, less professional for complex branding.',
        },
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
            {services.map((service, index) => (
              <Route
                key={service.path}
                path={service.path}
                element={
                  <motion.div
                    ref={setSectionRef(index + 4)}
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