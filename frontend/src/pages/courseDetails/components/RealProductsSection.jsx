import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import RetroTerminal3DScene from "./RetroTerminal3DScene";
import "./RealProductsSection.css";

// Smooth Counting Number Component triggered upon entering viewport
function AnimatedCounter({ end, duration = 1.8, suffix = "", isFloat = false }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    let animId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Natural cubic ease-out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeProgress * end;

      setCount(currentVal);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };

    animId = requestAnimationFrame(step);
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isInView, end, duration]);

  const display = isFloat ? count.toFixed(1) : Math.floor(count);

  return (
    <span ref={ref} className="counter-value">
      {display}
      {suffix}
    </span>
  );
}

export default function RealProductsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="real-products-section">
      <div className="real-products-container">
        
        {/* Ambient Backlight Glow */}
        <div className="real-products-glow" />

        {/* Section Header */}
        <div className="real-products-header">
          <motion.h2
            className="real-products-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            Build Real Products
          </motion.h2>
          <motion.p
            className="real-products-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            That Actually Matters To The World
          </motion.p>
        </div>

        {/* Interactive 3D Objects Stage (Hidden & Unmounted on Mobile) */}
        {!isMobile && (
          <div className="real-products-stage-wrapper">
            <RetroTerminal3DScene />

            {/* Hand-Drawn Note: And Many More! */}
            <motion.div
              className="real-products-more-note"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [-8, -5, -8],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>And Many More!</span>
              <svg
                width="36"
                height="30"
                viewBox="0 0 36 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8C12 2 24 4 28 14M28 14L22 14M28 14L28 8"
                  stroke="#f6d96b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        )}

        {/* Three Animated Metric Counter Boxes */}
        <div className="real-products-counters">
          {/* Box 1: 7 Months */}
          <motion.div
            className="counter-box"
            whileHover={{ y: -6, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            <AnimatedCounter end={7} duration={1.6} />
            <span className="counter-label">Months</span>
          </motion.div>

          {/* Box 2: 300+ Lectures */}
          <motion.div
            className="counter-box"
            whileHover={{ y: -6, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            <AnimatedCounter end={300} duration={1.8} suffix="+" />
            <span className="counter-label">Lectures</span>
          </motion.div>

          {/* Box 3: 1.2k+ Questions */}
          <motion.div
            className="counter-box"
            whileHover={{ y: -6, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            <AnimatedCounter end={1.2} duration={2.0} suffix="k+" isFloat={true} />
            <span className="counter-label">Questions</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
