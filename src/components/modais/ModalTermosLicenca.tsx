import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

interface ModalTermosLicencaProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
}

export function ModalTermosLicenca({ open, onOpenChange, onAccept }: ModalTermosLicencaProps) {
  const [agreed, setAgreed] = useState(false);

  const handleAccept = () => {
    if (agreed) {
      onAccept();
      onOpenChange(false);
    }
  };

  const handleClose = () => {
    setAgreed(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#060E3D]">
            Termo de Licenciamento de Software para Beta Testers – NOUS LEGAL
          </DialogTitle>
          <DialogDescription>
            Por favor, leia atentamente os termos e condições abaixo antes de aceitar.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 text-sm leading-relaxed max-h-96 overflow-y-auto border rounded p-4">
          <div>
            <p className="mb-4">
              Este Termo de Licenciamento ("Termo") é celebrado entre a <strong>NOUS LEGAL INOVA SIMPLES (I.S.)</strong>, 
              pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 58.223.418/0001-48, doravante denominada 
              LICENCIANTE, e você, doravante denominado(a) TESTADOR(A) BETA.
            </p>
            
            <p className="mb-4">
              Ao se cadastrar e acessar o software NOUS LEGAL em sua versão Beta, o(a) TESTADOR(A) BETA declara ter lido, 
              compreendido e concordado com os termos e condições aqui dispostos.
            </p>

            <h3 className="font-bold text-base mb-2">CLÁUSULA 1ª – DO OBJETO</h3>
            <p className="mb-2">
              1.1. O presente Termo tem por objeto a concessão, pela LICENCIANTE ao(à) TESTADOR(A) BETA, de uma licença 
              de uso gratuita, pessoal, intransferível e não exclusiva do software NOUS LEGAL ("Software"), em sua versão 
              de testes ("Beta").
            </p>
            <p className="mb-4">
              1.2. O(A) TESTADOR(A) BETA reconhece que o Software está em fase de desenvolvimento e, portanto, é uma versão 
              pré-lançamento. Como tal, pode conter erros, bugs e instabilidades, além de poder sofrer alterações 
              significativas sem aviso prévio.
            </p>

            <h3 className="font-bold text-base mb-2">CLÁUSULA 2ª – DA GRATUIDADE E CONTRAPARTIDA</h3>
            <p className="mb-2">
              2.1. A licença de uso durante a fase Beta será concedida de forma totalmente gratuita, não havendo qualquer 
              cobrança de mensalidade ou taxa de adesão.
            </p>
            <p className="mb-4">
              2.2. Em contrapartida pela gratuidade, o(a) TESTADOR(A) BETA se compromete a utilizar o Software e a fornecer 
              feedback construtivo, relatando bugs, erros, dificuldades de uso e sugestões de melhoria através dos canais 
              oficiais de suporte disponibilizados pela LICENCIANTE.
            </p>

            <h3 className="font-bold text-base mb-2">CLÁUSULA 3ª – DO PRAZO E DA RESCISÃO</h3>
            <p className="mb-2">
              3.1. Este Termo vigerá por prazo indeterminado, durante todo o período em que a LICENCIANTE mantiver o 
              programa de testes Beta ativo.
            </p>
            <p className="mb-2">
              3.2. A LICENCIANTE reserva-se o direito de, a qualquer momento e a seu exclusivo critério, modificar, 
              suspender ou encerrar o programa Beta e, consequentemente, rescindir este Termo e o acesso do(a) TESTADOR(A) 
              BETA ao Software, mediante simples comunicação por e-mail.
            </p>
            <p className="mb-2">
              3.3. O(A) TESTADOR(A) BETA poderá, a qualquer tempo, solicitar o seu desligamento do programa de testes e a 
              rescisão deste Termo, sem qualquer ônus.
            </p>
            <p className="mb-4">
              3.4. Com a rescisão, o acesso ao Software será imediatamente interrompido e os dados da conta poderão ser 
              excluídos dos servidores, conforme política de retenção de dados da LICENCIANTE.
            </p>

            <h3 className="font-bold text-base mb-2">CLÁUSULA 4ª – DAS OBRIGAÇÕES DO(A) TESTADOR(A) BETA</h3>
            <p className="mb-2">
              4.1. Manter em absoluto sigilo todas as informações relacionadas ao Software Beta, incluindo, mas não se 
              limitando a: suas funcionalidades, aparência, desempenho, documentação e quaisquer outros dados não públicos. 
              É expressamente vedada a divulgação de imagens, vídeos, textos ou qualquer impressão sobre o Software em 
              redes sociais, blogs, imprensa ou qualquer outro meio, sem a prévia e expressa autorização da LICENCIANTE.
            </p>
            <p className="mb-2">
              4.2. Não realizar engenharia reversa, descompilar ou tentar de qualquer forma obter o código-fonte do Software.
            </p>
            <p className="mb-2">
              4.3. Responsabilizar-se pela veracidade e legalidade de todos os dados e informações inseridos no Software, 
              bem como pela conferência dos documentos gerados pela plataforma.
            </p>
            <p className="mb-4">
              4.4. Manter seus equipamentos e ambiente de acesso seguros, livres de vírus e malwares.
            </p>

            <h3 className="font-bold text-base mb-2">CLÁUSULA 5ª – DA EXCLUSÃO DE GARANTIAS E LIMITAÇÃO DE RESPONSABILIDADE</h3>
            <p className="mb-2">
              5.1. O SOFTWARE BETA É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA", SEM QUALQUER GARANTIA, EXPRESSA OU IMPLÍCITA. 
              A LICENCIANTE não garante que o Software atenderá às necessidades do(a) TESTADOR(A) BETA ou que sua operação 
              será ininterrupta ou livre de erros.
            </p>
            <p className="mb-4">
              5.2. A LICENCIANTE não se responsabilizará por quaisquer danos diretos ou indiretos, incluindo perda de dados, 
              lucros cessantes, interrupção de negócios ou quaisquer outras perdas decorrentes do uso ou da incapacidade de 
              uso do Software Beta.
            </p>

            <h3 className="font-bold text-base mb-2">CLÁUSULA 6ª – DA PROPRIEDADE INTELECTUAL E DO FEEDBACK</h3>
            <p className="mb-2">
              6.1. O Software é de titularidade exclusiva da LICENCIANTE, protegido pelas Leis 9.609/98 e 9.610/98. 
              Este Termo não confere ao(à) TESTADOR(A) BETA qualquer direito de propriedade sobre o Software.
            </p>
            <p className="mb-4">
              6.2. O(A) TESTADOR(A) BETA concorda que todo o feedback, sugestões e ideias fornecidas à LICENCIANTE poderão 
              ser por ela utilizados livremente, sem qualquer obrigação de confidencialidade, atribuição ou compensação 
              financeira, para aprimorar o Software e outros produtos.
            </p>

            <h3 className="font-bold text-base mb-2">CLÁUSULA 7ª – DA PROTEÇÃO DE DADOS (LGPD)</h3>
            <p className="mb-2">
              7.1. Ambas as partes se comprometem a cumprir a Lei Geral de Proteção de Dados (LGPD). O(A) TESTADOR(A) BETA 
              é o controlador dos dados pessoais que inserir na plataforma, sendo sua a responsabilidade pelo tratamento 
              lícito dessas informações.
            </p>
            <p className="mb-4">
              7.2. A LICENCIANTE, na posição de operadora, compromete-se a adotar as medidas de segurança técnicas e 
              organizacionais para proteger os dados armazenados contra acessos não autorizados e incidentes. A LICENCIANTE 
              não se responsabiliza por incidentes decorrentes de culpa exclusiva do(a) TESTADOR(A) BETA.
            </p>

            <h3 className="font-bold text-base mb-2">CLÁUSULA 8ª – DO FORO</h3>
            <p className="mb-4">
              8.1. Fica eleito o Foro da cidade de Maceió-AL para dirimir quaisquer questões oriundas deste Termo, com 
              renúncia a qualquer outro, por mais privilegiado que seja.
            </p>

            <p className="font-medium">
              Ao clicar em "Aceito" ou ao acessar o Software Beta, o(a) TESTADOR(A) BETA manifesta sua concordância 
              integral com o presente Termo.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <Checkbox
            id="agreement"
            checked={agreed}
            onCheckedChange={setAgreed}
          />
          <label
            htmlFor="agreement"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Li e concordo com o Termo de Licenciamento do Software para Beta Testers. Entendo que esta é uma versão de 
            testes, que pode conter instabilidades, e que o acesso é concedido por tempo limitado para fins de avaliação 
            e feedback.
          </label>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            onClick={handleAccept}
            disabled={!agreed}
            className="bg-[#5BC0DE] hover:bg-[#060E3D] text-white"
          >
            Aceitar e Acessar Plataforma
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}