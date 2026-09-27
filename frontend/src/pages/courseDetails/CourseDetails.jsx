import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseHeroSection from "./components/CourseHeroSection";
import RealProductsSection from "./components/RealProductsSection";
import IndustryToolsSection from "./components/IndustryToolsSection";
import CurriculumSection from "./components/CurriculumSection";
import CertificationSection from "./components/CertificationSection";
import PlacedStudentsSection from "./components/PlacedStudentsSection";
import CourseFAQSection from "./components/CourseFAQSection";
import NeedHelpSection from "./components/NeedHelpSection";
import "./CourseDetails.css";

// Course Title Lookup Map
const COURSE_NAME_MAP = {
  "2d-3d-animation": "2D & 3D Animation",
  "3d-cad-matrix": "3D CAD Matrix",
  "3d-animation-using-maya": "3D Animation Using Maya",
  "3d-animation-using-blender": "3D Animation Using Blender",
  "adcs": "ADCS (Computer Applications)",
  "adobe-after-effects": "Adobe After Effects",
  "adobe-illustrator": "Adobe Illustrator",
  "adobe-photoshop": "Adobe Photoshop",
  "advance-excel": "Advance Excel",
  "autocad-2d-3d": "AutoCAD (2D & 3D)",
  "c-cpp-programming": "C & C++ Programming",
  "coreldraw": "CorelDraw",
  "graphic-designing": "Graphic Designing",
  "java-programming": "Java Programming",
  "m-mern-full-stack": "MERN Full Stack Development",
  "python-programming": "Python Programming",
  "revit-architecture": "Revit Architecture",
  "tally-prime-gst": "Tally Prime with GST",
  "ui-ux-designing": "UI / UX Designing",
  "video-editing": "Professional Video Editing",
  "vfx-compositing": "VFX & Compositing",
  "web-development": "Full Stack Web Development",
};

const formatSlugTitle = (slug) => {
  if (!slug) return "Full Stack Web Development";
  if (COURSE_NAME_MAP[slug]) return COURSE_NAME_MAP[slug];
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};

// 4 Tools per Course Category (passed dynamically via props)
const COURSE_TOOLS_MAP = {
  "2d-3d-animation": [
    { id: "blender", name: "Blender 3D", iconType: "blender", glowColor: "rgba(234, 118, 0, 0.3)" },
    { id: "maya", name: "Autodesk Maya", iconType: "maya", glowColor: "rgba(6, 150, 215, 0.3)" },
    { id: "aftereffects", name: "After Effects", iconType: "aftereffects", glowColor: "rgba(153, 153, 255, 0.3)" },
    { id: "photoshop", name: "Photoshop", iconType: "photoshop", glowColor: "rgba(49, 168, 255, 0.3)" },
  ],
  "3d-cad-matrix": [
    { id: "rhino", name: "Rhino 3D", iconType: "blender", glowColor: "rgba(234, 118, 0, 0.3)" },
    { id: "matrix", name: "Matrix 3D", iconType: "maya", glowColor: "rgba(6, 150, 215, 0.3)" },
    { id: "keyshot", name: "KeyShot", iconType: "aftereffects", glowColor: "rgba(153, 153, 255, 0.3)" },
    { id: "photoshop", name: "Photoshop", iconType: "photoshop", glowColor: "rgba(49, 168, 255, 0.3)" },
  ],
  default: [
    { id: "react", name: "React", iconType: "react", glowColor: "rgba(97, 218, 251, 0.3)" },
    { id: "nextjs", name: "Next.Js", iconType: "nextjs", glowColor: "rgba(255, 255, 255, 0.25)" },
    { id: "typescript", name: "TypeScript", iconType: "typescript", glowColor: "rgba(49, 120, 198, 0.3)" },
    { id: "tailwind", name: "Tailwind CSS", iconType: "tailwind", glowColor: "rgba(56, 189, 248, 0.3)" },
  ],
};

// Exactly 5 Modules per Course Category (passed dynamically via props, no dropdowns)
const COURSE_MODULES_MAP = {
  "2d-3d-animation": [
    {
      id: "anim-1",
      moduleNumber: "MODULE 1",
      title: "Art Fundamentals & 12 Animation Principles",
      description: "Foundations of squash & stretch, staging, timing, kinematics, and visual storytelling.",
    },
    {
      id: "anim-2",
      moduleNumber: "MODULE 2",
      title: "3D Asset Modeling & Clean Quad Topology in Blender",
      description: "Hard-surface props, environmental architecture, and organic sculpting.",
    },
    {
      id: "anim-3",
      moduleNumber: "MODULE 3",
      title: "PBR Shading, Texturing & Substance Painter",
      description: "Physically Based Rendering shaders, normal displacement, and photorealistic texturing.",
    },
    {
      id: "anim-4",
      moduleNumber: "MODULE 4",
      title: "Character Rigging & Skeletal Inverse Kinematics",
      description: "Armature setups, facial blend shapes, weight paint skinning, and controller constraints.",
    },
    {
      id: "anim-5",
      moduleNumber: "MODULE 5",
      title: "Cinematic Lighting, Dynamics & Final Showreel",
      description: "Three-point studio lighting, camera framing, physics simulation, and showreel mastering.",
    },
  ],
  default: [
    {
      id: "web-1",
      moduleNumber: "MODULE 1",
      title: "Internet, Networking & Web Fundamentals",
      description: "Understand how the web works from low-level networking to browser systems.",
    },
    {
      id: "web-2",
      moduleNumber: "MODULE 2",
      title: "Modern JavaScript & Deep Dive Architecture",
      description: "Master core ECMAScript, closures, asynchronous event loop, and functional paradigms.",
    },
    {
      id: "web-3",
      moduleNumber: "MODULE 3",
      title: "React 19, Component Architecture & Performance",
      description: "Build scalable web applications with advanced hooks, suspense, and state machines.",
    },
    {
      id: "web-4",
      moduleNumber: "MODULE 4",
      title: "Next.js Fullstack Engine & API Design",
      description: "Server-side rendering, incremental static generation, and edge route handlers.",
    },
    {
      id: "web-5",
      moduleNumber: "MODULE 5",
      title: "Production Backend, Databases & Cloud Deployments",
      description: "Relational data modeling, PostgreSQL, Docker containers, and CI/CD automated pipelines.",
    },
  ],
};

export default function CourseDetails() {
  const { courseSlug } = useParams();

  useEffect(() => {
    document.title = "Course Details | Third Eye Computer Classes Jaipur";
    window.scrollTo(0, 0);
  }, []);

  const courseName = formatSlugTitle(courseSlug);
  const currentTools = (courseSlug && COURSE_TOOLS_MAP[courseSlug]) || COURSE_TOOLS_MAP.default;
  const currentModules = (courseSlug && COURSE_MODULES_MAP[courseSlug]) || COURSE_MODULES_MAP.default;

  return (
    <div className="course-details-page">
      {/* 1. Hero Showcase Section (Dynamic Course Image + Quick Facts Card with URL-driven title) */}
      <CourseHeroSection />

      {/* 2. Build Real Products Section (Interactive 3D Stage & Animated Counters) */}
      <RealProductsSection />

      {/* 3. Industry Tools You'll Master (4 Cards via Props, Filter Tabs Removed) */}
      <IndustryToolsSection tools={currentTools} />

      {/* 4. Structured Curriculum Section (5-8 Modules from Props, No Dropdowns) */}
      <CurriculumSection modules={currentModules} />

      {/* 5. Recognized Certification (Course Name passed via props!) */}
      <CertificationSection courseTitle={courseName} />

      {/* 6. Placed Students Section (Dual Opposite Scrolling Marquee, Stops on Hover) */}
      <PlacedStudentsSection />

      {/* 7. Course FAQ Section (Frequently Asked Questions - Same for all courses) */}
      <CourseFAQSection />

      {/* 8. Need Help / Contact Us Section with 3D Physics Balls */}
      <NeedHelpSection />
    </div>
  );
}
