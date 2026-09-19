import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

// Placeholder Page Component with consistent dark & yellow branding
function PlaceholderPage({ title, subtitle }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-4">
        Third Eye Computer Classes
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
        {title}
      </h1>
      <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
        {subtitle}
      </p>
      <div className="p-8 rounded-2xl bg-[#141620] border border-[#272A38] max-w-xl mx-auto text-zinc-400 text-sm">
        This section is ready for content development. Use the navigation above to test routes and mobile responsiveness.
      </div>
    </div>
  );
}

// Home Hero Preview
function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-yellow-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            Enlightening Success • ISO Certified Institute
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Master Next-Gen Tech Skills at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
              Third Eye
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Empowering students and professionals with industry-ready computer courses, certifications, practical lab training, and 100% placement support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <a
              href="/courses"
              className="px-8 py-3.5 rounded-full font-bold text-black bg-yellow-400 hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/25 active:scale-95"
            >
              Explore All Courses
            </a>
            <a
              href="/pay-now"
              className="px-8 py-3.5 rounded-full font-semibold text-zinc-200 bg-[#141620] hover:bg-[#1C1F2E] border border-[#272A38] hover:border-yellow-400/40 transition-all"
            >
              Pay Online Fees
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-24">
            {[
              { label: "Students Trained", value: "5,000+" },
              { label: "Job Placement Rate", value: "98%" },
              { label: "Certified Courses", value: "35+" },
              { label: "Years of Excellence", value: "12+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#11131e]/60 border border-white/[0.08] backdrop-blur-sm text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-yellow-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Popular Courses Showcase */}
          <div className="text-left max-w-6xl mx-auto mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                  Career Programs
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Featured Certification Courses
                </h2>
              </div>
              <a
                href="/courses"
                className="hidden sm:inline-flex text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                View all courses →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Full Stack Web Development",
                  desc: "Master HTML5, CSS3, JavaScript, React.js, Node.js & Database Engineering with live projects.",
                  duration: "6 Months",
                  badge: "Most Popular",
                },
                {
                  title: "ADCA Diploma (Advanced)",
                  desc: "Comprehensive computer applications, MS Office, DTP, Tally ERP, Web Designing & Python basics.",
                  duration: "1 Year",
                  badge: "Govt. Recognized",
                },
                {
                  title: "Tally Prime with GST",
                  desc: "Professional accounting, inventory management, e-filing, payroll processing & business taxation.",
                  duration: "3 Months",
                  badge: "Job Oriented",
                },
              ].map((course, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-[#11131e]/70 border border-white/[0.08] hover:border-yellow-400/40 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40"
                >
                  <div className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-4">
                    {course.badge}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-3 mb-6 leading-relaxed">
                    {course.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
                    <span className="text-xs font-semibold text-zinc-500">
                      Duration: <span className="text-zinc-300">{course.duration}</span>
                    </span>
                    <span className="text-xs font-bold text-yellow-400 group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        
        {/* Company Dropdown Routes */}
        <Route
          path="about-us"
          element={<PlaceholderPage title="About Us" subtitle="Learn about the legacy, mission and vision of Third Eye Computer Classes." />}
        />
        <Route
          path="contact-us"
          element={<PlaceholderPage title="Contact Us" subtitle="Get in touch with our admissions desk, counselors, and campus directors." />}
        />

        {/* Courses Route */}
        <Route
          path="courses"
          element={<PlaceholderPage title="Our Courses" subtitle="Comprehensive vocational, IT, software, and accounting computer programs." />}
        />

        {/* Certification Dropdown Routes */}
        <Route
          path="our-certification"
          element={<PlaceholderPage title="Our Certification" subtitle="Government recognized, ISO accredited course completion credentials." />}
        />
        <Route
          path="apply-certificate"
          element={<PlaceholderPage title="Apply for Certificate" subtitle="Submit your student details and examination roll number to request your certificate." />}
        />
        <Route
          path="certificate-verification"
          element={<PlaceholderPage title="Certificate Verification" subtitle="Instant online verification system for student credentials and authenticity." />}
        />

        {/* Rise and Shine Dropdown Routes */}
        <Route
          path="student-reviews"
          element={<PlaceholderPage title="Students Reviews" subtitle="Hear genuine feedback, ratings and transformation journeys from our alumni." />}
        />
        <Route
          path="jobs-and-placement"
          element={<PlaceholderPage title="Jobs and Placement" subtitle="Discover our placement records, campus drives, and hiring partner networks." />}
        />
        <Route
          path="our-team"
          element={<PlaceholderPage title="Our Team" subtitle="Meet the qualified educators, technical trainers, and staff behind your learning." />}
        />
        <Route
          path="sweet-memories"
          element={<PlaceholderPage title="Sweet Memories" subtitle="Cherished moments, annual ceremonies, coding competitions, and campus life." />}
        />

        {/* Franchise & Pay Now */}
        <Route
          path="franchise"
          element={<PlaceholderPage title="Franchise Opportunities" subtitle="Partner with Third Eye Computer Classes to bring high-impact tech education to your city." />}
        />
        <Route
          path="pay-now"
          element={<PlaceholderPage title="Pay Now" subtitle="Secure fee payment portal for course tuition, registration, and examination fees." />}
        />

        {/* Fallback 404 */}
        <Route
          path="*"
          element={<PlaceholderPage title="404 - Page Not Found" subtitle="The page you are looking for does not exist." />}
        />
      </Route>
    </Routes>
  );
}
