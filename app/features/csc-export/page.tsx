import React from 'react';
import Link from 'next/link';

export default function CSCExportPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: '6rem' }}>
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="radial-glow" style={{ top: '10%', left: '-10%', opacity: 0.5 }}></div>
        
        <div className="container">
          
          <div style={{ marginBottom: '4rem', zIndex: 10, position: 'relative' }}>
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
            
            <h1 className="display-lg" style={{ color: 'var(--primary)', marginBottom: '1.5rem', maxWidth: '800px' }}>
              Automated Compliance. Zero Math Required.
            </h1>
            
            <p className="body-lg" style={{ maxWidth: '800px' }}>
              PRISM features a powerful DTR generation engine that seamlessly bridges the gap between field logs and administrative requirements. Say goodbye to spreadsheet errors and stressful end-of-month computations.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '3rem',
            position: 'relative',
            zIndex: 10,
            marginBottom: '5rem'
          }}>
            
            {/* Split pane 1: Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ 
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(var(--primary-rgb), 0.05)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                    4-Punch Aggregation
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    Automatically consolidates your daily standard logs: AM Arrival, AM Departure, PM Arrival, and PM Departure, ensuring full-day coverage without missing links.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ 
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(var(--secondary-rgb), 0.1)',
                  color: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span className="material-symbols-outlined">calculate</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                    Definitive Calculations
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    Calculates exact tardiness and undertime in minutes natively on the device, according to strict standard office hours. Leaves zero room for manual errors.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ 
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(var(--tertiary-rgb), 0.15)',
                  color: 'var(--tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span className="material-symbols-outlined">assignment</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                    CSC Form 48 Mapping
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    Directly maps the processed data into the mandated Civil Service Commission (CSC) Form 48 PDF structure. Ready to print, sign, and submit.
                  </p>
                </div>
              </div>
            </div>

            {/* Split pane 2: Visual */}
            <div className="glass" style={{ 
              borderRadius: 'var(--radius-lg)', 
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              border: '1px solid rgba(var(--primary-rgb), 0.1)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '5rem', color: 'var(--primary)', marginBottom: '1.5rem', opacity: 0.8 }}>
                file_present
              </span>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
                Generated DTR
              </h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Official CSC Form 48 format populated with 100% accurate field data.
              </p>
              <div style={{ 
                background: 'rgba(var(--primary-rgb), 0.05)',
                color: 'var(--primary)',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span className="material-symbols-outlined">check_circle</span>
                Audit Trail Verified
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div style={{ 
            textAlign: 'center', 
            background: 'var(--primary)', 
            padding: '4rem 2rem', 
            borderRadius: 'var(--radius-lg)',
            color: '#fff',
            position: 'relative',
            zIndex: 10,
            boxShadow: '0 20px 40px rgba(var(--primary-rgb), 0.2)'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>
              Stop manually computing hours.
            </h2>
            <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Download PRISM today and let our engine handle the heavy lifting for your monthly compliance reporting.
            </p>
            <Link href="/#download" className="btn" style={{ 
              background: 'var(--tertiary)', 
              color: 'var(--primary)',
              padding: '1.25rem 2.5rem'
            }}>
              Download Now
              <span className="material-symbols-outlined">download</span>
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
}
