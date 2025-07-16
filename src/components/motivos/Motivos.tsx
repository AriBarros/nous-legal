import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { motivos } from './motivos-data';

export function Motivos() {
  const [active, setActive] = useState('gestao');

  return (
    <section id="motivo" className="w-full bg-white py-20 px-4 md:px-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2">
          <p className="text-lg font-medium text-gray-600 mb-2">
            Nossa Plataforma
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#060E3D] mb-6">
            Por que escolher o <br />
            Nous Legal?
          </h2>

          <ul className="space-y-4">
            {motivos.map((motivo) => {
              const isActive = active === motivo.id;

              return (
                <li
                  key={motivo.id}
                  onClick={() => setActive(motivo.id)}
                  className={cn(
                    'cursor-pointer rounded-md p-3 transition-colors',
                    isActive
                      ? 'bg-muted/40 border-l-2 border-[#5BC0DE]'
                      : 'hover:bg-muted/20',
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'w-5 h-5',
                        isActive ? 'text-blue-600' : 'text-muted-foreground',
                      )}
                    >
                      {motivo.icon &&
                        React.cloneElement(
                          motivo.icon as React.ReactElement<any>,
                          {
                            className: 'w-5 h-5',
                            color: isActive ? '#5BC0DE' : undefined,
                          },
                        )}
                    </div>

                    <span
                      className={cn(
                        'text-sm font-medium',
                        isActive ? 'text-black' : 'text-muted-foreground',
                      )}
                    >
                      {motivo.title}
                    </span>
                  </div>
                  {isActive && motivo.description && (
                    <p className="text-sm text-muted-foreground mt-2 pl-8">
                      {motivo.description}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
