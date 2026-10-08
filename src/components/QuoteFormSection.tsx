import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG, buildWhatsAppLink } from '../data/companyData';

export const QuoteFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: 'Box para Banheiro',
    cidade: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.nome.trim()) {
      errs.nome = 'Por favor, informe seu nome.';
    }
    if (!formData.telefone.trim()) {
      errs.telefone = 'Por favor, informe seu telefone ou WhatsApp.';
    }
    if (!formData.cidade.trim()) {
      errs.cidade = 'Informe sua cidade ou bairro.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Monta mensagem estruturada e direciona para o WhatsApp da empresa
    const whatsappText = `*Solicitação de Orçamento pelo Site*
• *Nome:* ${formData.nome}
• *Telefone:* ${formData.telefone}
• *Serviço de Interesse:* ${formData.servico}
• *Localização:* ${formData.cidade}
• *Detalhes:* ${formData.mensagem || 'Não informado'}`;

    window.open(buildWhatsAppLink(whatsappText), '_blank');
  };

  return (
    <section id="orcamento" className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-mineral-200)' }}>
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="quote-grid"
        >
          {/* Informações ao lado do formulário */}
          <div>
            <span className="section-tag">Orçamento Rápido</span>
            <h2 className="section-title">
              Solicite uma estimativa sob medida para o seu projeto.
            </h2>
            <p className="section-desc" style={{ marginBottom: '2rem' }}>
              Preencha os campos ao lado com as informações preliminares. Seus dados serão 
              enviados diretamente para o WhatsApp de nossa equipe para retorno ágil e assertivo.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="#0e6b73" />
                <span style={{ fontSize: '0.9375rem', color: 'var(--color-graphite-800)' }}>
                  Resposta direta sem intermediários ou robôs chatos
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="#0e6b73" />
                <span style={{ fontSize: '0.9375rem', color: 'var(--color-graphite-800)' }}>
                  Possibilidade de enviar fotos e plantas diretamente na conversa
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShieldCheck size={20} color="#0e6b73" />
                <span style={{ fontSize: '0.9375rem', color: 'var(--color-graphite-800)' }}>
                  Total sigilo com suas informações de contato
                </span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-warm-card)',
                padding: '1.25rem',
                borderRadius: '6px',
                border: '1px solid var(--color-mineral-200)',
              }}
            >
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-mineral-500)', display: 'block', marginBottom: '0.25rem' }}>
                Região atendida:
              </span>
              <strong style={{ fontSize: '0.95rem', color: 'var(--color-graphite-900)' }}>
                {COMPANY_CONFIG.regionServed}
              </strong>
            </div>
          </div>

          {/* Card do Formulário */}
          <div
            style={{
              backgroundColor: 'var(--color-warm-white)',
              padding: '2.5rem',
              borderRadius: '8px',
              border: '1px solid var(--color-mineral-300)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0.4rem',
                    color: 'var(--color-graphite-900)',
                  }}
                >
                  Seu Nome *
                </label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Ex: Carlos Oliveira"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '4px',
                    border: '1px solid',
                    borderColor: errors.nome ? '#ef4444' : 'var(--color-mineral-300)',
                    backgroundColor: '#ffffff',
                    fontSize: '0.9375rem',
                    outline: 'none',
                  }}
                />
                {errors.nome && (
                  <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.nome}
                  </span>
                )}
              </div>

              {/* Telefone / WhatsApp */}
              <div>
                <label
                  htmlFor="telefone"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0.4rem',
                    color: 'var(--color-graphite-900)',
                  }}
                >
                  WhatsApp / Celular com DDD *
                </label>
                <input
                  id="telefone"
                  type="tel"
                  placeholder="Ex: (11) 98765-4321"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '4px',
                    border: '1px solid',
                    borderColor: errors.telefone ? '#ef4444' : 'var(--color-mineral-300)',
                    backgroundColor: '#ffffff',
                    fontSize: '0.9375rem',
                    outline: 'none',
                  }}
                />
                {errors.telefone && (
                  <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.telefone}
                  </span>
                )}
              </div>

              {/* Serviço Desejado e Cidade em duas colunas */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem' }} className="form-subgrid">
                <div>
                  <label
                    htmlFor="servico"
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-heading)',
                      marginBottom: '0.4rem',
                      color: 'var(--color-graphite-900)',
                    }}
                  >
                    Serviço Desejado
                  </label>
                  <select
                    id="servico"
                    value={formData.servico}
                    onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '4px',
                      border: '1px solid var(--color-mineral-300)',
                      backgroundColor: '#ffffff',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="Box para Banheiro">Box para Banheiro</option>
                    <option value="Espelhos sob Medida">Espelhos sob Medida</option>
                    <option value="Portas & Divisórias de Vidro">Portas & Divisórias de Vidro</option>
                    <option value="Guarda-Corpos & Sacadas">Guarda-Corpos & Sacadas</option>
                    <option value="Envidraçamento de Sacadas">Envidraçamento de Sacadas</option>
                    <option value="Fachadas & Vitrines Comerciais">Fachadas & Vitrines</option>
                    <option value="Outros Serviços em Vidro">Outros / Projeto Especial</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="cidade"
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-heading)',
                      marginBottom: '0.4rem',
                      color: 'var(--color-graphite-900)',
                    }}
                  >
                    Cidade / Bairro *
                  </label>
                  <input
                    id="cidade"
                    type="text"
                    placeholder="Ex: Pinheiros, SP"
                    value={formData.cidade}
                    onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '4px',
                      border: '1px solid',
                      borderColor: errors.cidade ? '#ef4444' : 'var(--color-mineral-300)',
                      backgroundColor: '#ffffff',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                  {errors.cidade && (
                    <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                      {errors.cidade}
                    </span>
                  )}
                </div>
              </div>

              {/* Mensagem Opcional */}
              <div>
                <label
                  htmlFor="mensagem"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0.4rem',
                    color: 'var(--color-graphite-900)',
                  }}
                >
                  Conte um pouco sobre o projeto (medidas, detalhes ou dúvidas)
                </label>
                <textarea
                  id="mensagem"
                  rows={3}
                  placeholder="Ex: Preciso de um box de correr até o teto para suíte, dimensões aproximadas 1,40m x 2,40m..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '4px',
                    border: '1px solid var(--color-mineral-300)',
                    backgroundColor: '#ffffff',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* Botão de Envio com Encaminhamento Seguro */}
              <button
                type="submit"
                className="btn btn-whatsapp-hero"
                style={{
                  padding: '1rem',
                  fontSize: '1rem',
                  width: '100%',
                }}
              >
                <Send size={18} />
                <span>Enviar dados para o WhatsApp</span>
              </button>

              <span
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--color-mineral-500)',
                  textAlign: 'center',
                }}
              >
                Ao clicar, as informações serão formatadas e enviadas ao nosso WhatsApp sem perda de tempo.
              </span>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .quote-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .form-subgrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
