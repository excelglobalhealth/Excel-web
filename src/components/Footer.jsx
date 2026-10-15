import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer-outer-wrapper" aria-label="Site Footer">
      <div className="footer-inner-card">
        {/* Left Column: Brand Logo & CTA */}
        <div className="footer-left-column">
          <Link to="/" className="footer-logo-link" aria-label="Excel Global Health Home">
            <img src={logo} alt="Excel Global Health" className="footer-brand-logo-img" />
          </Link>

          {/* Get in Touch Button */}
          <Link to="/contact" className="footer-cta-button" id="footer-get-in-touch-btn">
            Get in Touch
          </Link>
        </div>

        {/* Right Column: Contact Details, Offices & Copyright */}
        <div className="footer-right-column">
          {/* Contact Details */}
          <div className="footer-info-group footer-contact-details">
            <a href="tel:+919605885579" className="footer-link-line">
              +91 9605 88 55 79
            </a>
            <a href="tel:+919902877330" className="footer-link-line">
              +91 9902877330
            </a>
            <a href="mailto:info@excelglobalhealth.com" className="footer-link-line footer-email-line">
              info@excelglobalhealth.com
            </a>
          </div>

          {/* Locations / Corporate Details */}
          <div className="footer-info-group footer-locations">
            <p className="footer-text-line">Excel Global Health LLC-FZ</p>
            <p className="footer-text-line">Dubai, U.A.E.</p>
            <p className="footer-text-line">Excel Global Health ,Bengaluru</p>
            <p className="footer-text-line">India.</p>
          </div>

          {/* Copyright Notice */}
          <div className="footer-info-group footer-copyright">
            <p className="footer-copyright-text">
              &copy; 2026 by Excel Global Health
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
