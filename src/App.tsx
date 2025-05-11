import './index.css';
import { Header } from '@/components/Header.tsx';
import { Banner } from '@/components/Banner.tsx';
import { AtendimentoJuridico } from '@/components/AtendimentoJuridico.tsx';
import { Planos } from '@/components/planos/Planos.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Comentarios } from '@/components/comentarios/Comentarios.tsx';
import { Motivos } from '@/components/motivos/Motivos.tsx';
import Produtos from '@/components/produtos/Produtos.tsx';

function App() {
  return (
    <>
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

export default App;
