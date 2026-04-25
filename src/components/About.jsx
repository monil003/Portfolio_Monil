import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { Terminal, Database, Cloud } from 'lucide-react';

const About = ({ summary, collaboration }) => {
  return (
    <section className="section" id="about">
      <div className="container">
        <span className="section-label">_about me</span>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-content glass-panel hover-lift"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="summary-text">{summary}</p>
          
          {collaboration && (
            <div className="collaboration-banner">
              <strong>✨ Let's Connect:</strong> {collaboration}
            </div>
          )}
          
          <div className="highlight-boxes">
            <motion.div className="highlight-box" whileHover={{ y: -5 }}>
              <Terminal className="highlight-icon" />
              <h3>SuiteScript & React</h3>
              <p>Building scalable business solutions and interactive interfaces.</p>
            </motion.div>
            <motion.div className="highlight-box" whileHover={{ y: -5 }}>
              <Database className="highlight-icon" />
              <h3>Data & AI Automations</h3>
              <p>Streamlining complex financial workflows and ERP integrations.</p>
            </motion.div>
            <motion.div className="highlight-box" whileHover={{ y: -5 }}>
              <Cloud className="highlight-icon" />
              <h3>Cloud Architecture</h3>
              <p>Deploying AI-driven agents and integrations on Azure/AWS.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
