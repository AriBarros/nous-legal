// import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
// import { MdEmail, MdPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';

import logo from '@/assets/logo/nous-legal.png';

export function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-900 px-6 md:px-24 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-y-12 gap-x-20 text-center md:text-left">
        <div className="max-w-sm">
          <div className="mb-5 flex items-center justify-center md:items-start md:justify-start">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <img
                src={logo}
                alt="Nous Legal Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3">Nous Legal</h3>
          <p className="text-base leading-relaxed">
            Nous Legal é uma solução tecnológica inovadora para o setor
            jurídico, focada na automação e eficiência de processos.
          </p>
        </div>

        <div className="min-w-[150px]">
          <h4 className="text-xl font-semibold mb-5">Páginas</h4>
          <ul className="space-y-3 text-base">
            <li>
              <button
                onClick={() => scrollToSection('motivo')}
                className="hover:underline cursor-pointer"
              >
                Benefícios
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('plano')}
                className="hover:underline cursor-pointer"
              >
                Planos e Preços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('comentarios')}
                className="hover:underline cursor-pointer"
              >
                Depoimentos
              </button>
            </li>
          </ul>
        </div>

        <div className="max-w-xs flex gap-5 flex-col">
          <h4 className="text-xl font-semibold">Contato</h4>
          <p className="text-base">
            Ficou com alguma dúvida? Entre em contato conosco!
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-base mb-2">
            <MdEmail className="w-5 h-5" />
            <span>contato@nouslegal.com.br</span>
          </div>
        </div>

        {/*<div className="min-w-[160px] w-full md:w-auto">*/}
        {/*  <h4 className="text-xl font-semibold mb-5">Siga-nos</h4>*/}
        {/*  <div className="flex justify-center md:justify-start gap-4 mb-4">*/}
        {/*    <a*/}
        {/*      href="#"*/}
        {/*      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-900 hover:text-blue-600 hover:border-blue-600 transition"*/}
        {/*      aria-label="LinkedIn"*/}
        {/*    >*/}
        {/*      <FaLinkedinIn className="w-5 h-5"/>*/}
        {/*    </a>*/}
        {/*    <a*/}
        {/*      href="#"*/}
        {/*      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-900 hover:text-pink-600 hover:border-pink-600 transition"*/}
        {/*      aria-label="Instagram"*/}
        {/*    >*/}
        {/*      <FaInstagram className="w-5 h-5"/>*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*  <p className="text-base">Sua jornada começa aqui</p>*/}
        {/*</div>*/}
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-base text-gray-600 font-semibold">
        ©2025 Nous Legal® Todos direitos reservados.
      </div>
    </footer>
  );
}
