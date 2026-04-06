'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Capture deployment log',
    description: 'Record attendance, location, and activity notes directly in the mobile app.'
  },
  {
    num: '02',
    title: 'Auto-validate entries',
    description: 'Geofencing and consistency checks flag issues before final review.'
  },
  {
    num: '03',
    title: 'Generate final forms',
    description: 'Export polished CSC-ready documents with a single tap.'
  }
];

const metrics = [
  { value: 99.8, suffix: '%', label: 'Geofencing validation accuracy across field check-ins.' },
  { value: 65, suffix: '%', label: 'Faster report preparation compared to manual workflows.' },
  { value: 24, suffix: '/7', label: 'Offline-first logging with reliable sync when online.' }
];

export default function Workflow() {
  return (
    <>
      <section id="workflow" className="section" style={{ background: 'var(--background)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '6rem', alignItems: 'center' }}>
          
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <span style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Efficiency</span>
            <h2 className="headline-lg" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>From check-in to submission in three clean steps.</h2>
            <p className="body-lg">PRISM reduces repetitive admin tasks and keeps every field activity traceable, verified, and ready for approval.</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                style={{ display: 'flex', gap: '2rem' }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 800, 
                  color: 'rgba(var(--secondary-rgb), 0.2)', 
                  lineHeight: '1',
                   minWidth: '60px'
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--primary)' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="section" style={{ padding: '6rem 0', background: 'var(--surface)', borderBottom: '1px solid rgba(var(--primary-rgb), 0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
            {metrics.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                   {m.value}{m.suffix}
                </div>
                <p style={{ maxWidth: '240px', margin: '0 auto', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.95rem', lineHeight: '1.5' }}>
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
