import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { carouselData } from '@/components/banner/banner-data';
import { useState } from 'react';
import { ModalAgendar } from '@/components/modais/ModalAgendar.tsx';

export function Banner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="w-full px-4 py-20 text-center max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#060E3D] leading-tight mb-6">
          Automatize sua rotina jurídica com geração de peças e gestão
          documental integrada
        </h1>
        <p className="text-base sm:text-xl text-gray-600 mb-10 mt-10 sm:mt-20 max-w-6xl mx-auto">
          Transforme documentos em estratégia. Nossa IA organiza as informações
          dos seus casos, gera análises e insights valiosos e automatiza a
          criação de peças, permitindo que você foque no que realmente importa.
        </p>
        <Button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 bg-[#5BC0DE] text-white py-3 sm:py-4 px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#060E3D] transition"
        >
          Agende uma demonstração <ArrowUpRight size={16} />
        </Button>
        <ModalAgendar open={modalOpen} onOpenChange={setModalOpen} />
      </section>

      <div className="mt-16 sm:mt-32 text-left max-w-4xl mx-auto px-4 sm:px-0">
        <div className="relative w-full flex items-center justify-center">
          <div className="w-full shadow-lg">
            <Carousel className="w-full">
              <CarouselPrevious
                className="
                  absolute left-2 sm:left-[-3.5rem]
                  cursor-pointer
                  top-1/2 -translate-y-1/2
                  z-10 bg-[#5BC0DE] text-white border-none shadow p-2 rounded-full
                  hover:bg-[#060E3D] hover:text-[#FFFFFF]
                "
              />
              <CarouselContent>
                {carouselData.map((slide, idx) => (
                  <CarouselItem key={idx}>
                    <div className="relative flex flex-col items-center justify-center">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="w-full h-[70vh] max-h-[900px] object-cover"
                      />
                      <div className="absolute bottom-4 left-0 right-0 px-6">
                        <div className="bg-white/20 backdrop-blur-sm rounded-md px-3 py-2 mx-4">
                          <h3 className="text-xl sm:text-2xl font-bold text-white text-center drop-shadow">
                            {slide.title}
                          </h3>
                          <p className="text-gray-100 text-base sm:text-lg text-center drop-shadow">
                            {slide.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext
                className="
                  absolute right-2 sm:right-[-3.5rem]
                  cursor-pointer
                  top-1/2 -translate-y-1/2
                  z-10 bg-[#5BC0DE] text-white border-none shadow p-2 rounded-full
                  hover:bg-[#060E3D] hover:text-[#FFFFFF]
                "
              />
            </Carousel>
          </div>
        </div>
        <div>
          <p className="text-base sm:text-lg font-medium text-gray-500 mb-2 text-center sm:text-left mt-8">
            De advogados, para advogados
          </p>
          <p className="text-lg sm:text-2xl font-semibold text-[#060E3D] leading-snug text-justify">
            Centralize a gestão de clientes, casos e documentos. Automatize sua
            rotina, da coleta de dados à geração de peças, em um ambiente seguro
            e em conformidade com a LGPD.
          </p>
        </div>
      </div>
    </>
  );
}
