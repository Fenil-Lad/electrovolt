import React from 'react';
import './ElectrovoltAppFeatures.css';

const features = [
  {
    title: 'Real-Time Station Discovery',
    icon: (
      <svg className="card-icon" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    description:
      'Instantly locate charging stations near you with powerful search tools and interactive map views.',
  },
  {
    title: 'Live Charger Availability',
    icon: (
      <svg className="card-icon" viewBox="0 0 24 24">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0114.13-3.36L23 10M1 14l5.36 5.36A9 9 0 0020.49 15" />
      </svg>
    ),
    description:
      'Skip the wait. Get live updates on charger status so you know what’s available before you arrive.',
  },
  {
    title: 'Personalized Filters',
    icon: (
      <svg className="card-icon" viewBox="0 0 24 24">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <circle cx="4" cy="12" r="2" />
        <circle cx="12" cy="10" r="2" />
        <circle cx="20" cy="14" r="2" />
      </svg>
    ),
    description:
      'Customize your experience by filtering stations based on charging speed, plug type, availability, and more.',
  },
];

const ElectrovoltAppFeatures = () => {
  return (
    <section className="electro-section">
      <h2 className="section-title">Discover the Electrovolt App</h2>
      <p className="section-subtitle">
        Take control of your EV experience with the Electrovolt app — your intelligent companion for finding, filtering, and
        navigating to electric vehicle charging stations.
      </p>

      <div className="features-container">
       
        {/* Glass cards */}
        {features.map((feature, index) => (
          <div key={index} className="glass-card">
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <div className="learn-more-container">
        <button className="learn-more-button">Learn More</button>
      </div>
    </section>
  );
};

export default ElectrovoltAppFeatures;
