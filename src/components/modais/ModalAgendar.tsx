import { useState, ChangeEvent, FormEvent } from 'react';
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
import logo from '@/assets/logo/nous.png';
import { isValidEmail, maskPhone } from '@/utils';

type ModalAgendarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: {
    nome: string;
    email: string;
    telefone: string;
    descricao: string;
  }) => void;
  loading: boolean;
};

export function ModalAgendar({
  open,
  onOpenChange,
  onSubmit,
  loading,
}: ModalAgendarProps) {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    descricao: '',
  });
  const [touched, setTouched] = useState(false);

  const errors = {
    nome: touched && !form.nome.trim() ? 'Nome é obrigatório' : '',
    email:
      touched && !form.email.trim()
        ? 'E-mail é obrigatório'
        : touched && !isValidEmail(form.email)
          ? 'E-mail inválido'
          : '',
    telefone:
      touched && !form.telefone.trim()
        ? 'Telefone é obrigatório'
        : touched && form.telefone.replace(/\D/g, '').length < 10
          ? 'Telefone inválido'
          : '',
    descricao:
      touched && !form.descricao.trim() ? 'Descrição é obrigatória' : '',
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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    onSubmit(form);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0">
        <div className="flex flex-col items-center mt-4">
          <div className="bg-white rounded-full shadow mb-2 flex items-center justify-center w-20 h-20">
            <img
              src={logo}
              alt="Nous Legal Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <DialogHeader className="w-full flex flex-col items-center text-center">
            <DialogTitle className="text-2xl font-bold mt-2 mb-1 text-[#060E3D]">
              Entre em contato
            </DialogTitle>
            <DialogDescription className="text-gray-600 mb-3 px-2">
              <span className="text-red-500 font-semibold">*</span> Todos os
              campos são obrigatórios.
            </DialogDescription>
          </DialogHeader>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 px-4 pb-4">
          <div>
            <Input
              name="nome"
              placeholder="Nome *"
              value={form.nome}
              onChange={handleChange}
              required
              autoFocus
              aria-invalid={!!errors.nome}
              className={errors.nome ? 'border-red-500' : ''}
            />
            {errors.nome && (
              <span className="text-red-500 text-xs">{errors.nome}</span>
            )}
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="E-mail *"
              value={form.email}
              onChange={handleChange}
              required
              aria-invalid={!!errors.email}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>
          <div>
            <Input
              name="telefone"
              placeholder="Telefone *"
              value={form.telefone}
              onChange={handleChange}
              maxLength={15}
              required
              aria-invalid={!!errors.telefone}
              className={errors.telefone ? 'border-red-500' : ''}
              inputMode="tel"
            />
            {errors.telefone && (
              <span className="text-red-500 text-xs">{errors.telefone}</span>
            )}
          </div>
          <div>
            <Textarea
              name="descricao"
              placeholder="Descreva sua necessidade *"
              value={form.descricao}
              onChange={handleChange}
              required
              aria-invalid={!!errors.descricao}
              className={errors.descricao ? 'border-red-500' : ''}
              rows={4}
            />
            {errors.descricao && (
              <span className="text-red-500 text-xs">{errors.descricao}</span>
            )}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="w-full mt-2 bg-[#5BC0DE] text-white font-semibold hover:bg-[#060E3D] transition"
              disabled={!isValid || loading}
            >
              {loading ? (
                <>
                  <span className="animate-spin mr-2 h-4 w-4 inline-block border-2 border-white border-t-transparent rounded-full" />
                  Enviando...
                </>
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
