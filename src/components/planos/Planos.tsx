import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { plans } from './planos-data';
import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { ModalAgendar } from '@/components/modais/ModalAgendar.tsx';
import { ModalTermosLicenca } from '@/components/modais/ModalTermosLicenca.tsx';

export function Planos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number | null>(null);

  function handleButtonClick(index: number) {
    const plan = plans[index];
    
    // Se for o plano beta (gratuito), abre o modal de termos
    if (plan.isBeta && plan.price === 'Gratuito') {
      setTermsModalOpen(true);
      return;
    }
    
    setSelectedPlanIndex(index);
    setModalOpen(true);
  }

  return (
    <section
      id="plano"
      className="bg-[#F3F5F7] py-20 px-4 md:px-20 overflow-x-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#060E3D] mb-12">
        Veja todos os nossos <br />
        <span className="text-[#5BC0DE]">Planos e Preços</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`group relative flex flex-col justify-between min-w-[320px] max-w-[400px] mx-auto p-6 rounded-2xl transition-all duration-300 border-2 border-transparent hover:border-[#5BC0DE] hover:shadow-md ${plan.highlight ? 'ring-2 ring-[#5BC0DE] ring-opacity-50' : ''}`}
          >
            {plan.isBeta && (
              <div className="absolute -top-3 -right-3">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  BETA
                </span>
              </div>
            )}
            {plan.earlyAccess && (
              <div className="absolute -top-3 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  ACESSO ANTECIPADO
                </span>
              </div>
            )}
            <div>
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {plan.title}
                </CardTitle>
              <CardDescription
                className={`flex flex-col w-full ${
                  plan.promoPrice
                    ? 'items-start mt-2'
                    : 'items-center justify-center min-h-[100px] py-2'
                }`}
              >
                {plan.promoPrice ? (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      {plan.price}
                    </span>
                    <span className="text-4xl font-extrabold text-[#5BC0DE]">
                      {plan.promoPrice}
                    </span>
                    <span className="text-xs font-semibold text-[#5BC0DE] opacity-80 mt-5">
                      {plan.promoMsg}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-extrabold text-[#5BC0DE]">
                    {plan.price}
                  </span>
                )}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 p-0 mt-5">
              {plan.features.map((feature, i) => {
                const isUnavailable = feature.startsWith('INDISPONÍVEL:');
                const displayText = isUnavailable ? feature.replace('INDISPONÍVEL: ', '') : feature;
                
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-base text-gray-700"
                  >
                    {isUnavailable ? (
                      <X
                        className="w-5 h-5 min-w-[20px] transition-colors duration-300 text-red-400 group-hover:text-red-500"
                      />
                    ) : (
                      <CheckCircle
                        className="w-5 h-5 min-w-[20px] transition-colors duration-300 text-gray-400 group-hover:text-[#5BC0DE]"
                      />
                    )}
                    <span className={isUnavailable ? 'text-gray-500' : ''}>{displayText}</span>
                  </div>
                );
              })}
            </CardContent>
          </div>

          <CardFooter className="mt-6 p-0">
            <Button
              onClick={() => handleButtonClick(index)}
              className="w-full py-2 text-sm font-medium transition-colors duration-200 bg-[#5BC0DE] hover:bg-[#060E3D] text-white"
            >
              {plan.isBeta && plan.price === 'Gratuito' 
                ? 'Acessar Plataforma' 
                : 'Contrate agora'}
            </Button>
          </CardFooter>
        </Card>
        ))}
      </div>
      <ModalAgendar
        open={modalOpen}
        onOpenChange={setModalOpen}
        descricaoInicial={`Estou interessado no plano: ${selectedPlanIndex !== null ? plans[selectedPlanIndex].title : 'um dos planos'}. Gostaria de saber mais detalhes e agendar uma demonstração.`}
      />
      <ModalTermosLicenca
        open={termsModalOpen}
        onOpenChange={setTermsModalOpen}
        onAccept={() => {
          window.open('https://nous-escritorio-online.web.app/dashboard', '_blank');
        }}
      />
    </section>
  );
}
