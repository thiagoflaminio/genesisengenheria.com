import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import {
  buildWhatsAppUrl,
  ServiceCategory,
  ServiceItem,
  SERVICES,
} from '../data/genesisData';

const CATEGORY_TABS: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'Todos os Serviços' },
  { id: 'fundiario', label: 'Fundiário & Rural' },
  { id: 'ambiental', label: 'Ambiental & CAR' },
  { id: 'urbano', label: 'Urbano & Laudos' },
];

export const ServicesSection: React.FC<{
  onRequestServiceQuote: (serviceTitle: string) => void;
}> = ({ onRequestServiceQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES
      : SERVICES.filter((service) => service.category === selectedCategory);

  return (
    <section id="servicos" className="border-b border-[#DCE6E9] bg-[#F6F9FA] py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header + Interactive Filter Controls */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#0F7A8E]">
              Atuação Multidisciplinar · Engenharia &amp; Regularização
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B252C] sm:text-4xl">
              Soluções completas do campo ao registro cartorial
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#475E66]">
              Cada projeto combina levantamento geodésico de precisão, análise normativa atualizada
              e entrega documental pronta para INCRA, SEMA-MT, prefeituras e cartórios.
            </p>
          </div>

          {/* Functional Segmented Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filtrar serviços por área"
            className="flex flex-wrap items-center gap-1 rounded-lg border border-[#DCE6E9] bg-white p-1 self-start lg:self-auto"
          >
            {CATEGORY_TABS.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`min-h-9 rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isSelected
                      ? 'bg-[#0F7A8E] text-white'
                      : 'text-[#475E66] hover:bg-[#F6F9FA] hover:text-[#0B252C]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {filteredServices.map((service) => {
            const spanClass =
              selectedCategory === 'all' && service.featured
                ? 'lg:col-span-3'
                : 'lg:col-span-2';

            return (
              <article
                key={service.id}
                className={`flex flex-col justify-between rounded-xl border border-[#DCE6E9] bg-white p-6 transition-colors duration-150 hover:border-[#0F7A8E]/60 ${spanClass}`}
              >
                <div>
                  {/* Clean unboxed editorial metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#5A727A]">
                    <span className="font-mono font-semibold text-[#0F7A8E] tabular-nums">
                      {service.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{service.categoryLabel}</span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-bold leading-snug text-[#0B252C]">
                    {service.number}. {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#475E66]">{service.summary}</p>
                </div>

                <div className="mt-6 border-t border-[#DCE6E9] pt-4">
                  <p className="text-xs text-[#5A727A]">{service.normatives}</p>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveService(service)}
                      className="inline-flex min-h-10 items-center gap-1.5 text-xs font-semibold text-[#0F7A8E] whitespace-nowrap transition-colors hover:text-[#0A5666] hover:underline hover:underline-offset-4"
                    >
                      <span>Ver escopo e entregáveis</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onRequestServiceQuote(service.title)}
                      className="inline-flex min-h-10 items-center rounded-lg border border-[#DCE6E9] px-3 py-1.5 text-xs font-semibold text-[#0B252C] whitespace-nowrap transition-colors hover:border-[#F59B1A] hover:bg-[#F59B1A]/10"
                    >
                      Orçar serviço
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Technical Scope Detail Modal */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B252C]/60 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={() => setActiveService(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-[#DCE6E9] bg-white p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#DCE6E9] pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#5A727A]">
                  <span className="font-mono font-semibold text-[#0F7A8E]">
                    Serviço {activeService.number}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeService.categoryLabel}</span>
                </div>
                <h3
                  id="service-modal-title"
                  className="mt-1.5 font-display text-2xl font-bold text-[#0B252C]"
                >
                  {activeService.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveService(null)}
                aria-label="Fechar detalhes do serviço"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#DCE6E9] text-[#475E66] transition-colors hover:bg-[#F6F9FA] hover:text-[#0B252C]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#475E66]">{activeService.summary}</p>

            <div className="mt-6">
              <h4 className="text-xs font-semibold text-[#0B252C]">Entregáveis Técnicos</h4>
              <ul className="mt-3 space-y-2.5">
                {activeService.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#475E66]">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#0F7A8E]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 rounded-lg border border-[#DCE6E9] bg-[#F6F9FA] p-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold text-[#0B252C]">Base Normativa</p>
                <p className="mt-1 text-xs leading-relaxed text-[#475E66]">
                  {activeService.normatives}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0B252C]">Tecnologia Aplicada</p>
                <p className="mt-1 text-xs leading-relaxed text-[#475E66]">
                  {activeService.equipmentUsed}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-[#DCE6E9] pt-5">
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="min-h-10 rounded-lg border border-[#DCE6E9] px-4 py-2 text-xs font-semibold text-[#475E66] transition-colors hover:bg-[#F6F9FA] hover:text-[#0B252C]"
              >
                Fechar
              </button>
              <a
                href={buildWhatsAppUrl(
                  `Olá! Gostaria de solicitar um orçamento para: ${activeService.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#0F7A8E] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0A5666]"
              >
                <span>Solicitar orçamento via WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
