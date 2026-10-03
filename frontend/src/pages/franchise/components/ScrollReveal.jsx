import React, { useEffect, useRef, useState } from "react";
import "./ScrollReveal.css";

export default function ScrollReveal({
  children,
  className = "",
  direction = "up", // 'up' | 'down' | 'zoom' | 'fade'
  delay = 0,
  duration = 750,
  threshold = 0.08,
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

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`franchise-scroll-reveal ${direction} ${isVisible ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
