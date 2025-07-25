import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';

import chatImage from '@/assets/images/whatsapp-chat.svg';
import { ModalAgendar } from '@/components/modais/ModalAgendar.tsx';
import { useState } from 'react';

export function AtendimentoJuridico() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      id="atendimento"
      className="bg-[#F3F5F7] py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-x-80 mt-40"
    >
      <div className="relative max-w-md w-full">
        <div className="w-full h-96 shadow-lg rounded-lg overflow-hidden">
          <img
            src={chatImage}
            alt="Simulação do WhatsApp"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-xl text-center md:text-left">
        <p className="text-lg text-gray-500 mb-1">Integração completa</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#060E3D] mb-4">
          Centralize e automatize o atendimento jurídico com o seu assistente
          virtual
        </h2>
        <p className="text-gray-600 mb-5">
          Ofereça respostas rápidas e precisas para seus clientes e otimize o
          tempo da sua equipe. Automatize tarefas repetitivas e foque no que
          realmente importa: as estratégias do seu caso.
        </p>
        <ul className="text-gray-700 space-y-5 mb-6">
          <li className="flex items-start gap-1 sm:gap-2">
            <span>
              <Check className="w-5 h-5 text-[#5BC0DE] mt-1" />
            </span>
            <span>
              Atendimento automatizado 24 horas por dia, 7 dias por semana de
              casos simples aos mais complexos.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>
              <Check className="w-5 h-5 text-[#5BC0DE] mt-1" />
            </span>
            <span>Agendamento de consultas diretamente pelo agente de IA.</span>
          </li>
          <li className="flex items-start gap-2">
            <span>
              <Check className="w-5 h-5 text-[#5BC0DE] mt-1" />
            </span>
            <span>Registro e acompanhamento em tempo real.</span>
          </li>
          <li className="flex items-start gap-2">
            <span>
              <Check className="w-5 h-5 text-[#5BC0DE] mt-1" />
            </span>
            <span>
              Integração com ferramentas como WhatsApp, Messenger e e-mail.
            </span>
          </li>
        </ul>
        <Button
          onClick={() => setModalOpen(true)}
          size="lg"
          className="bg-[#5BC0DE] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#060E3D] transition"
        >
          Experimente agora
        </Button>
        <ModalAgendar open={modalOpen} onOpenChange={setModalOpen} />
      </div>
    </div>
  );
}
