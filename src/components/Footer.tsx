import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-900 px-6 md:px-24 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-y-12 gap-x-20">
        <div className="max-w-sm">
          <div className="mb-5">
            <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-base font-bold">
              LOGO
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
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Benefícios
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Planos e Preços
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Depoimentos
              </a>
            </li>
          </ul>
        </div>

        <div className="max-w-xs">
          <h4 className="text-xl font-semibold mb-5">Contato</h4>
          <p className="text-base leading-relaxed mb-3">
            Rua Hugo Correa Paes, 660 – Ato. 1203, Gruta de Lourdes - Maceió
          </p>
          <div className="flex items-center gap-2 text-base mb-2">
            <MdEmail className="w-5 h-5" />
            <span>Hello@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-base">
            <MdPhone className="w-5 h-5" />
            <span>+ (55) 82 99999–9999</span>
          </div>
        </div>

        <div className="min-w-[160px] md:text-left text-center w-full md:w-auto">
          <h4 className="text-xl font-semibold mb-5">Siga-nos</h4>
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-900 hover:text-blue-600 hover:border-blue-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-900 hover:text-pink-600 hover:border-pink-600 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-base">Sua jornada começa aqui</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-base text-gray-600 font-semibold">
        ©2025 Nous Legal® Todos direitos reservados.
      </div>
    </footer>
  );
}
