import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ name }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo gradient-text" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          {name.split(' ')[0]}<span style={{ color: 'var(--text-primary)' }}>.</span>
        </a>

        <div className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollToSection(link)} className="nav-item">
              _{link.toLowerCase()}
            </button>
          ))}
        </div>

        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollToSection(link)} className="mobile-nav-item">
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
