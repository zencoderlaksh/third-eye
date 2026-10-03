import React, { useState } from "react";
import "./PartnerTestimonials.css";
import { 
  Quote, 
  Star, 
  MapPin, 
  Sparkles, 
  Building2, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  ShieldCheck
} from "lucide-react";

// Real partner portrait photos from assets
import mayaImg from "../../../assets/leadership/sheetal_sharma.png";
import kapilImg from "../../../assets/leadership/gaurav_singh.png";
import rajImg from "../../../assets/leadership/mohit_sharma.png";
import kushalImg from "../../../assets/leadership/amit_saini.png";
import vartikaImg from "../../../assets/leadership/neelam_sharma.png";

export default function PartnerTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      id: 0,
      name: "Maya Sharma",
      role: "Franchise Center Director",
      branch: "Jagatpura Branch",
      zone: "South-East Jaipur",
      image: mayaImg,
      rating: 5.0,
      badge: "Flagship Institutional Hub",
      pullQuote: "Providing the best computer learning experience to every student.",
      quote: "I, Maya Sharma, the franchise owner of Thirdeye Computer Classes – Jagatpura Branch, am proud to share that our center is running highly successfully. With quality education, practical training, and modern facilities, we are committed to providing the best computer learning experience to every student."
    },
    {
      id: 1,
      name: "Kapil Nitharwal",
      role: "Franchise Center Director",
      branch: "Vaishali Nagar Branch",
      zone: "West Jaipur Hub",
      image: kapilImg,
      rating: 5.0,
      badge: "Prime Commercial Hub",
      pullQuote: "Quality teaching, practical training, and modern lab facilities.",
      quote: "I am glad to share that I have taken the franchise of Thirdeye Computer Classes – Vaishali Branch, and our center is running successfully. With quality teaching, practical training, and modern facilities, we are committed to providing the best computer education to our students."
    },
    {
      id: 2,
      name: "Raj Gurjar",
      role: "Franchise Center Director",
      branch: "Jhotwara Branch",
      zone: "North-West Jaipur",
      image: rajImg,
      rating: 5.0,
      badge: "Industrial & Tech Belt",
      pullQuote: "Expert training and strong focus on practical industry learning.",
      quote: "I, Raj Gurjar, the franchise owner of Thirdeye Computer Classes – Jhotwara Branch, am pleased to share that our center is running successfully. With expert training, modern facilities, and a strong focus on practical learning, we are committed to offering the best computer education to our students."
    },
    {
      id: 3,
      name: "Kushal Avasthi",
      role: "Franchise Center Director",
      branch: "Gopalpura Branch",
      zone: "Coaching High Street",
      image: kushalImg,
      rating: 5.0,
      badge: "Education Coaching Belt",
      pullQuote: "Dedicated to student career growth and quality computer training.",
      quote: "I, Kushal Avasthi, the franchise owner of Thirdeye Computer Classes – Gopalpura Branch, am proud to share that our center is running successfully. With quality teaching, practical training, and modern facilities, we are dedicated to providing the best computer education to our students."
    },
    {
      id: 4,
      name: "Vartika Kumawat",
      role: "Franchise Center Director",
      branch: "Mansarovar Branch",
      zone: "South-West Jaipur",
      image: vartikaImg,
      rating: 5.0,
      badge: "Metro Transit Corridor",
      pullQuote: "Expert faculty and standardized quality delivering high satisfaction.",
      quote: "I, Vartika, the franchise owner of Thirdeye Computer Classes – Mansarovar Branch, am delighted to share that our center is running successfully. With expert faculty, practical learning, and modern facilities, we are committed to providing high-quality computer education to all our students."
    }
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIdx];

  return (
    <section className="testimonials-section" id="partner-testimonials">
      {/* Background ambient lighting */}
      <div className="testimonials-ambient-glow glow-left" />
      <div className="testimonials-ambient-glow glow-right" />

      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header-block">
          <div className="testimonials-badge">
            <Sparkles size={16} />
            <span>AUTHENTIC EXPERIENCES & PARTNER PROOF</span>
          </div>

          <h2 className="testimonials-title">SUCCESS BEGINS HERE</h2>
          
          <p className="testimonials-sub-lead">
            Hear directly from our verified center directors running thriving Thirdeye branches across Rajasthan.
          </p>

          {/* Trust Metrics Pill Bar */}
          <div className="testimonials-trust-bar">
            <div className="trust-stat-item">
              <span className="trust-stat-val">5.0 ★</span>
              <span className="trust-stat-lbl">Partner Satisfaction</span>
            </div>
            <div className="trust-stat-sep" />
            <div className="trust-stat-item">
              <span className="trust-stat-val">100%</span>
              <span className="trust-stat-lbl">Operational Support</span>
            </div>
            <div className="trust-stat-sep" />
            <div className="trust-stat-item">
              <span className="trust-stat-val">11+</span>
              <span className="trust-stat-lbl">Thriving Centers</span>
            </div>
          </div>
        </div>

        {/* ── Executive Spotlight Story Console ── */}
        <div className="testimonial-spotlight-console">
          <div className="spotlight-top-laser" />

          <div className="spotlight-console-grid">
            {/* Left: Partner Portrait & Center Badge */}
            <div className="spotlight-portrait-col">
              <div className="spotlight-avatar-frame">
                <img 
                  src={current.image} 
                  alt={current.name} 
                  className="spotlight-avatar-img" 
                />
                <div className="spotlight-avatar-ring" />
              </div>

              <div className="spotlight-partner-meta">
                <h4 className="spotlight-author-name">{current.name}</h4>
                <span className="spotlight-author-role">{current.role}</span>
                <div className="spotlight-author-branch">
                  <MapPin size={14} className="spotlight-pin-icon" />
                  <span>{current.branch}</span>
                </div>
              </div>
            </div>

            {/* Right: Quote Narrative & Controls */}
            <div className="spotlight-narrative-col">
              <div className="spotlight-narrative-top">
                <div className="spotlight-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} fill="#ffd300" color="#ffd300" />
                  ))}
                  <span className="spotlight-rating-val">5.0 / 5.0</span>
                </div>

                <div className="spotlight-nav-buttons">
                  <button 
                    onClick={handlePrev} 
                    className="spotlight-nav-btn"
                    aria-label="Previous partner review"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="spotlight-nav-counter">
                    0{activeIdx + 1} / 0{testimonials.length}
                  </span>
                  <button 
                    onClick={handleNext} 
                    className="spotlight-nav-btn"
                    aria-label="Next partner review"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              <div className="spotlight-pull-quote">
                "{current.pullQuote}"
              </div>

              <p className="spotlight-full-quote">
                "{current.quote}"
              </p>

              <div className="spotlight-footer-pills">
                <span className="spotlight-tag-pill">
                  <ShieldCheck size={14} className="text-yellow-400" />
                  <span>{current.badge}</span>
                </span>
                <span className="spotlight-zone-pill">
                  <Building2 size={14} className="text-yellow-400" />
                  <span>{current.zone}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Partner Cards Selector Grid (All 5 Partners) ── */}
        <div className="testimonials-cards-grid">
          {testimonials.map((t, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <div 
                key={t.id} 
                className={`partner-review-card ${isSelected ? "card-is-active" : ""}`}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="card-top-laser" />
                <Quote size={40} className="card-watermark-quote" />

                {/* Card Top: Stars */}
                <div className="card-header-bar">
                  <div className="stars-cluster">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#ffd300" color="#ffd300" />
                    ))}
                  </div>
                </div>

                {/* Quote Excerpt */}
                <p className="card-quote-excerpt">
                  "{t.quote}"
                </p>

                {/* Author Info */}
                <div className="card-author-footer">
                  <div className="author-photo-wrapper">
                    <img src={t.image} alt={t.name} className="author-photo-img" />
                    <div className="author-photo-glow" />
                  </div>

                  <div className="author-info-block">
                    <h4 className="author-full-name">{t.name}</h4>
                    <div className="author-location-line">
                      <MapPin size={12} className="author-pin" />
                      <span>{t.branch}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
