import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

const ScrollingGallery = () => {
  const { assets } = weddingData;
  const images = assets.galleryImages || [];

  const subtitles = [
    "Beautiful Moments",
    "Together Forever",
    "Joy & Laughter",
    "Endless Love",
    "A New Journey"
  ];

  // Duplicate images to create a seamless infinite loop
  const displayImages = [...images, ...images, ...images];
  const displaySubtitles = [...subtitles, ...subtitles, ...subtitles];

  return (
    <section className="py-12 overflow-hidden bg-white" style={{ borderTop: '1px solid rgba(201,168,76,0.2)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
      <div className="relative w-full overflow-hidden" style={{ height: '300px' }}>
        
        {/* Soft gradient masks on the edges to fade out the photos seamlessly */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '15vw', background: 'linear-gradient(to right, #fff 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '15vw', background: 'linear-gradient(to left, #fff 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />

        {/* The scrolling container */}
        <motion.div
          className="flex items-center absolute top-0 left-0"
          style={{ gap: '40px', width: 'max-content' }}
          animate={{ x: [0, -1680] }} // 5 images * (296px width + 40px gap) = 1680px
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30, // Slow linear movement
              ease: "linear"
            }
          }}
        >
          {displayImages.map((src, idx) => (
            <div 
              key={idx}
              className="relative shadow-sm"
              style={{ 
                width: '296px', // 280px image + 16px padding
                flexShrink: 0,
                background: '#fff',
                padding: '8px 8px 40px 8px',
                borderRadius: '4px',
                boxShadow: '0 8px 24px rgba(44,24,16,0.08)'
              }}
            >
              <div style={{ width: '280px', height: '220px', borderRadius: '2px', overflow: 'hidden' }}>
                <img
                  src={src}
                  alt={`Gallery ${idx}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <p 
                style={{ 
                  position: 'absolute', 
                  bottom: '12px', 
                  left: 0, 
                  right: 0, 
                  textAlign: 'center',
                  fontFamily: 'var(--font-lora)',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: 'var(--color-sage-dark)'
                }}
              >
                {displaySubtitles[idx]}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollingGallery;
