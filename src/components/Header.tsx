import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '@/assets/logo/nous.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="mx-4 sm:mx-8 lg:mx-auto mt-6 px-4 sm:px-6 lg:px-8 py-4 shadow-sm border rounded-xl bg-white max-w-7xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
            <img
              src={logo}
              alt="Nous Legal Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <span className="text-xl font-bold">Nous Legal</span>
        </div>

        <div className="sm:hidden flex items-center h-full">
          <button
            className="flex items-center justify-center h-12 w-12"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </button>
        </div>

        <nav className="hidden sm:flex items-center gap-10 text-md font-medium">
          <button
            onClick={() => scrollToSection('motivo')}
            className="hover:underline cursor-pointer"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection('atendimento')}
            className="hover:underline cursor-pointer"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollToSection('plano')}
            className="hover:underline cursor-pointer"
          >
            Planos e Preços
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden mt-4 px-4 overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-4 text-md font-medium">
              <button
                onClick={() => scrollToSection('motivo')}
                className="hover:underline"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection('atendimento')}
                className="hover:underline"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection('plano')}
                className="hover:underline"
              >
                Planos e Preços
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
