import { useState, ChangeEvent, FormEvent, FocusEvent, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, FileText } from 'lucide-react';
import logo from '@/assets/logo/nous.png';
import { isValidEmail, maskPhone } from '@/utils';
import { toast } from 'sonner';

type ModalAgendarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  descricaoInicial?: string;
};

export function ModalAgendar({
  open,
  onOpenChange,
  descricaoInicial = '',
}: ModalAgendarProps) {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    descricao: descricaoInicial,
  });
  const [touched, setTouched] = useState({
    nome: false,
    email: false,
    telefone: false,
    descricao: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setForm((prev) => ({
        ...prev,
        descricao: descricaoInicial || '',
      }));
    }
    if (!open) {
      setTimeout(() => {
        setForm({
          nome: '',
          email: '',
          telefone: '',
          descricao: '',
        });
        setTouched({
          nome: false,
          email: false,
          telefone: false,
          descricao: false,
        });
      }, 100);
    }
  }, [open, descricaoInicial]);

  const errors = {
    nome: touched.nome && !form.nome.trim() ? 'Nome é obrigatório' : '',
    email:
      touched.email && !form.email.trim()
        ? 'E-mail é obrigatório'
        : touched.email && !isValidEmail(form.email)
          ? 'E-mail inválido'
          : '',
    telefone:
      touched.telefone && !form.telefone.trim()
        ? 'Telefone é obrigatório'
        : touched.telefone && form.telefone.replace(/\D/g, '').length < 10
          ? 'Telefone inválido'
          : '',
    descricao:
      touched.descricao && !form.descricao.trim()
        ? 'Descrição é obrigatória'
        : '',
  };

  const isValid =
    form.nome.trim() &&
    isValidEmail(form.email) &&
    form.telefone.replace(/\D/g, '').length >= 10 &&
    form.descricao.trim();

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    if (name === 'telefone') {
      setForm((prev) => ({ ...prev, [name]: maskPhone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    if (name === 'email') {
      if (!value.trim() || !isValidEmail(value)) {
        toast.error('Insira um e-mail válido no formato correto.', {
          description: 'E-mail inválido!',
        });
      }
    }
    if (name === 'telefone') {
      setForm((prev) => ({ ...prev, telefone: maskPhone(value) }));
      if (!value.trim() || value.replace(/\D/g, '').length < 10) {
        toast.error('Preencha um telefone válido (com DDD).', {
          description: 'Telefone inválido!',
        });
      }
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({
      nome: true,
      email: true,
      telefone: true,
      descricao: true,
    });

    if (!form.email.trim() || !isValidEmail(form.email)) {
      toast.error('Insira um e-mail válido no formato correto.', {
        description: 'E-mail inválido!',
      });
      return;
    }
    if (!form.telefone.trim() || form.telefone.replace(/\D/g, '').length < 10) {
      toast.error('Preencha um telefone válido (com DDD).', {
        description: 'Telefone inválido!',
      });
      return;
    }
    if (!isValid) return;

    setLoading(true);
    try {
      const response = await fetch(
        'https://webhookn8n.transformetech.com/webhook/be70646f-602d-4aeb-a1d0-1831632e4e74',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        },
      );
      if (!response.ok) throw new Error('Erro ao enviar');

      toast.success('Seu contato foi enviado com sucesso!', {
        description: 'Em breve retornaremos.',
        duration: 3000,
      });

      setTimeout(() => {
        onOpenChange(false);
        setForm({
          nome: '',
          email: '',
          telefone: '',
          descricao: '',
        });
        setTouched({
          nome: false,
          email: false,
          telefone: false,
          descricao: false,
        });
      }, 900);
    } catch (e) {
      toast.error(
        'Não foi possível enviar o formulário. Tente novamente em instantes!',
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-full
          max-w-[95vw] sm:max-w-md
          mx-auto
          max-h-[90vh] overflow-y-auto
          p-0 bg-gradient-to-br from-[#f8fafc] to-[#e9ecef]
          rounded-3xl shadow-2xl border-0
        "
      >
        <div className="flex flex-col items-center mt-6">
          <div className="bg-white rounded-full shadow-lg mb-3 flex items-center justify-center w-24 h-24 border-4 border-[#5BC0DE]">
            <img
              src={logo}
              alt="Nous Legal Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <DialogHeader className="w-full flex flex-col items-center text-center">
            <DialogTitle className="text-3xl font-extrabold mt-2 mb-1 text-[#060E3D] tracking-tight drop-shadow">
              Fale com a Nous Legal
            </DialogTitle>
            <DialogDescription className="text-gray-500 mb-5 px-2 text-base font-normal">
              <span className="text-red-500 font-bold">*</span> Todos os campos
              são obrigatórios
            </DialogDescription>
          </DialogHeader>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 shadow-lg rounded-2xl p-6 pt-4 mx-3 mb-4 space-y-5 max-h-[70vh] overflow-y-auto"
        >
          <div className="relative">
            <User className="absolute left-3 top-3 text-[#5BC0DE]" size={18} />
            <Input
              name="nome"
              placeholder="Nome *"
              value={form.nome}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              autoFocus
              aria-invalid={!!errors.nome}
              className={`pl-10 rounded-2xl ${errors.nome ? 'border-2 border-red-500 focus:border-red-500 focus:ring-0' : ''}`}
            />
            {errors.nome && (
              <span className="text-red-500 text-xs animate-pulse pl-2">
                {errors.nome}
              </span>
            )}
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-[#5BC0DE]" size={18} />
            <Input
              name="email"
              type="email"
              placeholder="E-mail *"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={!!errors.email}
              className={`pl-10 rounded-2xl ${errors.email ? 'border-2 border-red-500 focus:border-red-500 focus:ring-0' : ''}`}
            />
            {errors.email && (
              <span className="text-red-500 text-xs animate-pulse pl-2">
                {errors.email}
              </span>
            )}
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-[#5BC0DE]" size={18} />
            <Input
              name="telefone"
              placeholder="Telefone *"
              value={form.telefone}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={15}
              required
              aria-invalid={!!errors.telefone}
              className={`pl-10 rounded-2xl ${errors.telefone ? 'border-2 border-red-500 focus:border-red-500 focus:ring-0' : ''}`}
              inputMode="tel"
            />
            {errors.telefone && (
              <span className="text-red-500 text-xs animate-pulse pl-2">
                {errors.telefone}
              </span>
            )}
          </div>
          <div className="relative">
            <FileText
              className="absolute left-3 top-3 text-[#5BC0DE]"
              size={18}
            />
            <Textarea
              name="descricao"
              placeholder="Descreva sua necessidade *"
              value={form.descricao}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={!!errors.descricao}
              className={`pl-10 rounded-2xl resize-y max-h-64 textarea-vertical-only ${errors.descricao ? 'border-2 border-red-500 focus:border-red-500 focus:ring-0' : ''}`}
              rows={4}
            />
            {errors.descricao && (
              <span className="text-red-500 text-xs animate-pulse pl-2">
                {errors.descricao}
              </span>
            )}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="w-full mt-3 h-12 text-base font-semibold rounded-2xl bg-gradient-to-r from-[#5BC0DE] to-[#0B3256] hover:from-[#060E3D] hover:to-[#5BC0DE] shadow-lg transition-all duration-200"
              disabled={!isValid || loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <span className="animate-spin mr-2 h-5 w-5 inline-block border-2 border-white border-t-transparent rounded-full" />
                  Enviando...
                </span>
              ) : (
                'Enviar'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
