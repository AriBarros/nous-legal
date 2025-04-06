import './index.css';
import { Header } from '@/components/Header.tsx';
import { Banner } from '@/components/Banner.tsx';
import { AtendimentoJuridico } from '@/components/AtendimentoJuridico.tsx';

function App() {
    return (
        <>
            <Header />
            <Banner />
            <AtendimentoJuridico />
        </>
    );
}

export default App;