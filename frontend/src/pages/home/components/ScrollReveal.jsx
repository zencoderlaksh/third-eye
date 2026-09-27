import React, { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  direction = "up", // 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'
  delay = 0,
  duration = 700,
  threshold = 0.12,
  once = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    let observer;
    const currentRef = domRef.current;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && currentRef) {
              observer.unobserve(currentRef);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        },
        {
          threshold,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      if (currentRef) {
        observer.observe(currentRef);
      }
    }, 40);

    return () => {
      clearTimeout(timer);
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const getTransformStyles = () => {
    if (isVisible) {
      return "opacity-100 translate-x-0 translate-y-0 scale-100 blur-none";
    }

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-12 scale-[0.98] blur-[2px]";
      case "down":
        return "opacity-0 -translate-y-12 scale-[0.98] blur-[2px]";
      case "left":
        return "opacity-0 translate-x-12 scale-[0.98] blur-[2px]";
      case "right":
        return "opacity-0 -translate-x-12 scale-[0.98] blur-[2px]";
      case "zoom":
        return "opacity-0 scale-90 blur-[3px]";
      case "fade":
      default:
        return "opacity-0 blur-[3px]";
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity, filter",
      }}
      className={`transition-all ${getTransformStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
