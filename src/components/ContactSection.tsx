import React, { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
  buildWhatsAppUrl,
  COMPANY_CONFIG,
  OFFICES,
  SERVICES,
} from '../data/genesisData';

interface ContactSectionProps {
  preselectedService: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [activeOfficeId, setActiveOfficeId] = useState<'cuiaba' | 'juara'>('cuiaba');
  const [name, setName] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [service, setService] = useState(SERVICES[0].title);
  const [areaEstimate, setAreaEstimate] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
      setSubmittedUrl(null);
    }
  }, [preselectedService]);

  const activeOffice = OFFICES.find((o) => o.id === activeOfficeId) ?? OFFICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = name.trim();
    const trimmedCity = municipality.trim();

    if (trimmedName.length < 2) {
      setErrorMsg('Informe seu nome completo ou da empresa para continuar.');
      return;
    }

    if (trimmedCity.length < 2) {
      setErrorMsg('Informe o município/UF onde o imóvel ou projeto está localizado.');
      return;
    }

    const lines = [
      `Olá, equipe Gênesis Engenharia (${activeOffice.label})!`,
      `Nome: ${trimmedName}`,
      `Município/Região: ${trimmedCity}`,
      `Serviço de interesse: ${service}`,
      areaEstimate.trim() ? `Área / Escopo estimado: ${areaEstimate.trim()}` : null,
      notes.trim() ? `Observações: ${notes.trim()}` : null,
    ].filter(Boolean);

    const url = buildWhatsAppUrl(lines.join('\n'));
    setSubmittedUrl(url);
  };

  return (
    <section id="unidades" className="bg-[#F6F9FA] py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Units (Cuiabá & Juara) */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wide text-[#0F7A8E]">
              Unidades &amp; Atendimento Regional
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B252C]">
              Presença estratégica em Cuiabá e Juara
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#475E66]">
              Atendemos demandas rurais, ambientais e urbanas em todas as regiões do Estado de
              Mato Grosso, com bases operacionais estruturadas.
            </p>

            {/* Office Switcher */}
            <div
              role="tablist"
              aria-label="Selecionar unidade da Gênesis Engenharia"
              className="mt-6 grid grid-cols-2 gap-1 rounded-lg border border-[#DCE6E9] bg-white p-1"
            >
              {OFFICES.map((office) => {
                const isSelected = office.id === activeOfficeId;
                return (
                  <button
                    key={office.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveOfficeId(office.id)}
                    className={`min-h-10 rounded-md px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-150 ${
                      isSelected
                        ? 'bg-[#0F7A8E] text-white'
                        : 'text-[#475E66] hover:bg-[#F6F9FA] hover:text-[#0B252C]'
                    }`}
                  >
                    {office.label}
                  </button>
                );
              })}
            </div>

            {/* Active Office Card */}
            <div className="mt-4 rounded-xl border border-[#DCE6E9] bg-white p-6">
              <div className="flex items-center justify-between gap-2 text-xs text-[#5A727A]">
                <span className="font-semibold text-[#0F7A8E]">{activeOffice.roleTitle}</span>
                <span className="font-mono tabular-nums">{activeOffice.coordinates}</span>
              </div>

              <h3 className="mt-2 font-display text-xl font-bold text-[#0B252C]">
                {activeOffice.city}
              </h3>

              <div className="mt-4 space-y-3 text-sm text-[#475E66]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0F7A8E]" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-[#0B252C]">{activeOffice.addressLine1}</p>
                    <p>{activeOffice.addressLine2}</p>
                    <p className="font-mono text-xs text-[#5A727A] tabular-nums">
                      {activeOffice.cep} · CNPJ {activeOffice.cnpj}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#0F7A8E]" aria-hidden="true" />
                  <span className="font-mono font-medium text-[#0B252C] tabular-nums">
                    {activeOffice.phone}
                  </span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#DCE6E9] pt-4 text-xs text-[#475E66]">
                <p>
                  <span className="font-semibold text-[#0B252C]">Coordenação: </span>
                  {activeOffice.leader}
                </p>
                <p className="mt-1">
                  <span className="font-semibold text-[#0B252C]">Área de atuação: </span>
                  {activeOffice.coverage}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={activeOffice.mapQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-[#DCE6E9] px-3.5 py-2 text-xs font-semibold text-[#0B252C] whitespace-nowrap transition-colors hover:border-[#0F7A8E] hover:text-[#0F7A8E]"
                >
                  <span>Abrir no mapa</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href={COMPANY_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-1.5 text-xs font-semibold text-[#0F7A8E] whitespace-nowrap hover:underline hover:underline-offset-4"
                >
                  <span>Instagram {COMPANY_CONFIG.instagramHandle}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated WhatsApp Quote Builder */}
          <div id="orcamento" className="lg:col-span-7">
            <div className="rounded-xl border border-[#DCE6E9] bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCE6E9] pb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#0B252C]">
                    Solicitar Orçamento via WhatsApp
                  </h3>
                  <p className="mt-1 text-sm text-[#475E66]">
                    Preencha os dados técnicos iniciais para agilizar o atendimento da nossa equipe.
                  </p>
                </div>
                <span className="font-mono text-xs font-medium text-[#0F7A8E]">
                  {activeOffice.label}
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#0B252C]"
                    >
                      Nome completo ou empresa *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex.: Fazenda Santa Helena / João Silva"
                      className="mt-1.5 w-full rounded-lg border border-[#DCE6E9] bg-white px-3.5 py-2.5 text-sm text-[#0B252C] placeholder:text-[#8CA0A6] focus:border-[#0F7A8E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-city"
                      className="block text-xs font-semibold text-[#0B252C]"
                    >
                      Município / Região em MT *
                    </label>
                    <input
                      id="contact-city"
                      type="text"
                      required
                      value={municipality}
                      onChange={(e) => setMunicipality(e.target.value)}
                      placeholder="Ex.: Cuiabá, Juara, Sorriso, Sinop..."
                      className="mt-1.5 w-full rounded-lg border border-[#DCE6E9] bg-white px-3.5 py-2.5 text-sm text-[#0B252C] placeholder:text-[#8CA0A6] focus:border-[#0F7A8E] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-semibold text-[#0B252C]"
                    >
                      Serviço principal
                    </label>
                    <select
                      id="contact-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-[#DCE6E9] bg-white px-3.5 py-2.5 text-sm text-[#0B252C] focus:border-[#0F7A8E] focus:outline-none"
                    >
                      {SERVICES.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.number}. {item.title}
                        </option>
                      ))}
                      <option value="Desenvolvimento de Tecnologia / Apps">
                        Desenvolvimento de Tecnologia / Apps
                      </option>
                      <option value="Consultoria Técnica Personalizada">
                        Consultoria Técnica Personalizada
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-area"
                      className="block text-xs font-semibold text-[#0B252C]"
                    >
                      Área aproximada (hectares ou lotes)
                    </label>
                    <input
                      id="contact-area"
                      type="text"
                      value={areaEstimate}
                      onChange={(e) => setAreaEstimate(e.target.value)}
                      placeholder="Ex.: 1.200 ha ou 180 lotes urbanos"
                      className="mt-1.5 w-full rounded-lg border border-[#DCE6E9] bg-white px-3.5 py-2.5 text-sm text-[#0B252C] placeholder:text-[#8CA0A6] focus:border-[#0F7A8E] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-notes"
                    className="block text-xs font-semibold text-[#0B252C]"
                  >
                    Detalhes da matrícula, CAR ou demanda técnica
                  </label>
                  <textarea
                    id="contact-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Descreva brevemente se há necessidade de certificação SIGEF, retificação de CAR/SIMCAR, PRAD, REURB ou laudo técnico."
                    className="mt-1.5 w-full rounded-lg border border-[#DCE6E9] bg-white px-3.5 py-2.5 text-sm text-[#0B252C] placeholder:text-[#8CA0A6] focus:border-[#0F7A8E] focus:outline-none"
                  />
                </div>

                {errorMsg && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs font-medium text-red-800"
                  >
                    {errorMsg}
                  </div>
                )}

                {submittedUrl && (
                  <div
                    role="status"
                    className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#0F7A8E]/30 bg-[#0F7A8E]/10 px-4 py-3.5 text-xs text-[#0A5666]"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0F7A8E]" aria-hidden="true" />
                      <span>
                        Resumo técnico pronto para envio! Clique no botão ao lado para iniciar a
                        conversa no WhatsApp.
                      </span>
                    </span>
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-[#0F7A8E] px-4 py-2 font-bold text-white whitespace-nowrap transition-colors hover:bg-[#0A5666]"
                    >
                      <span>Abrir WhatsApp</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-[#5A727A]">
                    Retorno direto com a equipe técnica da Gênesis Engenharia.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#F59B1A] px-6 py-3 text-sm font-bold text-[#0B252C] whitespace-nowrap transition-colors duration-150 hover:bg-[#DC850A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59B1A]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Preparar Mensagem no WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
