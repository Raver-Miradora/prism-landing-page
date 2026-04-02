'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
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
            <h1 className="display-lg" style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Terms of Service</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1rem' }}>Last Updated: April 2, 2026</p>
          </motion.div>

          <article style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using the PRISM mobile application, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use the application.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>2. Use of Service</h2>
              <p>
                PRISM is a digital registry provided for government deployment tracking. You agree to use the application strictly for its intended purpose and in compliance with all local laws and regulations.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>3. Data Responsibility</h2>
              <p>
                As an offline-first application, PRISM stores your deployment data locally on your device. 
                You are responsible for ensuring your records are backed up or exported regularly. 
                PRISM Software Resources is not liable for data loss due to device hardware failure, app uninstallation, or accidental data clearing.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the PRISM application—including the PRISM logo, UI design, 
                and codebase—are the exclusive property of PRISM Software Resources.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>5. Limitation of Liability</h2>
              <p>
                In no event shall PRISM Software Resources be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising out of your use or inability to use the PRISM application.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any significant changes via the application or website.
              </p>
            </section>
          </article>

        </div>
      </section>

      <Footer />
    </main>
  );
}
