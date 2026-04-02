'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CookiePage() {
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
            <h1 className="display-lg" style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Cookie Policy</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1rem' }}>Last Updated: April 2, 2026</p>
          </motion.div>

          <article style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            <p style={{ marginBottom: '2rem' }}>
              This Cookie Policy explains how PRISM Software Resources uses cookies when you visit the PRISM landing page website.
            </p>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>1. What are Cookies?</h2>
              <p>
                Cookies are small text files stored on your browser when you visit a website. 
                They help websites remember your preferences and provide a more personalized experience.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>2. How We Use Cookies</h2>
              <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', background: 'rgba(var(--primary-rgb), 0.03)', marginBottom: '1.5rem' }}>
                <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>Essential Functional Cookies Only.</p>
                <p>
                  As PRISM does not maintain user accounts on the landing page website, we strictly use 
                  <strong>essential functional cookies</strong> to ensure core site functionality, 
                  such as dark mode preferences and session maintenance.
                </p>
              </div>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>3. Third-Party Cookies</h2>
              <p>
                PRISM does not use third-party tracking or advertising cookies. 
                We are committed to a clean, ad-free experience for our government deployment officers.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.75rem' }}>4. Managing Cookies</h2>
              <p>
                You can choose to disable cookies through your individual browser settings. However, 
                this may affect your ability to use certain site features (such as persistent dark mode).
              </p>
            </section>

          </article>

        </div>
      </section>

      <Footer />
    </main>
  );
}
