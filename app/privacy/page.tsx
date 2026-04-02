'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <section className="section" style={{ flexGrow: 1, paddingTop: '10rem', background: 'var(--surface)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="display-lg" style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Privacy Policy</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1rem' }}>Last Updated: April 2, 2026</p>
          </motion.div>

          {/* Policy Content */}
          <article style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            
            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>1. Introduction</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                PRISM Software Resources ("we", "us", or "our") is committed to protecting the privacy of our users. 
                This Privacy Policy explains how PRISM handles data for the PRISM mobile application and the landing page website.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>2. Offline-First Guarantee</h2>
              <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--secondary)', background: 'rgba(var(--secondary-rgb), 0.05)', marginBottom: '1.5rem' }}>
                <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>Your Data Stays on Your Device.</p>
                <p>
                  PRISM is engineered as an <strong>offline-first</strong> application. All data collected during your deployment—including task logs, 
                  journal entries, and attendance records—is stored locally within an encrypted <strong>SQLite database</strong> on your physical device.
                </p>
              </div>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>3. GPS & Biometric Data</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                PRISM utilizes specific sensitive data to ensure accurate government deployment records:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>GPS Location:</strong> Coordinates are used strictly for geofencing to verify attendance within designated deployment zones.
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>Biometric Photos:</strong> Liveness checks (facial photos) taken during clock-ins are used for identity verification.
                </li>
              </ul>
              <p style={{ fontWeight: 700, color: 'var(--primary)' }}>
                CRITICAL PRIVACY FACT: Both GPS coordinates and liveness check photos are stored strictly on the user's local device. 
                PRISM does not track users via the cloud, and no biometric or location data is transmitted to external servers without the user manually clicking "Export".
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>4. Data Transmission</h2>
              <p>
                Data only leaves your device when you initiate a manual <strong>Export</strong> of your Daily Time Record (DTR) for official submission. 
                We do not sell, rent, or trade your deployment data with any third parties.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:ravemiradora@gmail.com" style={{ color: 'var(--secondary)', fontWeight: 700 }}>ravemiradora@gmail.com</a>.
              </p>
            </section>

          </article>

        </div>
      </section>

      <Footer />
    </main>
  );
}
