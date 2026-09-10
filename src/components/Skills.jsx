import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiJavascript, 
  SiGit, 
  SiDocker, 
  SiJsonwebtokens 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import './Skills.css';

const skillsData = [
  { name: 'React.js', percentage: 90, icon: <SiReact className="skill-icon icon-react" /> },
  { name: 'Node.js / Express.js', percentage: 90, icon: <SiNodedotjs className="skill-icon icon-node" /> },
  { name: 'MongoDB / SQL', percentage: 85, icon: <SiMongodb className="skill-icon icon-mongo" /> },
  { name: 'JavaScript (ES6+)', percentage: 92, icon: <SiJavascript className="skill-icon icon-js" /> },
  { name: 'REST APIs & Auth (JWT)', percentage: 88, icon: <SiJsonwebtokens className="skill-icon icon-jwt" /> },
  { name: 'Git & GitHub', percentage: 90, icon: <SiGit className="skill-icon icon-git" /> },
  { name: 'AWS (Cloud Practitioner)', percentage: 70, icon: <FaAws className="skill-icon icon-aws" /> },
  { name: 'Docker & Kubernetes', percentage: 60, icon: <SiDocker className="skill-icon icon-docker" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 35, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Work <span>Skills</span></h2>
          <p>
            Proficient across full-stack web development, database architecture, 
            secure REST API integration, and cloud-native DevOps technologies.
          </p>
        </motion.div>

        {/* Skill Card Grid with Staggered Scroll Animation */}
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="skill-icon-container">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              
              {/* Progress Bar Container with Animated Width Fill */}
              <div className="skill-progress-wrapper">
                <div className="skill-progress-bar">
                  <motion.div 
                    className="skill-progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 + index * 0.05 }}
                  />
                </div>
                <span className="skill-percentage-pill">{skill.percentage}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
