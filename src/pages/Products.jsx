import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Products.css';

const productsData = [
  {
    id: 'dermatology',
    title: 'Dermatology & Skincare',
    tagline: 'Complete Care for Every Skin',
    bannerImage: '/assets/Banner_1.jpeg',
    bannerAlt: 'Dermatology & Skincare — Celex & Dermatone Range',
    description:
      'Discover specialised products designed to support healthy skin and address a range of dermatological needs. Our curated dermatology range is trusted by healthcare professionals across international markets.',
    products: [
      {
        name: 'Celex',
        category: 'Dermatological Solution',
        description: 'A clinically formulated skincare solution targeting a range of dermatological conditions, designed for everyday and targeted skin support.'
      },
      {
        name: 'Dermatone',
        category: 'Skin Toning & Care',
        description: 'Advanced skin toning and care product for comprehensive dermatological wellness, suitable for a wide range of skin types and conditions.'
      }
    ]
  },
  {
    id: 'oral',
    title: 'Oral Healthcare',
    tagline: 'Complete Care for Ears, Nose & Throat',
    bannerImage: '/assets/Banner_2.jpeg',
    bannerAlt: 'Oral Healthcare — Olive-Ease, Ear-Ease, Delsal, Euclear',
    description:
      'Explore products developed to support effective oral hygiene, dental care, and healthier smiles. Our range includes trusted solutions for everyday and specialised oral healthcare needs.',
    products: [
      {
        name: 'Olive-Ease',
        category: 'Ear Care',
        description: 'A gentle olive oil-based ear drop solution for softening and removing earwax, suitable for routine ear hygiene.'
      },
      {
        name: 'Ear-Ease',
        category: 'Ear Relief',
        description: 'Targeted ear care drops formulated to provide soothing relief from ear discomfort and support overall ear health.'
      },
      {
        name: 'Delsal',
        category: 'Nasal & Sinus Care',
        description: 'A saline-based nasal solution designed to cleanse and moisturise nasal passages, supporting sinus health and daily nasal hygiene.'
      },
      {
        name: 'Euclear',
        category: 'Throat & Respiratory',
        description: 'Formulated for effective throat and respiratory support, providing relief and comfort for everyday throat care needs.'
      }
    ]
  },
  {
    id: 'pain',
    title: 'Pain Management',
    tagline: 'Complete Pain Management',
    bannerImage: '/assets/Banner_3.jpeg',
    bannerAlt: 'Pain Management — Rubit',
    description:
      'Discover effective solutions designed to support pain relief, comfort, and everyday mobility. Our pain management range is developed to address a variety of pain types and intensity levels.',
    products: [
      {
        name: 'Rubit',
        category: 'Topical Pain Relief',
        description: 'A powerful topical pain relief solution providing fast-acting and long-lasting comfort for muscle and joint pain, ideal for everyday pain management needs.'
      }
    ]
  },
  {
    id: 'otc',
    title: 'OTC',
    tagline: 'Trusted Over-the-Counter Solutions',
    bannerImage: null,
    bannerAlt: null,
    description:
      'Our OTC portfolio offers a broad range of over-the-counter products designed for everyday health and wellness. These solutions are trusted by consumers and healthcare professionals alike.',
    products: [
      {
        name: 'General Wellness Range',
        category: 'Over-the-Counter',
        description: 'A curated selection of OTC health and wellness products designed to support day-to-day health needs, available across our international distribution network.'
      }
    ]
  }
];

const Products = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
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
    <div className="products-page">
      {/* Hero */}
      <section className="products-page-hero">
        <div className="products-page-hero-container">
          <h1 className="products-page-title">Healthcare Products</h1>
          <p className="products-page-subtitle">Healthcare Solutions for Diverse Markets</p>
          <p className="products-page-description">
            Explore our curated portfolio of certified medical and healthcare products across
            dermatology, oral care, pain management, and OTC categories — trusted by professionals
            and consumers across international markets.
          </p>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <nav className="products-category-nav" aria-label="Navigate to product category">
        {productsData.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="products-category-nav-item"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            {cat.title}
          </a>
        ))}
      </nav>

      {/* Per-Category Sections */}
      {productsData.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`product-category-section ${idx % 2 === 0 ? 'product-section-light' : 'product-section-dark'}`}
          aria-label={cat.title}
        >
          <div className="product-category-container">
            {/* Category Header */}
            <div className="product-category-header">
              <div className="product-category-header-text">
                <p className="product-category-eyebrow">{cat.tagline}</p>
                <h2 className="product-category-title">{cat.title}</h2>
                <p className="product-category-description">{cat.description}</p>
              </div>
              {cat.bannerImage && (
                <div className="product-category-banner">
                  <img
                    src={cat.bannerImage}
                    alt={cat.bannerAlt}
                    className="product-category-banner-img"
                    loading="lazy"
                  />
                </div>
              )}
            </div>

            <div className="product-category-divider" />

            {/* Individual Products Grid */}
            <div className="product-items-grid">
              {cat.products.map((prod, pIdx) => (
                <div key={pIdx} className="product-item-card">
                  <span className="product-item-tag">{prod.category}</span>
                  <h3 className="product-item-name">{prod.name}</h3>
                  <p className="product-item-desc">{prod.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;
