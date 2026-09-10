import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        
        {/* Contact Banner Header with Framer Motion Reveal */}
        <motion.div 
          className="footer-contact-banner"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-banner-info">
            <span className="badge">Get In Touch</span>
            <h2>Let's build something <span className="highlight">extraordinary</span> together.</h2>
            <p>Whether you have a question, project proposal, or just want to connect, feel free to reach out!</p>
          </div>
          
          <div className="footer-banner-actions">
            <motion.a 
              href="mailto:maikhaled.aboeldahab@gmail.com" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send an Email <FaEnvelope />
            </motion.a>
            <motion.a 
              href="https://wa.me/201128004712" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline whatsapp-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Chat <FaWhatsapp />
            </motion.a>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="footer-grid">
          
          {/* Brand Info Column */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <div className="logo-badge">MA</div>
              <span className="logo-name">Mai <span className="highlight">Abo-ElDahab</span></span>
            </div>
            <p className="brand-desc">
              Full-Stack Developer & Junior DevOps Engineer dedicated to creating responsive, high-performance web applications and cloud integrations.
            </p>
            
            {/* Social Connect Buttons with whileHover & whileTap */}
            <div className="social-links">
              <motion.a 
                href="https://www.linkedin.com/in/mai-aboeldahab2092000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-pill linkedin"
                title="LinkedIn Profile"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin /> LinkedIn
              </motion.a>
              <motion.a 
                href="https://wa.me/201128004712" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-pill whatsapp"
                title="Direct WhatsApp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp /> WhatsApp
              </motion.a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education & Certs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact Info</h4>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <span className="contact-label">Phone</span>
                <a href="tel:01128004712" className="contact-value">+20 112 800 4712</a>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <span className="contact-label">Email</span>
                <a href="mailto:maikhaled.aboeldahab@gmail.com" className="contact-value">maikhaled.aboeldahab@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">Cairo, Zahraa Nasr City</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 Mai Abo-ElDahab. All Rights Reserved.
          </p>
          <motion.button 
            className="back-to-top-btn" 
            onClick={scrollToTop} 
            title="Back to top"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            Top <FaArrowUp />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
