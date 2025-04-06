import { ArrowUpRight } from 'lucide-react';

export function Banner() {
    return (
        <section className="w-full px-6 py-20 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Automatize sua rotina jurídica com geração <br className="hidden sm:block" />
                de peças e gestão documental integrada
            </h1>
            <p className="text-lg text-gray-600 mb-8">
                Com o Nous Legal, você gera peças jurídicas personalizadas e organiza seus documentos
                diretamente na sua plataforma de gestão, de forma prática, segura e integrada
            </p>

            <a
                href="#"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
            >
                Agende uma demonstração <ArrowUpRight size={16} />
            </a>
        </section>
    );
}
