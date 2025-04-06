import './index.css';
import { Header } from '@/components/Header.tsx';
import { Banner } from '@/components/Banner.tsx';
import { AtendimentoJuridico } from '@/components/AtendimentoJuridico.tsx';
import { PlanosSection } from '@/components/planos/PlanosSection.tsx';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AtendimentoJuridico />
      <PlanosSection />
    </>
  );
}

export default App;
