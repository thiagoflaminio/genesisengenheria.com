import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { GenesisEmblem } from './GenesisBrand';
import { buildWhatsAppUrl, COMPANY_CONFIG } from '../data/genesisData';

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Tendências', href: '#tendencias' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Unidades', href: '#unidades' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappHref = buildWhatsAppUrl(
    'Olá! Gostaria de solicitar um orçamento de engenharia com a Gênesis Engenharia e Consultoria.'
  );

  return (
    <header className="sticky top-0 z-40 border-b border-[#DCE6E9] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F7A8E]"
        >
          <GenesisEmblem className="h-8 w-8 shrink-0" />
          <span className="font-display text-lg font-bold tracking-tight text-[#0B252C]">
            {COMPANY_CONFIG.shortName}
          </span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#475E66]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-[#0F7A8E] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F7A8E]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#0F7A8E] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#0A5666] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F7A8E]"
          >
            Falar no WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#DCE6E9] text-[#0B252C] transition-colors hover:bg-[#F6F9FA] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#DCE6E9] bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Menu móvel">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-[#0B252C] transition-colors hover:bg-[#F6F9FA] hover:text-[#0F7A8E]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex min-h-11 items-center justify-center rounded-lg bg-[#0F7A8E] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0A5666]"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
