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
        description: 'A premium serum powered by stabilised Vitamin C (L-Ascorbic Acid) to reduce dark spots, even skin tone, and deliver a radiant glass-skin glow.',
        fullDescription: 'Celex Vitamin C Face Serum is a premium serum powered by stabilised Vitamin C (L-Ascorbic Acid). It neutralises free radicals, inhibits melanin synthesis, and stimulates collagen production.\n\nBenefits: Reduces dark spots, evens skin tone, and delivers a radiant glass-skin glow.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Stabilised L-Ascorbic Acid', 'Potent antioxidant', 'Brightens & evens skin tone', 'Stimulates collagen']
      },
      {
        name: 'Celex Day & Night Cream',
        category: 'Celex — Moisturiser',
        description: 'Enriched with Hyaluronic Acid, Ceramides, and plant-based peptides, adapting to your skin’s natural rhythms for day protection and night regeneration.',
        fullDescription: 'Enriched with Hyaluronic Acid, Ceramides, and plant-based peptides, this multifunctional moisturiser adapts to your skin’s natural rhythms.\n\nDuring the day, it protects against environmental aggressors while keeping skin plump and hydrated.\n\nAt night, it supports regeneration with nourishing actives that repair and restore.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['24-hour hydration', 'Ceramide barrier repair', 'Plant-based peptides', 'Dual day & night formula']
      },
      {
        name: 'Celex Natural Touch Sunscreen',
        category: 'Celex — Sun Protection',
        description: 'An ultra-light, non-greasy sunscreen offering SPF 50+ broad-spectrum UVA/UVB protection. Absorbs instantly without leaving a white cast.',
        fullDescription: 'Celex Natural Touch Sunscreen is an ultra-light, non-greasy sunscreen offering SPF 50+ broad-spectrum UVA/UVB protection. It absorbs instantly without leaving a white cast, keeping skin protected and comfortable all day.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['SPF 50+ broad-spectrum protection', 'No white cast', 'Non-greasy, water-resistant formula', 'Enriched with Aloe & Vitamin E']
      },
      {
        name: 'Celex Spot Reduction Sunscreen',
        category: 'Celex — Sun Protection',
        description: 'A dual-action formula that shields against UV damage while fading dark spots and hyperpigmentation. Best suited for post-acne marks, sunspots, and melasma.',
        fullDescription: 'Celex Spot Reduction Sunscreen is a dual-action formula that shields against UV damage while fading dark spots and hyperpigmentation.\n\nBest suited for: Post-acne marks, sunspots, and melasma.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['SPF 50+ protection', 'Prevents new pigmentation', 'Fades dark spots', 'Suitable for melasma']
      },
      {
        name: 'Celex Lumiskin Sunscreen',
        category: 'Celex — Sun Protection',
        description: 'Broad-spectrum UV protection enriched with Lumiskin, Hyaluronic Acid, herbal extracts, and Niacinamide in a lightweight, serum-like texture.',
        fullDescription: 'Celex Lumiskin Sunscreen provides broad-spectrum UV protection enriched with Lumiskin, Hyaluronic Acid, herbal extracts, and Niacinamide to protect skin and target hyperpigmentation marks.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Broad-spectrum UV protection', 'Lumiskin & Niacinamide', 'Botanical extract blend', 'Serum-like texture', 'Targets hyperpigmentation marks']
      },
      {
        name: 'Celex UV-Ease Sunscreen',
        category: 'Celex — Sun Protection',
        description: 'Specially developed for sensitive and reactive skin types, combining physical and chemical UV filters for SPF 50+ protection with Aloe Vera and Coconut extracts.',
        fullDescription: 'Specially developed for sensitive and reactive skin types, Celex UV-Ease Sunscreen combines physical and chemical UV filters for SPF 50+ protection. Gentle mineral filters sit on top of the skin, while Aloe Vera and Coconut extracts provide soothing hydration.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['SPF 50+ physical & chemical filters', 'Sensitive & reactive skin safe', 'Gentle mineral protection', 'Aloe Vera & Coconut extracts', 'Soothing hydration']
      },
      {
        name: 'Celex Depigmentation Sunscreen',
        category: 'Celex — Sun Protection',
        description: 'A clinically advanced formula combining SPF 50+ photostable filters with Alpha Arbutin and Niacinamide to block pigmentation pathways and prevent UV-triggered melanin.',
        fullDescription: 'Celex Depigmentation Sunscreen is a clinically advanced formula for chronic hyperpigmentation, Melasma, or Post-inflammatory darkening. It combines SPF 50+ photostable filters with Alpha Arbutin and Niacinamide to block pigmentation pathways while preventing UV-triggered melanin production.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['SPF 50+ photostable filters', 'Alpha Arbutin & Niacinamide', 'Blocks pigmentation pathways', 'Prevents UV-triggered melanin', 'Ideal for melasma & PIH']
      },
      {
        name: 'Dermatone Brightening Gel',
        category: 'Dermatone — Skin Brightening',
        description: 'A lightweight, water-based gel powered by Niacinamide, Pine Bark Extract, and Vitamin B3 to instantly brighten dull skin and target uneven pigmentation.',
        fullDescription: 'Dermatone Brightening Gel is a lightweight, water-based gel powered by Niacinamide, Pine Bark Extract, and Vitamin B3. It instantly brightens dull skin, targets uneven pigmentation, and absorbs quickly.\n\nSuitable for: Oily, combination, and normal skin types.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Niacinamide & Vitamin B3', 'Pine Bark Extract', 'Water-based lightweight gel', 'Instantly brightens dull skin', 'Oily, combination & normal skin']
      },
      {
        name: 'Dermatone Brightening Bar',
        category: 'Dermatone — Skin Brightening',
        description: 'A gentle syndet cleansing bar infused with Glutathione, Kojic Acid, Aloe Vera, and Vitamin E to cleanse while maintaining pH and providing progressive brightening.',
        fullDescription: 'Dermatone Brightening Bar is a gentle syndet cleansing bar infused with Glutathione, Kojic Acid, Aloe Vera, and Vitamin E. It removes impurities and excess sebum while maintaining the skin’s natural pH, providing progressive brightening with every wash.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Gentle syndet cleansing bar', 'Glutathione & Kojic Acid', 'Aloe Vera & Vitamin E', 'Maintains skin natural pH', 'Progressive brightening']
      },
      {
        name: 'Dermatone Daily Moisturising Face Cream',
        category: 'Dermatone — Moisturiser',
        description: 'Dermatologically tested, non-comedogenic formula blending Ceramide NP, Niacinamide, and Aloe Vera to restore comfort, hydration, and strengthen the skin barrier.',
        fullDescription: 'Dermatone Daily Moisturising Face Cream features a dermatologically tested, non-comedogenic formula blending Ceramide NP, Niacinamide, and Aloe Vera. It restores comfort, hydration, and strengthens the skin barrier.\n\nSuitable for: All skin types, including dry, sensitive, and mature skin.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Ceramide NP & Niacinamide', 'Aloe Vera soothing hydration', 'Dermatologically tested', 'Non-comedogenic formula', 'All skin types including sensitive & mature']
      },
      {
        name: 'Dermacorn Liquid',
        category: 'Dermacorn — Dermatological Care',
        description: 'A targeted keratolytic solution combining Salicylic Acid and Lactic Acid to effectively treat corns and calluses.',
        fullDescription: 'Dermacorn Liquid is a targeted keratolytic solution combining Salicylic Acid and Lactic Acid to effectively treat corns and calluses. Its carefully formulated active blend softens and breaks down thickened skin for effective, targeted removal.',
        images: ['/assets/Banner_1.jpeg'],
        highlights: ['Salicylic Acid & Lactic Acid', 'Targeted keratolytic action', 'Treats corns & calluses', 'Softens thickened skin', 'Precision topical application']
      }
    ]
  },
  {
    id: 'oral',
    title: 'Oral & ENT Healthcare',
    tagline: 'Complete Care for Ears, Nose & Throat',
    bannerImage: '/assets/Banner_2.jpeg',
    bannerAlt: 'Oral & ENT Healthcare — Olive Ease, Ear Ease, Euclear, Painoff',
    description:
      'Explore products developed to support effective oral hygiene, dental care, ear health, and respiratory comfort. Our range includes trusted solutions for everyday and specialised ENT and oral healthcare needs.',
    products: [
      {
        name: 'Euclear Inhalation Capsule',
        category: 'Euclear — Respiratory',
        description: 'A convenient inhalation therapy solution with Eucalyptus oil, Menthol, and Camphor to loosen mucus, reduce congestion, and ease breathing.',
        fullDescription: 'A convenient inhalation therapy solution, Euclear Inhalation Capsule contains a precise blend of Eucalyptus oil, Menthol, and Camphor. When added to hot water or an inhaler, the active vapors penetrate nasal passages and airways to loosen mucus, reduce congestion, and ease breathing.\n\nBest for: Cold, sinusitis, asthma, pharyngitis, and seasonal respiratory discomfort.\n\nSafe for: Adults and children above 6 years (under supervision).',
        images: ['/assets/Banner_2.jpeg'],
        highlights: ['Eucalyptus oil, Menthol & Camphor', 'Active vapor decongestant', 'Loosens mucus & clears airways', 'Cold, sinusitis, asthma & pharyngitis', 'Safe for adults & children above 6 yrs']
      },
      {
        name: 'Euclear Baby RollOn',
        category: 'Euclear — Baby Care',
        description: 'Gentle and baby-safe roll-on formulated with a mild blend of Eucalyptus and Aloe Vera gel for soothing aromatic relief.',
        fullDescription: 'Gentle and baby-safe, Euclear Baby RollOn is specially formulated for infants and young children. Its mild blend of Eucalyptus and Aloe Vera gel is highly diluted for maximum safety. Simply roll onto the chest, back, or feet (avoid direct application on the face) for aromatic relief.\n\nFeatures: Paediatrician-reviewed, free from harsh chemicals, and designed for easy, finger-free application.',
        images: ['/assets/Banner_2.jpeg'],
        highlights: ['Mild Eucalyptus & Aloe Vera blend', 'Highly diluted baby-safe formula', 'Easy, finger-free roll-on application', 'Paediatrician-reviewed', 'Free from harsh chemicals']
      },
      {
        name: 'Euclear Lozenges',
        category: 'Euclear — Throat Care',
        description: 'Based on 100% herbal actives with Eucalyptus oil, Menthol, and Vitamin C to soothe sore throats, reduce irritation, and suppress cough reflex.',
        fullDescription: 'Based on 100% herbal actives, Euclear Lozenges deliver soothing relief for sore, irritated, and inflamed throats. Each lozenge combines Eucalyptus oil, Menthol, and Vitamin C to coat the throat lining, reduce irritation, and suppress cough reflex.\n\nHighlights:\n• Slow-dissolve formula for prolonged efficacy\n• Sugar-free option available\n• Offered in 5 exotic flavors\n\nSuitable for: Adults and children above 6 years.',
        images: ['/assets/Banner_2.jpeg'],
        highlights: ['100% herbal actives', 'Eucalyptus oil, Menthol & Vitamin C', 'Slow-dissolve prolonged efficacy', 'Sugar-free option available', 'Offered in 5 exotic flavors']
      },
      {
        name: 'Olive Ease Ear Drops',
        category: 'Olive Ease — Ear Care',
        description: 'Formulated with 100% pure, medical-grade virgin Olive Oil to gently lubricate and soften hardened ear wax for safe removal.',
        fullDescription: 'Formulated with 100% pure, medical-grade virgin Olive Oil, Olive Ease Ear Drops gently lubricate and soften hardened ear wax (cerumen) for natural or assisted removal. Safe for sensitive ear canals, infants, and children.\n\nKey Benefit: Gentle, non-irritating ear care for regular use.',
        images: ['/assets/Banner_2.jpeg'],
        highlights: ['100% pure medical-grade virgin Olive Oil', 'Softens hardened ear wax (cerumen)', 'Safe for sensitive ear canals', 'Gentle & non-irritating for regular use', 'Suitable for infants, children & adults']
      },
      {
        name: 'Ear Ease Ear Drops',
        category: 'Ear Ease — Cerumen Relief',
        description: 'Specialized ear drops containing 5% Sodium Bicarbonate to rapidly soften hardened ear wax and relieve ear discomfort.',
        fullDescription: 'Specialized Ear Ease Ear Drops contain 5% Sodium Bicarbonate to rapidly soften hardened ear wax and provide soothing relief from ear discomfort.\n\nBest for: Quick, effective cerumen management.',
        images: ['/assets/Banner_2.jpeg'],
        highlights: ['5% Sodium Bicarbonate formula', 'Rapidly softens hardened ear wax', 'Quick & effective cerumen management', 'Soothes ear discomfort', 'Targeted ceruminolytic action']
      },
      {
        name: 'Painoff Dental Gel',
        category: 'Painoff — Dental Relief',
        description: 'Offers fast, targeted relief from tooth pain, formulated with Clove Oil, Camphor, and Menthol in an easy-to-apply gel base.',
        fullDescription: 'Painoff Dental Gel offers fast, targeted relief from tooth pain. Formulated with Clove Oil, Camphor, and Menthol, its gel base ensures easy, precise application compared to conventional liquid products.\n\nBest for: Toothache and localized oral discomfort.',
        images: ['/assets/Banner_2.jpeg'],
        highlights: ['Clove Oil, Camphor & Menthol', 'Fast, targeted tooth pain relief', 'Easy, precise gel application', 'Toothache & localized oral discomfort', 'Superior contact vs conventional liquids']
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
        description: 'A powerful herbal-based topical analgesic blending classical herbal oils with Methyl Salicylate and Menthol for sustained, warming pain relief. Best suited for back pain, shoulder aches, and neck stiffness.',
        fullDescription: 'A powerful herbal based topical analgesic, Rubit Pain Balm blends classical herbal oils with Methyl Salicylate and Menthol. This synergistic formula delivers a warming sensation that boosts local circulation, eases muscle tension, and blocks pain signals. The thick, long lasting balm base ensures sustained skin contact for prolonged relief.\n\nBest suited for: Back pain, shoulder aches, neck stiffness, and general musculoskeletal discomfort.',
        images: ['/assets/Banner_3.jpeg'],
        highlights: ['Classical herbal oils blend', 'Methyl Salicylate & Menthol', 'Warming sensation & circulation boost', 'Thick, long-lasting balm base', 'Relief for back, shoulder & neck aches']
      },
      {
        name: 'Rubit Cool Gel',
        category: 'Rubit — Cooling Relief',
        description: 'A fast-absorbing, water-based formula powered by Menthol for instant cooling relief. Best suited for sports injuries, sprains, strains, bruises, and post-exercise muscle soreness.',
        fullDescription: 'Rubit Cool Gel is a fast absorbing, water based formula designed for instant cooling relief. Powered by Menthol, it targets acute pain and inflammation with precision.\n\nBest suited for: Sports injuries, Sprains, Strains, Bruises, and post exercise muscle soreness.',
        images: ['/assets/Banner_3.jpeg'],
        highlights: ['Fast-absorbing water-based gel', 'Powered by Menthol', 'Instant cooling relief', 'Targets acute pain & inflammation', 'Sports injuries, sprains & bruises']
      },
      {
        name: 'Rubit Cramps',
        category: 'Rubit — Cramp Relief',
        description: 'Specially crafted to combat muscle cramps and spasms, harnessing Magnesium Chloride to restore normal muscle function within 5–10 minutes. Best suited for nocturnal and exercise-induced cramping.',
        fullDescription: 'Specially crafted to combat muscle cramps and spasms, Rubit Cramps harnesses the restorative properties of Magnesium Chloride. It interrupts the spasm cycle and helps restore normal muscle function. Relief is typically felt within 5–10 minutes.\n\nBest suited for: Nocturnal leg cramps and exercise induced cramping.',
        images: ['/assets/Banner_3.jpeg'],
        highlights: ['Magnesium Chloride restorative formula', 'Interrupts spasm cycle', 'Restores normal muscle function', 'Fast relief within 5–10 minutes', 'Nocturnal leg & exercise cramps']
      },
      {
        name: 'Rubit Arthro',
        category: 'Rubit — Joint Care',
        description: 'Formulated for arthritis symptoms, combining Glucosamine Sulphate, Menthol, and Eucalyptus oil in a penetration-enhanced gel to reduce morning stiffness, joint swelling, and pain.',
        fullDescription: 'Formulated for individuals managing arthritis symptoms, Rubit Arthro combines Glucosamine Sulphate, Menthol, and Eucalyptus oil in a penetration-enhanced gel. With regular use, it helps reduce morning stiffness, joint swelling, and pain.\n\nBest suited for: Osteoarthritis and Rheumatoid arthritis symptom relief.',
        images: ['/assets/Banner_3.jpeg'],
        highlights: ['Glucosamine Sulphate', 'Menthol & Eucalyptus oil', 'Penetration-enhanced gel formula', 'Reduces morning stiffness & joint swelling', 'Osteoarthritis & Rheumatoid arthritis relief']
      }
    ]
  },
  {
    id: 'otc',
    title: 'OTC & General Pharma',
    tagline: 'Trusted Global Healthcare Partnerships',
    bannerImage: null,
    bannerAlt: null,
    description:
      'Our OTC portfolio brings together world-class specialised healthcare across two dedicated categories: plant-based biotechnology with the globally acclaimed Sorion range from Atrimed Biotech, and advanced specialized oral care from Group Pharmaceuticals Limited (GP) with over 40 years of expertise.',
    subcategories: [
      {
        id: 'sorion',
        badge: 'Sorion (Atrimed Biotech)',
        title: 'Sorion — Plant-Based Biotechnology',
        bannerImage: '/assets/Atrimed.jpeg',
        bannerAlt: 'Sorion & Atrimed Biotech — Plant-Based Biotechnology',
        description:
          'Founded in 2016, Atrimed Biotech is a global leader in plant-based biotechnology. With over 500,000 botanical ingredients and AI-guided molecular pathway research, Sorion formulations are Dermatest-certified in Germany and trusted in over 30 countries for chronic inflammatory skin conditions.',
        featureBox: {
          badge: 'Atrimed Biotech & Sorion',
          title: 'World Leader in Plant-Based Biotechnology',
          text: 'Leveraging AI research and the world’s largest botanical database of 500,000+ ingredients to formulate Dermatest-certified antipsoriatic and anti-inflammatory relief.',
          stats: [
            { value: '500K+', label: 'Botanical Database' },
            { value: '30+', label: 'Countries Worldwide' },
            { value: 'Dermatest®', label: 'Certified in Germany' }
          ]
        },
        products: [
          {
            name: 'About Sorion & Atrimed Biotech',
            category: 'Sorion — Global Phytobiotechnology',
            description: 'Leader in plant-based biotechnology with a 500,000+ botanical database, AI research, and Dermatest-certified formulations trusted in 30+ countries.',
            fullDescription: '🌿 About Atrimed Biotech\nFounded in 2016, Atrimed Biotech is a leader in plant-based biotechnology. With the world’s largest database of over 500,000 botanical ingredients, the company leverages AI and advanced research in cell signalling pathways, protein–ligand binding, and molecular activity to develop innovative healthcare solutions.\nAtrimed’s portfolio includes Plant Science and the globally recognized Sorion brand.\n\n🌍 Sorion – Global Presence\nSorion is trusted in more than 30 countries worldwide, with its strongest presence in Germany. The brand is also well established in Australia, France, Italy, Spain, Ireland, Belgium, USA, Canada, Vietnam, Malaysia, South Korea, and Russia.\n\n🧪 Clinically Tested & Proven\nSorion formulations are Dermatest-certified in Germany and powered by phytoconstituents from five herbal extracts. These extracts provide:\n• Antipsoriatic action\n• Anti-inflammatory relief\n• Soothing & moisturizing effects\n• Healing properties\n\nThe Sorion range is indicated for inflammatory skin conditions including Psoriasis, Seborrheic Dermatitis, and Atopic Dermatitis.',
            images: ['/assets/Atrimed.jpeg'],
            highlights: ['500,000+ botanical database & AI research', 'Dermatest-certified in Germany', 'Trusted in 30+ countries worldwide', 'Antipsoriatic, anti-inflammatory & healing', 'Proven for Psoriasis & Dermatitis']
          },
          {
            name: 'Sorion Cream',
            category: 'Sorion — Intensive Care',
            description: 'Intensive herbal care formulated for chronic dry, itchy, and scaly skin, specially developed for psoriasis and dermatitis.',
            fullDescription: 'Sorion Cream is an intensive care formulation designed specifically for chronic inflammatory skin conditions including Psoriasis, Seborrheic Dermatitis, and Atopic Dermatitis.\n\nClinically tested and Dermatest-certified in Germany, its formula is powered by phytoconstituents from five classical herbal extracts that deliver antipsoriatic action, anti-inflammatory relief, deep soothing, and restorative healing properties.\n\nDeveloped by Atrimed Biotech and trusted in more than 30 countries worldwide including Germany, France, the USA, and Australia.\n\nIndicated for: Psoriasis, Seborrheic Dermatitis, and Atopic Dermatitis.',
            images: ['/assets/Atrimed.jpeg'],
            highlights: ['Dermatest-certified in Germany', 'Five herbal extracts complex', 'Antipsoriatic & anti-inflammatory relief', 'Intensive care for psoriasis & dermatitis', 'Trusted in 30+ countries worldwide']
          },
          {
            name: 'Sorion Sensitive Cream',
            category: 'Sorion — Sensitive Care',
            description: 'Mild, gentle herbal formulation designed to soothe, hydrate, and protect delicate, reactive, and sensitive skin.',
            fullDescription: 'Sorion Sensitive Cream is a mild, non-irritating formulation specially developed for individuals with delicate, reactive, or sensitive skin.\n\nPowered by Atrimed Biotech\'s plant-based biotechnology and five herbal extracts, it delivers gentle anti-inflammatory relief, soothing hydration, and healing effects without triggering irritation.\n\nIndicated for: Delicate skin areas, sensitive facial skin, and mild inflammatory skin conditions.',
            images: ['/assets/Atrimed.jpeg'],
            highlights: ['Mild formula for delicate & sensitive skin', 'Dermatest-certified in Germany', 'Five herbal extracts phytoconstituents', 'Soothing & moisturizing effects', 'Non-irritating everyday protection']
          },
          {
            name: 'Sorion Head Fluid',
            category: 'Sorion — Scalp Care',
            description: 'Targeted liquid solution providing intensive relief for scalp psoriasis, stubborn flaking, and severe irritation.',
            fullDescription: 'Sorion Head Fluid is a specialised topical liquid solution engineered for targeted relief of difficult scalp conditions, including scalp psoriasis, seborrheic dermatitis, and chronic redness.\n\nIts fast-absorbing, nutrient-rich herbal extract blend penetrates directly to the scalp to alleviate severe itching, loosen stubborn scales, and restore natural skin balance without leaving hair greasy.\n\nIndicated for: Scalp psoriasis, stubborn flaking, and severe scalp irritation.',
            images: ['/assets/Atrimed.jpeg'],
            highlights: ['Targeted relief for scalp conditions', 'Addresses scalp psoriasis & flaking', 'Relieves severe itching & redness', 'Dermatest-certified in Germany', 'Fast-absorbing, non-greasy formula']
          },
          {
            name: 'Sorion Shampoo',
            category: 'Sorion — Hair & Scalp Care',
            description: 'Gentle herbal care shampoo formulated to alleviate stubborn dandruff, itching, and scalp irritation.',
            fullDescription: 'Sorion Shampoo delivers gentle, therapeutic cleansing for hair and scalp, enriched with Atrimed Biotech\'s signature five-herbal extract blend.\n\nIt gently lifts impurities and stubborn dandruff flakes while calming persistent scalp itching, reducing inflammation, and maintaining the scalp\'s natural moisture balance.\n\nIndicated for: Chronic dandruff, scalp irritation, itchy scalp, and regular maintenance for scalp psoriasis.',
            images: ['/assets/Atrimed.jpeg'],
            highlights: ['Herbal care for dandruff & irritation', 'Alleviates persistent scalp itching', 'Five herbal extracts complex', 'Gentle cleansing for sensitive scalps', 'Suitable for frequent or daily use']
          },
          {
            name: 'Sorion Soap',
            category: 'Sorion — Cleansing Care',
            description: 'Gentle cleansing bar enriched with herbal extracts to cleanse, soothe, and protect irritated and sensitive skin.',
            fullDescription: 'Sorion Soap is a gentle herbal cleansing bar formulated with Ayurvedic plant extracts to cleanse skin without compromising its protective barrier.\n\nUnlike harsh conventional soaps, it calms redness, reduces inflammation, and leaves skin feeling moisturised and refreshed. Ideal for daily face and body use for individuals prone to psoriasis, eczema, and skin inflammation.\n\nIndicated for: Gentle daily cleansing for sensitive, irritated, or psoriatic skin.',
            images: ['/assets/Atrimed.jpeg'],
            highlights: ['Gentle herbal cleansing bar', 'Protects skin natural moisture barrier', 'Anti-inflammatory & healing properties', 'Dermatest-certified in Germany', 'Suitable for face & body daily use']
          },
          {
            name: 'Sorion Moisturiser',
            category: 'Sorion — Daily Hydration',
            description: 'Daily hydration and barrier protection lotion powered by herbal phytoconstituents for smooth, resilient skin.',
            fullDescription: 'Sorion Moisturiser provides daily hydration and comprehensive environmental protection for dry, sensitive, or eczema-prone skin.\n\nFormulated with Atrimed\'s five herbal extracts, it locks in essential moisture, relieves tightness, and promotes skin repair throughout the day, supporting a soft, smooth, and healthy skin barrier.\n\nIndicated for: Daily full-body hydration, skin barrier maintenance, and post-flare skin comfort.',
            images: ['/assets/Atrimed.jpeg'],
            highlights: ['Daily hydration & skin protection', 'Strengthens natural skin barrier', 'Phytoconstituents from 5 herbal extracts', 'Calms dry, rough & irritated skin', 'Non-sticky, easily absorbed lotion']
          }
        ]
      },
      {
        id: 'group-pharma',
        badge: 'Group Pharmaceuticals (GP)',
        title: 'Group Pharmaceuticals Limited — Healthy Smiles Matter',
        bannerImage: '/assets/GroupPharma.jpeg',
        bannerAlt: 'Group Pharmaceuticals Limited — Healthy Smiles Matter',
        description:
          'With over 40 years of expertise in oral care, Group Pharmaceuticals Limited develops, manufactures, markets, and exports a wide range of specialized products tailored to specific dental and oral conditions. Guided by the tagline “Healthy Smiles Matter”, formulations are continually updated with the latest clinical science.',
        featureBox: {
          badge: 'Group Pharmaceuticals Limited',
          title: 'Specialized Oral Healthcare Pioneer',
          text: 'Over 40 years of trusted dental innovation guided by "Healthy Smiles Matter" — developing targeted, scientifically backed solutions for all oral conditions.',
          stats: [
            { value: '40+ Yrs', label: 'Dental & Oral Expertise' },
            { value: '14+', label: 'Specialized Solutions' },
            { value: 'Global', label: 'Trusted Worldwide' }
          ]
        },
        products: [
          {
            name: 'About Group Pharmaceuticals',
            category: 'GP — Company Profile',
            description: 'Pioneering oral healthcare with over 40 years of expertise in specialized dental formulations tailored to specific oral conditions.',
            fullDescription: 'About Group Pharmaceuticals Limited\nWith over 40 years of expertise in oral care, Group Pharmaceuticals Limited develops, manufactures, markets, and exports a wide range of specialized products tailored to specific dental and oral conditions.\n\nGuided by the tagline “Healthy Smiles Matter”, Group Pharma continuously updates its formulations in line with the latest science and research, ensuring trusted solutions for oral health worldwide.\n\nKey Focus Areas:\n• Enamel repair and remineralization\n• Orthodontic dental brace care\n• Paediatric & toddler oral hygiene\n• Dentinal sensitivity occlusion\n• Prosthetic and dry mouth therapeutic care\n• Inclusive hygiene for specially-abled individuals',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['40+ years oral care expertise', 'Tagline: "Healthy Smiles Matter"', 'Tailored dental & oral solutions', 'Continuously updated with latest science', 'Worldwide manufacturing & exports']
          },
          {
            name: 'Aclaim',
            category: 'GP — Enamel Restoration',
            description: 'Advanced dental formulation engineered to restore and strengthen dental enamel against decay and acid wear.',
            fullDescription: 'Aclaim is a specialized dental formulation developed by Group Pharmaceuticals to restore and strengthen teeth.\n\nEngineered with advanced mineral replenishment actives, it aids in rebuilding the micro-mineral structure of enamel and dentin, improving resistance to decay, acid erosion, and daily wear.\n\nIndicated for: Enamel remineralization, post-bleaching tooth strengthening, and caries-prone enamel reinforcement.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Restores & strengthens teeth', 'Enamel remineralization', 'Improves acid erosion resistance', 'Group Pharma clinical oral care']
          },
          {
            name: 'Amflor Toothpaste',
            category: 'GP — Orthodontic Care',
            description: 'Specialized orthodontic toothpaste formulated for dental braces to protect enamel and prevent white spot lesions.',
            fullDescription: 'Amflor Toothpaste is specially formulated for orthodontic patients wearing dental braces.\n\nPowered by amine fluoride, it effectively diffuses into tight crevices around orthodontic brackets and archwires to inhibit plaque formation, prevent demineralization, and protect against unsightly orthodontic white spots.\n\nIndicated for: Daily brushing for patients with fixed orthodontic appliances and braces.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Orthodontic toothpaste for braces', 'Amine fluoride active defense', 'Penetrates around brackets & wires', 'Prevents orthodontic white spots']
          },
          {
            name: 'Amflor Mouthwash',
            category: 'GP — Orthodontic Care',
            description: 'Targeted orthodontic mouthwash providing comprehensive remineralizing rinse protection for brace wearers.',
            fullDescription: 'Amflor Mouthwash provides targeted daily oral rinse protection for orthodontic patients wearing braces.\n\nIts liquid amine fluoride formulation reaches interdental spaces and recesses around brackets that brushing can miss, neutralizing acid-producing bacteria and reinforcing enamel across all tooth surfaces.\n\nIndicated for: Daily orthodontic rinse for dental brace wearers.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Orthodontic mouthwash for dental braces', 'Amine fluoride liquid defense', 'Reaches interproximal spaces', 'Protects against decalcification']
          },
          {
            name: 'Elsenz',
            category: 'GP — Cavity Prevention',
            description: 'Advanced bioactive toothpaste engineered for durable cavity prevention and long-lasting enamel protection.',
            fullDescription: 'Elsenz is a scientifically advanced toothpaste designed for comprehensive cavity prevention.\n\nPowered by bioactive remineralizing technology, it releases vital mineral ions upon brushing to form a protective fluorapatite-like layer across tooth surfaces, shielding enamel against persistent acid attacks and tooth decay.\n\nIndicated for: Active cavity prevention and high-caries-risk patient maintenance.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Toothpaste for cavity prevention', 'Bioactive mineral replenishment', 'Forms fluorapatite-like shield', 'Durable acid erosion defence']
          },
          {
            name: 'Enafix',
            category: 'GP — Enamel Strengthening',
            description: 'Toothpaste formulated to reinforce and strengthen dental enamel by remineralizing early microscopic defects.',
            fullDescription: 'Enafix is a targeted enamel repair toothpaste created to strengthen enamel and arrest initial demineralization.\n\nIt replenishes calcium and phosphate ions directly into porous enamel prisms, restoring natural micro-hardness and fortifying teeth against bacterial acid challenges.\n\nIndicated for: Weakened enamel, initial enamel lesions, and routine enamel strengthening.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Toothpaste to strengthen enamel', 'Remineralizes early enamel defects', 'Restores natural tooth hardness', 'Shields against demineralization']
          },
          {
            name: 'Glodent',
            category: 'GP — Whitening Care',
            description: 'Whitening toothpaste designed to lift surface stains for brighter, radiant smiles without damaging enamel.',
            fullDescription: 'Glodent is an advanced whitening toothpaste formulated to safely lift extrinsic stains caused by coffee, tea, and food pigments.\n\nIts non-destructive polishing matrix restores the natural brightness and shine of teeth while providing daily cavity and fresh breath protection without tooth sensitivity.\n\nIndicated for: Surface stain removal, brighter smiles, and daily cosmetic oral maintenance.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Whitening toothpaste for brighter smiles', 'Lifts extrinsic stains safely', 'Non-abrasive on dental enamel', 'Cavity protection & fresh breath']
          },
          {
            name: 'Pediflor',
            category: 'GP — Children Oral Care',
            description: 'Toothpaste specially formulated for children to protect developing teeth and establish healthy oral habits.',
            fullDescription: 'Pediflor is a child-friendly toothpaste specially formulated for growing children.\n\nFeaturing an active fluoride concentration tailored to child safety and a pleasant kid-friendly flavor, it effectively strengthens young dental enamel, prevents early childhood caries, and makes daily brushing enjoyable.\n\nIndicated for: Children’s daily oral hygiene and pediatric cavity prevention.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Specially formulated for children', 'Child-safe active fluoride level', 'Pleasant kid-friendly taste', 'Strengthens developing teeth']
          },
          {
            name: 'Ethiaspire',
            category: 'GP — Toddler Oral Care',
            description: 'Ultra-gentle toothpaste designed specifically for toddlers, ensuring safe and delicate care for primary teeth.',
            fullDescription: 'Ethiaspire is an ultra-mild toothpaste specifically designed for toddlers and very young children.\n\nCrafted with safe, gentle, food-grade ingredients and free from harsh abrasives, it safely cleanses primary baby teeth and soothes tender emerging gums during early dental development.\n\nIndicated for: Toddlers learning to brush and delicate baby teeth care.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Toothpaste designed for toddlers', 'Ultra-gentle on primary teeth', 'Safe & mild food-grade formulation', 'Protects tender emerging gums']
          },
          {
            name: 'Shy NM',
            category: 'GP — Sensitive Teeth Care',
            description: 'Toothpaste and mouthwash system engineered to rapidly occlude exposed dentinal tubules for lasting sensitivity relief.',
            fullDescription: 'Shy NM is an advanced sensitivity care solution available as both toothpaste and mouthwash.\n\nUtilizing bioactive desensitizing technology, it rapidly and permanently occludes exposed dentinal tubules, stopping fluid movement within tooth nerves and providing rapid, long-lasting relief from sharp hot, cold, and sweet pain.\n\nIndicated for: Moderate to severe tooth sensitivity and exposed root surfaces.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Toothpaste & mouthwash for sensitive teeth', 'Rapidly occludes dentinal tubules', 'Long-lasting pain desensitization', 'Relief from hot, cold & sweet triggers']
          },
          {
            name: 'Shy XT',
            category: 'GP — Sensitive Teeth Care',
            description: 'High-performance toothpaste formulated for deep-acting, persistent relief from severe tooth sensitivity.',
            fullDescription: 'Shy XT is an intensive anti-sensitivity toothpaste engineered for individuals with persistent, chronic dental hypersensitivity.\n\nIt forms an enduring protective barrier across vulnerable tooth surfaces, insulating delicate pulp nerves against thermal shocks, acidic foods, and toothbrush abrasion.\n\nIndicated for: Chronic dentinal hypersensitivity, receding gums, and post-periodontal sensitivity.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Toothpaste for sensitive teeth', 'Deep-acting thermal nerve barrier', 'Protection from cold & hot stimuli', 'Gentle on receding gums']
          },
          {
            name: 'Guard OR',
            category: 'GP — Antiseptic Oral Hygiene',
            description: 'Chlorhexidine-based mouthwash providing broad-spectrum antibacterial protection for superior oral hygiene.',
            fullDescription: 'Guard OR is a professional-grade chlorhexidine-based mouthwash engineered for therapeutic oral hygiene.\n\nIt provides potent, broad-spectrum antimicrobial action against plaque-causing bacteria, reduces gingival bleeding and inflammation, and supports tissue healing after dental procedures.\n\nIndicated for: Gingivitis, post-surgical oral care, plaque control, and intensive oral hygiene.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Chlorhexidine-based mouthwash', 'Broad-spectrum antibacterial protection', 'Inhibits dental plaque formation', 'Post-procedure & gingivitis care']
          },
          {
            name: 'Densive',
            category: 'GP — Denture Care',
            description: 'Fast-acting effervescent tablets formulated for deep denture cleaning, stain removal, and sanitization.',
            fullDescription: 'Densive is an effervescent denture cleaning tablet formulated to deliver complete prosthetic hygiene.\n\nIt penetrates microscopic porosities to dissolve stubborn food residues, lift tea/coffee/tobacco stains, and eradicate 99.9% of odor-causing bacteria without scratching or weakening acrylic dentures.\n\nIndicated for: Full and partial dentures, orthodontic retainers, and night guards.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Tablets for denture cleaning', 'Effervescent antibacterial sanitization', 'Lifts stubborn stains & food residues', 'Non-scratching prosthetic protection']
          },
          {
            name: 'Ormist',
            category: 'GP — Dry Mouth Relief',
            description: 'Hydrating oral spray providing instant, soothing lubrication and moisture for dry mouth (xerostomia).',
            fullDescription: 'Ormist is a hydrating oral spray formulated to provide prompt, enduring relief from dry mouth (xerostomia).\n\nFormulated to mimic natural saliva, it coats and lubricates oral tissues, relieves mucosal dryness and burning sensations, eases speech and swallowing, and helps maintain a balanced oral microbiome.\n\nIndicated for: Dry mouth (xerostomia) caused by medications, aging, or radiation therapy.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Hydrating oral spray for dry mouth', 'Instant mucosal lubrication & comfort', 'Mimics natural saliva properties', 'Convenient on-the-go spray']
          },
          {
            name: 'Abledent',
            category: 'GP — Accessible Oral Hygiene',
            description: 'Exclusive oral hygiene range thoughtfully designed for specially-abled individuals and their caregivers.',
            fullDescription: 'Abledent is an exclusive, pioneering oral hygiene range developed specifically for specially-abled individuals.\n\nAddressing unique physical and sensory challenges, Abledent features ergonomic, easy-to-use solutions and gentle, non-foaming formulas that make daily brushing dignified, effective, and stress-free for both individuals and their dedicated caregivers.\n\nIndicated for: Specialized daily oral care for individuals with motor, cognitive, or sensory disabilities.',
            images: ['/assets/GroupPharma.jpeg'],
            highlights: ['Exclusive range for specially-abled individuals', 'Caregiver-friendly ergonomic design', 'Dignified & stress-free oral hygiene', 'Accommodates physical & sensory needs']
          }
        ]
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
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
                  <rect width="56" height="56" rx="12" fill="#f3f4f6" />
                  <path d="M18 38l10-12 7 8 5-6 8 10H18z" fill="#d1d5db" />
                  <circle cx="22" cy="22" r="4" fill="#d1d5db" />
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
  const [activeSubcat, setActiveSubcat] = useState('all');

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
              {cat.bannerImage ? (
                <div className="product-category-banner">
                  <img
                    src={cat.bannerImage}
                    alt={cat.bannerAlt}
                    className="product-category-banner-img"
                    loading="lazy"
                  />
                </div>
              ) : cat.featureBox ? (
                <div className="product-category-feature-box">
                  <span className="pcf-badge">{cat.featureBox.badge}</span>
                  <h4 className="pcf-title">{cat.featureBox.title}</h4>
                  <p className="pcf-text">{cat.featureBox.text}</p>
                  <div className="pcf-stats">
                    {cat.featureBox.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="pcf-stat-item">
                        <span className="pcf-stat-val">{stat.value}</span>
                        <span className="pcf-stat-lbl">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="product-category-divider" />

            {/* Subcategory Filter Tabs (if category has subcategories) */}
            {cat.subcategories && (
              <div className="product-subcat-tabs" role="tablist" aria-label="Filter subcategories">
                <button
                  type="button"
                  className={`product-subcat-tab ${activeSubcat === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveSubcat('all')}
                >
                  All Categories ({cat.subcategories.reduce((acc, s) => acc + s.products.length, 0)})
                </button>
                {cat.subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    className={`product-subcat-tab ${activeSubcat === sub.id ? 'active' : ''}`}
                    onClick={() => setActiveSubcat(sub.id)}
                  >
                    {sub.badge} ({sub.products.length})
                  </button>
                ))}
              </div>
            )}

            {/* Render subcategories or regular products grid */}
            {cat.subcategories ? (
              <div className="product-subcategories-wrap">
                {cat.subcategories
                  .filter((sub) => activeSubcat === 'all' || activeSubcat === sub.id)
                  .map((sub) => (
                    <div key={sub.id} id={sub.id} className="product-subcategory-block">
                      <div className="product-subcategory-header">
                        <div className="product-subcategory-info">
                          <span className="product-subcategory-badge">{sub.badge}</span>
                          <h3 className="product-subcategory-title">{sub.title}</h3>
                          <p className="product-subcategory-desc">{sub.description}</p>
                          {sub.featureBox && (
                            <div className="product-subcategory-stats">
                              {sub.featureBox.stats.map((stat, sIdx) => (
                                <div key={sIdx} className="pcf-stat-item">
                                  <span className="pcf-stat-val">{stat.value}</span>
                                  <span className="pcf-stat-lbl">{stat.label}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        {sub.bannerImage ? (
                          <div className="product-category-banner">
                            <img
                              src={sub.bannerImage}
                              alt={sub.bannerAlt || sub.title}
                              className="product-category-banner-img"
                              loading="lazy"
                            />
                          </div>
                        ) : sub.featureBox ? (
                          <div className="product-category-feature-box">
                            <span className="pcf-badge">{sub.featureBox.badge}</span>
                            <h4 className="pcf-title">{sub.featureBox.title}</h4>
                            <p className="pcf-text">{sub.featureBox.text}</p>
                            <div className="pcf-stats">
                              {sub.featureBox.stats.map((stat, sIdx) => (
                                <div key={sIdx} className="pcf-stat-item">
                                  <span className="pcf-stat-val">{stat.value}</span>
                                  <span className="pcf-stat-lbl">{stat.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>

                      <div className="product-items-grid">
                        {sub.products.map((prod, pIdx) => (
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
                  ))}
              </div>
            ) : (
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
            )}
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
