import React, { useState } from 'react';

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.326V1.326C24 .597 23.403 0 22.675 0z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.18 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <main className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero-section" aria-label="Get in Touch">
        <div className="contact-hero-container">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-description">
            We'd be happy to hear from you. Whether you're interested in our products, international partnerships, or business opportunities, our team is here to help. Get in touch with us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Let's Connect Form Section */}
      <section className="contact-connect-section" aria-label="Let's Connect">
        <div className="contact-connect-container">
          <h2 className="contact-connect-title">Let’s Connect</h2>

          {/* Contact Details Grid */}
          <div className="contact-info-grid">
            <div className="contact-info-col">
              <span className="contact-info-label">Phone</span>
              <a href="tel:+919902877330" className="contact-info-val">
                +91 9902877330
              </a>
              <a href="tel:+919007429667" className="contact-info-val">
                +91 9007429667
              </a>
            </div>

            <div className="contact-info-col">
              <span className="contact-info-label">Email</span>
              <a href="mailto:info@excelglobalhealth.com" className="contact-info-val">
                info@excelglobalhealth.com
              </a>
            </div>

            <div className="contact-info-col">
              <span className="contact-info-label">Social Media</span>
              <div className="contact-social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="contact-social-link"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="contact-social-link"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="contact-social-link"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="contact-social-link"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-form-field">
                <label htmlFor="firstName" className="contact-field-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="contact-field-input"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="lastName" className="contact-field-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="contact-field-input"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="email" className="contact-field-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-field-input"
                />
              </div>
            </div>

            <div className="contact-form-field message-field">
              <label htmlFor="message" className="contact-field-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="contact-field-textarea"
              />
            </div>

            <div className="contact-form-actions">
              <button
                type="submit"
                className="contact-submit-btn"
                id="contact-send-btn"
              >
                Send
              </button>
              {submitted && (
                <p className="contact-success-msg">Thanks for submitting!</p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;

