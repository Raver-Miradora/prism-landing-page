import React from 'react';
import Link from 'next/link';

export default function GeofencingPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: '6rem' }}>
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="radial-glow" style={{ top: '10%', right: '-10%', opacity: 0.5 }}></div>
        
        <div className="container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem',
          alignItems: 'center'
        }}>
          
          <div style={{ zIndex: 10 }}>
            <Link href="/" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--secondary)', 
              fontWeight: 600, 
              marginBottom: '2rem',
              fontSize: '0.875rem',
              letterSpacing: '0.05em'
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>arrow_back</span>
              BACK TO HOME
            </Link>
            
            <h1 className="display-lg" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
              Reliable Attendance, Anywhere.
            </h1>
            
            <p className="body-lg" style={{ marginBottom: '2rem' }}>
              PRISM overcomes the "Cold Start" GPS problem by intelligently caching satellite Ephemeris data. This means interns deployed to remote barangays without Wi-Fi or Cellular Data can still securely clock in, instantly and reliably.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ 
                  background: 'rgba(var(--secondary-rgb), 0.1)', 
                  color: 'var(--secondary)', 
                  padding: '0.5rem', 
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span className="material-symbols-outlined">security</span>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Hardware-Level Time Spoofing Protection</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    Prevents mock locations and manipulated system clocks to ensure absolute integrity of time and place.
                  </p>
                </div>
              </li>
              
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ 
                  background: 'rgba(var(--tertiary-rgb), 0.15)', 
                  color: 'var(--secondary)', 
                  padding: '0.5rem', 
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span className="material-symbols-outlined">my_location</span>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Strict 50-Meter Radius Validation</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    Ensures users are exactly where they are supposed to be before allowing a successful punch.
                  </p>
                </div>
              </li>
            </ul>
            
            <Link href="/#download" className="btn btn-primary">
              Experience the Reliability
              <span className="material-symbols-outlined">download</span>
            </Link>
          </div>

          <div style={{ 
            background: 'var(--surface)', 
            borderRadius: 'var(--radius-lg)', 
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(var(--primary-rgb), 0.05)',
            aspectRatio: '3/4',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              background: 'rgba(var(--secondary-rgb), 0.05)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: 'var(--secondary)' }}>
                satellite_alt
              </span>
              <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1.25rem', letterSpacing: '0.05em' }}>
                GPS: LOCKED
              </div>
              <div style={{ background: '#e0f2f1', color: '#00695c', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 800 }}>
                ACCURACY: 4m
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
