import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';

export function AtendimentoJuridico() {
  return (
    <div className="bg-[#F3F5F7] py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 mt-40">
      <div className="relative max-w-md w-full">
        {/* TODO adicionar imagem do WhatsApp */}
        <div className="w-full h-96 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x600"
            alt="Simulação do WhatsApp"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute left-full top-20 ml-4 flex flex-col gap-2">
          <div className="bg-white shadow-md rounded-lg px-3 py-2 flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <span className="text-sm font-medium">
              Integração com Messenger
            </span>
          </div>
          <div className="bg-white shadow-md rounded-lg px-3 py-2 flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <span className="text-sm font-medium">Integração com e-mail</span>
          </div>
        </div>
      </div>

      {/* Texto e chamada para ação */}
      <div className="max-w-xl text-center md:text-left">
        <p className="text-lg text-gray-500 mb-1">Integração completa</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Centralize e automatize o atendimento jurídico com o seu assistente
          virtual
        </h2>
        <p className="text-gray-600 mb-6">
          Ofereça respostas rápidas e precisas para seus clientes e otimize o
          tempo da sua equipe. Automatize tarefas repetitivas e foque no que
          realmente importa: as estratégias do seu caso.
        </p>
        <ul className="text-gray-700 space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <Check className="w-8 h-8 text-blue-600 mt-1" />
            Atendimento automatizado 24/7 para dúvidas frequentes.
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-8 h-8 text-blue-600 mt-1" />
            Agendamento de consultas diretamente pelo chatbot.
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-8 h-8 text-blue-600 mt-1" />
            Registro e acompanhamento de solicitações jurídicas em tempo real.
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-8 h-8 text-blue-600 mt-1" />
            Integração com ferramentas como WhatsApp, Messenger e e-mail.
          </li>
        </ul>
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
          Experimente agora
        </Button>
      </div>
    </div>
  );
}
