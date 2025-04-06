import { useState } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="mx-4 sm:mx-8 lg:mx-auto mt-6 px-4 sm:px-6 lg:px-8 py-4 shadow-sm border rounded-xl bg-white max-w-7xl">
      <div className="flex items-center justify-between">
        {/* Logo + Nome */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">
            LOGO
          </div>
          <span className="text-xl font-bold">Nous Legal</span>
        </div>

        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </button>
        </div>

        <nav className="hidden sm:flex items-center gap-10 text-md font-medium">
          <a href="#" className="hover:underline">
            Benefícios
          </a>
          <a href="#" className="hover:underline">
            Planos e Preços
          </a>
          <a href="#" className="hover:underline">
            Como Funciona
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Entrar
          </a>
          <Button className="bg-blue-600 text-md text-white hover:bg-blue-700 rounded-lg">
            Cadastre-se
          </Button>
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
            <nav className="flex flex-col gap-4 text-md font-medium">
              <a href="#" className="hover:underline">
                Benefícios
              </a>
              <a href="#" className="hover:underline">
                Planos e Preços
              </a>
              <a href="#" className="hover:underline">
                Como Funciona
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Entrar
              </a>
              <Button className="bg-blue-600 text-md text-white hover:bg-blue-700 rounded-lg w-full">
                Cadastre-se
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
