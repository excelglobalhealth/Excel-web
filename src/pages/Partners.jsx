import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Partners.css';

const countriesData = [
  {
    id: 'oman',
    name: 'Oman',
    flag: '/assets/Flag_of_Oman.svg.webp',
    distributors: [
      {
        name: 'Al Nawras Medical Supplies',
        type: 'Medical Equipment & Pharmaceuticals',
        region: 'Muscat, Oman',
        description: 'A leading distributor of medical equipment and pharmaceutical products across the Sultanate of Oman, serving hospitals, clinics, and pharmacies.'
      },
      {
        name: 'Muscat Medical Supplies',
        type: 'Medical Equipment & Pharmaceuticals',
        region: 'Muscat, Oman',
        description: 'A leading distributor of medical equipment and pharmaceutical products across the Sultanate of Oman, serving hospitals, clinics, and pharmacies.'
      },
    ]
  },
  {
    id: 'qatar',
    name: 'Qatar',
    flag: '/assets/Flag_of_Qatar.svg.webp',
    distributors: [
      {
        name: 'Doha Pharma Distributors',
        type: 'Pharmaceutical Distribution',
        region: 'Doha, Qatar',
        description: 'A premier pharmaceutical distributor in Qatar, partnering with international manufacturers to bring quality healthcare products to local markets.'
      },
      {
        name: 'Qatar Medical Hub',
        type: 'Medical Devices & Skincare',
        region: 'Al Rayyan, Qatar',
        description: 'Providing comprehensive medical device and skincare product distribution to healthcare institutions and retail pharmacies across Qatar.'
      }
    ]
  },
  {
    id: 'united-arab-emirates',
    name: 'United Arab Emirates',
    flag: '/assets/Flag_of_the_United_Arab_Emirates.svg',
    distributors: [
      {
        name: 'Abu Dhabi MedCare Trading',
        type: 'Healthcare Distribution',
        region: 'Abu Dhabi, UAE',
        description: 'A trusted partner for oral healthcare, dermatology, and pain management products, serving the greater Abu Dhabi healthcare ecosystem.'
      }
    ]
  },
  {
    id: 'bahrain',
    name: 'Bahrain',
    flag: '/assets/Flag_of_Bahrain.svg.webp',
    distributors: [
      {
        name: 'Bahrain Pharma Group',
        type: 'Pharmaceuticals & Medical Devices',
        region: 'Manama, Bahrain',
        description: 'A well-established pharmaceutical group offering end-to-end distribution services for healthcare manufacturers looking to enter the Bahrain market.'
      },
    ]
  }
];

const Partners = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay so the DOM is fully rendered
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <div className="partners-page">
      {/* Hero */}
      <section className="partners-page-hero">
        <div className="partners-page-hero-container">
          <h1 className="partners-page-title">International Partners</h1>
          <p className="partners-page-subtitle">
            Building Connections. Expanding Possibilities.
          </p>
          <p className="partners-page-description">
            We work with trusted international distributors to connect quality healthcare products with new markets and opportunities around the world. Click on a region below to explore our distribution network.
          </p>
        </div>
      </section>

      {/* Country Tabs / Anchor Nav */}
      <nav className="partners-country-nav" aria-label="Navigate to country">
        {countriesData.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="partners-country-nav-item"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(c.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <img src={c.flag} alt={`Flag of ${c.name}`} className="nav-flag-mini" />
            {c.name}
          </a>
        ))}
      </nav>

      {/* Per-Country Sections */}
      {countriesData.map((country, cIdx) => (
        <section
          key={country.id}
          id={country.id}
          className={`country-section ${cIdx % 2 === 0 ? 'country-section-light' : 'country-section-dark'}`}
          aria-label={`Distributors in ${country.name}`}
        >
          <div className="country-section-container">
            {/* Country Header */}
            <div className="country-header">
              <div className="country-flag-wrapper">
                <img src={country.flag} alt={`Flag of ${country.name}`} className="country-flag-img" />
              </div>
              <div className="country-header-text">
                <h2 className="country-name">{country.name}</h2>
                <p className="country-distributor-count">
                  {country.distributors.length} Distributor{country.distributors.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>

            <div className="country-header-divider" />

            {/* Distributor Cards */}
            <div className="distributors-grid">
              {country.distributors.map((dist, dIdx) => (
                <div key={dIdx} className="distributor-card">
                  <div className="distributor-card-top">
                    <span className="distributor-type-tag">{dist.type}</span>
                  </div>
                  <h3 className="distributor-name">{dist.name}</h3>
                  <p className="distributor-region">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    {dist.region}
                  </p>
                  <p className="distributor-description">{dist.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Partners;
