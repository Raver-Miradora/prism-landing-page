'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    icon: 'location_on',
    title: 'Offline Geofencing',
    description: 'Maintain precise location logs even in remote areas without internet access. Syncs automatically when back online.',
    color: 'var(--secondary)',
    href: '/features/geofencing'
  },
  {
    icon: 'auto_awesome',
    title: 'AI Document Polish',
    description: 'Refine your activity journals into professional, submission-ready reports in seconds with our intelligent prose assistant.',
    color: 'var(--tertiary)',
    href: '/features/ai-polish'
  },
  {
    icon: 'description',
    title: 'CSC Form 48 Export',
    description: 'Generate standardized Daily Time Records with compliant formatting and a clean audit trail, ready for submission.',
    color: 'var(--primary)',
    href: '/features/csc-export'
  }
];

export default function Features() {
  return (
    <section id="features" className="section" style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorative Element */}
      <div className="radial-glow" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }}></div>
      
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              display: 'inline-flex',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(var(--secondary-rgb), 0.1)',
              color: 'var(--secondary)',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '1.5rem'
            }}
          >
            Core Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="headline-lg" 
          >
            Built for OJT's, work immersionees, GIP's.
          </motion.h2>
        </div>

        <div className="features-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              style={{ 
                padding: '3.5rem 2.5rem', 
                background: 'var(--background)', 
                borderRadius: 'var(--radius-lg)', 
                boxShadow: 'var(--shadow-md)',
                border: '1px solid rgba(var(--primary-rgb), 0.03)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >

              <h3 style={{ 
                fontSize: '1.625rem', 
                fontWeight: 800, 
                marginBottom: '1.25rem', 
                color: 'var(--primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                {f.title}
              </h3>
              
              <p style={{ 
                color: 'var(--text-muted)', 
                lineHeight: '1.7', 
                fontSize: '1.05rem',
                marginBottom: '2rem',
                flexGrow: 1
              }}>
                {f.description}
              </p>
              
              <Link href={f.href} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  marginTop: 'auto',
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  color: 'var(--secondary)', 
                  fontWeight: 800, 
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  cursor: 'pointer'
                }}>
                  LEARN MORE 
                  <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>arrow_forward</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
