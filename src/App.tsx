import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { TransformationSection } from './components/TransformationSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { ConversionSection } from './components/ConversionSection';
import { FaqSection } from './components/FaqSection';
import { QuoteFormSection } from './components/QuoteFormSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="landing-page-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Header Fixo & Responsivo com Menu Mobile e CTA Direto */}
      <Header />

      <main style={{ flexGrow: 1 }}>
        {/* 2. Hero Section: Fotografia Arquitetônica & Impacto Editorial */}
        <Hero />

        {/* 3. Barra de Confiança Objetiva */}
        <TrustBar />

        {/* 4. Soluções em Vidro com Grid Assimétrico Editorial */}
        <ServicesSection />

        {/* 5. Transformação Visual & Amplitude */}
        <TransformationSection />

        {/* 6. Portfólio de Projetos em Destaque com Filtro */}
        <PortfolioSection />

        {/* 7. Processo Claro em 3 Etapas */}
        <ProcessSection />

        {/* 8. Chamada Dominante de Conversão */}
        <ConversionSection />

        {/* 9. Formulário de Orçamento com Encaminhamento Inteligente */}
        <QuoteFormSection />

        {/* 10. Perguntas Frequentes (FAQ) em Acordeão */}
        <FaqSection />
      </main>

      {/* 11. Rodapé Estruturado e Completo */}
      <Footer />

      {/* 12. Botão Flutuante de WhatsApp Discreto */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
