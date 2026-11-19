import React from 'react';
import {
  GenesisEmblem,
  GenesisHorizonSilhouette,
  PartnerBrandsStrip,
} from './GenesisBrand';
import { buildWhatsAppUrl, COMPANY_CONFIG } from '../data/genesisData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#0B252C]">
      {/* Partner & Equipment Brands Strip */}
      <div className="border-t border-[#DCE6E9] bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold text-[#0F7A8E]">
                Equipamentos &amp; Plataformas de Precisão
              </p>
              <h2 className="mt-1 font-display text-xl font-bold text-[#0B252C]">
                Tecnologia utilizada em campo e escritório
              </h2>
            </div>
            <p className="text-xs text-[#5A727A]">
              GNSS RTK · Aerofotogrametria · CAD &amp; Geoprocessamento
            </p>
          </div>

          <PartnerBrandsStrip />
        </div>
      </div>

      {/* Corporate Info & Links */}
      <div className="border-t border-[#DCE6E9] bg-[#F6F9FA] py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* Brand Summary */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <GenesisEmblem className="h-9 w-9 shrink-0" />
                <div>
                  <p className="font-display text-lg font-bold text-[#0B252C]">
                    {COMPANY_CONFIG.brandName}
                  </p>
                  <p className="text-xs font-semibold text-[#F59B1A]">
                    Desde {COMPANY_CONFIG.sinceYear} · Mato Grosso
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#475E66]">
                Engenharia agrária, georreferenciamento rural, REURB, CAR, PRA, PRAD, laudos
                técnicos e desenvolvimento de aplicações geoespaciais.
              </p>
              <p className="mt-3 font-mono text-xs text-[#5A727A] tabular-nums">
                CNPJ: {COMPANY_CONFIG.cnpj} · {COMPANY_CONFIG.domain}
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-semibold text-[#0B252C]">Navegação</h3>
              <ul className="mt-3 space-y-2 text-sm text-[#475E66]">
                <li>
                  <a href="#servicos" className="transition-colors hover:text-[#0F7A8E]">
                    Serviços Técnicos
                  </a>
                </li>
                <li>
                  <a href="#tendencias" className="transition-colors hover:text-[#0F7A8E]">
                    Panorama 2025–2026
                  </a>
                </li>
                <li>
                  <a href="#tecnologia" className="transition-colors hover:text-[#0F7A8E]">
                    App Gênesis Topo
                  </a>
                </li>
                <li>
                  <a href="#equipe" className="transition-colors hover:text-[#0F7A8E]">
                    Liderança &amp; Equipe
                  </a>
                </li>
                <li>
                  <a href="#unidades" className="transition-colors hover:text-[#0F7A8E]">
                    Cuiabá &amp; Juara
                  </a>
                </li>
              </ul>
            </div>

            {/* Units & Digital Channels */}
            <div className="md:col-span-4">
              <h3 className="text-xs font-semibold text-[#0B252C]">Endereços &amp; Canais</h3>
              <div className="mt-3 space-y-3 text-xs leading-relaxed text-[#475E66]">
                <div>
                  <p className="font-semibold text-[#0B252C]">Matriz Cuiabá — MT</p>
                  <p>Av. Historiador Rubens de Mendonça, 2000 – Sala 1111</p>
                  <p>Bosque da Saúde · CEP 78050-975</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0B252C]">Filial Juara — MT (Clodoaldo Neves)</p>
                  <p>Rua Nelson Taborda Lacerda, 78S – Sala 02 · Centro</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href={buildWhatsAppUrl('Olá! Gostaria de falar com a Gênesis Engenharia.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#0F7A8E] hover:underline"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={COMPANY_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#0F7A8E] hover:underline"
                  >
                    Instagram
                  </a>
                  <a
                    href={COMPANY_CONFIG.genesisTopoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#0F7A8E] hover:underline"
                  >
                    Gênesis Topo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Letterhead Horizon Motif + Amber Bar */}
      <div className="bg-[#F6F9FA]">
        <GenesisHorizonSilhouette className="block h-8 w-full sm:h-11" />
        <div className="bg-[#F59B1A] py-2.5 text-center">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 text-xs font-semibold text-[#0B252C] sm:px-6 lg:px-8">
            <span>www.genesisengenharia.com</span>
            <span>
              © {currentYear} Gênesis Engenharia e Consultoria Ltda. · Todos os direitos reservados
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
