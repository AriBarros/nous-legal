import { Header } from '@/components/Header';
import { Banner } from '@/components/banner/Banner.tsx';
import { AtendimentoJuridico } from '@/components/AtendimentoJuridico';
import { Motivos } from '@/components/motivos/Motivos';
import { Planos } from '@/components/planos/Planos';
import { Comentarios } from '@/components/comentarios/Comentarios';
import { Footer } from '@/components/Footer';
import { Produtos } from '@/components/produtos/Produtos';
import { Toaster } from 'sonner';

export function HomeLayout() {
  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <Header />
      <Banner />
      <AtendimentoJuridico />
      <Produtos />
      <Motivos />
      <Planos />
      <Comentarios />
      <Footer />
    </>
  );
}
