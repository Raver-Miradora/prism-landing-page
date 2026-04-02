'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const releases = [
  {
    version: '1.0.0',
    status: 'Stable',
    date: 'April 2026',
    highlights: [
      { type: 'new', text: '✨ Introduced AI-powered daily journal synthesis for formal accomplishment reports.' },
      { type: 'new', text: '📍 Implemented offline-first GPS geofencing with strict 50-meter radius validation.' },
      { type: 'new', text: '📄 Added automated CSC Form 48 DTR generation with auto-calculated tardiness/undertime.' },
      { type: 'security', text: '🔒 Rolled out local SQLite encrypted storage—zero cloud tracking.' },
      { type: 'fix', text: 'Resolved cold-start GPS timeout issue with smart fallback UI.' }
    ]
  }
];

export default function ReleaseNotes() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <section className="section" style={{ flexGrow: 1, paddingTop: '10rem', background: 'var(--surface)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '5rem' }}
          >
            <h1 className="display-lg" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Release Notes & Changelog</h1>
            <p className="body-lg">
              Track the latest updates, features, and security patches for the PRISM app.
            </p>
          </motion.div>

          <div className="timeline" style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(var(--primary-rgb), 0.1)' }}>
            {releases.map((release, i) => (
              <motion.div 
                key={release.version}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ marginBottom: '4rem', position: 'relative' }}
              >
                {/* Timeline Dot */}
                <div style={{ 
                  position: 'absolute', 
                  left: '-2.6rem', 
                  top: '0.5rem', 
                  width: '1rem', 
                  height: '1rem', 
                  borderRadius: '50%', 
                  background: 'var(--secondary)',
                  border: '4px solid var(--surface)',
                  boxShadow: 'var(--shadow-sm)'
                }}></div>

                <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>v{release.version}</h2>
                      <span style={{ 
                        padding: '0.25rem 0.75rem', 
                        background: 'rgba(74, 222, 128, 0.15)', 
                        color: '#166534', 
                        borderRadius: 'var(--radius-full)', 
                        fontSize: '0.75rem', 
                        fontWeight: 800,
                        textTransform: 'uppercase'
                      }}>
                        {release.status}
                      </span>
                    </div>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>{release.date}</span>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {release.highlights.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '1rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                        <div style={{ marginTop: '0.4rem' }}>
                          {item.type === 'new' && <span className="material-symbols-outlined" style={{ fontSize: '1.25rem', color: 'var(--secondary)' }}>add_circle</span>}
                          {item.type === 'security' && <span className="material-symbols-outlined" style={{ fontSize: '1.25rem', color: '#ef4444' }}>security</span>}
                          {item.type === 'fix' && <span className="material-symbols-outlined" style={{ fontSize: '1.25rem', color: '#f59e0b' }}>build</span>}
                        </div>
                        <span style={{ fontSize: '1.05rem' }}>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
