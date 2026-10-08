import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink } from '../data/companyData';

export const Hero: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-graphite-900)',
        color: '#ffffff',
        paddingTop: '130px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Luz e textura arquitetônica sutil de fundo (sem neon ou gradientes bizarros) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle at 70% 30%, rgba(14, 107, 115, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="site-container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Coluna de Texto & Conversão */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '0.4rem 0.875rem',
                borderRadius: '4px',
                marginBottom: '1.75rem',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#25d366',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: '#d4dcda',
                }}
              >
                Orçamentos rápidos direto com nossa equipe técnica
              </span>
            </div>

            {/* Headline Principal Forte */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.3vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                color: '#ffffff',
                marginBottom: '1.5rem',
              }}
            >
              Vidro que transforma <br />
              <span
                style={{
                  color: '#ffffff',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                ambientes.
                <span
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    left: 0,
                    width: '100%',
                    height: '8px',
                    backgroundColor: 'rgba(14, 107, 115, 0.4)',
                    zIndex: -1,
                  }}
                />
              </span>
            </h1>

            {/* Subheadline com legibilidade primorosa */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                lineHeight: 1.6,
                color: '#b5c0be',
                maxWidth: '560px',
                marginBottom: '2.5rem',
              }}
            >
              Box, espelhos, portas, fachadas e soluções em vidro sob medida para
              sua casa ou empresa com acabamento de alto padrão e precisão milimétrica.
            </p>

            {/* Ações / CTAs de Alto Impacto */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.75rem',
              }}
            >
              <a
                href={buildWhatsAppLink("Olá! Gostaria de solicitar um orçamento para meu projeto em vidro.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-hero"
                style={{
                  padding: '1.05rem 2rem',
                  fontSize: '1.025rem',
                }}
              >
                <MessageCircle size={21} />
                <span>Solicitar orçamento pelo WhatsApp</span>
              </a>

              <a
                href="#projetos"
                className="btn btn-secondary-light"
                style={{
                  padding: '1.05rem 1.65rem',
                  fontSize: '0.975rem',
                }}
              >
                <span>Conhecer nossos projetos</span>
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Linha de Confiança Objetiva */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#8e9d9b',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-heading)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#0e6b73" />
                <span>Atendimento personalizado</span>
              </div>
              <span style={{ opacity: 0.3 }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#0e6b73" />
                <span>Projetos sob medida</span>
              </div>
              <span style={{ opacity: 0.3 }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#0e6b73" />
                <span>Orçamento direto</span>
              </div>
            </div>
          </div>

          {/* Coluna Visual Editorial (Fotografia de Arquitetura de Alto Padrão) */}
          <div
            style={{
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
              className="img-zoom-container"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Ambiente arquitetônico integrado com esquadrias e portas de vidro sob medida"
                style={{
                  width: '100%',
                  height: '560px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="eager"
              />

              {/* Tag de Especificação no Canto da Imagem com estilo arquitetônico */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  backgroundColor: 'rgba(15, 20, 24, 0.88)',
                  backdropFilter: 'blur(8px)',
                  padding: '1.1rem 1.4rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#0e6b73',
                      display: 'block',
                      fontWeight: 700,
                    }}
                  >
                    Especificação Arquitetônica
                  </span>
                  <span
                    style={{
                      fontSize: '0.9375rem',
                      color: '#ffffff',
                      fontWeight: 600,
                    }}
                  >
                    Vidro laminado & perfis minimalistas
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#c2c7c2',
                    fontSize: '0.8125rem',
                  }}
                >
                  <ShieldCheck size={18} color="#25d366" />
                  <span>Vidro de Segurança</span>
                </div>
              </div>
            </div>

            {/* Card flutuante secundário que reforça precisão */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                backgroundColor: '#192026',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1rem 1.25rem',
                borderRadius: '6px',
                boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
              className="hero-badge-floating"
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#0e6b73',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-heading)',
                  color: '#ffffff',
                  fontWeight: 600,
                }}
              >
                Precisão técnica na instalação
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-badge-floating {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
