import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Star,
  Users,
  Building2,
  BookOpen,
  Play,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import * as THREE from "three";

export default function Hero3D() {
  const mountRef = useRef(null);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const roles = [
    "Students",
    "Beginners",
    "Future Coders",
    "Designers",
    "Working Pros",
    "Achievers",
  ];

  // Rotate roles dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Three.js 3D Interactive Cyber Neural Eye Sphere
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Core Golden Particle Orb (Eye Core)
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const baseColor = new THREE.Color("#FACC15"); // Brand Yellow
    const highlightColor = new THREE.Color("#FFFFFF"); // Crisp White
    const amberColor = new THREE.Color("#EAB308"); // Deep Gold

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.8 + Math.random() * 0.4;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixedColor =
        Math.random() > 0.6
          ? highlightColor
          : Math.random() > 0.5
          ? amberColor
          : baseColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    mainGroup.add(particles);

    // 2. Geometric Wireframe Outer Eye Ring
    const torusGeom = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const torus = new THREE.Mesh(torusGeom, torusMat);
    torus.rotation.x = Math.PI / 3;
    mainGroup.add(torus);

    const torusGeom2 = new THREE.TorusGeometry(1.6, 0.015, 16, 80);
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
      wireframe: true,
    });
    const torus2 = new THREE.Mesh(torusGeom2, torusMat2);
    torus2.rotation.y = Math.PI / 4;
    mainGroup.add(torus2);

    // Mouse tracking for 3D parallax inertia
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Window Resize Handler
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Inertia interpolation
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      mainGroup.rotation.y += 0.003;
      mainGroup.rotation.x = currentY * 0.5;
      mainGroup.rotation.y += currentX * 0.02;

      torus.rotation.z += 0.002;
      torus2.rotation.x -= 0.003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#07080D]">
      {/* Three.js Interactive 3D WebGL Canvas Layer */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-80 sm:opacity-90"
      />

      {/* Ambient Gradient Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Foreground Hero Content with Parallax Rhythm */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        
        {/* Live Batch Admissions Ribbon */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#141622]/80 border border-yellow-400/30 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.15)] mb-8 backdrop-blur-md animate-bounce-subtle">
          <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-ping" />
          <span>New Batch Starts Every Monday & Wednesday</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-300 font-medium">100% Practical Training</span>
        </div>

        {/* Dynamic Target Role Header */}
        <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-zinc-400 mb-3">
          The Perfect Learning Academy For{" "}
          <span className="text-yellow-400 underline decoration-yellow-400/40 decoration-2 underline-offset-4 transition-all duration-300">
            {roles[activeRoleIndex]}
          </span>
        </div>

        {/* Grand Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
          Master In-Demand Tech Skills at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 drop-shadow-sm">
            Third Eye
          </span>
        </h1>

        {/* Core Subtitle */}
        <p className="text-base sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Gain real-world job-ready skills for the future. Learn <strong className="text-white">Web Development, Python AI, Graphic Design, Digital Marketing, and Tally ERP</strong> with hands-on lab projects and personal mentorship.
        </p>

        {/* Dual High-Impact Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-extrabold text-black bg-yellow-400 rounded-full shadow-[0_0_25px_rgba(250,204,21,0.35)] hover:bg-yellow-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.5)] active:scale-95 transition-all duration-200 group"
          >
            <BookOpen className="w-5 h-5 text-black" />
            <span>Explore 300+ Courses</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="https://wa.me/918058061222?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20class%20at%20Third%20Eye%20Computer%20Classes"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-zinc-200 bg-[#141622]/80 hover:bg-[#1B1E2E] border border-white/10 hover:border-yellow-400/40 rounded-full backdrop-blur-xl transition-all duration-200 group"
          >
            <Play className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>Book Free Demo Class</span>
          </a>
        </div>

        {/* Live Metric Badges (Parallax Depth Grid) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            {
              icon: Users,
              value: "10,000+",
              label: "Students Trained",
              sub: "Across India",
            },
            {
              icon: Star,
              value: "4.9 / 5.0",
              label: "5,000+ Reviews",
              sub: "Verified Alumni",
            },
            {
              icon: Briefcase,
              value: "150+",
              label: "Hiring Partners",
              sub: "Direct Placements",
            },
            {
              icon: ShieldCheck,
              value: "100%",
              label: "Practical Training",
              sub: "Job Assistance",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#0F111A]/80 border border-white/[0.08] backdrop-blur-xl text-left hover:border-yellow-400/40 transition-all duration-300 group shadow-lg shadow-black/40"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  {stat.sub}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-yellow-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 font-medium mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
