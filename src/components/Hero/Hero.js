import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <img src="static/logo_tran.png" alt="Logo" className="hero-logo" />
        {/* <p className="hero-subtitle">
          India's Most Accurately<br />
          Located EV Charging Network
        </p> */}
        <button className="hero-button">Drive The Future</button>
      </section>
    </>
  );
};

export default HeroSection;
