import React, { useState } from "react";
import "./FranchiseInquiryForm.css";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Sparkles,
  ShieldCheck,
  Building
} from "lucide-react";

export default function FranchiseInquiryForm({ formRef }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    investment: "10-15 Lakhs",
    background: "Business Owner",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="inquiry-franchise-section" id="apply-franchise" ref={formRef}>
      <div className="inquiry-franchise-container">
        {/* Section Header */}
        <div className="inquiry-header-block">
          <div className="inquiry-badge">
            <Sparkles size={16} />
            <span>PARTNER ENROLLMENT OPEN</span>
          </div>
          <h2 className="inquiry-title">START YOUR FRANCHISE INQUIRY</h2>
          <p className="inquiry-sub">
            Fill out the form below. Our Head of Franchise Business Development will 
            connect with you within 24 hours to schedule a confidential discovery session.
          </p>
        </div>

        {/* Two Column Layout: Form & Contact Info */}
        <div className="inquiry-grid">
          {/* Form Card */}
          <div className="inquiry-form-card">
            {submitted ? (
              <div className="submission-success-box">
                <div className="success-icon-circle">
                  <CheckCircle size={44} />
                </div>
                <h3 className="success-title">Thank You, {formData.fullName || "Partner"}!</h3>
                <p className="success-desc">
                  Your franchise application for <strong>{formData.city || "your target location"}</strong> has been registered with our Expansion Desk. 
                  Our representative will contact you at <strong>{formData.phone || "your number"}</strong> shortly.
                </p>
                <button 
                  type="button" 
                  className="reset-form-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      phone: "",
                      email: "",
                      city: "",
                      investment: "10-15 Lakhs",
                      background: "Business Owner",
                      message: ""
                    });
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="franchise-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                      placeholder="e.g. Rajesh Kumar" 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Mobile Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      placeholder="+91 98765 43210" 
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder="you@domain.com" 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Target City / District *</label>
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required 
                      placeholder="e.g. Ajmer, Sikar, Alwar" 
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Investment Capacity</label>
                    <select 
                      name="investment" 
                      value={formData.investment} 
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Below 10 Lakhs">Below ₹10 Lakhs</option>
                      <option value="10-15 Lakhs">₹10 Lakhs – ₹15 Lakhs</option>
                      <option value="15-25 Lakhs">₹15 Lakhs – ₹25 Lakhs</option>
                      <option value="25+ Lakhs">₹25+ Lakhs (Multi-Unit)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Current Background</label>
                    <select 
                      name="background" 
                      value={formData.background} 
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Business Owner">Business Owner</option>
                      <option value="Teacher/Trainer">Teacher / Academician</option>
                      <option value="IT Professional">IT / Corporate Professional</option>
                      <option value="Investor">Real Estate / Investor</option>
                      <option value="First-time Entrepreneur">First-time Entrepreneur</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Questions or Location Details (Optional)</label>
                  <textarea 
                    name="message" 
                    rows={3} 
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Tell us about your proposed center space, prior business experience, or timeline..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="form-submit-btn"
                >
                  <Send size={18} />
                  <span>{isSubmitting ? "Submitting Application..." : "Submit Franchise Application"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Card */}
          <div className="inquiry-contact-card">
            <div className="contact-card-header">
              <Building size={24} className="contact-head-icon" />
              <div>
                <h3 className="contact-title">Direct Expansion Desk</h3>
                <p className="contact-sub">Head Office Corporate Allotment Unit</p>
              </div>
            </div>

            <div className="contact-channels">
              <a href="tel:+918058061222" className="channel-box">
                <div className="channel-icon-wrap">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="channel-label">Call Franchise Helpline</div>
                  <div className="channel-value">+91 805 806 1222</div>
                </div>
              </a>

              <a href="mailto:info@thirdeyeclasses.com" className="channel-box">
                <div className="channel-icon-wrap">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="channel-label">Official Franchise Email</div>
                  <div className="channel-value">info@thirdeyeclasses.com</div>
                </div>
              </a>

              <div className="channel-box static-box">
                <div className="channel-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="channel-label">Head Office Address</div>
                  <div className="channel-value">Sanganer, Jaipur, Rajasthan 302029</div>
                </div>
              </div>
            </div>

            <div className="territory-guarantee-box">
              <ShieldCheck size={22} className="guarantee-icon" />
              <div>
                <strong>Exclusive Territory Rights:</strong> We legally guarantee a defined demographic 
                protection radius so no other Thirdeye center cannibalizes your student admissions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
