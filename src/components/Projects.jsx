import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { ExternalLink, Code2, Folder } from 'lucide-react';

const Projects = ({ projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <span className="section-label">_featured work</span>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div className="project-card glass-panel hover-lift" key={index} variants={itemVariants} whileHover={{ y: -10 }}>
              <div className="project-header">
                <Folder className="folder-icon" size={40} />
                <div className="project-links">
                  <a href="#" aria-label="Source Code"><Code2 size={20} /></a>
                  <a href="#" aria-label="External Link"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description} <span className="project-period">({project.period})</span></p>
              
              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              
              <div className="project-tech">
                {project.name.includes('AI') ? (
                  <>
                    <span>AI Agents</span>
                    <span>NetSuite API</span>
                    <span>OCR Models</span>
                    <span>JSON Processing</span>
                  </>
                ) : (
                  <>
                    <span>React Native</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Spring Boot</span>
                    <span>AWS</span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
