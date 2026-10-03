import React from "react";
import "./PartnerTestimonials.css";
import { Quote, Star, MapPin, CheckCircle } from "lucide-react";

export default function PartnerTestimonials() {
  const testimonials = [
    {
      name: "Maya Sharma",
      branch: "Jagatpura Branch",
      quote: "I, Maya Sharma, the franchise owner of Thirdeye Computer Classes – Jagatpura Branch, am proud to share that our center is running highly successfully. With quality education, practical training, and modern facilities, we are committed to providing the best computer learning experience to every student."
    },
    {
      name: "Kapil Nitharwal",
      branch: "Vaishali Nagar Branch",
      quote: "I am glad to share that I have taken the franchise of Thirdeye Computer Classes – Vaishali Branch, and our center is running successfully. With quality teaching, practical training, and modern facilities, we are committed to providing the best computer education to our students."
    },
    {
      name: "Raj Gurjar",
      branch: "Jhotwara Branch",
      quote: "I, Raj Gurjar, the franchise owner of Thirdeye Computer Classes – Jhotwara Branch, am pleased to share that our center is running successfully. With expert training, modern facilities, and a strong focus on practical learning, we are committed to offering the best computer education to our students."
    },
    {
      name: "Kushal Avasthi",
      branch: "Gopalpura Branch",
      quote: "I, Kushal Avasthi, the franchise owner of Thirdeye Computer Classes – Gopalpura Branch, am proud to share that our center is running successfully. With quality teaching, practical training, and modern facilities, we are dedicated to providing the best computer education to our students."
    },
    {
      name: "Vartika Kumawat",
      branch: "Mansarovar Branch",
      quote: "I, Vartika, the franchise owner of Thirdeye Computer Classes – Mansarovar Branch, am delighted to share that our center is running successfully. With expert faculty, practical learning, and modern facilities, we are committed to providing high-quality computer education to all our students."
    }
  ];

  return (
    <section className="testimonials-section" id="partner-testimonials">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header-block">
          <div className="testimonials-badge">
            <Quote size={16} />
            <span>AUTHENTIC EXPERIENCES</span>
          </div>
          <h2 className="testimonials-title">SUCCESS BEGINS HERE</h2>
          <h3 className="testimonials-sub-title">Our Franchise Partner’s Journey & Feedback</h3>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="card-top-bar">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#ffd300" color="#000000" />
                  ))}
                </div>
                <span className="verified-pill">
                  <CheckCircle size={12} />
                  Verified Partner
                </span>
              </div>

              <p className="testimonial-quote">"{t.quote}"</p>

              <div className="author-row">
                <div className="author-avatar-badge">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="author-meta">
                  <h4 className="author-name">{t.name}</h4>
                  <div className="author-branch">
                    <MapPin size={13} className="pin-icon" />
                    <span>{t.branch}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
