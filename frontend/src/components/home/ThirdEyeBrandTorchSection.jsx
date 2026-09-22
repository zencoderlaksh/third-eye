import React, { useEffect, useRef } from "react";

export default function ThirdEyeBrandTorchSection() {
  const containerRef = useRef(null);
  const maskRef = useRef(null);
  const flareRef = useRef(null);
  const targetPos = useRef({ x: 50, y: 50 });
  const currentPos = useRef({ x: 50, y: 50 });
  const hoverOpacity = useRef(0);
  const isHovered = useRef(false);
  const animFrameId = useRef(null);

  useEffect(() => {
    const animate = () => {
      // Smoothly interpolate hover opacity (1 on hover, 0 when idle)
      const targetOpacity = isHovered.current ? 1 : 0;
      hoverOpacity.current += (targetOpacity - hoverOpacity.current) * 0.12;

      // Only calculate position and update styles when visible or fading
      if (hoverOpacity.current > 0.005) {
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.1;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.1;

        const x = currentPos.current.x.toFixed(2);
        const y = currentPos.current.y.toFixed(2);
        const opacity = hoverOpacity.current.toFixed(3);

        if (flareRef.current) {
          flareRef.current.style.opacity = opacity;
          flareRef.current.style.left = `${x}%`;
          flareRef.current.style.top = `${y}%`;
        }

        if (maskRef.current) {
          maskRef.current.style.opacity = opacity;
          const maskGrad = `radial-gradient(circle clamp(130px, 20vw, 320px) at ${x}% ${y}%, black 0%, rgba(0,0,0,0.7) 48%, transparent 78%)`;
          maskRef.current.style.maskImage = maskGrad;
          maskRef.current.style.webkitMaskImage = maskGrad;
        }
      } else {
        if (flareRef.current) flareRef.current.style.opacity = "0";
        if (maskRef.current) maskRef.current.style.opacity = "0";
      }

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const updateCoordinates = (clientX, clientY) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    targetPos.current = {
      x: Math.max(5, Math.min(95, x)),
      y: Math.max(10, Math.min(90, y)),
    };
  };

  const handleMouseMove = (e) => {
    isHovered.current = true;
    updateCoordinates(e.clientX, e.clientY);
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
  };

  const handleTouchMove = (e) => {
    isHovered.current = true;
    if (e.touches?.[0]) {
      updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    isHovered.current = false;
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full overflow-hidden bg-[#050505] pt-0 pb-6 sm:pb-10 md:pb-14 flex flex-col items-center justify-center select-none"
    >
      {/* Background radial glow that follows the torch */}
      <div
        ref={flareRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300"
        style={{
          left: "50%",
          top: "50%",
          opacity: 0,
          width: "clamp(280px, 45vw, 600px)",
          height: "clamp(280px, 45vw, 600px)",
          background:
            "radial-gradient(circle, rgba(234, 131, 53, 0.22) 0%, rgba(246, 217, 107, 0.08) 45%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── GIANT TYPOGRAPHIC TORCH STAGE (SHERYIANS STYLE) ── */}
      <div className="relative w-full max-w-[1440px] px-2 sm:px-6 flex items-center justify-center">
        {/* Layer 1: Base Hollow Stroke Layer (All letters outlined) */}
        <h2
          className="w-full text-center font-black leading-none select-none text-transparent whitespace-nowrap"
          style={{
            fontSize: "clamp(42px, 13.2vw, 230px)",
            WebkitTextStroke: "1.2px rgba(255, 255, 255, 0.22)",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Clash Grotesk', system-ui, -apple-system, sans-serif",
            letterSpacing: "clamp(0.015em, 0.6vw, 0.035em)",
          }}
        >
          Third Eye
        </h2>

        {/* Layer 2: Illuminated Gradient Fill Layer (Masked by Torch Radius) */}
        <div
          ref={maskRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{
            opacity: 0,
            maskImage:
              "radial-gradient(circle clamp(130px, 20vw, 320px) at 50% 50%, black 0%, rgba(0,0,0,0.7) 48%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(circle clamp(130px, 20vw, 320px) at 50% 50%, black 0%, rgba(0,0,0,0.7) 48%, transparent 78%)",
          }}
        >
          <h2
            className="w-full text-center font-black leading-none whitespace-nowrap"
            style={{
              fontSize: "clamp(42px, 13.2vw, 230px)",
              background:
                "linear-gradient(135deg, #f6d96b 0%, #ea8335 34%, #b25318 68%, #4e1c07 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px rgba(246, 217, 107, 0.35)",
              fontFamily: "'Clash Grotesk', system-ui, -apple-system, sans-serif",
              letterSpacing: "clamp(0.015em, 0.6vw, 0.035em)",
              filter: "drop-shadow(0 0 35px rgba(234, 131, 53, 0.5))",
            }}
          >
            Third Eye
          </h2>
        </div>
      </div>
    </section>
  );
}

