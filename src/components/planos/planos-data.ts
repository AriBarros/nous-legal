export interface Plano {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
  disabled?: boolean;
}

export const plans: Plano[] = [
  {
    title: 'Plano Trial',
    price: 'Gratuito',
    features: [
      'Teste com 50 Créditos Grátis',
      'Ideal para Testes, conheça o software antes de aderir a um plano pago.',
    ],
    disabled: true,
  },
  {
    title: 'Plano Starter',
    price: 'R$ 190,00',
    features: [
      '200 créditos por mês.',
      'Ideal para quem está começando.',
      'Compre mais créditos por R$ 0,55 cada, se precisar.',
    ],
    highlight: true,
  },
  {
    title: 'Plano Pro',
    price: 'R$ 490,00',
    features: [
      '600 créditos por mês.',
      'Ideal para usuários com um volume de utilização alto.',
      'Inclui funcionalidades mais avançadas.',
    ],
    disabled: true,
  },
  {
    title: 'Plano Enterprise',
    price: 'R$ 1.400,00',
    features: [
      '2000 créditos por mês.',
      'Ideal para empresas com demandas específicas.',
      'Inclui funcionalidades mais avançadas e personalizáveis.',
    ],
    disabled: true,
  },
];
