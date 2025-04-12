import './index.css';
import { Header } from 'src/components/Header.tsx';
import { Banner } from 'src/components/Banner.tsx';
import { AtendimentoJuridico } from 'src/components/AtendimentoJuridico.tsx';
import { Planos } from 'src/components/planos/Planos.tsx';
import { Footer } from 'src/components/Footer.tsx';
import { Comentarios } from 'src/components/comentarios/Comentarios.tsx';
import { Motivos } from 'src/components/motivos/Motivos.tsx';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AtendimentoJuridico />
      <Motivos />
      <Planos />
      <Comentarios />
      <Footer />
    </>
  );
}

export default App;
