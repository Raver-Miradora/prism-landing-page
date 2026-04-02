'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <section className="section" style={{ flexGrow: 1, paddingTop: '10rem', background: 'var(--surface)' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h1 className="display-lg" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Get in Touch</h1>
            <p className="body-lg">
              Encountered an issue or need technical assistance with your deployment? Reach out directly to the developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass"
            style={{ 
              padding: '3rem', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--glass-border)',
              background: 'var(--surface)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: '#4ade80', marginBottom: '1.5rem' }}>check_circle</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. We will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)' }}>Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your Full Name"
                    required
                    style={{ 
                      padding: '1rem', 
                      borderRadius: 'var(--radius-md)', 
                      border: '1px solid rgba(var(--primary-rgb), 0.1)',
                      background: 'var(--background)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)' }}>Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="example@gmail.com"
                    required
                    style={{ 
                      padding: '1rem', 
                      borderRadius: 'var(--radius-md)', 
                      border: '1px solid rgba(var(--primary-rgb), 0.1)',
                      background: 'var(--background)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)' }}>Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    placeholder="How can we help you?"
                    required
                    style={{ 
                      padding: '1rem', 
                      borderRadius: 'var(--radius-md)', 
                      border: '1px solid rgba(var(--primary-rgb), 0.1)',
                      background: 'var(--background)',
                      outline: 'none',
                      resize: 'none'
                    }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Send Message
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ 
              marginTop: '4rem', 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '3rem',
              color: 'var(--text-muted)'
            }}
          >
            <a href="mailto:ravemiradora@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--secondary)' }}>
              <span className="material-symbols-outlined">mail</span>
              Email
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--secondary)' }}>
              <span className="material-symbols-outlined">public</span>
              Facebook
            </a>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
