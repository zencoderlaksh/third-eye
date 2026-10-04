import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './VideoCarousel.css';

const DRAG_BUFFER = 15;
const VELOCITY_THRESHOLD = 400;
const GAP = 22;
const SPRING_OPTIONS = { type: 'spring', stiffness: 280, damping: 28 };

function VideoCarouselCard({ item, index, itemWidth, trackItemOffset, x, transition, onSelectVideo }) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset
  ];
  const outputRange = [18, 0, -18];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });
  const scale = useTransform(x, range, [0.92, 1, 0.92], { clamp: false });

  const thumbnailUrl = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;

  return (
    <motion.div
      className="video-carousel-card"
      style={{
        width: `${itemWidth}px`,
        rotateY,
        scale
      }}
      transition={transition}
      onClick={() => onSelectVideo(item)}
    >
      {/* Video Thumbnail */}
      <div className="video-thumbnail-wrapper">
        <img
          src={thumbnailUrl}
          alt={item.title}
          className="video-thumbnail-img"
          loading="lazy"
        />
        <div className="video-play-overlay">
          <div className="video-play-btn" title="Watch Student Video">
            <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Video Details */}
      <div className="video-card-content">
        <div className="video-card-badge">
          <span className="w-2 h-2 rounded-full bg-[#ffd300]" />
          <span>{item.course || 'Student Testimonial'}</span>
        </div>
        <h3 className="video-card-title">{item.title}</h3>
        <div className="video-card-meta">
          <span className="font-semibold text-zinc-300">{item.studentName || 'Third Eye Student'}</span>
          <span className="flex items-center gap-1 text-[#ffd300]">
            ★★★★★
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoCarousel({
  items = [],
  baseWidth = 380,
  autoplay = false,
  autoplayDelay = 3500,
  pauseOnHover = true,
  loop = true
}) {
  const [activeVideo, setActiveVideo] = useState(null);
  const containerPadding = 16;
  const [responsiveWidth, setResponsiveWidth] = useState(baseWidth);

  // Responsive item width
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setResponsiveWidth(Math.min(300, window.innerWidth - 48));
      } else if (window.innerWidth < 1024) {
        setResponsiveWidth(340);
      } else {
        setResponsiveWidth(baseWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [baseWidth]);

  const itemWidth = responsiveWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop || items.length === 0) return items;
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);

  // Autoplay
  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  // Position change sync
  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      setPosition(1);
      x.set(-1 * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const activeIndex =
    items.length === 0
      ? 0
      : loop
        ? (position - 1 + items.length) % items.length
        : Math.min(position, items.length - 1);

  // Keyboard Arrow Navigation (Left & Right Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeVideo) {
        if (e.key === 'Escape') setActiveVideo(null);
        return;
      }
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideo, isJumping, itemsForRender.length, loop]);

  const prevSlide = () => {
    if (isJumping) return;
    setPosition(prev => {
      if (loop) {
        if (prev <= 0) {
          return Math.max(0, items.length - 1);
        }
        return prev - 1;
      }
      return Math.max(0, prev - 1);
    });
  };

  const nextSlide = () => {
    if (isJumping) return;
    setPosition(prev => {
      if (loop) {
        if (prev >= itemsForRender.length - 1) {
          return 2;
        }
        return prev + 1;
      }
      return Math.min(items.length - 1, prev + 1);
    });
  };

  return (
    <div className="video-carousel-root">
      <div
        ref={containerRef}
        className="video-carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="video-carousel-track"
          drag={isAnimating ? false : 'x'}
          style={{
            gap: `${GAP}px`,
            perspective: 1200,
            perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
            x
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(position * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={handleAnimationComplete}
        >
          {itemsForRender.map((item, index) => (
            <VideoCarouselCard
              key={`${item?.id ?? index}-${index}`}
              item={item}
              index={index}
              itemWidth={itemWidth}
              trackItemOffset={trackItemOffset}
              x={x}
              transition={effectiveTransition}
              onSelectVideo={video => setActiveVideo(video)}
            />
          ))}
        </motion.div>

        {/* Floating Side Arrow Left */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="video-carousel-side-arrow video-carousel-side-left"
          aria-label="Previous video"
          title="Previous video (or Left Arrow)"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Floating Side Arrow Right */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="video-carousel-side-arrow video-carousel-side-right"
          aria-label="Next video"
          title="Next video (or Right Arrow)"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Carousel Controls */}
      <div className="video-carousel-controls">
        <button
          onClick={prevSlide}
          className="video-carousel-arrow"
          aria-label="Previous video"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="video-carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`video-carousel-dot ${activeIndex === index ? 'active' : ''}`}
              aria-label={`Go to video ${index + 1}`}
              onClick={() => setPosition(loop ? index + 1 : index)}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="video-carousel-arrow"
          aria-label="Next video"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Video Playback Modal */}
      {activeVideo && (
        <div
          className="video-modal-backdrop"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="video-modal-content"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
              title={activeVideo.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
