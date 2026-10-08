import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, buildWhatsAppLink } from '../data/companyData';
import { ArrowUpRight } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'residencial', label: 'Residenciais' },
    { id: 'corporativo', label: 'Corporativos' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((item) => {
    if (filter === 'todos') return true;
    if (filter === 'residencial') return item.tag.toLowerCase().includes('residencial') || item.tag.toLowerCase().includes('design');
    if (filter === 'corporativo') return item.tag.toLowerCase().includes('corporativo');
    return true;
  });

  return (
    <section id="projetos" className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
      <div className="site-container">
        {/* Cabeçalho */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span className="section-tag">Portfólio & Execuções</span>
            <h2 className="section-title">
              Projetos executados com precisão e estética apurada.
            </h2>
            <p className="section-desc">
              Cada ambiente exige um tratamento específico. Veja exemplos de acabamentos, 
              sistemas de fixação e composições sob medida prontas para servir de inspiração.
            </p>
          </div>

          {/* Filtros discretos */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              backgroundColor: 'var(--color-mineral-100)',
              padding: '0.35rem',
              borderRadius: '6px',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                style={{
                  border: 'none',
                  background: filter === cat.id ? '#ffffff' : 'transparent',
                  color: filter === cat.id ? 'var(--color-graphite-900)' : 'var(--color-mineral-700)',
                  fontWeight: filter === cat.id ? 700 : 500,
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-heading)',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  boxShadow: filter === cat.id ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Galeria em Grid Editorial */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
          className="portfolio-grid"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-mineral-200)',
                borderRadius: '6px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              className="portfolio-card"
            >
              <div
                className="img-zoom-container"
                style={{
                  height: '340px',
                  position: 'relative',
                  backgroundColor: 'var(--color-mineral-200)',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(15, 20, 24, 0.85)',
                    backdropFilter: 'blur(6px)',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    padding: '0.35rem 0.75rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {project.tag}
                </div>
              </div>

              <div style={{ padding: '1.75rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      color: 'var(--color-teal-accent)',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                    }}
                  >
                    {project.environment}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-graphite-900)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-teal-deep)',
                    fontWeight: 600,
                    marginBottom: '0.85rem',
                  }}
                >
                  {project.service}
                </p>

                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--color-mineral-700)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.description}
                </p>

                <a
                  href={buildWhatsAppLink(`Olá! Vi o projeto "${project.title}" no site e gostaria de solicitar um orçamento similar.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-teal-accent)',
                  }}
                >
                  <span>Orçar projeto similar</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
