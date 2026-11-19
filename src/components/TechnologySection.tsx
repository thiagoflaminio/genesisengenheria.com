import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, Radio } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/genesisData';

interface WorkflowStep {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  specs: { label: string; value: string }[];
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 'campo',
    number: '01',
    label: 'Coleta em Campo',
    title: 'Equipamentos GNSS RTK e Drones DJI de última geração',
    description:
      'Nossas equipes operam receptores Topcon, Trimble e Hexagon GeoMax integrados a VANTs DJI RTK, garantindo cobertura ágil de grandes fazendas, áreas florestais e núcleos urbanos com precisão centimétrica.',
    specs: [
      { label: 'Constelações', value: 'GPS · GLONASS · Galileo · BeiDou' },
      { label: 'Precisão Horizontal', value: '8 mm + 1 ppm (RTK)' },
      { label: 'Aerofotogrametria', value: 'Ortomosaicos & MDT/MDS' },
    ],
  },
  {
    id: 'genesis-topo',
    number: '02',
    label: 'App Gênesis Topo',
    title: 'Desenvolvimento próprio de software para topografia e gestão',
    description:
      'Unimos engenharia agrária e desenvolvimento de aplicações digitais para acelerar o processamento de coordenadas, conferência de memoriais descritivos, rotinas de cálculo e integração direta entre campo e escritório.',
    specs: [
      { label: 'Plataforma Web', value: 'genesis-topo.up.railway.app' },
      { label: 'Foco Operacional', value: 'Topografia · Memoriais · Azimutes' },
      { label: 'Desenvolvimento', value: 'Arquitetura própria Gênesis' },
    ],
  },
  {
    id: 'escritorio',
    number: '03',
    label: 'SIG & Entrega',
    title: 'Processamento avançado em QGIS, AutoCAD e protocolos oficiais',
    description:
      'No escritório técnico, os dados são auditados em QGIS e AutoCAD para emissão de plantas, arquivos SIGEF/INCRA, bases do SIMCAR/SEMA-MT e projetos executivos de REURB e PRAD.',
    specs: [
      { label: 'Softwares Base', value: 'AutoCAD · QGIS · SIGEF' },
      { label: 'Formatos Entregues', value: 'DWG · SHP · GeoTIFF · PDF/ART' },
      { label: 'Validação', value: 'Conformidade INCRA & SEMA-MT' },
    ],
  },
];

export const TechnologySection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('genesis-topo');
  const activeStep = WORKFLOW_STEPS.find((s) => s.id === activeStepId) ?? WORKFLOW_STEPS[1];

  return (
    <section
      id="tecnologia"
      className="border-b border-[#DCE6E9] bg-[#0B252C] py-16 text-white lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Technology & Software Division */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#F59B1A]">
                Tecnologia &amp; Desenvolvimento de Aplicações
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Engenharia de campo integrada a software próprio
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#C2D6DC]">
                Além da atuação consolidada em agrimensura e meio ambiente, a Gênesis desenvolve
                ferramentas digitais sob medida para aumentar a confiabilidade e a velocidade dos
                levantamentos técnicos.
              </p>
            </div>

            {/* Highlighted Genesis Topo App Box */}
            <div className="mt-8 rounded-xl border border-white/15 bg-[#081D23] p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#9AB8C1]">
                <span className="font-semibold text-[#F59B1A]">Aplicação em Produção</span>
                <span className="font-mono">genesis-topo.up.railway.app</span>
              </div>

              <h3 className="mt-2.5 font-display text-xl font-bold text-white">
                Gênesis Topo — Plataforma de Apoio Topográfico
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#C2D6DC]">
                Sistema web desenvolvido pela equipe da Gênesis para suporte a cálculos topográficos,
                análise de vértices, produtividade em escritório e padronização técnica de projetos.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <a
                  href={COMPANY_CONFIG.genesisTopoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#F59B1A] px-5 py-2.5 text-xs font-bold text-[#0B252C] whitespace-nowrap transition-colors duration-150 hover:bg-[#DC850A]"
                >
                  <span>Acessar Gênesis Topo</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <span className="text-xs text-[#9AB8C1]">Abre em nova aba</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Field-to-Office Pipeline */}
          <div className="flex flex-col justify-between rounded-xl border border-white/15 bg-[#0F313A] p-6 lg:col-span-6">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
                <span className="text-xs font-semibold text-[#C2D6DC]">
                  Fluxo Tecnológico Campo &amp; Escritório
                </span>
                <span className="font-mono text-xs text-[#F59B1A] tabular-nums">
                  {activeStep.number} / 03
                </span>
              </div>

              {/* Interactive Step Switcher */}
              <div
                role="tablist"
                aria-label="Etapas do fluxo tecnológico"
                className="mt-4 grid grid-cols-3 gap-1.5 rounded-lg bg-[#081D23] p-1"
              >
                {WORKFLOW_STEPS.map((step) => {
                  const selected = step.id === activeStepId;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveStepId(step.id)}
                      className={`min-h-10 rounded-md px-2.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-150 ${
                        selected
                          ? 'bg-[#0F7A8E] text-white'
                          : 'text-[#9AB8C1] hover:text-white'
                      }`}
                    >
                      <span className="truncate block">{step.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Step Content */}
              <div className="mt-6">
                <div className="flex items-center gap-2.5 text-[#F59B1A]">
                  {activeStep.id === 'campo' && <Radio className="h-5 w-5" aria-hidden="true" />}
                  {activeStep.id === 'genesis-topo' && (
                    <Cpu className="h-5 w-5" aria-hidden="true" />
                  )}
                  {activeStep.id === 'escritorio' && (
                    <Layers className="h-5 w-5" aria-hidden="true" />
                  )}
                  <span className="font-mono text-xs font-semibold">
                    Etapa {activeStep.number}
                  </span>
                </div>

                <h3 className="mt-2 font-display text-2xl font-bold leading-snug text-white">
                  {activeStep.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#C2D6DC]">
                  {activeStep.description}
                </p>
              </div>
            </div>

            {/* Specs Table */}
            <div className="mt-6 divide-y divide-white/10 rounded-lg border border-white/10 bg-[#081D23]">
              {activeStep.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-xs"
                >
                  <span className="text-[#9AB8C1]">{spec.label}</span>
                  <span className="font-mono font-medium text-white tabular-nums">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
