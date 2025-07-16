import { Brain, FolderArchive, Gavel, FileText } from 'lucide-react';
import React from 'react';

export type Motivo = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const motivos: Motivo[] = [
  {
    id: 'ia',
    title: 'IA Exclusiva e Segura',
    description:
      'Tenha acesso a uma inteligência artificial desenvolvida especialmente para o meio jurídico, com total segurança e privacidade dos dados do seu escritório e de seus clientes.',
    icon: React.createElement(Brain, { className: 'w-5 h-5' }),
  },
  {
    id: 'gestao',
    title: 'Gestão Documental Organizada',
    description:
      'Centralize e organize todos os seus documentos jurídicos em um só lugar, facilitando a busca, o controle de versões e o compartilhamento de arquivos de forma segura e eficiente.',
    icon: React.createElement(FolderArchive, { className: 'w-5 h-5' }),
  },
  {
    id: 'eficiencia',
    title: 'Eficiência para Advogados',
    description:
      'Automatize tarefas repetitivas, otimize o tempo em atividades essenciais e dedique-se ao que realmente importa: a estratégia jurídica e o atendimento ao cliente.',
    icon: React.createElement(Gavel, { className: 'w-5 h-5' }),
  },
  {
    id: 'padronizacao',
    title: 'Padronização de Peças Jurídicas',
    description:
      'Garanta a uniformidade e a qualidade dos documentos produzidos, reduzindo erros e agilizando a elaboração de petições, contratos e demais peças processuais.',
    icon: React.createElement(FileText, { className: 'w-5 h-5' }),
  },
];
