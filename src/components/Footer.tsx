import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { COMPANY_CONFIG, buildWhatsAppLink } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-graphite-900)',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="site-container">
        {/* Grid Principal do Rodapé */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
          className="footer-grid"
        >
          {/* Coluna 1: Identidade da Marca */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  border: '1.5px solid #0e6b73',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(14, 107, 115, 0.2)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    color: '#ffffff',
                  }}
                >
                  VC
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                VIDRAÇARIA <span style={{ color: '#0e6b73' }}>CONCEITO</span>
              </span>
            </div>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#9faaa8',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                maxWidth: '320px',
              }}
            >
              Soluções arquitetônicas em vidro sob medida. Box, espelhos, divisórias e 
              fechamentos com rigor técnico, matéria-prima selecionada e compromisso com o acabamento.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={COMPANY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'background 0.2s ease',
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direto"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25d366',
                  transition: 'background 0.2s ease',
                }}
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="#servicos" style={{ color: '#9faaa8', fontSize: '0.875rem' }}>
                  Serviços em Vidro
                </a>
              </li>
              <li>
                <a href="#diferenciais" style={{ color: '#9faaa8', fontSize: '0.875rem' }}>
                  Por Que Escolher
                </a>
              </li>
              <li>
                <a href="#projetos" style={{ color: '#9faaa8', fontSize: '0.875rem' }}>
                  Portfólio de Ambientes
                </a>
              </li>
              <li>
                <a href="#processo" style={{ color: '#9faaa8', fontSize: '0.875rem' }}>
                  Como Solicitamos
                </a>
              </li>
              <li>
                <a href="#faq" style={{ color: '#9faaa8', fontSize: '0.875rem' }}>
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#orcamento" style={{ color: '#9faaa8', fontSize: '0.875rem' }}>
                  Solicitar Cotação
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Principais Soluções */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Soluções
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="#servicos" style={{ color: '#9faaa8', fontSize: '0.875rem' }}>
                  Box Elegance & Até o Teto
                </a>
              </li>
              <li>
                <a href="#servicos" style={{ color: '#9faaa8', fontSize: '0.875rem' }}>
                  Espelhos com LED & Bisotados
                </a>
              </li>
              <li>
                <a href="#servicos" style={{ color: '#9faaa8', fontSize: '0.875rem' }}>
                  Portas de Correr & Pivotantes
                </a>
              </li>
              <li>
                <a href="#servicos" style={{ color: '#9faaa8', fontSize: '0.875rem' }}>
                  Divisórias de Escritório
                </a>
              </li>
              <li>
                <a href="#servicos" style={{ color: '#9faaa8', fontSize: '0.875rem' }}>
                  Guarda-Corpo Autoportante
                </a>
              </li>
              <li>
                <a href="#servicos" style={{ color: '#9faaa8', fontSize: '0.875rem' }}>
                  Envidraçamento Panorâmico
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Atendimento Real */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Atendimento Direto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#b2bebc', fontSize: '0.875rem' }}>
                <MessageCircle size={18} color="#25d366" />
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff', fontWeight: 600 }}
                >
                  {COMPANY_CONFIG.whatsappDisplay}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#b2bebc', fontSize: '0.875rem' }}>
                <Phone size={18} color="#0e6b73" />
                <span>{COMPANY_CONFIG.phoneDisplay}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#b2bebc', fontSize: '0.875rem' }}>
                <Mail size={18} color="#0e6b73" />
                <span>{COMPANY_CONFIG.email}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#b2bebc', fontSize: '0.875rem' }}>
                <MapPin size={18} color="#0e6b73" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{COMPANY_CONFIG.regionServed}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#b2bebc', fontSize: '0.875rem' }}>
                <Clock size={18} color="#0e6b73" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{COMPANY_CONFIG.businessHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright e Subir */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span style={{ fontSize: '0.8125rem', color: '#7a8583' }}>
            © {new Date().getFullYear()} {COMPANY_CONFIG.name}. Todos os direitos reservados. Projetos sob medida em vidro.
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao início do site"
            style={{
              background: 'none',
              border: 'none',
              color: '#8e9d9b',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-heading)',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#8e9d9b')}
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
