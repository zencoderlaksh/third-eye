import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  CheckCircle2,
  Building2,
  Sparkles,
  ExternalLink,
  Search,
} from "lucide-react";

export default function JaipurBranchesRadar() {
  const [selectedZone, setSelectedZone] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const zones = [
    { id: "all", label: "All 10 Campuses" },
    { id: "south", label: "South Jaipur (Sanganer / Pratap Nagar)" },
    { id: "central", label: "Central & East (Raja Park / Jagatpura)" },
    { id: "west_north", label: "West & North (Mansarovar / Vaishali / VDN)" },
  ];

  const branches = [
    {
      id: "sanganer",
      name: "Sanganer Campus",
      tag: "Main Head Office",
      isHQ: true,
      zone: "south",
      address: "Near Sanganer Stadium, Main Bazar, Sanganer, Jaipur",
      phone: "+91 80580 61222",
      timings: "8:00 AM – 8:00 PM",
      features: ["Central Admin Office", "High-Speed Mac & PC Labs", "Placement Cell"],
      mapQuery: "Third Eye Computer Classes Sanganer Jaipur",
    },
    {
      id: "mansarovar",
      name: "Mansarovar Mega Campus",
      tag: "Mega Lab Hub",
      isHQ: false,
      zone: "west_north",
      address: "Near Metro Pillar / Madhyam Marg, Mansarovar, Jaipur",
      phone: "+91 80580 61222",
      timings: "8:00 AM – 8:00 PM",
      features: ["Advanced Coding Suites", "Full Stack Project Labs", "AC Classrooms"],
      mapQuery: "Third Eye Computer Classes Mansarovar Jaipur",
    },
    {
      id: "pratap-nagar",
      name: "Pratap Nagar Center",
      tag: "Engineering Hub",
      isHQ: false,
      zone: "south",
      address: "Haldi Ghati Marg, Near India Gate, Pratap Nagar, Jaipur",
      phone: "+91 80580 61222",
      timings: "8:00 AM – 7:30 PM",
      features: ["Python & AI Research Lab", "College Project Guidance", "Dedicated Mentors"],
      mapQuery: "Third Eye Computer Classes Pratap Nagar Jaipur",
    },
    {
      id: "vaishali-nagar",
      name: "Vaishali Nagar Campus",
      tag: "Prime Tech Center",
      isHQ: false,
      zone: "west_north",
      address: "Near Amrapali Circle, Vaishali Nagar, Jaipur",
      phone: "+91 80580 61222",
      timings: "8:00 AM – 8:00 PM",
      features: ["Design & Multimedia Studios", "Tally & GST Lab", "Fast Wi-Fi"],
      mapQuery: "Third Eye Computer Classes Vaishali Nagar Jaipur",
    },
    {
      id: "jagatpura",
      name: "Jagatpura Campus",
      tag: "IT & Tech Hub",
      isHQ: false,
      zone: "central",
      address: "Near 7 Number Bus Stand & Akshay Patra, Jagatpura, Jaipur",
      phone: "+91 80580 61222",
      timings: "8:30 AM – 7:30 PM",
      features: ["Web Development Suite", "Data Analytics Lab", "Library Zone"],
      mapQuery: "Third Eye Computer Classes Jagatpura Jaipur",
    },
    {
      id: "raja-park",
      name: "Raja Park Center",
      tag: "Central Jaipur",
      isHQ: false,
      zone: "central",
      address: "Near LBS College & Fashion Street, Raja Park, Jaipur",
      phone: "+91 80580 61222",
      timings: "8:00 AM – 8:00 PM",
      features: ["Graphic & 3D Animation Lab", "Executive Batches", "1-on-1 Doubts"],
      mapQuery: "Third Eye Computer Classes Raja Park Jaipur",
    },
    {
      id: "vidhyadhar-nagar",
      name: "Vidhyadhar Nagar Campus",
      tag: "North Campus",
      isHQ: false,
      zone: "west_north",
      address: "Near Central Spine, Sector 2, Vidhyadhar Nagar, Jaipur",
      phone: "+91 80580 61222",
      timings: "8:00 AM – 8:00 PM",
      features: ["RSCIT & O-Level Lab", "Modern Hardware Setup", "Flexible Batches"],
      mapQuery: "Third Eye Computer Classes Vidhyadhar Nagar Jaipur",
    },
    {
      id: "jhotwara",
      name: "Jhotwara Center",
      tag: "North-West Branch",
      isHQ: false,
      zone: "west_north",
      address: "Near Panchayat Samiti, Kalwar Road, Jhotwara, Jaipur",
      phone: "+91 80580 61222",
      timings: "8:00 AM – 7:30 PM",
      features: ["Basic to Pro Computer Classes", "Special Girls Batches", "Experienced Faculty"],
      mapQuery: "Third Eye Computer Classes Jhotwara Jaipur",
    },
    {
      id: "gopalpura",
      name: "Gopalpura Bypass Center",
      tag: "Coaching Junction",
      isHQ: false,
      zone: "south",
      address: "Near Triveni Flyover, Gopalpura Bypass Road, Jaipur",
      phone: "+91 80580 61222",
      timings: "8:00 AM – 8:00 PM",
      features: ["Competitive Exams IT Prep", "Programming Seminars", "High-End Labs"],
      mapQuery: "Third Eye Computer Classes Gopalpura Jaipur",
    },
    {
      id: "sodala",
      name: "Sodala Metro Campus",
      tag: "Metro Station Center",
      isHQ: false,
      zone: "west_north",
      address: "Near Sodala Metro Station, Ajmer Road, Jaipur",
      phone: "+91 80580 61222",
      timings: "8:00 AM – 8:00 PM",
      features: ["Walking Distance from Metro", "Weekend Fast-Track Batches", "Wi-Fi Enabled"],
      mapQuery: "Third Eye Computer Classes Sodala Jaipur",
    },
  ];

  const filteredBranches = branches.filter((branch) => {
    const matchesZone = selectedZone === "all" || branch.zone === selectedZone;
    const matchesSearch =
      branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesZone && matchesSearch;
  });

  return (
    <section id="branches" className="relative py-28 bg-[#090A0F] text-white overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-yellow-400/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #facc15 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_20px_rgba(250,204,21,0.15)]">
            <Building2 className="w-4 h-4" />
            <span>Jaipur&apos;s Largest Tech Education Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            10 Modern Campuses Across{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Jaipur
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            No matter where you reside in the Pink City, an authorized Third Eye computer lab with AC classrooms, dedicated workstations, and personal mentors is just a few minutes away.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-800/80">
          {/* Zone Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {zones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedZone === zone.id
                    ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/25 font-bold scale-[1.02]"
                    : "bg-[#12141D] text-zinc-400 hover:text-white hover:bg-[#1A1D2A] border border-zinc-800/80"
                }`}
              >
                {zone.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search branch or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#12141D] border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-yellow-400/60 transition-colors"
            />
          </div>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className={`group relative rounded-2xl bg-gradient-to-b from-[#11131C] to-[#0D0E15] border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                branch.isHQ
                  ? "border-yellow-400/60 shadow-[0_0_30px_rgba(250,204,21,0.1)] hover:border-yellow-400"
                  : "border-[#1D202F] hover:border-yellow-400/40 hover:shadow-yellow-400/5"
              }`}
            >
              {/* HQ Badge if applicable */}
              <div className="flex items-start justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {branch.name}
                    </h3>
                    <span className="text-xs font-semibold text-yellow-400/90 flex items-center gap-1">
                      {branch.isHQ && <Sparkles className="w-3 h-3 text-yellow-400 fill-yellow-400" />}
                      {branch.tag}
                    </span>
                  </div>
                </div>

                {branch.isHQ && (
                  <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full bg-yellow-400 text-black shadow-sm">
                    HQ Center
                  </span>
                )}
              </div>

              {/* Address */}
              <p className="text-xs text-zinc-400 leading-relaxed min-h-[36px] mb-4">
                {branch.address}
              </p>

              {/* Timing and Contact */}
              <div className="space-y-2 py-3 border-y border-zinc-800/80 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Lab Hours: {branch.timings}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-yellow-400" />
                  <span>
                    Helpline:{" "}
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                      className="text-zinc-200 hover:text-yellow-400 font-semibold transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </span>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="mt-4 space-y-1.5 mb-6">
                {branch.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Card Actions */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-yellow-400 text-black text-xs font-bold hover:bg-yellow-300 transition-all shadow-md shadow-yellow-400/20 active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Center</span>
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    branch.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#171A26] border border-zinc-700/80 text-zinc-300 hover:text-white hover:border-yellow-400/50 hover:bg-[#1F2333] transition-all"
                  title="Open in Google Maps"
                >
                  <Navigation className="w-4 h-4 text-yellow-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredBranches.length === 0 && (
          <div className="text-center py-16 bg-[#11131C] rounded-2xl border border-zinc-800">
            <MapPin className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-400 text-sm">No branch found matching your query.</p>
            <button
              onClick={() => {
                setSelectedZone("all");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-bold text-yellow-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner with Quick Dispatch */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#121420] via-[#171A28] to-[#121420] border border-yellow-400/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(250,204,21,0.06)]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-extrabold text-white">
              Not sure which branch is nearest to you?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Speak directly with our central counselor. We will connect you to the nearest branch lab within 2 minutes.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/918058061222?text=Hi%20Third%20Eye%20Classes,%20please%20tell%20me%20which%20branch%20is%20nearest%20to%20my%20location."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-yellow-400 text-black text-xs sm:text-sm font-extrabold hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20 active:scale-95"
            >
              <span>Locate On WhatsApp</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
