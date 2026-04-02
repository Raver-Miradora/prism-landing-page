'use client';

import React from 'react';
import { motion } from 'framer-motion';

const apks = [
  { 
    arch: 'arm64-v8a', 
    label: 'Modern Android Phones', 
    size: '33.02 MB', 
    sha: 'e82f3edee3c3616eb3338e88e9e54b577fd8c624'
  },
  { 
    arch: 'armeabi-v7a', 
    label: 'Older 32-bit Devices', 
    size: '30.78 MB', 
    sha: '9d9a1a52231f7a738199e2fa21a095395970b705'
  },
  { 
    arch: 'x86_64', 
    label: 'Emulators & Tablets', 
    size: '34.33 MB', 
    sha: '484a79b776a366eab8ed08bc69e27c9fa16453f9'
  }
];

export default function Download() {
  return (
    <section id="download" className="section" style={{ background: 'var(--primary)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div className="radial-glow" style={{ top: '0', left: '0', background: 'radial-gradient(circle at center, rgba(var(--tertiary-rgb), 0.15) 0%, transparent 70%)' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ready to Deploy</span>
            <h2 className="headline-lg" style={{ marginTop: '1.5rem', marginBottom: '2rem', color: '#fff' }}>Bring PRISM to your field team this week.</h2>
            <p className="body-lg" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '3rem' }}>
              Download the appropriate APK build for your device. High-performance, offline-first registration starts here.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {apks.map((apk, i) => (
                <motion.a
                  key={i}
                  href={`/builds/app-${apk.arch}-release.apk`}
                  download
                  whileHover={{ x: 10, background: 'rgba(255, 255, 255, 0.1)' }}
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '1.5rem 2rem', 
                    borderRadius: 'var(--radius-md)', 
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{apk.arch}</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>{apk.label} • {apk.size}</div>
                  </div>
                  <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)' }}>download</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              borderRadius: 'var(--radius-lg)', 
              padding: '4rem',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              textAlign: 'center'
            }}
          >
            <div style={{ marginBottom: '2rem' }}>
               <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: 'var(--tertiary)', marginBottom: '1.5rem' }}>verified_user</span>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Trusted & Secure</h3>
               <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }}>
                 Every build is signed and verified for official deployment use. Use the SHA1 hashes to verify integrity after download.
               </p>
            </div>
            <div className="btn btn-primary" style={{ background: '#fff', color: 'var(--primary)', width: '100%', justifyContent: 'center' }}>
              View Installation Guide
            </div>
          </motion.div>

        </div>

      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
