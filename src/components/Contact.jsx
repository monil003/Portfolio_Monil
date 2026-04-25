import React from 'react';
import './Contact.css';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

const Contact = ({ personal }) => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <span className="section-label">_contact</span>
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content glass-panel hover-lift">
          <p className="contact-text">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-info">
            <a href={`mailto:${personal.email}`} className="contact-item">
              <div className="contact-icon-wrapper"><Mail size={24} /></div>
              <span>{personal.email}</span>
            </a>
            
            <a href={`tel:${personal.phone.replace(/\\s/g, '')}`} className="contact-item">
              <div className="contact-icon-wrapper"><Phone size={24} /></div>
              <span>{personal.phone}</span>
            </a>
            
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon-wrapper"><Globe size={24} /></div>
              <span>LinkedIn Profile</span>
            </a>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper"><MapPin size={24} /></div>
              <span>{personal.location}</span>
            </div>
          </div>
          
          <div className="contact-cta">
            <a href={`mailto:${personal.email}`} className="btn primary hover-lift">Say Hello</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
