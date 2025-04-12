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
    description: '',
    icon: React.createElement(Brain, { className: 'w-5 h-5' }),
  },
  {
    id: 'gestao',
    title: 'Gestão Documental Organizada',
    description:
      'Deixe de perder tempo organizando papéis e tenha acesso rápido e seguro a todos os documentos em um só lugar.',
    icon: React.createElement(FolderArchive, { className: 'w-5 h-5' }),
  },
  {
    id: 'eficiencia',
    title: 'Eficiência para Advogados',
    description: '',
    icon: React.createElement(Gavel, { className: 'w-5 h-5' }),
  },
  {
    id: 'padronizacao',
    title: 'Padronização de Peças Jurídicas',
    description: '',
    icon: React.createElement(FileText, { className: 'w-5 h-5' }),
  },
];
