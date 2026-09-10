import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaUniversity, FaQuoteRight, FaAws } from 'react-icons/fa';
import { SiCoursera } from 'react-icons/si';
import './EducationCertifications.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 35, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const EducationCertifications = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2>Education & <span>Certifications</span></h2>
          <p>
            Academic background in Navigation and Space Technology coupled with industry-recognized cloud and web engineering credentials.
          </p>
        </motion.div>

        {/* Card Grid with Framer Motion Stagger */}
        <motion.div 
          className="education-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          
          {/* Education Card */}
          <motion.div 
            className="edu-card"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.25 }}
          >
            <div className="card-top-icon">
              <FaGraduationCap className="card-icon" />
              <FaQuoteRight className="quote-watermark" />
            </div>

            <span className="card-tag">Academic Degree</span>
            <h3 className="card-title">Bachelor of Navigation & Space Technology</h3>
            <h4 className="card-subtitle"><FaUniversity /> Beni-Suef University</h4>

            <div className="card-details">
              <span className="detail-pill">Graduated July 2023</span>
              <span className="detail-pill highlight">GPA 3.1</span>
            </div>

            <div className="grad-project-box">
              <span className="project-box-label">Graduation Project:</span>
              <p className="project-box-desc">
                "Designed and built an ion thruster system using debris particles for ion propulsion."
              </p>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div 
            className="edu-card"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.25 }}
          >
            <div className="card-top-icon">
              <FaAward className="card-icon" />
              <FaQuoteRight className="quote-watermark" />
            </div>

            <span className="card-tag">Certifications</span>
            <h3 className="card-title">Professional Credentials & Cloud Certs</h3>

            <div className="cert-list">
              <div className="cert-item">
                <div className="cert-badge-icon aws">
                  <FaAws />
                </div>
                <div className="cert-info">
                  <h5>AWS Cloud Practitioner</h5>
                  <p>Amazon Web Services</p>
                </div>
              </div>

              <div className="cert-item">
                <div className="cert-badge-icon aws">
                  <FaAws />
                </div>
                <div className="cert-info">
                  <h5>AWS Certified Developer</h5>
                  <p>Amazon Web Services</p>
                </div>
              </div>

              <div className="cert-item">
                <div className="cert-badge-icon coursera">
                  <SiCoursera />
                </div>
                <div className="cert-info">
                  <h5>Front End Development Specialization</h5>
                  <p>Coursera Professional Certificate</p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default EducationCertifications;
