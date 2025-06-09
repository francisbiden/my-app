"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiServer, FiMail } from 'react-icons/fi';

type NavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems: NavItem[] = [
    { name: 'home', path: '/', icon: <FiHome /> },
    { name: 'about', path: '/about', icon: <FiUser /> },
    { name: 'skills', path: '/skills', icon: <FiCode /> },
    { name: 'projects', path: '/projects', icon: <FiBriefcase /> },
    { name: 'services', path: '/services', icon: <FiServer /> },
    { name: 'contact', path: '/contact', icon: <FiMail /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  const navVariants = {
    closed: { 
      height: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      }
    },
    open: { 
      height: "auto",
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <motion.div 
          className="navbar__logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home">Portfolio</a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="navbar__desktop">
          <ul className="navbar__desktop-list">
            {navItems.map((item) => (
              <motion.li 
                key={item.name}
                className="navbar__desktop-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={item.path} 
                  className={`navbar__link ${activeSection === item.name ? 'navbar__link--active' : ''}`}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="navbar__mobile-button" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              className="navbar__mobile"
              initial="closed"
              animate="open"
              exit="closed"
              variants={navVariants}
            >
              <motion.ul className="navbar__mobile-list">
                {navItems.map((item) => (
                  <motion.li 
                    key={item.name}
                    className="navbar__mobile-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href={item.path} 
                      onClick={toggleMobileMenu}
                      className={`navbar__mobile-link ${activeSection === item.name ? 'navbar__link--active' : ''}`}
                    >
                      <span className="navbar__mobile-icon">{item.icon}</span>
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;