import React from 'react';
import { PROCESS_STEPS, buildWhatsAppLink } from '../data/companyData';
import { MessageCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-mineral-200)', borderBottom: '1px solid var(--color-mineral-200)' }}>
      <div className="site-container">
        {/* Cabeçalho */}
        <div style={{ maxWidth: '680px', marginBottom: '4rem' }}>
          <span className="section-tag">Processo Transparente</span>
          <h2 className="section-title">
            Do primeiro contato à instalação.
          </h2>
          <p className="section-desc">
            Sem processos burocráticos ou termos técnicos inacessíveis. Entenda como transformamos 
            sua ideia em uma instalação segura e acabada.
          </p>
        </div>

        {/* 3 Etapas Estruturadas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem',
            position: 'relative',
          }}
          className="process-grid"
        >
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              style={{
                position: 'relative',
                padding: '2rem',
                backgroundColor: 'var(--color-warm-card)',
                borderRadius: '6px',
                border: '1px solid var(--color-mineral-200)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'rgba(14, 107, 115, 0.25)',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '1.25rem',
                  }}
                >
                  {step.number}
                </span>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-graphite-900)',
                    marginBottom: '0.85rem',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-mineral-700)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {step.description}
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px dashed var(--color-mineral-300)',
                  paddingTop: '0.85rem',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-teal-deep)',
                  fontWeight: 600,
                }}
              >
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Chamada sutil abaixo dos passos */}
        <div
          style={{
            marginTop: '3.5rem',
            backgroundColor: 'var(--color-mineral-100)',
            borderRadius: '6px',
            padding: '1.75rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--color-graphite-900)',
                marginBottom: '0.25rem',
              }}
            >
              Pronto para dar o primeiro passo?
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-mineral-700)' }}>
              Envie fotos ou medidas preliminares e receba uma orientação inicial sem compromisso.
            </p>
          </div>

          <a
            href={buildWhatsAppLink("Olá! Gostaria de explicar o que preciso para receber uma orientação de projeto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle size={18} />
            <span>Falar com especialista agora</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
