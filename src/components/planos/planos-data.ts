export interface Plano {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
  disabled?: boolean;
  promoPrice?: string;
  promoMsg?: string;
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
    highlight: true,
  },
];
