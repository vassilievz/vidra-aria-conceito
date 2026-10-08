import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
      <div className="site-container">
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {/* Cabeçalho */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              Tira-Dúvidas
            </span>
            <h2 className="section-title">
              Perguntas Frequentes
            </h2>
            <p className="section-desc" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Respostas claras sobre como trabalhamos, especificações técnicas e o processo de instalação.
            </p>
          </div>

          {/* Acordeão com acessibilidade e transição suave */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {FAQ_DATA.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid',
                    borderColor: isOpen ? 'var(--color-teal-accent)' : 'var(--color-mineral-200)',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    transition: 'border-color 0.25s ease',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: isOpen ? 'var(--color-teal-deep)' : 'var(--color-graphite-900)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    <span>{item.question}</span>
                    <span
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        color: isOpen ? 'var(--color-teal-accent)' : 'var(--color-mineral-500)',
                      }}
                    >
                      <ChevronDown size={20} />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.5rem 1.5rem',
                        color: 'var(--color-mineral-700)',
                        fontSize: '0.95rem',
                        lineHeight: 1.65,
                        borderTop: '1px solid var(--color-mineral-100)',
                        paddingTop: '1rem',
                      }}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
