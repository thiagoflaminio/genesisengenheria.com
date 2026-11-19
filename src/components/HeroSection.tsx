import React, { useState } from 'react';
import { ArrowRight, Compass, Layers, MapPin } from 'lucide-react';
import { GenesisWatermarkBackdrop } from './GenesisBrand';
import { buildWhatsAppUrl, COMPANY_CONFIG } from '../data/genesisData';

type MapLayerKey = 'sigef' | 'car' | 'curvas' | 'pontos';

interface LayerMeta {
  key: MapLayerKey;
  label: string;
  code: string;
  color: string;
  detail: string;
}

const LAYERS: LayerMeta[] = [
  {
    key: 'sigef',
    label: 'Perímetro SIGEF',
    code: 'INCRA/SNCI',
    color: '#0F7A8E',
    detail: 'Poligonal certificada · Precisão < 0,08 m (RTK)',
  },
  {
    key: 'car',
    label: 'CAR & APP',
    code: 'SIMCAR-MT',
    color: '#2E8B57',
    detail: 'Reserva Legal e APP delimitados em base temática',
  },
  {
    key: 'curvas',
    label: 'Curvas de Nível',
    code: 'MDT 1m',
    color: '#F59B1A',
    detail: 'Altimetria por aerofotogrametria DJI RTK',
  },
  {
    key: 'pontos',
    label: 'Marcos GNSS',
    code: 'SIRGAS 2000',
    color: '#0B252C',
    detail: 'Vértices M-01 a M-06 rastreados em campo',
  },
];

export const HeroSection: React.FC = () => {
  const [activeLayers, setActiveLayers] = useState<Record<MapLayerKey, boolean>>({
    sigef: true,
    car: true,
    curvas: true,
    pontos: true,
  });

  const toggleLayer = (key: MapLayerKey) => {
    setActiveLayers((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const whatsappUrl = buildWhatsAppUrl(
    'Olá! Vim pelo site genesisengenharia.com e gostaria de solicitar uma proposta técnica.'
  );

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#DCE6E9] bg-white pt-10 pb-14 lg:pt-14 lg:pb-16"
    >
      <GenesisWatermarkBackdrop />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Value Proposition */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-[#475E66]">
              <span className="font-semibold text-[#0F7A8E]">Desde {COMPANY_CONFIG.sinceYear}</span>
              <span aria-hidden="true">·</span>
              <span>Cuiabá e Juara — Mato Grosso</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">CNPJ {COMPANY_CONFIG.cnpj}</span>
            </div>

            <h1 className="font-display text-[clamp(2.15rem,4vw,3.45rem)] font-extrabold leading-[1.08] tracking-tight text-[#0B252C]">
              Engenharia agrária e georreferenciamento de alta precisão em Mato Grosso
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#475E66] sm:text-[17px]">
              Mais de 45 anos de atuação técnica unindo equipe experiente de campo e escritório,
              receptores GNSS RTK, drones de mapeamento e tecnologia própria para regularização
              fundiária, ambiental e projetos de engenharia.
            </p>

            {/* Primary CTA & Secondary Link */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#F59B1A] px-6 py-3 text-sm font-bold text-[#0B252C] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#DC850A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59B1A]"
              >
                <span>Solicitar Atendimento via WhatsApp</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#servicos"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#DCE6E9] bg-white px-5 py-3 text-sm font-semibold text-[#0B252C] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#0F7A8E] hover:text-[#0F7A8E]"
              >
                <span>Explorar Serviços</span>
              </a>
            </div>

            <p className="mt-4 text-xs text-[#5A727A]">
              Atendimento direto para produtores rurais, prefeituras, loteamentos, cartórios e perícias judiciais.
            </p>
          </div>

          {/* Right Column: Interactive Cartographic CAD / SIG Viewport */}
          <div className="flex flex-col lg:col-span-6">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#DCE6E9] bg-[#F6F9FA]">
              {/* Viewport Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCE6E9] bg-white px-4 py-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0B252C]">
                  <Compass className="h-4 w-4 text-[#0F7A8E]" aria-hidden="true" />
                  <span>Visualizador Técnico Geoespacial</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#475E66] tabular-nums">
                  <span>SIRGAS 2000 · UTM 21S</span>
                  <span aria-hidden="true">/</span>
                  <span>MT</span>
                </div>
              </div>

              {/* Interactive SVG Survey Canvas */}
              <div className="relative flex-1 min-h-[270px] bg-[#0B252C] p-4 sm:p-5">
                <svg
                  viewBox="0 0 560 320"
                  className="h-full w-full rounded-lg border border-white/10 bg-[#081D23]"
                  role="img"
                  aria-label="Representação interativa de levantamento georreferenciado com camadas SIGEF, CAR e curvas de nível"
                >
                  <defs>
                    <pattern id="utm-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="0.75"
                      />
                    </pattern>
                  </defs>
                  <rect width="560" height="320" fill="url(#utm-grid)" />

                  {/* Curvas de Nível (MDT) */}
                  {activeLayers.curvas && (
                    <g opacity="0.75">
                      <path
                        d="M 30 230 Q 140 185, 270 215 T 530 165"
                        fill="none"
                        stroke="#F59B1A"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M 30 255 Q 160 215, 290 245 T 530 195"
                        fill="none"
                        stroke="#F59B1A"
                        strokeWidth="1"
                        strokeOpacity="0.65"
                      />
                      <path
                        d="M 40 120 Q 175 80, 310 110 T 520 75"
                        fill="none"
                        stroke="#F59B1A"
                        strokeWidth="1"
                        strokeOpacity="0.55"
                      />
                      <text x="415" y="160" fill="#F59B1A" fontSize="9" fontFamily="JetBrains Mono, monospace">
                        245.0m
                      </text>
                      <text x="115" y="96" fill="#F59B1A" fontSize="9" fontFamily="JetBrains Mono, monospace">
                        252.5m
                      </text>
                    </g>
                  )}

                  {/* Camada CAR & APP / Reserva Legal */}
                  {activeLayers.car && (
                    <g>
                      {/* Curso d'água + APP */}
                      <path
                        d="M 60 290 C 170 230, 310 245, 490 120"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="3"
                        strokeOpacity="0.75"
                      />
                      <path
                        d="M 60 290 C 170 230, 310 245, 490 120"
                        fill="none"
                        stroke="#34D399"
                        strokeWidth="22"
                        strokeOpacity="0.18"
                        strokeLinecap="round"
                      />
                      {/* Polígono Reserva Legal */}
                      <polygon
                        points="325,62 455,82 470,152 340,145"
                        fill="#10B981"
                        fillOpacity="0.22"
                        stroke="#34D399"
                        strokeWidth="1.2"
                        strokeDasharray="3 3"
                      />
                      <text x="352" y="108" fill="#A7F3D0" fontSize="10" fontFamily="JetBrains Mono, monospace">
                        RL · SIMCAR
                      </text>
                    </g>
                  )}

                  {/* Poligonal SIGEF / INCRA */}
                  {activeLayers.sigef && (
                    <g>
                      <polygon
                        points="95,78 315,52 485,84 445,258 135,268"
                        fill="#0F7A8E"
                        fillOpacity="0.18"
                        stroke="#22D3EE"
                        strokeWidth="2"
                      />
                      <line
                        x1="235"
                        y1="62"
                        x2="265"
                        y2="264"
                        stroke="#22D3EE"
                        strokeWidth="1"
                        strokeDasharray="5 3"
                        opacity="0.75"
                      />
                      <text x="152" y="160" fill="#E0F2FE" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">
                        MATRÍCULA 14.820 · 1.420,50 ha
                      </text>
                      <text x="152" y="176" fill="#7DD3FC" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
                        CERTIFICAÇÃO SIGEF / INCRA
                      </text>
                    </g>
                  )}

                  {/* Vértices GNSS RTK */}
                  {activeLayers.pontos && (
                    <g>
                      {[
                        { x: 95, y: 78, id: 'M-01' },
                        { x: 315, y: 52, id: 'M-02' },
                        { x: 485, y: 84, id: 'M-03' },
                        { x: 445, y: 258, id: 'M-04' },
                        { x: 135, y: 268, id: 'M-05' },
                      ].map((pt) => (
                        <g key={pt.id}>
                          <circle cx={pt.x} cy={pt.y} r="6.5" fill="#F59B1A" fillOpacity="0.25" />
                          <circle cx={pt.x} cy={pt.y} r="3.5" fill="#F59B1A" stroke="#FFFFFF" strokeWidth="1" />
                          <text
                            x={pt.x + 8}
                            y={pt.y - 6}
                            fill="#FFFFFF"
                            fontSize="9.5"
                            fontFamily="JetBrains Mono, monospace"
                          >
                            {pt.id}
                          </text>
                        </g>
                      ))}
                    </g>
                  )}

                  {/* Norte Geográfico */}
                  <g transform="translate(515, 38)">
                    <circle cx="0" cy="0" r="14" stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="none" />
                    <path d="M0 -10 L4 4 L0 1 L-4 4 Z" fill="#F59B1A" />
                    <text x="-3.5" y="13" fill="#CBD5E1" fontSize="8" fontFamily="JetBrains Mono, monospace">
                      N
                    </text>
                  </g>
                </svg>

                {/* Coordinate bar */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#A6C4CC] tabular-nums">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#F59B1A]" aria-hidden="true" />
                    <span>15°34&apos;42&quot;S 56°04&apos;26&quot;W · Precisão ±0,02m</span>
                  </span>
                  <span>Topcon · Trimble · GeoMax · DJI</span>
                </div>
              </div>

              {/* Layer Toggle Controls */}
              <div className="border-t border-[#DCE6E9] bg-white p-3.5">
                <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#475E66]">
                  <Layers className="h-3.5 w-3.5 text-[#0F7A8E]" aria-hidden="true" />
                  <span>Camadas do projeto (clique para alternar):</span>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {LAYERS.map((layer) => {
                    const isOn = activeLayers[layer.key];
                    return (
                      <button
                        key={layer.key}
                        type="button"
                        onClick={() => toggleLayer(layer.key)}
                        aria-pressed={isOn}
                        className={`flex min-h-10 items-center justify-center rounded-lg border px-2.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors duration-150 ${
                          isOn
                            ? 'border-[#0F7A8E] bg-[#0F7A8E]/10 text-[#0A5666]'
                            : 'border-[#DCE6E9] bg-[#F6F9FA] text-[#5A727A] hover:text-[#0B252C]'
                        }`}
                      >
                        <span className="truncate">{layer.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantified Trust Strip below Hero Split */}
        <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#DCE6E9] pt-8 lg:grid-cols-4 lg:gap-6">
          <div>
            <p className="font-display text-2xl font-extrabold text-[#0F7A8E] tabular-nums sm:text-3xl">
              +45 Anos
            </p>
            <p className="mt-1 text-sm font-medium text-[#0B252C]">Experiência em Mato Grosso</p>
            <p className="mt-0.5 text-xs text-[#5A727A]">Atuação técnica consolidada desde 1980</p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-[#0B252C] tabular-nums sm:text-3xl">
              100% MT
            </p>
            <p className="mt-1 text-sm font-medium text-[#0B252C]">Cobertura Estadual</p>
            <p className="mt-0.5 text-xs text-[#5A727A]">Matriz em Cuiabá e Filial em Juara</p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-[#0B252C] sm:text-3xl">
              SIGEF &amp; CAR
            </p>
            <p className="mt-1 text-sm font-medium text-[#0B252C]">Regularização Integral</p>
            <p className="mt-0.5 text-xs text-[#5A727A]">INCRA, SEMA-MT, REURB e Laudos</p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-[#F59B1A] sm:text-3xl">
              RTK &amp; Drones
            </p>
            <p className="mt-1 text-sm font-medium text-[#0B252C]">Frota &amp; Software Próprio</p>
            <p className="mt-0.5 text-xs text-[#5A727A]">Topcon, Trimble, GeoMax, DJI e Gênesis Topo</p>
          </div>
        </div>
      </div>
    </section>
  );
};
