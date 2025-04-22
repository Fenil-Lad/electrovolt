import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="/">
          <img
            src="/static/logo_mini.png"
            alt="Electrovolt"
            className="logo-image"
          />
        </a>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/about" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>About Us</a></li>
        <li><a href="/services" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Services</a></li>
        <li><a href="/electrovoltapp" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Electrovolt App</a></li>
        <li><a href="/locate-charger" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Locate Charger</a></li>
        <li><a href="/contact" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Contact</a></li>
      </ul>


      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Nav;
