import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { comentarios } from './comentarios-data.ts';

export function Comentarios() {
  return (
    <section
      id="comentarios"
      className="px-4 sm:px-8 lg:px-12 py-12 max-w-7xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left text-[#060E3D]">
          O que os nossos <br className="sm:hidden" />
          clientes dizem!
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {comentarios.map((c, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow-md border border-gray-100 p-6 bg-white h-full"
          >
            <CardContent className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4 flex-grow">
                <Quote className="w-8 h-8 text-[#5BC0DE]" />
                <p className="text-gray-700 text-base">{c.text}</p>
              </div>
              <p className="text-sm font-semibold text-[#5BC0DE] mt-6">
                {c.name} – {c.role}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
