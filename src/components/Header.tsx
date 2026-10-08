import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_CONFIG, buildWhatsAppLink } from '../data/companyData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Orçamento', href: '#orcamento' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled
          ? 'rgba(15, 20, 24, 0.96)'
          : 'rgba(15, 20, 24, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="site-container-wide"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isScrolled ? '70px' : '82px',
          transition: 'height 0.3s ease',
        }}
      >
        {/* Logotipo Arquitetônico */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
          aria-label={COMPANY_CONFIG.name}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              border: '1.5px solid #0e6b73',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(14, 107, 115, 0.25) 0%, rgba(15, 20, 24, 0.4) 100%)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.05em',
              }}
            >
              VC
            </span>
            <div
              style={{
                position: 'absolute',
                bottom: '-2px',
                right: '-2px',
                width: '6px',
                height: '6px',
                backgroundColor: '#25d366',
              }}
            />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              VIDRAÇARIA <span style={{ color: '#0e6b73' }}>CONCEITO</span>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#8b9695',
                display: 'block',
              }}
            >
              Arquitetura em Vidro
            </span>
          </div>
        </a>

        {/* Navegação Desktop */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#c2c7c2',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#c2c7c2')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão de WhatsApp no Header (Desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="desktop-nav">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              backgroundColor: '#1eb854',
              color: '#ffffff',
              padding: '0.625rem 1.25rem',
              fontSize: '0.875rem',
              fontWeight: 700,
            }}
          >
            <MessageCircle size={17} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Botão Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          className="mobile-nav-toggle"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#0f1418',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.125rem',
                fontWeight: 600,
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {link.label}
              <ArrowUpRight size={18} color="#0e6b73" />
            </a>
          ))}

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              backgroundColor: '#1eb854',
              color: '#ffffff',
              padding: '0.875rem 1.5rem',
              marginTop: '0.5rem',
            }}
          >
            <MessageCircle size={18} />
            <span>Solicitar Orçamento no WhatsApp</span>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
