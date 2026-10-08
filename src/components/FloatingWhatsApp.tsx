import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppLink } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Exibe balão discreto após 4 segundos para engajar sem incomodar
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShowTooltip(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {/* Tooltip sutil e sofisticado */}
      {showTooltip && !dismissed && (
        <div
          style={{
            backgroundColor: '#ffffff',
            color: 'var(--color-graphite-900)',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            border: '1px solid var(--color-mineral-200)',
            marginBottom: '10px',
            maxWidth: '240px',
            position: 'relative',
            animation: 'fadeIn 0.3s ease-out',
          }}
        >
          <button
            type="button"
            onClick={() => {
              setShowTooltip(false);
              setDismissed(true);
            }}
            aria-label="Fechar aviso"
            style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-mineral-500)',
              padding: '2px',
            }}
          >
            <X size={14} />
          </button>
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              lineHeight: 1.35,
              paddingRight: '12px',
            }}
          >
            Dúvidas sobre medidas ou modelos? Converse no WhatsApp!
          </p>
        </div>
      )}

      {/* Botão de WhatsApp Flutuante */}
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25d366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          transition: 'all 0.25s ease',
          cursor: 'pointer',
          border: '2px solid #ffffff',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.backgroundColor = '#1eb854';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#25d366';
        }}
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};
