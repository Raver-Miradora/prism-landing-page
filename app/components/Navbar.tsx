'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass px-6 py-4 shadow-lg' : 'bg-transparent px-6 py-10'}`} style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: 'var(--primary)' }}>
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

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
    </nav>
  );
}
