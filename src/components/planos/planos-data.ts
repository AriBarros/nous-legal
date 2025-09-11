export interface Plano {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
  disabled?: boolean;
  promoPrice?: string;
  promoMsg?: string;
  isBeta?: boolean;
  freeTrialDays?: number;
}
export const plans: Plano[] = [
  {
    title: 'NOUS Performance Jurídica',
    price: 'R$ 5.000,00',
    features: [
      'Transformação digital completa do seu escritório jurídico em até 40 horas.',
      'Diagnóstico de gargalos e plano de automação sob medida.',
      'Execução turn-key: criação de robôs, agentes de IA e integração com seus sistemas.',
      'Capacitação da equipe jurídica para uso eficiente das soluções.',
      'Acompanhamento de performance em tempo real por KPIs: produtividade, economia e redução de tarefas manuais.',
      'Atendimento personalizado e foco em resultados desde o início.',
    ],
  },
  {
    title: 'NOUS Plataforma Completa',
    price: 'Gratuito',
    features: [
      'Dashboard: Visão geral e métricas',
      'Casos: Gestão de casos jurídicos',
      'Processos: Acompanhamento processual',
      'Gestão de Clientes: Cadastro e relacionamento',
      'Documentos: Central de documentos',
      'IA Jurídica: Assistente inteligente',
      'Financeiro: Controle financeiro',
      'Equipe: Gestão do seu escritório de maneira facilitada',
      'Landing Pages: Captação de clientes e personalização da sua própria marca',
      'INDISPONÍVEL: Integração completa com WhatsApp Business',
      'INDISPONÍVEL: Quadro Kanban para gestão de mensagens',
    ],
    isBeta: true,
    freeTrialDays: 7,
  },
];
