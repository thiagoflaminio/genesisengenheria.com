import React from 'react';
import { TRENDS_2025_2026 } from '../data/genesisData';

export const TrendsSection: React.FC = () => {
  return (
    <section id="tendencias" className="border-b border-[#DCE6E9] bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Intro Column */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-wide text-[#0F7A8E]">
              Atualização Normativa · Mato Grosso 2025–2026
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B252C]">
              O que está em alta na engenharia agrária e ambiental
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#475E66]">
              O cruzamento eletrônico de bases cartográficas em Mato Grosso — do SIMCAR na SEMA-MT
              às exigências de rastreabilidade e registro cartorial — elevou o padrão técnico
              exigido de propriedades rurais e municípios.
            </p>
            <div className="mt-6 rounded-xl border border-[#DCE6E9] bg-[#F6F9FA] p-5">
              <p className="text-xs font-semibold text-[#0B252C]">
                Por que antecipar a regularização?
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#475E66]">
                Imóveis com matrícula georreferenciada, CAR validado e passivos endereçados via
                PRA/PRAD preservam acesso a crédito rural, valorização patrimonial e habilitação em
                cadeias exportadoras.
              </p>
            </div>
          </div>

          {/* 4-Item Editorial Matrix */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
            {TRENDS_2025_2026.map((trend) => (
              <article
                key={trend.id}
                className="flex flex-col justify-between rounded-xl border border-[#DCE6E9] bg-white p-6"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#5A727A]">
                    <span className="font-mono font-semibold text-[#F59B1A] tabular-nums">
                      {trend.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{trend.context}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-lg font-bold leading-snug text-[#0B252C]">
                    {trend.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#475E66]">
                    {trend.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#DCE6E9] pt-3">
                  <p className="text-xs font-semibold text-[#0F7A8E]">{trend.impact}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
