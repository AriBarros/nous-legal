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

export function PlanosSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section className="bg-[#F3F5F7] py-20 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Veja todos os nossos <br />
        <span className="text-blue-600">Planos e Preços</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((plan, index) => {
          const isSelected = selectedIndex === index;

          return (
            <Card
              key={index}
              onClick={() => handleSelect(index)}
              className={`flex flex-col justify-between min-h-[500px] p-6 rounded-2xl transition-all duration-300 border-2 cursor-pointer ${
                isSelected
                  ? 'border-blue-600 shadow-md'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {plan.title}
                  </CardTitle>
                  <CardDescription className="text-3xl font-bold text-gray-900 mt-2">
                    {plan.price}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 p-0 mt-20">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-base text-gray-700"
                    >
                      <CheckCircle
                        className={`w-5 h-5 min-w-[20px] ${
                          isSelected ? 'text-blue-600' : 'text-gray-400'
                        }`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </div>

              <CardFooter className="mt-6 p-0">
                <Button
                  onClick={(e) => e.stopPropagation()}
                  className={`w-full py-2 text-sm font-medium transition-colors duration-200 ${
                    isSelected
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  {isSelected ? 'Selecionado' : 'Escolher plano'}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#"
          className="text-sm text-gray-900 font-medium hover:underline"
        >
          Quer um plano personalizado?{' '}
          <span className="text-blue-600">Clique aqui →</span>
        </a>
      </div>
    </section>
  );
}
