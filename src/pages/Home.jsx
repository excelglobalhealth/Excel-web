import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const SparkleIcon = () => (
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="#111827" 
    className="sparkle-icon" 
    aria-hidden="true"
  >
    <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
  </svg>
);

const OrangeArrowIcon = () => (
  <svg 
    width="44" 
    height="20" 
    viewBox="0 0 44 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="product-orange-arrow"
    aria-hidden="true"
  >
    <path 
      d="M0 10H38M38 10L26 3M38 10L26 17" 
      stroke="#e65100" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const heroSlides = [
  {
    id: 'main-hero',
    type: 'main',
    duration: 4000,
    bgImage: '/assets/Hero_home.jpeg',
    headline: (
      <>
        Your Gateway to<br />
        Global Healthcare<br />
        Markets
      </>
    ),
    description: (
      <>
        Helping healthcare<br />
        manufacturers and distributors<br />
        connect, launch, and grow<br />
        across international markets.
      </>
    ),
    ctaText: 'Explore our Products',
    ctaLink: '/products'
  },
  {
    id: 'banner-1',
    type: 'banner',
    duration: 3000,
    image: '/assets/Banner_1.jpeg',
    alt: 'Complete Care for Every Skin - Celex & Dermatone Derma Range',
    link: '/products#dermatology'
  },
  {
    id: 'banner-2',
    type: 'banner',
    duration: 3000,
    image: '/assets/Banner_2.jpeg',
    alt: 'Complete Care for Ears, Nose & Throat - Olive-Ease, Ear-Ease, Delsal, Euclear',
    link: '/products#oral'
  },
  {
    id: 'banner-3',
    type: 'banner',
    duration: 3000,
    image: '/assets/Banner_3.jpeg',
    alt: 'Rubit - Complete Pain Management',
    link: '/products#pain'
  }
];

const productsData = [
  {
    id: 'dermatology-skincare',
    title: 'Dermatology & Skincare',
    description: (
      <>
        Discover specialised products designed to support healthy skin and address a range of dermatological needs.<br />
        Explore trusted skincare solutions for everyday care and targeted support.
      </>
    ),
    link: '/products#dermatology'
  },
  {
    id: 'oral-healthcare',
    title: 'Oral Healthcare',
    description: (
      <>
        Explore products developed to support effective oral hygiene, dental care, and healthier smiles.<br />
        Our range includes trusted solutions for everyday and specialised oral healthcare needs.
      </>
    ),
    link: '/products#oral'
  },
  {
    id: 'pain-management',
    title: 'Pain Management',
    description: (
      <>
        Discover effective solutions designed to support pain relief, comfort, and everyday mobility.<br />
        Explore products developed to address a range of pain management needs.
      </>
    ),
    link: '/products#pain'
  },
  {
    id: 'otc',
    title: 'OTC',
    description: (
      <>
        Discover effective solutions designed to support pain relief, comfort, and everyday mobility.<br />
        Explore products developed to address a range of pain management needs.
      </>
    ),
    link: '/products#otc'
  }
];

const partnersFlags = [
  {
    country: 'Oman',
    flag: '/assets/Flag_of_Oman.svg.webp'
  },
  {
    country: 'Qatar',
    flag: '/assets/Flag_of_Qatar.svg.webp'
  },
  {
    country: 'United Arab Emirates',
    flag: '/assets/Flag_of_the_United_Arab_Emirates.svg'
  },
  {
    country: 'Bahrain',
    flag: '/assets/Flag_of_Bahrain.svg.webp'
  }
];

const managementTeam = [
  {
    id: 'shailendra',
    name: 'Shailendra V M',
    bio: 'Diversified experience ranging from Sales & Marketing as the Regional Head for Novo Nordisk for 14 years and as a banker with ICICI bank, before establishing own pharma distribution business.',
    image: '/assets/shailendra_portrait.jpg'
  },
  {
    id: 'jills',
    name: 'Jills Dainel',
    bio: 'Pharmacist by profession and an extensive international experience, strong interest in innovative medical technologies with 20 years in Diabetes, Point of Care, Critical Care, Dental, Cardiology, Infection Control, Diagnostics Physiotherapy & Pharma.',
    image: '/assets/jills_portrait.jpg'
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const currentDuration = heroSlides[currentSlide].duration;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, currentDuration);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main className="home-page-container">
      {/* Hero Section Carousel */}
      <section className="hero-section" aria-label="Hero Carousel">
        <div className="hero-slides-wrapper">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;

            if (slide.type === 'main') {
              return (
                <div
                  key={slide.id}
                  className={`hero-slide hero-slide-main ${isActive ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                  aria-hidden={!isActive}
                >
                  <div className="hero-overlay" aria-hidden="true" />
                  <div className="hero-content-wrapper">
                    <div className="hero-split-grid">
                      {/* Left Column: Text Content */}
                      <div className="hero-left-column">
                        <h1 className="hero-headline">{slide.headline}</h1>
                        <p className="hero-description">{slide.description}</p>
                        <div className="hero-actions">
                          <Link
                            to={slide.ctaLink}
                            className="hero-cta-btn"
                            id="hero-explore-products-btn"
                          >
                            {slide.ctaText}
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: Visual Area for Globe */}
                      <div className="hero-right-column" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={slide.id}
                className={`hero-slide hero-slide-banner ${isActive ? 'active' : ''}`}
                aria-hidden={!isActive}
              >
                <Link to={slide.link} className="hero-banner-link" tabIndex={isActive ? 0 : -1}>
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="hero-banner-img"
                    loading={index === 1 ? 'eager' : 'lazy'}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Indicators */}
        <div className="hero-carousel-indicators" role="tablist" aria-label="Hero Slide Selectors">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={idx === currentSlide}
              aria-label={`Slide ${idx + 1}`}
              className={`hero-indicator-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      </section>

      {/* About Us / Connecting Healthcare Beyond Borders Section */}
      <section className="about-overview-section" aria-label="About Us Overview">
        <div className="about-overview-container">
          {/* Header Part */}
          <motion.div
            className="about-overview-header"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="about-tag">About Us</h2>
            <h3 className="about-headline">
              Connecting Healthcare<br />
              Beyond Borders.
            </h3>
          </motion.div>

          {/* Horizontal dividing line — draws across on scroll */}
          <motion.div
            className="about-header-divider"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Two-column Body */}
          <div className="about-body-grid">
            {/* Left description column */}
            <motion.div
              className="about-left-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            >
              <p>
                Excel Global Health helps healthcare manufacturers and distributors build meaningful connections across international markets. We bring together products, partners, and opportunities to support sustainable global growth.
              </p>
            </motion.div>

            {/* Right feature rows column */}
            <div className="about-features-list">
              {/* Feature 1: Global Reach */}
              <motion.div
                className="about-feature-item"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                whileHover={{ x: 6, transition: { duration: 0.25 } }}
              >
                <div className="feature-icon-wrapper">
                  <SparkleIcon />
                </div>
                <div className="feature-text-wrapper">
                  <h4 className="feature-title">Global Reach</h4>
                  <p className="feature-desc">
                    Connecting businesses with opportunities across international healthcare markets.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2: Strategic Partnerships */}
              <motion.div
                className="about-feature-item"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
                whileHover={{ x: 6, transition: { duration: 0.25 } }}
              >
                <div className="feature-icon-wrapper">
                  <SparkleIcon />
                </div>
                <div className="feature-text-wrapper">
                  <h4 className="feature-title">Strategic Partnerships</h4>
                  <p className="feature-desc">
                    Building strong relationships between manufacturers, distributors, and market partners.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3: Market Growth */}
              <motion.div
                className="about-feature-item"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
                whileHover={{ x: 6, transition: { duration: 0.25 } }}
              >
                <div className="feature-icon-wrapper">
                  <SparkleIcon />
                </div>
                <div className="feature-text-wrapper">
                  <h4 className="feature-title">Market Growth</h4>
                  <p className="feature-desc">
                    Supporting companies as they launch, expand, and grow internationally.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-overview-section" aria-label="Healthcare Products Overview">
        <div className="products-overview-container">
          {/* Section Header */}
          <motion.div
            className="products-section-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="products-main-title">PRODUCTS</h2>
            <h3 className="products-sub-title">Healthcare Solutions for Diverse Markets.</h3>
          </motion.div>

          {/* Products List Rows */}
          <div className="products-list-rows">
            {productsData.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-row-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                whileHover={{
                  backgroundColor: 'rgba(230, 81, 0, 0.025)',
                  borderLeftColor: '#e65100',
                  paddingLeft: '1rem',
                  transition: { duration: 0.25 }
                }}
                style={{ borderLeft: '3px solid transparent', paddingLeft: '0rem', transition: 'padding-left 0.25s, border-left-color 0.25s' }}
              >
                {/* Left Side: Category Title and Explore Button */}
                <div className="product-left-cell">
                  <h4 className="product-category-title">{product.title}</h4>
                  <div className="product-action-wrapper">
                    <Link to={product.link} className="product-explore-btn">
                      Explore &rarr;
                    </Link>
                  </div>
                </div>

                {/* Right Side: Long Orange Arrow and Description */}
                <motion.div
                  className="product-right-cell"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.25 }}
                >
                  <div className="product-arrow-box">
                    <OrangeArrowIcon />
                  </div>
                  <p className="product-desc-text">{product.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Partners Section */}
      <section className="partners-overview-section" aria-label="International Partners Overview">
        <div className="partners-overview-container">
          {/* Top Heading */}
          <div className="partners-top-block">
            <div className="partners-header-left">
              <h2 className="partners-main-title">INTERNATIONAL PARTNERS</h2>
              <p className="partners-sub-tagline">
                Building Connections.<br />
                Expanding Possibilities.
              </p>
              <p className="partners-description-para" style={{ marginTop: '1.5rem' }}>
                We work with trusted international partners to connect quality healthcare products with new markets and opportunities around the world.
              </p>
            </div>
          </div>

          {/* Flags Row — click to navigate to Partners page filtered by country */}
          <div className="partners-flags-row">
            {partnersFlags.map((partner) => (
              <Link
                key={partner.country}
                to={`/partners#${partner.country.toLowerCase().replace(/\s+/g, '-')}`}
                className="partner-flag-card"
                title={`View distributors in ${partner.country}`}
              >
                <img
                  src={partner.flag}
                  alt={`Flag of ${partner.country}`}
                  className="partner-flag-img"
                  loading="lazy"
                />
                <span className="partner-flag-label">{partner.country}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Excel Management Section */}
      <section className="management-overview-section" aria-label="Excel Management Overview">
        <div className="management-overview-container">
          {/* Header */}
          <div className="management-section-header">
            <h2 className="management-main-title">Excel Management</h2>
            <p className="management-intro-para">
              Our team of experts consists of seasoned professionals with diverse backgrounds and a shared passion for empowering businesses. Together, we bring a wealth of knowledge, expertise, and creativity to every project, ensuring innovative solutions and exceptional service
            </p>
          </div>

          {/* Divider */}
          <div className="management-header-divider" />

          {/* Management Profiles List */}
          <div className="management-profiles-list">
            {managementTeam.map((member) => (
              <div key={member.id} className="management-member-row">
                {/* Left Side: Bullet, Name & Bio */}
                <div className="management-member-info">
                  <div className="management-name-heading">
                    <span className="management-bullet-dot" aria-hidden="true" />
                    <h3 className="management-member-name">{member.name}</h3>
                  </div>
                  <p className="management-member-bio">{member.bio}</p>
                </div>

                {/* Right Side: Portrait Image */}
                <div className="management-member-photo-box">
                  <img 
                    src={member.image} 
                    alt={`Portrait of ${member.name}`} 
                    className="management-member-img"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
