import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';

export function AtendimentoJuridico() {
  return (
    <div
      id="atendimento"
      className="bg-[#F3F5F7] py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-x-80 mt-40"
    >
      <div className="relative max-w-md w-full">
        <div className="w-full h-96 shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/assets/images/whatsapp-chat.svg"
            alt="Simulação do WhatsApp"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-xl text-center md:text-left">
        <p className="text-lg text-gray-500 mb-1">Integração completa</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Centralize e automatize o atendimento jurídico com o seu assistente
          virtual
        </h2>
        <p className="text-gray-600 mb-5">
          Ofereça respostas rápidas e precisas para seus clientes e otimize o
          tempo da sua equipe. Automatize tarefas repetitivas e foque no que
          realmente importa: as estratégias do seu caso.
        </p>
        <ul className="text-gray-700 space-y-1.5 mb-6">
          <li className="flex items-start gap-1.5">
            <Check className="w-5 h-5 text-blue-600" />
            Atendimento automatizado 24/7 para dúvidas frequentes.
          </li>
          <li className="flex items-start gap-1.5">
            <Check className="w-5 h-5 text-blue-600" />
            Agendamento de consultas diretamente pelo chatbot.
          </li>
          <li className="flex items-start gap-1.5">
            <Check className="w-5 h-5 text-blue-600" />
            Registro e acompanhamento de solicitações jurídicas em tempo real.
          </li>
          <li className="flex items-start gap-1.5">
            <Check className="w-5 h-5 text-blue-600" />
            Integração com ferramentas como WhatsApp, Messenger e e-mail.
          </li>
        </ul>
        <Button
          size="lg"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
        >
          Experimente agora
        </Button>
      </div>
    </div>
  );
}
