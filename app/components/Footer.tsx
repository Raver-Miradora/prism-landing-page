'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ padding: '6rem 0 3rem', background: 'var(--background)', borderTop: '1px solid rgba(var(--primary-rgb), 0.05)' }}>
      <div className="container">
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.5fr repeat(3, 1fr)', 
          gap: '4rem',
          marginBottom: '5rem'
        }}>
          
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Image src="/Prism Logo.png" alt="PRISM Logo" width={32} height={32} />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>PRISM</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              The digital registry for accurate, compliant, and efficient government deployment records. Engineered for reliability in any field environment.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1rem' }}>Product</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
               <li><Link href="/#features">Features</Link></li>
               <li><Link href="/#workflow">Workflow</Link></li>
               <li><Link href="/#download">Downloads</Link></li>
               <li><Link href="/release-notes">Release Notes</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1rem' }}>Legal</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
               <li><Link href="/privacy">Privacy Policy</Link></li>
               <li><Link href="/terms">Terms of Service</Link></li>
               <li><Link href="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1rem' }}>Support</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
               <li><Link href="/docs">Documentation</Link></li>
               <li><Link href="/contact">Contact Us</Link></li>
               <li><Link href="https://github.com/Raver-Miradora/prism" target="_blank" rel="noopener noreferrer">GitHub Repository</Link></li>
            </ul>
          </div>

        </div>

        <div style={{ 
          borderTop: '1px solid rgba(var(--primary-rgb), 0.05)', 
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          <span>© 2026 PRISM. All rights reserved.</span>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          div[style*="justifyContent: space-between"] {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
