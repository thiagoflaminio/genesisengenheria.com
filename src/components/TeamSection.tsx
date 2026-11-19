import React, { useState } from 'react';
import { ArrowUpRight, Users } from 'lucide-react';
import { COMPANY_CONFIG, LEADERSHIP } from '../data/genesisData';

const MemberPortrait: React.FC<{
  src: string;
  alt: string;
  name: string;
  position: string;
}> = ({ src, alt, name, position }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex aspect-[4/5] w-full flex-col items-center justify-center bg-gradient-to-br from-[#0F7A8E]/15 to-[#0B252C]/10 p-6 text-center">
        <Users className="h-10 w-10 text-[#0F7A8E]" aria-hidden="true" />
        <p className="mt-2 font-display text-sm font-bold text-[#0B252C]">{name}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`aspect-[4/5] w-full object-cover ${position}`}
    />
  );
};

export const TeamSection: React.FC = () => {
  return (
    <section id="equipe" className="border-b border-[#DCE6E9] bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#0F7A8E]">
              Liderança Técnica &amp; Equipe Especializada
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B252C] sm:text-4xl">
              Experiência de campo e precisão técnica em todo o Mato Grosso
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#475E66]">
              Liderada pelo CEO Robertson Ruas Baganha com mais de 45 anos de mercado, nossa
              estrutura reúne especialistas em georreferenciamento, meio ambiente e operações
              regionais em Cuiabá e Juara.
            </p>
          </div>

          <a
            href={COMPANY_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-2 self-start rounded-lg border border-[#DCE6E9] bg-[#F6F9FA] px-4 py-2 text-xs font-semibold text-[#0B252C] whitespace-nowrap transition-colors hover:border-[#0F7A8E] hover:text-[#0F7A8E] lg:self-auto"
          >
            <span>Acompanhe trabalhos em campo ({COMPANY_CONFIG.instagramHandle})</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* 3 Leadership Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {LEADERSHIP.map((member) => (
            <article
              key={member.id}
              className="flex flex-col overflow-hidden rounded-xl border border-[#DCE6E9] bg-[#F6F9FA]"
            >
              <div className="overflow-hidden border-b border-[#DCE6E9] bg-white">
                <MemberPortrait
                  src={member.image}
                  alt={member.imageAlt}
                  name={member.name}
                  position={member.imagePosition}
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#5A727A]">
                    <span className="font-semibold text-[#0F7A8E]">{member.experience}</span>
                    <span aria-hidden="true">·</span>
                    <span>{member.unit}</span>
                  </div>

                  <h3 className="mt-2 font-display text-xl font-bold text-[#0B252C]">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#365058]">{member.role}</p>

                  <p className="mt-3 text-sm leading-relaxed text-[#475E66]">{member.bio}</p>
                </div>

                <div className="mt-5 border-t border-[#DCE6E9] pt-4">
                  <p className="text-xs font-medium text-[#5A727A]">
                    {member.specialties.join(' · ')}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Field + Office Integrated Team Callout */}
        <div className="mt-8 grid grid-cols-1 gap-6 rounded-xl border border-[#DCE6E9] bg-[#F6F9FA] p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h3 className="font-display text-xl font-bold text-[#0B252C]">
              Equipe integrada de Campo e Escritório com frota e instrumentação própria
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475E66]">
              Nossas frentes operacionais contam com engenheiros, agrimensores, técnicos em
              geoprocessamento e equipes de campo equipadas com GNSS RTK, estações totais e drones
              para atender propriedades rurais, prefeituras e empreendimentos sem terceirizações
              críticas.
            </p>
          </div>
          <div className="flex flex-col gap-2 border-t border-[#DCE6E9] pt-4 text-xs text-[#475E66] lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
            <p className="font-semibold text-[#0B252C]">Diferenciais Operacionais</p>
            <p>Levantamento de campo em qualquer município de MT</p>
            <p>Processamento geoespacial auditado em escritório</p>
            <p>Acompanhamento até aprovação no INCRA, SEMA e Cartório</p>
          </div>
        </div>
      </div>
    </section>
  );
};
