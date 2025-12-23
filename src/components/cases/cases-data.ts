import { Building2, User } from 'lucide-react';
import React from 'react';

export type Case = {
  id: string;
  tipo: 'escritorio' | 'individual';
  titulo: string;
  subtitulo: string;
  problema: string;
  solucao: string;
  resultado: string;
  icon: React.ReactNode;
  destaque?: boolean;
};

export const cases: Case[] = [
  {
    id: 'escritorio-massa',
    tipo: 'escritorio',
    titulo: 'Escritório de Ações de Massa',
    subtitulo: 'Recupere 18 horas da sua semana e escale seu escritório sem aumentar a equipe',
    problema: 'Perda de quase 20 horas semanais em tarefas manuais',
    solucao: 'Automação completa do atendimento via WhatsApp com extração de dados por OCR',
    resultado: 'Ganho de 50% em tempo operacional e comunicação muito mais clara através de IA',
    icon: React.createElement(Building2, { className: 'w-6 h-6' }),
    destaque: true,
  },
  {
    id: 'advogado-individual',
    tipo: 'individual',
    titulo: 'Dr. Reinaldo F.',
    subtitulo: 'Tecnologia de ponta para quem advoga com estratégia, não com burocracia',
    problema: 'Conciliar a captação de clientes com a confecção exaustiva de documentos iniciais',
    solucao: 'Implementação do NOUS para assinatura digital, recepção de documentos e análise preditiva de jurisprudência',
    resultado: 'Automação total do back-office, liberando agenda para networking e captação ativa de novos contratos',
    icon: React.createElement(User, { className: 'w-6 h-6' }),
    destaque: false,
  },
];
