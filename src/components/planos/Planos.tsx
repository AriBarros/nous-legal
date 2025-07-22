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
import { CheckCircle } from 'lucide-react';
import { ModalAgendar } from '@/components/modais/ModalAgendar.tsx';

export function Planos() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  function handleSelect(index: number) {
    setSelectedIndex(index);
    setModalOpen(true);
  }

  const plan = plans.find((p) => p.highlight);

  if (!plan) return null;

  return (
    <section
      id="plano"
      className="bg-[#F3F5F7] py-20 px-4 md:px-20 overflow-x-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#060E3D] mb-12">
        Veja todos os nossos <br />
        <span className="text-[#5BC0DE]">Planos e Preços</span>
      </h2>

      <div className="flex justify-center w-full">
        <Card
          onClick={() => handleSelect(0)}
          className={`flex flex-col justify-between min-w-[320px] max-w-[400px] mx-auto p-6 rounded-2xl transition-all duration-300 border-2 cursor-pointer ${
            selectedIndex === 0
              ? 'border-[#5BC0DE] shadow-md'
              : 'border-transparent hover:border-gray-300'
          }`}
        >
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
              {plan.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-base text-gray-700"
                >
                  <CheckCircle
                    className={`w-5 h-5 min-w-[20px] ${
                      selectedIndex === 0 ? 'text-[#5BC0DE]' : 'text-gray-400'
                    }`}
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </CardContent>
          </div>

          <CardFooter className="mt-6 p-0">
            <Button
              onClick={() => handleSelect(0)}
              className={`w-full py-2 text-sm font-medium transition-colors duration-200 ${
                selectedIndex === 0
                  ? 'bg-[#5BC0DE] hover:bg-[#060E3D] text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {selectedIndex === 0 ? 'Selecionado' : 'Escolher plano'}
            </Button>
          </CardFooter>
        </Card>
      </div>
      <ModalAgendar
        open={modalOpen}
        onOpenChange={setModalOpen}
        descricaoInicial={`Estou interessado no plano: ${plan.title}. Gostaria de saber mais detalhes e agendar uma demonstração.`}
      />
    </section>
  );
}
