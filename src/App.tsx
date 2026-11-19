import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TrendsSection } from './components/TrendsSection';
import { TechnologySection } from './components/TechnologySection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { buildWhatsAppUrl, SERVICES } from './data/genesisData';

export default function App() {
  const [selectedQuoteService, setSelectedQuoteService] = useState<string>(SERVICES[0].title);

  const handleRequestServiceQuote = (serviceTitle: string) => {
    setSelectedQuoteService(serviceTitle);
    const el = document.getElementById('orcamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0B252C]">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection onRequestServiceQuote={handleRequestServiceQuote} />
        <TrendsSection />
        <TechnologySection />
        <TeamSection />
        <ContactSection preselectedService={selectedQuoteService} />
      </main>
      <Footer />

      {/* Quick WhatsApp Button (compact, single-line, respects 15% mobile sticky cap) */}
      <a
        href={buildWhatsAppUrl(
          'Olá! Gostaria de falar com um especialista da Gênesis Engenharia e Consultoria.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento rápido via WhatsApp"
        className="fixed right-4 bottom-4 z-30 inline-flex h-12 items-center gap-2 rounded-full bg-[#0F7A8E] px-4 text-xs font-bold text-white shadow-lg transition-colors duration-150 hover:bg-[#0A5666] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F7A8E]"
      >
        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
      </a>
    </div>
  );
}
