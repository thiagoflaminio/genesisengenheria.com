export type ServiceCategory = 'all' | 'fundiario' | 'ambiental' | 'urbano';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: Exclude<ServiceCategory, 'all'>;
  categoryLabel: string;
  summary: string;
  featured?: boolean;
  normatives: string;
  deliverables: string[];
  equipmentUsed: string;
}

export interface TrendItem {
  id: string;
  number: string;
  title: string;
  context: string;
  description: string;
  impact: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  unit: string;
  experience: string;
  bio: string;
  specialties: string[];
  image: string;
  imageAlt: string;
  imagePosition: string;
}

export interface OfficeUnit {
  id: 'cuiaba' | 'juara';
  label: string;
  city: string;
  roleTitle: string;
  leader: string;
  addressLine1: string;
  addressLine2: string;
  cep: string;
  cnpj: string;
  phone: string;
  coverage: string;
  coordinates: string;
  mapQuery: string;
}

export const COMPANY_CONFIG = {
  brandName: 'Gênesis Engenharia e Consultoria',
  shortName: 'Gênesis Engenharia',
  sinceYear: '1980',
  cnpj: '03.448.092/0001-65',
  domain: 'genesisengenharia.com',
  phoneDisplay: '(65) 3025-4149',
  // Altere este número caso utilize um celular WhatsApp dedicado (formato DDI+DDD+Número)
  whatsappNumber: '556530254149',
  instagramUrl: 'https://www.instagram.com/engenharia_genesis/',
  instagramHandle: '@engenharia_genesis',
  genesisTopoUrl: 'https://genesis-topo.up.railway.app/',
  letterheadImage: '/assets/aistudio/imagem_timbrado_9a452949.jpg',
};

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encoded}`;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'georreferenciamento',
    number: '01',
    title: 'Georreferenciamento Rural & Certificação SIGEF/INCRA',
    category: 'fundiario',
    categoryLabel: 'Fundiário & Rural',
    featured: true,
    summary:
      'Levantamento topográfico georreferenciado de alta precisão para imóveis rurais, desmembramentos, remembramentos, retificação de área em cartório e regularização de assentamentos em todo o Mato Grosso.',
    normatives: 'Lei nº 10.267/2001 · Decreto nº 12.689/2025 · Nota Técnica IRIB nº 03/2025',
    deliverables: [
      'Planta georreferenciada e Memorial Descritivo certificado no SIGEF/INCRA',
      'Levantamento de vértices com receptores GNSS RTK/PPK de dupla frequência',
      'Anuência de confrontantes e instrução completa para registro em Cartório de Imóveis',
      'Parcelamento, unificação, retificação administrativa e judicial de matrículas',
    ],
    equipmentUsed: 'Topcon · Trimble · Hexagon GeoMax GNSS RTK',
  },
  {
    id: 'car-pra',
    number: '02',
    title: 'CAR Digital 2.0, SIMCAR & Regularização Ambiental (PRA)',
    category: 'ambiental',
    categoryLabel: 'Ambiental & CAR',
    featured: true,
    summary:
      'Elaboração, retificação e acompanhamento técnico do Cadastro Ambiental Rural (SIMCAR/SEMA-MT), projetos de compensação de Reserva Legal e assinatura de Termos de Compromisso no PRA.',
    normatives: 'Código Florestal (Lei 12.651/2012) · SEMA-MT SIMCAR · Decreto Estadual nº 1.757/2025',
    deliverables: [
      'Inscrição, retificação e validação de CAR junto à SEMA-MT em bases temáticas',
      'Projetos de Compensação de Reserva Legal via SIMCAR Compensação',
      'Due diligence socioambiental e fundiária para crédito rural e exigências de tradings',
      'Delimitação cartográfica de APP, Reserva Legal e áreas de uso consolidado',
    ],
    equipmentUsed: 'QGIS · Imagens Orbitais de Alta Resolução · SIG/SEMA-MT',
  },
  {
    id: 'prad',
    number: '03',
    title: 'PRAD & Monitoramento de Áreas Degradadas',
    category: 'ambiental',
    categoryLabel: 'Ambiental & CAR',
    summary:
      'Projetos de Recuperação de Áreas Degradadas e Alteradas (PRAD) com cronograma de recomposição florestal, autovistorias e monitoramento contínuo por sensoriamento remoto para atendimento ao PRA e programas de reinserção.',
    normatives: 'Termos de Compromisso PRA/SEMA-MT · Protocolos de Monitoramento Orbital',
    deliverables: [
      'Diagnóstico ambiental de campo com caracterização pedológica e de cobertura vegetal',
      'Projeto executivo de restauração ecológica e regeneração natural assistida',
      'Relatórios periódicos de monitoramento multitemporal por satélite e drones',
      'Adequação técnica para protocolos de rastreabilidade e reinserção pecuária',
    ],
    equipmentUsed: 'Drones DJI · Sensoriamento Remoto · QGIS',
  },
  {
    id: 'reurb',
    number: '04',
    title: 'REURB — Regularização Fundiária Urbana e Rural',
    category: 'urbano',
    categoryLabel: 'Urbano & Laudos',
    summary:
      'Execução integral de Regularização Fundiária de Interesse Social (REURB-S) e Específico (REURB-E) para prefeituras, loteamentos e núcleos urbanos consolidados no interior de Mato Grosso.',
    normatives: 'Lei Federal nº 13.465/2017 · Decreto nº 9.310/2018',
    deliverables: [
      'Levantamento planialtimétrico cadastral georreferenciado de quadras e lotes',
      'Projeto de Regularização Fundiária (PRF) e estudo técnico ambiental/urbanístico',
      'Cadastro físico-social de ocupantes e geração de memoriais individuais por unidade',
      'Suporte técnico até a emissão da Certidão de Regularização Fundiária (CRF)',
    ],
    equipmentUsed: 'AutoCAD Civil 3D · Drones DJI RTK · Estação Total',
  },
  {
    id: 'laudos',
    number: '05',
    title: 'Laudos Técnicos, Perícias Agrárias & Avaliações',
    category: 'urbano',
    categoryLabel: 'Urbano & Laudos',
    summary:
      'Elaboração de laudos de avaliação de imóveis rurais e urbanos, assistência técnica em processos judiciais de demarcação e usucapião, vistorias de divisas e pareceres agronômicos.',
    normatives: 'ABNT NBR 14653 (Avaliação de Bens) · Código de Processo Civil',
    deliverables: [
      'Laudo de avaliação de terras nuas, benfeitorias e produtividade agrícola (NBR 14653)',
      'Assistência técnica pericial em ações possessórias, usucapião e conflitos de divisa',
      'Laudos de cobertura vegetal, sobreposição fundiária e análise histórica de ocupação',
      'Anotação de Responsabilidade Técnica (ART) emitida junto ao CREA-MT',
    ],
    equipmentUsed: 'GNSS RTK · Análise Multitemporal · AutoCAD & QGIS',
  },
  {
    id: 'aerofotogrametria',
    number: '06',
    title: 'Aerofotogrametria com Drones & Topografia de Precisão',
    category: 'fundiario',
    categoryLabel: 'Fundiário & Rural',
    summary:
      'Mapeamento aéreo com VANTs RTK de alta resolução para geração de ortomosaicos georreferenciados, modelos digitais de terreno (MDT/MDS), cálculo de volumes e curvas de nível.',
    normatives: 'Padrão de Exatidão Cartográfica (PEC Classe A) · Normas ABNT NBR 13133',
    deliverables: [
      'Ortomosaicos de altíssima resolução espacial (GSD centimétrico)',
      'Curvas de nível, perfis longitudinais e cálculo volumétrico para terraplenagem',
      'Apoio topográfico para infraestrutura rural, armazéns, rodovias e barragens',
      'Integração direta de arquivos DWG, DXF, GeoTIFF e Shapefile',
    ],
    equipmentUsed: 'DJI Enterprise RTK · Topcon · Hexagon GeoMax',
  },
];

export const TRENDS_2025_2026: TrendItem[] = [
  {
    id: 'decreto-12689',
    number: '01',
    title: 'Decreto nº 12.689/2025 e Rigor Cartorial',
    context: 'Georreferenciamento & Cartórios',
    description:
      'Mesmo com ajustes nos prazos de certificação plena, a Nota Técnica IRIB nº 03/2025 mantém a exigência de levantamento georreferenciado de alta precisão para desmembramentos, parcelamentos, remembramentos e retificações em todo o Mato Grosso.',
    impact: 'Segurança jurídica imediata em escrituras e financiamento rural',
  },
  {
    id: 'car-digital-simcar',
    number: '02',
    title: 'CAR Digital 2.0 & SIMCAR Compensação',
    context: 'SEMA-MT · Gestão Ambiental',
    description:
      'A análise em lote com bases cartográficas temáticas e o Decreto Estadual nº 1.757/2025 aceleraram a validação do CAR e os projetos de compensação de Reserva Legal — tornando a retificação técnica essencial para desbloquear crédito e exportação.',
    impact: 'Conformidade direta exigida por bancos e tradings',
  },
  {
    id: 'prad-monitoramento',
    number: '03',
    title: 'PRAD & Monitoramento Satelital Contínuo',
    context: 'Passivos & Reinserção Produtiva',
    description:
      'Com milhares de Termos de Compromisso do PRA assinados em Mato Grosso e programas de reinserção pecuária monitorada (como o PREM/Imac), propriedades precisam de PRAD executável e acompanhamento contínuo por sensoriamento remoto.',
    impact: 'Recuperação documentada e manutenção de habilitação comercial',
  },
  {
    id: 'reurb-interior',
    number: '04',
    title: 'Expansão da REURB nos Municípios de MT',
    context: 'Desenvolvimento Urbano & Distritos',
    description:
      'O crescimento acelerado das cidades polo e distritos rurais mato-grossenses impulsiona contratos de REURB-S e REURB-E para titular lotes, organizar loteamentos e integrar cadastros urbanos com precisão geodésica.',
    impact: 'Valorização imobiliária e acesso à matrícula individualizada',
  },
];

export const LEADERSHIP: TeamMember[] = [
  {
    id: 'robertson',
    name: 'Robertson Ruas Baganha',
    role: 'CEO & Diretor Técnico',
    unit: 'Matriz Cuiabá · Atuação em todo MT',
    experience: '+45 anos de experiência',
    bio: 'À frente da Gênesis Engenharia e Consultoria desde a fundação, soma mais de quatro décadas liderando levantamentos fundiários, georreferenciamento de grandes propriedades, perícias agrárias e consultoria estratégica em todas as regiões de Mato Grosso.',
    specialties: [
      'Georreferenciamento INCRA/SIGEF',
      'Perícias & Laudos Agrários',
      'Regularização Fundiária',
    ],
    image: '/assets/aistudio/Gemini_Generated_Image_BAGANHA_2243c8cc.jpg',
    imageAlt: 'Robertson Ruas Baganha, CEO da Gênesis Engenharia e Consultoria, em seu escritório em Cuiabá',
    imagePosition: 'object-top',
  },
  {
    id: 'andreia',
    name: 'Andreia Godoy',
    role: 'Especialista em Engenharia Ambiental & CAR',
    unit: 'Matriz Cuiabá · Área Ambiental',
    experience: 'Especialista SEMA-MT & SIMCAR',
    bio: 'Com sólida trajetória técnica na área ambiental, conduz processos complexos de Cadastro Ambiental Rural (CAR/SIMCAR), Programas de Regularização Ambiental (PRA), elaboração de PRAD e diagnósticos socioambientais para propriedades rurais.',
    specialties: [
      'CAR Digital & SIMCAR',
      'PRA & Compensação Legal',
      'Elaboração e Execução de PRAD',
    ],
    image: '/assets/aistudio/ANDREIA-2_c319bd15.png',
    imageAlt: 'Andreia Godoy, especialista ambiental da Gênesis Engenharia em campo',
    imagePosition: 'object-top',
  },
  {
    id: 'clodoaldo',
    name: 'Clodoaldo Neves',
    role: 'Diretor Técnico · Filial Juara',
    unit: 'Filial Juara · Vale do Arinos e Norte de MT',
    experience: 'Coordenação Regional Norte/MT',
    bio: 'Comanda a operação da filial em Juara-MT, integrando equipes de campo e escritório para atender produtores rurais, municípios e cartórios do Vale do Arinos e norte mato-grossense com agilidade em topografia, georreferenciamento e REURB.',
    specialties: [
      'Operações de Campo GNSS/Drone',
      'Georreferenciamento Regional',
      'Projetos REURB & Loteamentos',
    ],
    image: '/assets/aistudio/CLODOALDO_7564ccaf.png',
    imageAlt: 'Clodoaldo Neves analisando planta cartográfica na filial da Gênesis Engenharia em Juara',
    imagePosition: 'object-top',
  },
];

export const OFFICES: OfficeUnit[] = [
  {
    id: 'cuiaba',
    label: 'Matriz Cuiabá',
    city: 'Cuiabá — MT',
    roleTitle: 'Sede Administrativa & Núcleo Técnico',
    leader: 'Robertson Ruas Baganha · Andreia Godoy',
    addressLine1: 'Av. Historiador Rubens de Mendonça, 2000 – Sala 1111',
    addressLine2: 'Ed. Centro Empresarial Cuiabá · Bosque da Saúde',
    cep: 'CEP 78050-975',
    cnpj: '03.448.092/0001-65',
    phone: '(65) 3025-4149',
    coverage: 'Atendimento estratégico em todo o Estado de Mato Grosso',
    coordinates: '15°34\'42"S  56°04\'26"W',
    mapQuery: 'https://www.google.com/maps/search/?api=1&query=Av+Historiador+Rubens+de+Mendonca+2000+Bosque+da+Saude+Cuiaba+MT',
  },
  {
    id: 'juara',
    label: 'Filial Juara',
    city: 'Juara — MT',
    roleTitle: 'Base Operacional Norte & Vale do Arinos',
    leader: 'Clodoaldo Neves',
    addressLine1: 'Rua Nelson Taborda Lacerda, 78S – Sala 02',
    addressLine2: 'Centro · Juara – MT',
    cep: 'CEP 78575-000',
    cnpj: '04.398.199/0001-09',
    phone: '(65) 3025-4149',
    coverage: 'Vale do Arinos, Juara, Porto dos Gaúchos, Tabaporã e Norte de MT',
    coordinates: '11°15\'29"S  57°31\'11"W',
    mapQuery: 'https://www.google.com/maps/search/?api=1&query=Rua+Nelson+Taborda+Lacerda+78S+Centro+Juara+MT',
  },
];
