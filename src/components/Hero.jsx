import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import maiProfilePhoto from '../assets/pfff.png';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Generate 35 twinkling cosmic stars
const cosmicStars = Array.from({ length: 35 }).map((_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2.5 + 1}px`,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 3
}));

const FULL_TEXT = "Full Stack Developer";

const Hero = () => {
  // Typewriter effect starting with 'F' after a 0.3s (300ms) delay over 2.5s
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalTime = 1800 / FULL_TEXT.length; // ~90ms per character (1.8s total)

    // Delay typing by 0.6s (600ms)
    const delayTimer = setTimeout(() => {
      const timer = setInterval(() => {
        index++;
        setTypedText(FULL_TEXT.slice(0, index));
        if (index >= FULL_TEXT.length) {
          clearInterval(timer);
        }
      }, intervalTime);

      return () => clearInterval(timer);
    }, 600);

    return () => clearTimeout(delayTimer);
  }, []);

  // Framer Motion spring values for smooth mouse movement ONLY on the background shape
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 120 };
  const blobX = useSpring(rawX, springConfig);
  const blobY = useSpring(rawY, springConfig);

  // Track mouse movement across the Hero section
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Displacement for the background shape
    const moveX = ((e.clientX - centerX) / rect.width) * 60;
    const moveY = ((e.clientY - centerY) / rect.height) * 60;

    rawX.set(moveX);
    rawY.set(moveY);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero-section space-theme"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Space Background Atmosphere */}
      <div className="space-bg-container">
        {/* Cosmic Nebulae Glows */}
        <div className="cosmic-nebula nebula-cyan"></div>
        <div className="cosmic-nebula nebula-purple"></div>

        {/* Twinkling Cosmic Starfield */}
        <div className="starfield">
          {cosmicStars.map((star) => (
            <motion.div
              key={star.id}
              className="cosmic-star"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.4, 0.8]
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        <div className="shooting-star star-1"></div>
        <div className="shooting-star star-2"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-main-grid">

          {/* Left Column: Static Profile Photo with Interactive Movable Background Blob & Space Orbit Ring */}
          <div className="hero-avatar-area">

            {/* Space Orbit Ring rotating around avatar */}
            <motion.div
              className="space-orbit-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              <div className="orbit-planet planet-1"></div>
              <div className="orbit-planet planet-2"></div>
            </motion.div>

            {/* 1. MOVABLE BACKGROUND SHAPE (Reacts to mouse movement) */}
            <motion.div
              className="movable-blob-backdrop"
              style={{ x: blobX, y: blobY }}
            >
              <div className="blob-inner-glow"></div>
            </motion.div>

            {/* 2. STATIC PROFILE PHOTO */}
            <div className="static-profile-wrapper">
              <img
                src={maiProfilePhoto}
                alt="Mai Abo-ElDahab"
                className="static-profile-img"
              />
            </div>

          </div>

          {/* Right Column: Hero Text Area */}
          <motion.div
            className="hero-text-area"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.span className="hero-greeting" variants={itemVariants}>
              Hello, I'm
            </motion.span>

            <motion.h1 className="hero-name" variants={itemVariants}>
              Mai Abo-ElDahab
            </motion.h1>

            <motion.h2 className="hero-role" variants={itemVariants}>
              And I'm a <span className="highlight">{typedText}</span>
            </motion.h2>

            <motion.p className="hero-paragraph" variants={itemVariants}>
              Full-Stack Developer & Space Tech Engineer with hands-on experience building scalable web applications using
              Node.js, Express.js, React.js, MongoDB, and SQL. Skilled in designing RESTful APIs,
              JWT authentication, role-based access control, and cloud-ready infrastructure.
            </motion.p>

            {/* Social Icons Row */}
            <motion.div className="hero-social-row" variants={itemVariants}>
              <motion.a
                href="https://www.linkedin.com/in/mai-aboeldahab2092000"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                title="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/maikhaledaboeldahab"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                title="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://wa.me/201128004712"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                title="WhatsApp"
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href="mailto:maikhaled.aboeldahab@gmail.com"
                className="social-box"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                title="Email"
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="hero-buttons-row" variants={itemVariants}>
              <motion.a
                href="#contact"
                className="btn-primary"
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me <FaPaperPlane />
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Statistics Bar */}
        <motion.div
          className="hero-stats-bar"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years of<br />experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects<br />completed</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">12+</span>
            <span className="stat-label">Technologies<br />mastered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Clean Code<br />& Commits</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
