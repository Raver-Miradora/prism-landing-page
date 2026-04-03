import React from 'react';
import Link from 'next/link';

export default function AIPolishPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: '6rem' }}>
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="radial-glow" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }}></div>
        
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 10, position: 'relative' }}>
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
              From Informal Notes to Formal Reports.
            </h1>
            
            <p className="body-lg" style={{ margin: '0 auto', maxWidth: '700px' }}>
              Stop stressing over formatting and professional phrasing. With PRISM's intelligent prose assistant, simply type out your informal daily tasks, and the offline-capable AI refines them into professional, submission-ready narrative reports instantly.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '2rem',
            position: 'relative',
            zIndex: 10
          }}>
            
            {/* Before Block */}
            <div className="glass" style={{ 
              padding: '2.5rem', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                marginBottom: '1rem',
                color: 'var(--text-muted)'
              }}>
                <span className="material-symbols-outlined">edit_note</span>
                <span style={{ fontWeight: 700, letterSpacing: '0.05em', fontSize: '0.875rem', textTransform: 'uppercase' }}>Raw Input (Before)</span>
              </div>
              <div style={{ 
                background: 'rgba(25, 27, 38, 0.03)', 
                padding: '1.5rem', 
                borderRadius: 'var(--radius-md)',
                fontFamily: 'monospace',
                fontSize: '1rem',
                color: 'var(--text-muted)'
              }}>
                "encoded papers regarding the new system update and also helped the IT personnel with some network cables"
              </div>
            </div>

            {/* Down Arrow / Transformation Icon */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              margin: '-1rem 0'
            }}>
              <div style={{ 
                background: 'var(--tertiary)', 
                color: '#fff', 
                width: '48px', 
                height: '48px', 
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 16px rgba(var(--tertiary-rgb), 0.3)',
                zIndex: 20
              }}>
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
            </div>

            {/* After Block */}
            <div style={{ 
              background: 'var(--primary)', 
              padding: '2.5rem', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: 'var(--shadow-lg)',
              color: '#fff'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                marginBottom: '1rem',
                color: 'var(--tertiary)'
              }}>
                <span className="material-symbols-outlined">fact_check</span>
                <span style={{ fontWeight: 700, letterSpacing: '0.05em', fontSize: '0.875rem', textTransform: 'uppercase' }}>Polished Output (After)</span>
              </div>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.05)', 
                padding: '1.5rem', 
                borderRadius: 'var(--radius-md)',
                fontSize: '1.125rem',
                lineHeight: 1.6,
                fontWeight: 500,
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                "Digitized and filed administrative documents pertaining to the recent system update. Additionally, provided technical assistance to the IT personnel with network cable routing and management."
              </div>
            </div>

          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem', zIndex: 10, position: 'relative' }}>
            <Link href="/#download" className="btn btn-primary">
              Try the Prose Assistant
              <span className="material-symbols-outlined">auto_awesome</span>
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
}
