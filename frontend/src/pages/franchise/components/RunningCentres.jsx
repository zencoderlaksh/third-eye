import React from "react";
import "./RunningCentres.css";
import { MapPin, Navigation, Sparkles, Building2, CheckCircle2 } from "lucide-react";

export default function RunningCentres() {
  const branches = [
    { name: "Sanganer", tag: "Flagship / Head Branch", status: "Operational" },
    { name: "Pratap Nagar", tag: "South Jaipur Hub", status: "Operational" },
    { name: "Jagatpura", tag: "Institutional Area", status: "Operational" },
    { name: "Vaishali Nagar", tag: "West Jaipur Hub", status: "Operational" },
    { name: "Mansarovar", tag: "Metro Corridor Hub", status: "Operational" },
    { name: "Vidhyadhar Nagar", tag: "North Jaipur Hub", status: "Operational" },
    { name: "Raja Park", tag: "Central Jaipur Hub", status: "Operational" },
    { name: "Jhotwara", tag: "Industrial / Residential", status: "Operational" },
    { name: "Gopalpura", tag: "Education Coaching Belt", status: "Operational" },
    { name: "Sodala", tag: "Metro Transit Hub", status: "Operational" }
  ];

  const upcomingLocations = ["AJMER", "SIKAR", "ALWAR", "KOTA", "JODHPUR"];

  return (
    <section className="centres-section" id="running-centres">
      <div className="centres-container">
        {/* Section Header */}
        <div className="centres-header-block">
          <div className="centres-badge">
            <Building2 size={16} />
            <span>EXTENSIVE NETWORK FOOTPRINT</span>
          </div>
          <h2 className="centres-title">OUR RUNNING CENTRES</h2>
          <div className="centres-sub-pill">
            11+ ACTIVE BRANCHES & MANY MORE COMING SOON ACROSS RAJASTHAN
          </div>
        </div>

        {/* Branches Grid */}
        <div className="branches-grid">
          {branches.map((b, idx) => (
            <div key={idx} className="branch-card">
              <div className="branch-card-header">
                <div className="branch-pin-icon">
                  <MapPin size={18} />
                </div>
                <span className="branch-status-badge">
                  <CheckCircle2 size={12} />
                  {b.status}
                </span>
              </div>
              <h3 className="branch-name">{b.name}</h3>
              <p className="branch-tag">{b.tag}</p>
            </div>
          ))}
        </div>

        {/* Expanding Beyond Jaipur Banner */}
        <div className="expansion-banner-card">
          <div className="expansion-banner-content">
            <div className="expansion-banner-header">
              <Navigation size={22} className="expansion-compass" />
              <h3 className="expansion-banner-title">Upcoming Franchise Hubs (Phase II)</h3>
            </div>
            <p className="expansion-banner-desc">
              Be the first to introduce Rajasthan's leading tech skill institute to your hometown. 
              Exclusive territorial protection guaranteed.
            </p>
          </div>

          <div className="upcoming-chips-row">
            {upcomingLocations.map((loc, i) => (
              <span key={i} className="upcoming-city-pill">
                <Sparkles size={13} />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
