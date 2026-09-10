import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiJavascript, 
  SiGit, 
  SiDocker, 
  SiJsonwebtokens,
  SiDotnet,
  SiKubernetes,
  SiTerraform
} from 'react-icons/si';
import { FaAws, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import './Skills.css';

const skillsData = [
  // First lines: Development, Backend, Cloud & Core
  { name: 'React.js', icon: <SiReact className="skill-icon icon-react" /> },
  { name: 'Node.js / Express.js', icon: <SiNodedotjs className="skill-icon icon-node" /> },
  { name: '.NET', icon: <SiDotnet className="skill-icon icon-dotnet" /> },
  { name: 'JavaScript (ES6+)', icon: <SiJavascript className="skill-icon icon-js" /> },
  { name: 'MongoDB / SQL', icon: <SiMongodb className="skill-icon icon-mongo" /> },
  { name: 'REST APIs & Auth (JWT)', icon: <SiJsonwebtokens className="skill-icon icon-jwt" /> },
  { name: 'Git & GitHub', icon: <SiGit className="skill-icon icon-git" /> },
  { name: 'AWS (Cloud Practitioner)', icon: <FaAws className="skill-icon icon-aws" /> },
  { name: 'Docker', icon: <SiDocker className="skill-icon icon-docker" /> },
  
  // New Dedicated DevOps / Cloud Infrastructure Row
  { name: 'Kubernetes', icon: <SiKubernetes className="skill-icon icon-kubernetes" /> },
  { name: 'Terraform', icon: <SiTerraform className="skill-icon icon-terraform" /> },
  { name: 'DevSecOps', icon: <FaShieldAlt className="skill-icon icon-devsecops" /> },
  { name: 'Monitoring & Observability', icon: <FaChartLine className="skill-icon icon-monitoring" /> },
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
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
