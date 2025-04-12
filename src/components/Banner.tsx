import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';

export function Banner() {
  return (
    <>
      <section className="w-full px-4 py-20 text-center max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Automatize sua rotina jurídica com geração de peças e gestão
          documental integrada
        </h1>
        <p className="text-base sm:text-xl text-gray-600 mb-10 mt-10 sm:mt-20 max-w-6xl mx-auto">
          Com o Nous Legal, você gera peças jurídicas personalizadas e organiza
          seus documentos diretamente na sua plataforma de gestão, de forma
          prática, segura e integrada.
        </p>
        <Button className="inline-flex items-center gap-2 bg-blue-600 text-white py-3 sm:py-4 px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition">
          Agende uma demonstração <ArrowUpRight size={16} />
        </Button>
      </section>

      <div className="mt-16 sm:mt-32 text-left max-w-4xl mx-auto px-4 sm:px-0">
        <div className="w-full flex justify-center mb-6">
          <img
            src="src/assets/images/help.png"
            alt="Ajuda"
            className="w-full sm:w-3/4 object-contain"
          />
        </div>
        <p className="text-base sm:text-lg font-medium text-gray-500 mb-2 text-center sm:text-left">
          De advogados, para advogados
        </p>
        <p className="text-lg sm:text-2xl font-semibold text-gray-900 leading-snug text-justify">
          O Nous Legal oferece tudo o que você precisa para gerenciar seu
          escritório de forma eficiente e segura. Organize clientes, processos,
          prazos, documentos e pagamentos em um único lugar, com total
          conformidade à LGPD.
        </p>
      </div>
    </>
  );
}
