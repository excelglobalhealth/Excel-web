import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <h1 className="about-hero-title">About Excel Global Health</h1>
          <h2 className="about-hero-subtitle">Finding Inspiration in Every Turn</h2>
          <p className="about-hero-description">
            Building meaningful connections between healthcare manufacturers, distributors, and international markets.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story-section">
        <div className="about-story-container">
          <div className="about-story-content">
            <h3 className="about-section-title">Our Story</h3>
            <div className="about-story-text">
              <p>
                Excel Global Health was founded with a vision to bring innovative healthcare technologies and quality products to a wider global market. Drawing inspiration from India's long-standing contribution to medicine and healthcare, we strive to build meaningful connections between manufacturers, distributors, healthcare professionals, and international markets.
              </p>
              <p>
                Our journey is driven by a commitment to making trusted and innovative healthcare solutions more accessible, helping improve quality of life while creating stronger partnerships across borders.
              </p>
            </div>
          </div>
          
          <div className="about-quotes-container">
            <blockquote className="card-quote">
              <div className="quote-icon">"</div>
              <p>Technology will not replace great Doctors, but technology in the hands of great Doctors can be transformational</p>
            </blockquote>

            <blockquote className="card-quote quote-alt">
              <div className="quote-icon">"</div>
              <p>The secret of health for both mind and body is not to mourn for the past, or anticipate troubles, but to live in the present moment wisely and earnestly</p>
              <footer className="quote-author">– Buddha</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
