import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBrain, FaRocket, FaCalculator } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Heal Mind',
    subtitle: 'AI-Powered Mental Health Platform',
    icon: <FaBrain />,
    description: 'A mental health platform connecting patients with certified doctors, featuring an AI assistant (RAG) for contextual guidance, community support features, and role-based auth for patients, doctors, and admins.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RAG AI'],
    // TODO: add live/github link
    link: '#'
  },
  {
    id: 2,
    title: 'A-Space',
    subtitle: 'Research-to-Implementation Platform (In Progress)',
    icon: <FaRocket />,
    description: 'A platform that converts space-field scientific research into actionable implementation plans, with RESTful APIs and a database architecture to structure research-derived project data.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    // TODO: add live/github link
    link: '#'
  },
  {
    id: 3,
    title: 'Linear Equation Solver',
    subtitle: 'High-Performance Math Engine',
    icon: <FaCalculator />,
    description: 'A C++ application capable of solving systems of up to 100 linear equations, applying core data structures and advanced numerical algorithms.',
    tags: ['C++', 'Data Structures', 'Algorithms', 'Linear Algebra'],
    // TODO: add live/github link
    link: '#'
  }
];

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
  hidden: { y: 40, opacity: 0, scale: 0.96 },
  show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured <span>Projects</span></h2>
          <p>
            Demonstrating production-ready full-stack applications, intelligent AI integrations, 
            and algorithmic problem solving.
          </p>
        </motion.div>

        {/* Projects Grid with Framer Motion Stagger & Scale-up */}
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projectsData.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(244, 98, 58, 0.35)"
              }}
              transition={{ duration: 0.25 }}
            >
              {/* Card Banner */}
              <div className="project-banner">
                <div className="project-banner-overlay"></div>
                <div className="project-icon-badge">
                  {project.icon}
                </div>
              </div>

              <div className="project-body">
                <span className="project-subtitle">{project.subtitle}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech Stack Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                {/* Card Action Button with whileHover & whileTap */}
                <div className="project-footer">
                  {/* TODO: update href with real demo or GitHub link when available */}
                  <motion.a 
                    href={project.link} 
                    className="project-action-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      if (project.link === '#') {
                        e.preventDefault();
                        alert('Project link coming soon! (TODO: replace with live/github link)');
                      }
                    }}
                    title="View Project Details"
                  >
                    View Project <span className="arrow-circle"><FaArrowRight /></span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
