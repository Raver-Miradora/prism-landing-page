'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header className="section hero" style={{ position: 'relative', overflow: 'hidden', paddingTop: '10rem' }}>
      <div className="radial-glow" style={{ top: '-10%', right: '-10%', opacity: 0.6 }}></div>
      <div className="radial-glow" style={{ bottom: '10%', left: '-10%', opacity: 0.3 }}></div>

      <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          
          <h1 className="display-lg" style={{ marginBottom: '1.5rem' }}>
            Your digital registry for a <span style={{ color: 'var(--secondary)' }}>hassle-free</span> deployment.
          </h1>
          
          <p className="body-lg" style={{ marginBottom: '3rem', maxWidth: '560px' }}>
            The offline-first companion app for local government interns. Securely log your attendance via GPS and let AI draft your official accomplishment reports.
          </p>

          <div className="hero-actions" style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="#download" className="btn btn-primary">
              Download APK
              <span className="material-symbols-outlined">download</span>
            </a>
            
            <div className="release-info" style={{ borderLeft: '2px solid rgba(var(--primary-rgb), 0.1)', paddingLeft: '1.5rem' }}>
              <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1rem' }}>v1.0.0 Stable</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Latest Build: April 2026</div>
            </div>
          </div>

        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0] 
          }}
          transition={{ 
            opacity: { duration: 1, ease: "easeOut", delay: 0.2 },
            scale: { duration: 1, ease: "easeOut", delay: 0.2 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="hero-image"
        >
          <div className="image-wrapper" style={{ position: 'relative' }}>
            <Image 
              src="/2 device mockup.png" 
              alt="PRISM App Mockup" 
              width={600} 
              height={800} 
              style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
              priority
            />
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2rem !important;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-image {
            max-width: 480px;
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          header.hero {
            padding-top: 8rem !important;
          }
          .display-lg {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </header>
  );
}
