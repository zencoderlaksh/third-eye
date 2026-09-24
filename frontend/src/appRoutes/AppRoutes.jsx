import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

// Placeholder Page Component with consistent dark & yellow branding
function PlaceholderPage({ title, subtitle }) {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-32 pb-20 text-center">
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

import HomePage from "../pages/HomePage";
import Courses from "../pages/Courses";
import TwoDThreeDAnimation from "../pages/TwoDThreeDAnimation";
import ThreeDCADMatrix from "../pages/ThreeDCADMatrix";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<Courses />} />
        <Route
          path="courses/2d-3d-animation"
          element={<TwoDThreeDAnimation />}
        />
        <Route
          path="courses/3d-cad-matrix"
          element={<ThreeDCADMatrix />}
        />
        {/* Company Dropdown Routes */}
        <Route
          path="about-us"
          element={<PlaceholderPage title="About Us" subtitle="Learn about the legacy, mission and vision of Third Eye Computer Classes." />}
        />
        <Route
          path="contact-us"
          element={<PlaceholderPage title="Contact Us" subtitle="Get in touch with our admissions desk, counselors, and campus directors." />}
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
