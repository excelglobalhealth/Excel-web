import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
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
        name: 'Celex Vitamin C Face Serum',
        category: 'Celex — Face Serum',
        description: 'A potent Vitamin C-enriched face serum that brightens skin tone, reduces dark spots, and promotes a radiant, youthful complexion with daily use.',
        fullDescription: 'Celex Vitamin C Face Serum is a premium dermatologist-formulated serum powered by stabilised Vitamin C (L-Ascorbic Acid) at an optimal concentration. It works by neutralising free radicals, inhibiting melanin synthesis, and stimulating collagen production. Regular use visibly reduces dark spots, evens skin tone, and delivers a bright, glass-skin glow. Suitable for all skin types including sensitive skin. Apply 2–3 drops to cleansed skin every morning before moisturiser and sunscreen.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Stabilised L-Ascorbic Acid', 'Anti-oxidant protection', 'Brightens & evens skin tone', 'Stimulates collagen', 'Suitable for all skin types']
      },
      {
        name: 'Celex Day & Night Cream',
        category: 'Celex — Moisturiser',
        description: 'A dual-action moisturising cream formulated for round-the-clock skin nourishment, helping to restore and maintain skin balance through the day and night.',
        fullDescription: 'Celex Day & Night Cream is a rich, multi-functional moisturiser designed to work with your skin\'s natural rhythms. During the day, it creates a protective barrier against environmental aggressors while keeping skin plump and hydrated. At night, it supports the skin\'s natural regeneration cycle with nourishing actives that repair and restore. Enriched with hyaluronic acid, ceramides, and plant-based peptides.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Hyaluronic acid complex', '24-hour hydration', 'Ceramide barrier repair', 'Plant-based peptides', 'Day & Night dual formula']
      },
      {
        name: 'Celex Natural Touch Sunscreen',
        category: 'Celex — Sun Protection',
        description: 'A lightweight, naturally formulated sunscreen offering broad-spectrum protection while keeping skin feeling fresh and comfortable all day.',
        fullDescription: 'Celex Natural Touch Sunscreen offers SPF 50+ broad-spectrum UVA/UVB protection through a blend of mineral and organic UV filters. Its ultra-light, non-greasy texture absorbs instantly without leaving a white cast, making it ideal for daily use under makeup or on its own. Formulated with aloe vera, vitamin E, and green tea extract to soothe and protect the skin barrier. Water-resistant and suitable for sensitive skin.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['SPF 50+ broad-spectrum', 'No white cast', 'Non-greasy formula', 'Water-resistant', 'Aloe & Vitamin E enriched']
      },
      {
        name: 'Celex Spot Reduction Sunscreen',
        category: 'Celex — Sun Protection',
        description: 'Combines sun protection with targeted spot-reduction ingredients to help fade blemishes and hyperpigmentation over time.',
        fullDescription: 'Celex Spot Reduction Sunscreen is a dual-action formula that shields the skin from harmful UV radiation while actively working to fade existing dark spots and hyperpigmentation. It contains niacinamide, alpha-arbutin, and kojic acid alongside SPF 40+ filters. With consistent use, users notice a more even, luminous skin tone. Ideal for post-acne marks, sun spots, and melasma.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['SPF 40+ protection', 'Niacinamide & Alpha-Arbutin', 'Kojic acid for spot fading', 'Prevents new pigmentation', 'Suitable for melasma']
      },
      {
        name: 'Celex Lumiskin Sunscreen',
        category: 'Celex — Sun Protection',
        description: 'A brightening sunscreen that shields skin from UV damage while promoting a luminous, even-toned complexion.',
        fullDescription: 'Celex Lumiskin Sunscreen is a luminosity-boosting SPF formula that provides reliable broad-spectrum UV protection while imparting a healthy, lit-from-within glow. Infused with light-diffusing pearls, vitamin C derivatives, and skin-brightening botanicals, it visibly perfects and evens the complexion with every application. The silky, serum-like texture layers beautifully under makeup and won\'t pill or clog pores.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Broad-spectrum UV filter', 'Light-diffusing technology', 'Vitamin C derivatives', 'Brightening botanicals', 'Serum-like texture']
      },
      {
        name: 'Celex UV-Ease Sunscreen',
        category: 'Celex — Sun Protection',
        description: 'An easy-to-apply, broad-spectrum UV-blocking sunscreen designed for sensitive skin, offering gentle yet effective daily sun protection.',
        fullDescription: 'Celex UV-Ease Sunscreen is specially developed for sensitive and reactive skin types. Its fragrance-free, hypoallergenic formula delivers SPF 35+ protection with a minimal, clean ingredient list. The gentle mineral-based UV filters sit on top of the skin rather than absorbing into it. Calming chamomile and oat extract help soothe redness and irritation throughout the day.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['SPF 35+ mineral-based', 'Fragrance-free & hypoallergenic', 'Chamomile & oat extract', 'Sensitive skin safe', 'Clean minimal formula']
      },
      {
        name: 'Celex Depigmentation Sunscreen',
        category: 'Celex — Sun Protection',
        description: 'A specialised sunscreen formulated to target and reduce skin pigmentation while providing comprehensive UV protection.',
        fullDescription: 'Celex Depigmentation Sunscreen is a clinically advanced formula designed for individuals managing chronic hyperpigmentation, melasma, or post-inflammatory darkening. It combines SPF 50+ photostable UV filters with a powerful depigmenting complex including tranexamic acid, hexylresorcinol, and phytic acid — blocking the pigmentation pathway at multiple stages while simultaneously shielding against UV-triggered melanin production.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['SPF 50+ photostable', 'Tranexamic acid complex', 'Hexylresorcinol', 'Multi-pathway depigmentation', 'Clinically tested']
      },
      {
        name: 'Dermatone Brightening Gel',
        category: 'Dermatone — Skin Brightening',
        description: 'A refreshing gel formulation designed to brighten and even out skin tone, addressing dullness and discolouration for a clearer complexion.',
        fullDescription: 'Dermatone Brightening Gel is a cooling, water-based gel that delivers an instant burst of radiance to dull, tired skin. Powered by a blend of niacinamide, liquorice root extract, and vitamin B3, it targets uneven pigmentation, dullness, and surface-level discolouration. The lightweight gel formula absorbs instantly without stickiness, making it perfect as a serum step or refreshing treatment. Suitable for oily, combination, and normal skin types.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Niacinamide & Vitamin B3', 'Liquorice root extract', 'Instant radiance boost', 'Oil-free gel formula', 'Oily & combination skin']
      },
      {
        name: 'Dermatone Brightening Bar',
        category: 'Dermatone — Skin Brightening',
        description: 'A daily cleansing bar enriched with brightening actives to gently cleanse while progressively improving skin luminosity and tone.',
        fullDescription: 'Dermatone Brightening Bar is a syndet (synthetic detergent) cleansing bar that gently removes impurities, excess sebum, and surface dead cells without disrupting the skin\'s natural pH. Infused with papaya enzyme, kojic acid, and vitamin C, it delivers a progressive brightening effect with every wash. Unlike conventional soaps, the syndet base maintains the skin\'s acid mantle, leaving it clean, balanced, and visibly brighter over time.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Syndet pH-balanced base', 'Papaya enzyme exfoliant', 'Kojic acid brightening', 'Vitamin C enriched', 'Daily use formula']
      },
      {
        name: 'Dermatone Daily Moisturising Face Cream',
        category: 'Dermatone — Moisturiser',
        description: 'A nourishing daily face cream that provides deep hydration and supports healthy skin texture for all skin types.',
        fullDescription: 'Dermatone Daily Moisturising Face Cream is a dermatologist-tested, everyday moisturiser designed to restore comfort and suppleness to the skin. Its non-comedogenic formula blends shea butter, glycerin, panthenol, and allantoin to deliver deep, long-lasting hydration while reinforcing the skin barrier. Lightweight enough for daily use under sunscreen or makeup, it absorbs quickly and leaves a soft, smooth finish. Suitable for all skin types including dry, sensitive, and mature skin.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Non-comedogenic formula', 'Shea butter & glycerin', 'Panthenol barrier support', 'Dermatologist tested', 'All skin types']
      },
      {
        name: 'Dermacorn Liquid',
        category: 'Dermacorn — Dermatological Care',
        description: 'A versatile dermatological liquid solution formulated to address specific skin concerns with precision and efficacy.',
        fullDescription: 'Dermacorn Liquid is a specialised dermatological solution developed for targeted application on localised skin concerns. Its carefully balanced formulation penetrates effectively into the affected area, delivering active ingredients precisely where needed. Recommended for use under the guidance of a healthcare professional, Dermacorn Liquid is part of a comprehensive dermatological management protocol.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Targeted application', 'Clinically directed use', 'Precision delivery', 'Dermatologist recommended', 'Specialised formula']
      }
    ]
  },
  {
    id: 'oral',
    title: 'Oral & ENT Healthcare',
    tagline: 'Complete Care for Ears, Nose & Throat',
    bannerImage: '/assets/Banner_2.jpeg',
    bannerAlt: 'Oral & ENT Healthcare — Olive Ease, Ear Ease, Euclear, Pinoff',
    description:
      'Explore products developed to support effective oral hygiene, dental care, ear health, and respiratory comfort. Our range includes trusted solutions for everyday and specialised ENT and oral healthcare needs.',
    products: [
      {
        name: 'Euclear Inhalation Capsule',
        category: 'Euclear — Respiratory',
        description: 'A convenient inhalation capsule for effective respiratory support, delivering targeted relief for nasal and chest congestion.',
        fullDescription: 'Euclear Inhalation Capsule contains a precisely measured blend of eucalyptus oil and menthol in a convenient capsule form designed for inhalation therapy. When opened and placed in hot water or an inhaler, the active vapours penetrate the nasal passages and airways to loosen mucus, reduce congestion, and ease breathing. Ideal for relief from cold, sinusitis, and seasonal respiratory discomfort. Safe for adults and children above 6 years under adult supervision.',
        images: ['/assets/Banner_2.jpeg'],
        highlights: ['Eucalyptus & menthol blend', 'Decongestant vapour therapy', 'Loosens mucus', 'Cold & sinusitis relief', 'Adults & children 6+']
      },
      {
        name: 'Euclear Baby Roll-On',
        category: 'Euclear — Baby Care',
        description: 'A gentle and safe roll-on formulation specially designed for babies, providing soothing relief from nasal congestion and cold discomfort.',
        fullDescription: 'Euclear Baby Roll-On is a carefully formulated topical roll-on designed for the delicate needs of infants and young children. Its mild, baby-safe blend of eucalyptus, lavender, and chamomile essential oils is highly diluted to ensure maximum safety. Simply roll on the baby\'s chest, back, or feet (not directly on the face) to provide gentle aromatic relief. Paediatrician-reviewed and free from harsh chemicals.',
        images: ['/assets/Banner_2.jpeg'],
        highlights: ['Baby-safe diluted formula', 'Eucalyptus & lavender blend', 'Chamomile soothing agent', 'No harsh chemicals', 'Paediatrician reviewed']
      },
      {
        name: 'Euclear Lozenges',
        category: 'Euclear — Throat Care',
        description: 'Soothing throat lozenges formulated to provide fast relief from throat irritation, soreness, and discomfort.',
        fullDescription: 'Euclear Lozenges deliver targeted soothing relief for sore, irritated, and inflamed throats. Each lozenge contains a synergistic blend of eucalyptus oil, menthol, honey, and glycerin that coats the throat lining to reduce irritation and suppress the cough reflex. The slow-dissolve formula ensures prolonged contact time for maximum efficacy. Sugar-free option available. Suitable for adults and children above 6 years.',
        images: ['/assets/Banner_2.jpeg'],
        highlights: ['Eucalyptus & menthol', 'Honey & glycerin coating', 'Slow-dissolve formula', 'Sugar-free option', 'Fast throat relief']
      },
      {
        name: 'Olive Ease Ear Drops',
        category: 'Olive Ease — Ear Care',
        description: 'A gentle olive oil-based ear drop solution for softening and removing earwax, suitable for routine ear hygiene.',
        fullDescription: 'Olive Ease Ear Drops contain pure, medical-grade olive oil that gently lubricates and softens hardened earwax (cerumen) to allow natural or assisted removal. Unlike harsher ceruminolytic agents, the olive oil base is completely safe for sensitive ear canals and suitable for regular use. Apply 2–3 drops into the affected ear, tilt the head for 5 minutes, then allow to drain. Can be used as pre-treatment before ear irrigation.',
        images: ['/assets/Banner_2.jpeg'],
        highlights: ['Medical-grade olive oil', 'Gentle ceruminolytic', 'Safe for sensitive ears', 'Adults & children safe', 'Pre-irrigation use']
      },
      {
        name: 'Ear Ease Ear Drops',
        category: 'Ear Ease — Ear Relief',
        description: 'Targeted ear care drops formulated to provide soothing relief from ear discomfort and support overall ear health.',
        fullDescription: 'Ear Ease Ear Drops are a specialised formulation designed to provide rapid, soothing relief from ear discomfort associated with dryness, mild irritation, and the after-effects of water exposure (swimmer\'s ear). The solution contains a balanced combination of glycerin, propylene glycol, and gentle antiseptic agents that moisturise the ear canal and create an inhospitable environment for microbial growth.',
        images: ['/assets/Banner_2.jpeg'],
        highlights: ['Glycerin & propylene glycol', 'Mild antiseptic blend', "Swimmer's ear relief", 'Moisturises ear canal', 'Rapid comfort relief']
      },
      {
        name: 'Pinoff Dental Gel',
        category: 'Pinoff — Oral Care',
        description: 'A clinically developed dental gel for maintaining optimal oral hygiene, addressing gum health and everyday dental care needs.',
        fullDescription: 'Pinoff Dental Gel is a comprehensive oral care gel formulated to support gum health, reduce plaque formation, and maintain overall dental hygiene. It contains chlorhexidine gluconate, metronidazole, and lidocaine in a soothing gel base that adheres to the gum surface for extended contact time, providing antibacterial protection, reducing gingival inflammation, and offering localised numbing for gum sensitivity.',
        images: ['/assets/Banner_2.jpeg'],
        highlights: ['Chlorhexidine gluconate', 'Metronidazole antibacterial', 'Lidocaine for sensitivity', 'Extended contact gel base', 'Post-procedure care']
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
        name: 'Rubit Pain Balm',
        category: 'Rubit — Topical Relief',
        description: 'A potent pain-relief balm providing fast-acting, long-lasting comfort for muscle aches, joint pain, and general body soreness.',
        fullDescription: 'Rubit Pain Balm is a concentrated topical analgesic balm formulated with methyl salicylate, menthol, camphor, and turpentine oil. These actives work synergistically to produce a warming sensation that increases local circulation, relaxes tense muscles, and blocks pain signals. The thick, long-lasting balm base ensures sustained contact with the skin for prolonged relief. Suitable for back pain, shoulder aches, neck stiffness, and general musculoskeletal discomfort. Massage a small amount onto the affected area 2–3 times daily.',
        images: ['/assets/Banner_3.jpeg'],
        highlights: ['Methyl salicylate & camphor', 'Warming pain relief', 'Improves local circulation', 'Long-lasting balm base', 'Musculoskeletal relief']
      },
      {
        name: 'Rubit Cool Gel',
        category: 'Rubit — Cooling Relief',
        description: 'A refreshing cooling gel formulated to deliver immediate soothing relief from inflammation, sports injuries, and localised pain.',
        fullDescription: 'Rubit Cool Gel is a fast-absorbing, water-based gel that harnesses the cooling power of menthol and diclofenac diethylamine to provide immediate, targeted relief from acute pain and inflammation. The cooling sensation quickly numbs the area while the anti-inflammatory active reduces swelling and promotes faster recovery. Ideal for sports injuries, sprains, strains, bruises, and post-exercise muscle soreness. Apply generously and massage in gently 3–4 times daily.',
        images: ['/assets/Banner_3.jpeg'],
        highlights: ['Menthol cooling effect', 'Diclofenac anti-inflammatory', 'Fast-absorbing gel', 'Sports injury recovery', 'Non-greasy formula']
      },
      {
        name: 'Rubit Cramps',
        category: 'Rubit — Cramp Relief',
        description: 'Specifically developed to ease muscle cramps and spasms, providing targeted relief for menstrual and exercise-induced cramps.',
        fullDescription: 'Rubit Cramps is a specialised topical formulation developed to address the acute discomfort of muscle cramps and spasms. Its active blend includes magnesium sulphate, peppermint oil, and a muscle-relaxant base that penetrates deep into cramped muscle tissue to interrupt the spasm cycle and restore normal muscle function. Particularly effective for menstrual cramps, nocturnal leg cramps, and exercise-induced cramping. Relief is typically felt within 5–10 minutes.',
        images: ['/assets/Banner_3.jpeg'],
        highlights: ['Magnesium sulphate complex', 'Peppermint oil actives', 'Muscle-relaxant formula', 'Menstrual cramp relief', 'Fast 5–10 min action']
      },
      {
        name: 'Rubit Arthr',
        category: 'Rubit — Joint Care',
        description: 'A specialised formulation designed to provide sustained relief from arthritis-related joint pain and stiffness, supporting everyday mobility.',
        fullDescription: 'Rubit Arthr is a clinically developed topical gel specifically designed for individuals managing osteoarthritis and rheumatoid arthritis symptoms. It combines diclofenac sodium, capsaicin, and glucosamine in a penetration-enhanced gel vehicle. Diclofenac provides anti-inflammatory and analgesic effects, capsaicin depletes substance P to reduce chronic pain signals, and glucosamine supports cartilage health. Regular application helps reduce morning stiffness, joint swelling, and pain.',
        images: ['/assets/Banner_3.jpeg'],
        highlights: ['Diclofenac sodium NSAID', 'Capsaicin pain modulation', 'Glucosamine cartilage support', 'Penetration-enhanced vehicle', 'OA & RA management']
      }
    ]
  },
  {
    id: 'otc',
    title: 'OTC & General Pharma',
    tagline: 'Trusted Over-the-Counter Solutions',
    bannerImage: null,
    bannerAlt: null,
    description:
      'Our OTC portfolio offers a broad range of over-the-counter products designed for everyday health and wellness. These solutions are trusted by consumers and healthcare professionals alike.',
    products: [
      {
        name: 'Sorion Range',
        category: 'Sorion — Specialised Skincare',
        description: 'A comprehensive range of products under the Sorion brand, developed for specialised dermatological and wellness applications across diverse markets.',
        fullDescription: 'The Sorion Range is a curated line of specialised skincare and wellness products developed to address complex dermatological conditions requiring sustained, targeted care. Each product in the Sorion Range is formulated with high-quality botanical and pharmaceutical-grade actives, designed for individuals who need more than standard OTC solutions. The range encompasses creams, gels, and supportive formulations suitable for chronic skin conditions, post-treatment care, and sensitive skin management.',
        images: [],
        highlights: ['Specialised dermatological care', 'Botanical & pharma-grade actives', 'Chronic skin condition support', 'Post-treatment formulations', 'HCP recommended']
      },
      {
        name: 'Group Pharma Products',
        category: 'Group Pharma — General Wellness',
        description: 'A curated selection of Group Pharma health and wellness products designed to support day-to-day health needs, available across our international distribution network.',
        fullDescription: 'Group Pharma Products represent a broad portfolio of over-the-counter health and wellness solutions distributed across our international markets. These products span multiple therapeutic categories including vitamins and supplements, general wellness aids, topical care, and everyday health management tools. Each product in the Group Pharma portfolio meets stringent quality and regulatory standards for the markets in which they are distributed.',
        images: [],
        highlights: ['International distribution', 'Multi-category portfolio', 'Vitamins & supplements', 'Regulatory compliant', 'HCP & consumer trusted']
      }
    ]
  }
];

// ── Product Detail Modal ─────────────────────────────────────────────────────
const ProductModal = ({ product, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const hasImages = product.images && product.images.length > 0;

  return (
    <div
      className="pm-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      onClick={onClose}
    >
      <div className="pm-panel" onClick={(e) => e.stopPropagation()}>
        <button className="pm-close" onClick={onClose} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="pm-body">
          {/* Images column */}
          <div className="pm-images-col">
            {hasImages ? (
              <>
                <div className="pm-main-img-wrap">
                  <img src={product.images[activeImg]} alt={product.name} className="pm-main-img" />
                </div>
                {product.images.length > 1 && (
                  <div className="pm-thumbs">
                    {product.images.map((img, i) => (
                      <button
                        key={i}
                        className={`pm-thumb ${i === activeImg ? 'pm-thumb-active' : ''}`}
                        onClick={() => setActiveImg(i)}
                      >
                        <img src={img} alt={`${product.name} view ${i + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="pm-no-image">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <rect width="56" height="56" rx="12" fill="#f3f4f6"/>
                  <path d="M18 38l10-12 7 8 5-6 8 10H18z" fill="#d1d5db"/>
                  <circle cx="22" cy="22" r="4" fill="#d1d5db"/>
                </svg>
                <p>Product image coming soon</p>
              </div>
            )}
          </div>

          {/* Details column */}
          <div className="pm-details-col">
            <span className="pm-tag">{product.category}</span>
            <h2 className="pm-title">{product.name}</h2>
            <p className="pm-full-desc">{product.fullDescription}</p>
            {product.highlights && product.highlights.length > 0 && (
              <div className="pm-highlights">
                <h3 className="pm-highlights-heading">Key Highlights</h3>
                <ul className="pm-highlights-list">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="pm-highlight-item">
                      <span className="pm-highlight-dot" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main Page ────────────────────────────────────────────────────────────────
const Products = () => {
  const { hash } = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  const handleCardClick = useCallback((prod) => setSelectedProduct(prod), []);
  const handleCloseModal = useCallback(() => setSelectedProduct(null), []);

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

            {/* Product Cards */}
            <div className="product-items-grid">
              {cat.products.map((prod, pIdx) => (
                <button
                  key={pIdx}
                  className="product-item-card"
                  onClick={() => handleCardClick(prod)}
                  aria-label={`View details for ${prod.name}`}
                >
                  <span className="product-item-tag">{prod.category}</span>
                  <h3 className="product-item-name">{prod.name}</h3>
                  <p className="product-item-desc">{prod.description}</p>
                  <span className="product-item-cta">View Details →</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Products;
