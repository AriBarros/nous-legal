import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cases } from './cases-data';
import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

export function Cases() {
  return (
    <section
      id="cases"
      className="bg-white py-20 px-4 md:px-20 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg font-medium text-gray-600 mb-2">
            Resultados Reais
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#060E3D] mb-4">
            Cases de <span className="text-[#5BC0DE]">Sucesso</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja como escritórios e advogados estão transformando sua prática jurídica com o{' '}
            <span className="text-[#5BC0DE] font-bold">NOUS LEGAL</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseItem) => (
            <Card
              key={caseItem.id}
              className="group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#5BC0DE] hover:shadow-xl"
            >

              <div>
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#5BC0DE]/10 flex items-center justify-center text-[#5BC0DE] group-hover:bg-[#5BC0DE] group-hover:text-white transition-colors duration-300">
                      {caseItem.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-[#060E3D]">
                        {caseItem.titulo}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                    {caseItem.subtitulo}
                  </p>
                </CardHeader>

                <CardContent className="space-y-5 p-0">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 min-w-[20px] text-orange-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          O Problema:
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {caseItem.problema}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 min-w-[20px] text-blue-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          A Solução:
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {caseItem.solucao}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 min-w-[20px] text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          O Resultado:
                        </p>
                        <p className="text-sm text-[#5BC0DE] font-medium leading-relaxed">
                          {caseItem.resultado}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            <span className="font-semibold text-[#060E3D]">
              68% dos profissionais jurídicos
            </span>{' '}
            sentem que o setor está atrasado na adoção de IA.{' '}
            <span className="text-[#5BC0DE] font-semibold">
              Não fique para trás. Transforme seu escritório agora!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
