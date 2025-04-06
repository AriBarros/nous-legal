import { ArrowUpRight } from 'lucide-react';
import {Button} from "@/components/ui/button.tsx";

export function Banner() {
    return (
        <>
            <section className="w-full px-4 py-20 text-center max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                    Automatize sua rotina jurídica com geração
                    de peças e gestão documental integrada
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-10 mt-20 max-w-3xl mx-auto">
                    Com o Nous Legal, você gera peças jurídicas personalizadas e organiza seus documentos
                    diretamente na sua plataforma de gestão, de forma prática, segura e integrada.
                </p>
                <Button
                    className="inline-flex items-center gap-2 bg-blue-600 text-white py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition">
                    Agende uma demonstração <ArrowUpRight size={16}/>
                </Button>
            </section>

            <div className="mt-32 text-left max-w-4xl mx-auto px-2 sm:px-0">
                <p className="text-lg font-medium text-gray-500 mb-2">
                    De advogados, para advogados
                </p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug">
                    O Nous Legal oferece tudo o que você precisa para gerenciar<br/>
                    seu escritório de forma eficiente e segura. Organize clientes,<br/>
                    processos, prazos, documentos e pagamentos em um único<br/>
                    lugar, com total conformidade à LGPD.
                </p>
            </div>
        </>
    );
}
