import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaDownload, FaMoon, FaSun } from 'react-icons/fa';
import resumePdf from '../assets/Mai_AboElDahab_Resume_FullStack.pdf';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Set default data-theme attribute on mount
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">Mai Khaled<span className="logo-dot">.</span></span>
        </a>

        {/* Center Nav Links */}
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>About</a>
          </li>
          <li className="nav-item">
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </li>
        </ul>

        {/* Right Actions: Dark/Light Toggle + Red Download CV Button */}
        <div className="navbar-actions">
          {/* Dark / Light Mode Switcher Icon */}
          <button 
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme mode"
          >
            {theme === 'dark' ? <FaSun className="icon-sun" /> : <FaMoon className="icon-moon" />}
          </button>

          {/* Red Download CV Button */}
          <motion.a 
            href={resumePdf} 
            download="Mai_AboElDahab_Resume_FullStack.pdf"
            className="btn-cv-red"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV <FaDownload />
          </motion.a>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
