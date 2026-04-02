'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DocsPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <section className="section" style={{ flexGrow: 1, paddingTop: '10rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="display-lg" style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Documentation</h1>
            <p className="body-lg" style={{ marginBottom: '4rem' }}>
              Welcome to the PRISM user guide. This documentation provides step-by-step instructions 
              to help you set up and master your digital deployment registry.
            </p>
          </motion.div>

          {/* Installation Guide */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ marginBottom: '5rem' }}
          >
            <h2 className="headline-lg" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>download</span>
              Installation Guide
            </h2>
            <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                PRISM is currently distributed as a secure Android APK. Follow these steps to get started:
              </p>
              <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                <li style={{ marginBottom: '1rem' }}>Download the appropriate APK for your device architecture (v7a, v8a, or x86_64) from the <a href="/#download" style={{ color: 'var(--secondary)', fontWeight: 700 }}>Download Section</a>.</li>
                <li style={{ marginBottom: '1rem' }}>Locate the file in your downloads folder and tap to install.</li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>Bypassing "Unknown Sources":</strong> Since PRISM is distributed outside the Play Store, Android will show a security warning. 
                  Go to <em>Settings `{'>'}` Security</em> and toggle <strong>Allow from this source</strong> to proceed.
                </li>
              </ol>
              
              <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #facc15', background: 'rgba(250, 204, 21, 0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', color: '#854d0e', fontWeight: 800 }}>
                  <span className="material-symbols-outlined">warning</span>
                  SECURITY NOTICE
                </div>
                <p style={{ fontSize: '0.95rem' }}>Always verify the SHA1 hash provided on the download page to ensure your APK has not been tampered with.</p>
              </div>
            </div>
          </motion.section>

          {/* Profile Setup */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ marginBottom: '5rem' }}
          >
            <h2 className="headline-lg" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>location_on</span>
              Profile Setup & Geofencing
            </h2>
            <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Accurate geofencing is critical for automated attendance logging.
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                <li style={{ marginBottom: '1rem' }}><strong>Grant Permissions:</strong> Ensure "Precise Location" permission is set to "Allow all the time".</li>
                <li style={{ marginBottom: '1rem' }}><strong>Set Base Location:</strong> Navigate to the Map tab and tap "Set Home Base" at your designated deployment office.</li>
                <li style={{ marginBottom: '1rem' }}>The geofence radius is pre-set to 100 meters to ensure reliable clock-ins even with GPS drift.</li>
              </ul>
            </div>
          </motion.section>

          {/* Daily Workflows */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ marginBottom: '5rem' }}
          >
            <h2 className="headline-lg" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>auto_awesome</span>
              Daily Workflows
            </h2>
            <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', marginTop: '2rem' }}>1. Attendance Tracking</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                PRISM works offline. simply walk into your deployment zone and the app will record your entry. The data will sync to the server once an internet connection is established.
              </p>
              
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', marginTop: '2rem' }}>2. AI Accomplishment Drafting</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                Enter your raw activity notes in the "Journal" tab. Tap the <strong>Refine</strong> button to let the PRISM AI polish your notes into professional, agency-standard prose.
              </p>

              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', marginTop: '2rem' }}>3. Exporting DTR (Form 48)</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                At the end of the month, go to the "Reports" tab and select <strong>Export CSC Form 48</strong>. PRISM will generate a compliant PDF ready for printing.
              </p>

              <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #ef4444', background: 'rgba(239, 68, 68, 0.05)', marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', color: '#991b1b', fontWeight: 800 }}>
                  <span className="material-symbols-outlined">report</span>
                  CRITICAL WARNING
                </div>
                <p style={{ fontSize: '0.95rem' }}><strong>Do not clear app data or uninstall PRISM before exporting your final DTR.</strong> Offline data is stored locally and will be lost if the app is wiped.</p>
              </div>
            </div>
          </motion.section>

        </div>
      </section>

      <Footer />
    </main>
  );
}
