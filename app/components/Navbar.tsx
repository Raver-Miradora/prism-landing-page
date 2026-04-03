'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Standard Navbar */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg' : 'bg-transparent mobile-padding'}`} style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: scrolled ? '1rem 1.5rem' : '2.5rem 1.5rem' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', transition: 'transform 0.3s ease' }} className="nav-logo">
            <Image src="/Prism Logo.png" alt="PRISM Logo" width={40} height={40} style={{ filter: scrolled ? 'none' : 'drop-shadow(0 0 10px rgba(var(--secondary-rgb), 0.2))' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>PRISM</span>
          </Link>

          {/* Desktop Links */}
          <div className="desktop-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
             <Link href="/#features" style={{ fontWeight: 600, color: scrolled ? 'var(--text-main)' : 'var(--primary)', fontSize: '0.9rem' }}>Features</Link>
             <Link href="/#workflow" style={{ fontWeight: 600, color: scrolled ? 'var(--text-main)' : 'var(--primary)', fontSize: '0.9rem' }}>Workflow</Link>
             <Link href="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Support</Link>
          </div>

          {/* Mobile Toggle Button (Only visible on mobile) */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: 1 }}>
              menu
            </span>
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Overlay Rewrite */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'var(--background)',
              minHeight: '100vh',
              width: '100vw',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Header section of overlay to prevent logo duplication glitch */}
            {/* Overlay header — padding matches the closed navbar exactly */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              padding: '2.5rem 1.5rem 1rem 1.5rem', 
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto'
            }}>
              <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Image src="/Prism Logo.png" alt="PRISM Logo" width={40} height={40} />
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>PRISM</span>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: 1 }}>
                  close
                </span>
              </button>
            </div>

            {/* Centered links container */}
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '2.5rem', 
              paddingBottom: '5rem' 
            }}>
              <Link href="/#features" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.875rem', fontWeight: 800, color: 'var(--primary)' }}>Features</Link>
              <Link href="/#workflow" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.875rem', fontWeight: 800, color: 'var(--primary)' }}>Workflow</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.875rem', fontWeight: 800, color: 'var(--primary)' }}>Support</Link>
              
              <Link 
                href="/#download" 
                onClick={() => setMobileMenuOpen(false)} 
                className="btn btn-primary" 
                style={{ 
                  padding: '1.25rem 2.5rem', 
                  fontSize: '1.125rem', 
                  marginTop: '1.5rem',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                Download APK
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
