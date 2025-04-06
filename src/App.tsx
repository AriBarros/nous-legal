import './index.css';
import { Header } from '@/components/Header.tsx';
import { Banner } from '@/components/Banner.tsx';
import { AtendimentoJuridico } from '@/components/AtendimentoJuridico.tsx';
import { PlanosSection } from '@/components/planos/PlanosSection.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Comentarios } from '@/components/comentarios/Comentarios.tsx';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AtendimentoJuridico />
      <PlanosSection />
      <Comentarios />
      <Footer />
    </>
  );
}

export default App;
