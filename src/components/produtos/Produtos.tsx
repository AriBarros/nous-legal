import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { produtos } from '@/components/produtos/produtos-data.ts';
import { ModalAgendar } from '@/components/modais/ModalAgendar.tsx';
import { useState } from 'react';

export function Produtos() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="px-4 py-16 max-w-7xl mx-auto overflow-x-hidden">
      <h2 className="text-3xl font-bold text-[#060E3D] mb-12 text-center">
        Soluções Inteligentes para Advogados
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {produtos.map((produto, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg overflow-hidden p-0"
          >
            <img
              src={produto.imagem}
              alt={produto.titulo}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <CardHeader className="pb-0">
              <CardTitle className="text-xl font-semibold text-[#0d3041]">
                {produto.titulo}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {produto.descricao}
              </p>
              <Button
                onClick={() => setModalOpen(true)}
                className="w-full bg-[#5BC0DE] hover:bg-[#060E3D] text-white text-sm font-medium rounded-xl transition-colors duration-300 mb-10"
              >
                Saiba mais
              </Button>
              <ModalAgendar open={modalOpen} onOpenChange={setModalOpen} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
