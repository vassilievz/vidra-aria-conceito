import React from 'react';
import { UserCheck, Ruler, Wrench, MessageSquareText } from 'lucide-react';
import { TRUST_PILLARS } from '../data/companyData';

export const TrustBar: React.FC = () => {
  const icons = [
    <UserCheck key="1" size={24} color="#0e6b73" strokeWidth={1.8} />,
    <Ruler key="2" size={24} color="#0e6b73" strokeWidth={1.8} />,
    <Wrench key="3" size={24} color="#0e6b73" strokeWidth={1.8} />,
    <MessageSquareText key="4" size={24} color="#0e6b73" strokeWidth={1.8} />
  ];

  return (
    <section
      id="diferenciais"
      style={{
        backgroundColor: 'var(--color-graphite-800)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="site-container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
          }}
          className="trust-grid"
        >
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '0.75rem',
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'rgba(14, 107, 115, 0.12)',
                  borderRadius: '6px',
                  border: '1px solid rgba(14, 107, 115, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {icons[idx]}
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.25rem',
                  }}
                >
                  {pillar.title}
                </h2>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#9ba7a5',
                    lineHeight: 1.5,
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.75rem !important;
          }
        }
        @media (max-width: 600px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
