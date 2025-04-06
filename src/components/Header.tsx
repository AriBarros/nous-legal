import {Button} from "@/components/ui/button.tsx";

export function Header() {
    return (
        <header className="max-w-7xl mx-auto mt-6 px-6 py-4 shadow-sm border rounded-xl flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
                {/* Logo Placeholder */}
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">
                    LOGO
                </div>
                <span className="text-xl font-bold">Nous Legal</span>
            </div>

            <nav className="flex items-center gap-10 text-md font-medium">
                <a href="#" className="hover:underline">Benefícios</a>
                <a href="#" className="hover:underline">Planos e Preços</a>
                <a href="#" className="hover:underline">Como Funciona</a>
                <a href="#" className="text-blue-600 hover:underline">Entrar</a>
                <Button className="bg-blue-600 text-md text-white hover:bg-blue-700 rounded-lg">
                    Cadastre-se
                </Button>
            </nav>
        </header>
    );
};