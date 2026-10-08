import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { COMPANY_CONFIG, buildWhatsAppLink } from '../data/companyData';

export const ConversionSection: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-graphite-900)',
        color: '#ffffff',
        overflow: 'hidden',
      }}
      className="section-padding"
    >
      {/* Imagem de Fundo Elegante com Overlay Escuro e Profundo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          filter: 'grayscale(100%)',
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <span className="section-tag light" style={{ justifyContent: 'center' }}>
            Inicie seu projeto
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.6rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Seu projeto começa com uma conversa.
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              color: '#b8c5c3',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              maxWidth: '620px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Conte o que você tem em mente e descubra a solução em vidro mais adequada 
            para o seu espaço, com atendimento transparente e direto.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.25rem',
              marginBottom: '2rem',
            }}
          >
            <a
              href={buildWhatsAppLink("Olá! Gostaria de conversar sobre meu projeto em vidro e solicitar um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-hero"
              style={{
                padding: '1.1rem 2.25rem',
                fontSize: '1.05rem',
              }}
            >
              <MessageCircle size={22} />
              <span>Conversar pelo WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY_CONFIG.whatsappNumber}`}
              className="btn btn-secondary-light"
              style={{
                padding: '1.1rem 1.75rem',
                fontSize: '0.975rem',
              }}
            >
              <PhoneCall size={18} />
              <span>Ligar: {COMPANY_CONFIG.whatsappDisplay}</span>
            </a>
          </div>

          <p
            style={{
              fontSize: '0.85rem',
              color: '#849290',
            }}
          >
            Atendimento ágil em horário comercial • Resposta sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};
