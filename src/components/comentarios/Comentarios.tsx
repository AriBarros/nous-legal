import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import { comentarios } from './comentarios-data.ts';

export function Comentarios() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
          O que os nossos <br className="sm:hidden" />
          clientes dizem!
        </h2>
        <Button className="self-center sm:self-auto bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-2 text-sm">
          Veja mais depoimentos
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {comentarios.map((c, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow-md border border-gray-100 p-6 bg-white h-full"
          >
            <CardContent className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4 flex-grow">
                <Quote className="w-8 h-8 text-blue-600" />
                <p className="text-gray-700 text-base">{c.text}</p>
              </div>
              <p className="text-sm font-semibold text-blue-700 mt-6">
                {c.name} – {c.role}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
