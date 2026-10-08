import React from 'react';
import { Sun, Maximize2, Sparkles, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../data/companyData';

export const TransformationSection: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-graphite-900)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="section-padding"
    >
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="transformation-grid"
        >
          {/* Lado Fotográfico Panorâmico */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              }}
              className="img-zoom-container"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Ambiente arquitetônico moderno com integração visual e grandes painéis envidraçados"
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="lazy"
              />
            </div>

            {/* Citação Técnica / Rótulo Editorial */}
            <div
              style={{
                position: 'absolute',
                bottom: '-24px',
                right: '24px',
                backgroundColor: 'var(--color-teal-deep)',
                padding: '1.25rem 1.5rem',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                maxWidth: '280px',
                boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
              }}
              className="transformation-floating-box"
            >
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1.4,
                }}
              >
                "O vidro amplia a percepção de metragem e valoriza a iluminação natural dos espaços."
              </p>
            </div>
          </div>

          {/* Lado Conceitual / Texto */}
          <div>
            <span className="section-tag light">Arquitetura & Luz</span>
            
            <h2 className="section-title light" style={{ marginBottom: '1.5rem' }}>
              Mais luz. Mais amplitude. Mais possibilidades.
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#b8c5c3',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Soluções em vidro bem planejadas não apenas dividem ou protegem — elas transformam 
              a relação entre os ambientes. Ao substituir alvenarias cegas por transparência ou 
              painéis translúcidos, você ganha sensação de espaço, aproveitamento térmico e luminosidade 
              sem abrir mão da privacidade e do silêncio.
            </p>

            {/* Três Pilares Visuais do Impacto */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: '2.5rem',
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(14, 107, 115, 0.2)',
                    padding: '0.6rem',
                    borderRadius: '4px',
                    color: '#79d1d9',
                  }}
                >
                  <Sun size={20} />
                </div>
                <div>
                  <h3 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                    Iluminação Natural Contínua
                  </h3>
                  <p style={{ color: '#9ba8a6', fontSize: '0.9rem' }}>
                    Redução no consumo elétrico diurno e valorização imediata do mobiliário e acabamentos.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(14, 107, 115, 0.2)',
                    padding: '0.6rem',
                    borderRadius: '4px',
                    color: '#79d1d9',
                  }}
                >
                  <Maximize2 size={20} />
                </div>
                <div>
                  <h3 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                    Amplitude & Fluidez Visual
                  </h3>
                  <p style={{ color: '#9ba8a6', fontSize: '0.9rem' }}>
                    Ambientes menores parecem consideravelmente maiores com vãos abertos e espelhos bem posicionados.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(14, 107, 115, 0.2)',
                    padding: '0.6rem',
                    borderRadius: '4px',
                    color: '#79d1d9',
                  }}
                >
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                    Valorização do Imóvel
                  </h3>
                  <p style={{ color: '#9ba8a6', fontSize: '0.9rem' }}>
                    Projetos com ferragens minimalistas e vidros de segurança aumentam o padrão visual percebido.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={buildWhatsAppLink("Olá! Gostaria de consultar ideias em vidro para transformar meu ambiente.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.9rem 1.8rem' }}
            >
              <MessageCircle size={18} />
              <span>Conversar sobre meu ambiente</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .transformation-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .transformation-floating-box {
            position: static !important;
            margin-top: 1rem !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
