import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA, buildWhatsAppLink } from '../data/companyData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
      <div className="site-container">
        {/* Cabeçalho da Seção com Linha Editorial */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '780px' }}>
          <span className="section-tag">Nossas Soluções</span>
          <h2 className="section-title">
            Uma solução em vidro para cada ambiente.
          </h2>
          <p className="section-desc">
            Execução sob medida com tolerâncias rigorosas, vidros de segurança certificados 
            e ferragens de alta durabilidade para projetos residenciais e corporativos.
          </p>
        </div>

        {/* Grade Assimétrica Editorial (Diferentes proporções visuais) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.75rem',
          }}
          className="services-grid"
        >
          {SERVICES_DATA.map((service, index) => {
            // Composição assimétrica: 1º e 4º ocupam 7 colunas, 2º e 3º ocupam 5 colunas, etc.
            const colSpan = index === 0 || index === 3 ? 'span 7' : 'span 5';

            return (
              <div
                key={service.id}
                style={{
                  gridColumn: colSpan,
                  backgroundColor: '#ffffff',
                  borderRadius: '6px',
                  border: '1px solid var(--color-mineral-200)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: 'var(--shadow-subtle)',
                }}
                className="service-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                  e.currentTarget.style.borderColor = 'var(--color-mineral-300)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
                  e.currentTarget.style.borderColor = 'var(--color-mineral-200)';
                }}
              >
                {/* Imagem com corte arquitetônico */}
                <div
                  className="img-zoom-container"
                  style={{
                    position: 'relative',
                    height: index === 0 || index === 3 ? '320px' : '260px',
                    backgroundColor: 'var(--color-mineral-100)',
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    loading="lazy"
                  />
                  
                  {/* Badge de Categoria/Destaque */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: 'rgba(15, 20, 24, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '3px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {service.badge}
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-teal-accent)',
                        display: 'block',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {service.category}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: 'var(--color-graphite-900)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        color: 'var(--color-mineral-700)',
                        lineHeight: 1.6,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Especificações Rápidas */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {service.highlights.map((item) => (
                        <span
                          key={item}
                          style={{
                            fontSize: '0.775rem',
                            backgroundColor: 'var(--color-warm-card)',
                            border: '1px solid var(--color-mineral-200)',
                            color: 'var(--color-graphite-800)',
                            padding: '0.25rem 0.6rem',
                            borderRadius: '3px',
                            fontWeight: 500,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ação de Orçamento Discreta e Elegante */}
                  <div
                    style={{
                      borderTop: '1px solid var(--color-mineral-100)',
                      paddingTop: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <a
                      href={buildWhatsAppLink(`Olá! Gostaria de um orçamento específico para ${service.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-teal-accent)',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      <span>Solicitar orçamento deste item</span>
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-grid > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};
