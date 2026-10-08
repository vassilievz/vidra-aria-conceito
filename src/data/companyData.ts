/**
 * Configuração central da empresa.
 * Altere aqui para atualizar telefone, e-mail, redes e textos institucionais em todo o site.
 */
export const COMPANY_CONFIG = {
  name: "Vidraçaria Conceito",
  tagline: "Vidro que transforma ambientes.",
  subtagline: "Box, espelhos, portas, fachadas e soluções em vidro sob medida para sua casa ou empresa com padrão arquitetônico.",
  
  // Contato e Localização
  whatsappNumber: "5511999998888", // Formato internacional: DDI + DDD + Número sem símbolos
  whatsappDisplay: "(11) 99999-8888",
  phoneDisplay: "(11) 3456-7890",
  email: "contato@vidracariaconceito.com.br",
  regionServed: "São Paulo, Grande SP e Região Metropolitana",
  address: "Atendimento em toda a capital e região metropolitana (instalação no local)",
  businessHours: "Segunda a Sexta: 08h às 18h | Sábados: 08h às 13h",
  instagramUrl: "https://instagram.com",
  instagramHandle: "@vidracaria.conceito",
  
  // Mensagem padrão para WhatsApp
  defaultWhatsappMessage: "Olá! Gostaria de solicitar um orçamento para um projeto em vidro sob medida.",
};

export const TRUST_PILLARS = [
  {
    title: "Atendimento personalizado",
    description: "Orientação técnica e consultiva para o melhor aproveitamento do espaço."
  },
  {
    title: "Soluções sob medida",
    description: "Cada peça dimensionada com tolerância milimétrica e acabamento refinado."
  },
  {
    title: "Instalação profissional",
    description: "Equipe especializada com fixações seguras e normas técnicas aplicadas."
  },
  {
    title: "Orçamento direto",
    description: "Agilidade no retorno com estimativa clara e sem burocracia desnecessária."
  }
];

export const SERVICES_DATA = [
  {
    id: "box-banheiro",
    title: "Box para Banheiro",
    category: "Residencial",
    badge: "Mais Procurado",
    description: "Sistemas elegantes de correr, abrir ou até o teto (piso-teto) com ferragens premium em inox ou preto fosco.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Vidro temperado 8mm e 10mm", "Roldanas aparentes ou embutidas", "Perfis minimalistas"],
    featured: true
  },
  {
    id: "espelhos-lapidados",
    title: "Espelhos sob Medida",
    category: "Design & Interiores",
    badge: "Acabamento Nobre",
    description: "Espelhos bisotados, lapidados e com iluminação em LED embutida para banheiros, halls, salas e closets.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Cristal prata de alta reflexão", "Bisotê ou corte lapidado reto", "Opção com backlight LED"],
    featured: false
  },
  {
    id: "portas-divisorias",
    title: "Portas & Divisórias de Vidro",
    category: "Residencial & Corporativo",
    badge: "Integração",
    description: "Divisórias acústicas e portas pivotantes ou de correr que setorizam espaços sem perder a luminosidade natural.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Trilhos embutidos ou modernos", "Vidro translúcido, reflecta ou jateado", "Amortecimento suave"],
    featured: true
  },
  {
    id: "guarda-corpos",
    title: "Guarda-Corpos & Corrimãos",
    category: "Segurança & Arquitetura",
    badge: "Segurança Certificada",
    description: "Sistemas autoportantes com botões de inox, torres discretas ou perfis de alumínio embutidos no piso.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Vidro laminado e temperado", "Linhas limpas sem interferência visual", "Conformidade com a NBR 14718"],
    featured: false
  },
  {
    id: "envidracamento-sacadas",
    title: "Envidraçamento de Sacadas",
    category: "Áreas Gourmet & Varandas",
    badge: "Conforto",
    description: "Fechamento panorâmico retrátil com abertura total dos painéis, proteção contra chuva e isolamento de poeira.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Abertura retrátil total", "Vedação eficiente", "Fechaduras e travas de segurança"],
    featured: false
  },
  {
    id: "fachadas-comerciais",
    title: "Fachadas & Vitrines",
    category: "Corporativo & Comercial",
    badge: "Impacto Visual",
    description: "Vitrines de alta visibilidade e fachadas estruturais que posicionam negócios comerciais com modernidade.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Vidro de segurança laminado", "Ferragens de alta resistência", "Excelente presença de rua"],
    featured: true
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Residência Alphaville",
    service: "Guarda-corpo Autoportante & Divisórias",
    environment: "Área Interna & Mezanino",
    description: "Vidros laminados temperados fixados com botões maciços de aço inox, integrando living de pé-direito duplo.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
    tag: "Residencial Alto Padrão"
  },
  {
    id: 2,
    title: "Suíte Master Contemporânea",
    service: "Box Piso-Teto & Espelho Retroiluminado",
    environment: "Banheiro Principal",
    description: "Box com perfis minimalistas pretos foscos e espelho cristal com fita de LED quente 3000K embutida.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80",
    tag: "Design de Interiores"
  },
  {
    id: 3,
    title: "Escritório de Arquitetura & Coworking",
    service: "Divisórias Acústicas de Vidro",
    environment: "Salas de Reunião & Diretoria",
    description: "Painéis de vidro duplo laminado para isolamento sonoro preservando a passagem de luz entre as salas.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    tag: "Corporativo"
  },
  {
    id: 4,
    title: "Varanda Integrada & Gourmet",
    service: "Cortina de Vidro Retrátil",
    environment: "Área Externa",
    description: "Sistema articulado com trilhos nivelados para integração completa com o espaço de convívio social.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    tag: "Residencial"
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Conte o que você precisa",
    description: "Envie sua mensagem pelo WhatsApp ou formulário compartilhando fotos, medidas preliminares ou plantas do ambiente.",
    detail: "Sem complexidade: basta descrever sua ideia inicial."
  },
  {
    number: "02",
    title: "Receba uma orientação",
    description: "Nossa equipe avalia a viabilidade, indica as melhores espessuras e ferragens de acordo com as especificações do ambiente.",
    detail: "Consultoria transparente antes de qualquer decisão."
  },
  {
    number: "03",
    title: "Solicite seu orçamento",
    description: "Apresentamos uma proposta clara com prazos realistas e condições adequadas para a execução do projeto.",
    detail: "Tudo discriminado para sua total tranquilidade."
  }
];

export const FAQ_DATA = [
  {
    question: "Como funciona a solicitação de orçamento?",
    answer: "É direto e sem burocracia. Você clica no botão de WhatsApp ou preenche nosso formulário informando o que precisa (por exemplo: dimensões aproximadas, tipo de vidro ou foto do local). Nossa equipe responde rapidamente com orientações e valores de referência."
  },
  {
    question: "Vocês atendem residências e projetos corporativos?",
    answer: "Sim. Realizamos desde serviços residenciais (como box, espelhos decorativos e portas) até projetos corporativos e comerciais de maior porte (como divisórias de escritório, vitrines e fachadas)."
  },
  {
    question: "Qual a diferença entre vidro temperado e laminado?",
    answer: "O vidro temperado passa por choque térmico, tornando-se até 5 vezes mais resistente à flexão mecânica e quebrando em pequenos fragmentos não cortantes. Já o vidro laminado une duas ou mais lâminas com película PVB, mantendo os cacos presos em caso de quebra — ideal para guarda-corpos e coberturas."
  },
  {
    question: "Como é feito o alinhamento de medidas?",
    answer: "Após o envio dos detalhes preliminares e aprovação da estimativa inicial, nossa equipe pode alinhar a conferência precisa das medidas no local para garantir o encaixe exato de cada peça antes da fabricação."
  },
  {
    question: "É possível personalizar cores de vidro e ferragens?",
    answer: "Sim. Trabalhamos com diversas tonalidades de vidro (incolor, fumê, bronze, reflecta, extra clear, acidato) e acabamentos de ferragens e perfis (preto fosco, inox escovado ou polido, branco, cromado e anodizado natural)."
  }
];

/**
 * Função utilitária para gerar links do WhatsApp
 */
export function buildWhatsAppLink(customMessage?: string): string {
  const message = customMessage || COMPANY_CONFIG.defaultWhatsappMessage;
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
