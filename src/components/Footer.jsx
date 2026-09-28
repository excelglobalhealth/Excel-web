import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-outer-wrapper" aria-label="Site Footer">
      <div className="footer-inner-card">
        {/* Left Column: Brand Logo & CTA */}
        <div className="footer-left-column">
          <Link to="/" className="footer-logo-link" aria-label="Excel Global Health Home">
            <div className="footer-brand-container">
              {/* Logo Graphic with 3 stylized leaves */}
              <div className="footer-logo-graphic">
                <svg
                  width="110"
                  height="56"
                  viewBox="0 0 110 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="footer-logo-svg"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="footerLeafRed" x1="0" y1="1" x2="0.8" y2="0">
                      <stop offset="0%" stopColor="#C92C1D" />
                      <stop offset="100%" stopColor="#E64A19" />
                    </linearGradient>
                    <linearGradient id="footerLeafBlue" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0288D1" />
                      <stop offset="100%" stopColor="#00ACC1" />
                    </linearGradient>
                    <linearGradient id="footerLeafPink" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#C2185B" />
                      <stop offset="100%" stopColor="#EC407A" />
                    </linearGradient>
                  </defs>

                  {/* Left Leaf - Red / Orange */}
                  <path
                    d="M32 50C20 44 20 26 32 15C39 27 39 41 32 50Z"
                    fill="url(#footerLeafRed)"
                  />

                  {/* Center Leaf - Cyan / Blue */}
                  <path
                    d="M45 48C42 27 55 10 70 6C74 21 63 38 45 48Z"
                    fill="url(#footerLeafBlue)"
                  />

                  {/* Right Leaf - Rose / Pink */}
                  <path
                    d="M58 46C61 33 71 24 79 21C77 32 70 42 58 46Z"
                    fill="url(#footerLeafPink)"
                  />
                </svg>
              </div>

              {/* Logo Typography */}
              <div className="footer-brand-typography">
                <span className="footer-brand-excel">Excel</span>
                <span className="footer-brand-health">Global Health</span>
              </div>
            </div>
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
