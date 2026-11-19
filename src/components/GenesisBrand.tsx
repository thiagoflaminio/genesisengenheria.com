import React from 'react';

interface EmblemProps {
  className?: string;
}

/**
 * Reprodução vetorial fiel do emblema oficial Gênesis Engenharia e Consultoria
 * baseado no papel timbrado institucional (paleta #0F7A8E e #F59B1A).
 */
export const GenesisEmblem: React.FC<EmblemProps> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Moldura externa arredondada em azul petróleo formando o G */}
    <path
      d="M84 35.5C80.5 22 69.5 12 50 10C26.5 7.5 10 23.5 10 50C10 76.5 26.5 92.5 50 90C71.5 87.8 86 73.5 88.5 51H56V63H73.5C70 72.5 61 78.5 50 78.5C33.5 78.5 22.5 67 22.5 50C22.5 33 33.5 21.5 50 21.5C61.5 21.5 70 27 74 36.5L84 35.5Z"
      fill="#0F7A8E"
    />
    {/* Arco orbital âmbar característico da marca */}
    <path
      d="M52 24.5C37 24.5 25.5 35.5 25.5 50C25.5 64.5 37 75.5 52 75.5C61.5 75.5 69.8 70.5 74.2 63"
      stroke="#F59B1A"
      strokeWidth="4.5"
      strokeLinecap="round"
    />
    {/* Globo geodésico interno */}
    <circle cx="51" cy="50" r="18.5" stroke="#0F7A8E" strokeWidth="2.4" fill="#FFFFFF" />
    <ellipse cx="51" cy="50" rx="9" ry="18.5" stroke="#0F7A8E" strokeWidth="1.8" />
    <path d="M33.5 44.5C40 48 62 48 68.5 44.5" stroke="#0F7A8E" strokeWidth="1.8" />
    <path d="M33.5 55.5C40 52 62 52 68.5 55.5" stroke="#0F7A8E" strokeWidth="1.8" />
    <line x1="32.5" y1="50" x2="69.5" y2="50" stroke="#0F7A8E" strokeWidth="1.8" />
    {/* Vértices geodésicos */}
    <circle cx="43" cy="44" r="2.3" fill="#F59B1A" />
    <circle cx="59" cy="55.5" r="2.3" fill="#0F7A8E" />
  </svg>
);

/**
 * Fundo geométrico sutil inspirado na marca d'água do timbrado oficial
 * combinado com curvas topográficas suaves.
 */
export const GenesisWatermarkBackdrop: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {/* Grade topográfica sutil */}
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.35]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="genesis-topo-grid"
          width="72"
          height="72"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 72 0 L 0 0 0 72"
            fill="none"
            stroke="#DCE6E9"
            strokeWidth="0.75"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#genesis-topo-grid)" />
    </svg>

    {/* Marca d'água geométrica do globo Gênesis (sem texto) */}
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -right-24 top-1/2 h-[540px] w-[540px] -translate-y-1/2 opacity-[0.045]"
    >
      <path
        d="M336 142C322 88 278 48 200 40C106 30 40 94 40 200C40 306 106 370 200 360C286 351 344 294 354 204H224V252H294C280 290 244 314 200 314C134 314 90 268 90 200C90 132 134 86 200 86C246 86 280 108 296 146L336 142Z"
        fill="#0F7A8E"
      />
      <circle cx="204" cy="200" r="76" stroke="#0F7A8E" strokeWidth="8" />
      <ellipse cx="204" cy="200" rx="38" ry="76" stroke="#0F7A8E" strokeWidth="6" />
      <line x1="128" y1="200" x2="280" y2="200" stroke="#0F7A8E" strokeWidth="6" />
    </svg>

    {/* Suave gradiente para legibilidade total do conteúdo */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white" />
  </div>
);

/**
 * Silhueta institucional do horizonte urbano/rural presente no rodapé do papel timbrado oficial.
 */
export const GenesisHorizonSilhouette: React.FC<{ className?: string }> = ({
  className = 'w-full h-10',
}) => (
  <svg
    viewBox="0 0 1200 64"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M0 64V52H18V40L32 28L46 40V52H68V42C68 33 76 24 84 24C92 24 98 32 98 42V52H118V46H134V34H152V52H178V38C178 27 187 18 197 18C207 18 214 27 214 38V52H238V44H258V29L276 18L294 29V52H320V41C320 31 329 22 338 22C347 22 355 31 355 41V52H382V45H402V35H426V52H448V39L464 26L480 39V52H506V42C506 32 514 23 524 23C534 23 542 32 542 42V52H568V45H590V31H612V52H636V36C636 25 645 16 655 16C665 16 673 25 673 36V52H698V42H722V28L740 16L758 28V52H786V41C786 31 794 22 804 22C814 22 822 31 822 41V52H848V44H872V32H896V52H920V38C920 28 928 19 938 19C948 19 956 28 956 38V52H984V44H1006V28L1024 18L1042 28V52H1068V40C1068 30 1076 21 1086 21C1096 21 1104 30 1104 40V52H1132V43H1154V33H1176V52H1200V64H0Z"
      fill="#0F7A8E"
    />
  </svg>
);

/**
 * Logos vetoriais das marcas de equipamentos e softwares utilizadas em campo e escritório.
 */
export const PartnerBrandsStrip: React.FC = () => {
  const brands = [
    {
      name: 'Topcon',
      category: 'GNSS & Estações Totais',
      svg: (
        <svg viewBox="0 0 132 28" className="h-6 w-auto" aria-label="Topcon">
          <rect x="2" y="5" width="18" height="18" rx="2" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.8" />
          <path d="M6 10H16M11 10V19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <text x="27" y="19.5" fill="currentColor" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="15" letterSpacing="0.06em">
            TOPCON
          </text>
        </svg>
      ),
    },
    {
      name: 'Hexagon GeoMax',
      category: 'Agrimensura de Precisão',
      svg: (
        <svg viewBox="0 0 176 28" className="h-6 w-auto" aria-label="Hexagon GeoMax">
          <polygon points="11,3 20,8 20,19 11,24 2,19 2,8" fill="none" stroke="currentColor" strokeWidth="1.9" />
          <polygon points="11,8 15.5,10.5 15.5,16.5 11,19 6.5,16.5 6.5,10.5" fill="currentColor" />
          <text x="27" y="13" fill="currentColor" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="0.12em">
            HEXAGON
          </text>
          <text x="27" y="23" fill="currentColor" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="12" letterSpacing="0.03em">
            GEOMAX
          </text>
        </svg>
      ),
    },
    {
      name: 'Trimble',
      category: 'Geoespacial & RTK',
      svg: (
        <svg viewBox="0 0 130 28" className="h-6 w-auto" aria-label="Trimble">
          <circle cx="11" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5.5 11.5H16.5M11 11.5V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <text x="26" y="19.5" fill="currentColor" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="15.5" letterSpacing="-0.02em">
            Trimble
          </text>
        </svg>
      ),
    },
    {
      name: 'DJI Enterprise',
      category: 'Drones & Aerofotogrametria',
      svg: (
        <svg viewBox="0 0 100 28" className="h-6 w-auto" aria-label="DJI">
          <path d="M4 8H18L14 20H3L4.5 15H11" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" strokeLinecap="round" />
          <text x="26" y="20" fill="currentColor" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="18" letterSpacing="0.08em">
            DJI
          </text>
        </svg>
      ),
    },
    {
      name: 'AutoCAD',
      category: 'CAD & Projetos Civis',
      svg: (
        <svg viewBox="0 0 134 28" className="h-6 w-auto" aria-label="AutoCAD">
          <path d="M12 4L21 23H16.5L12 13L7.5 23H3L12 4Z" fill="currentColor" />
          <text x="27" y="19.5" fill="currentColor" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="14.5" letterSpacing="-0.01em">
            AutoCAD
          </text>
        </svg>
      ),
    },
    {
      name: 'QGIS',
      category: 'Geoprocessamento SIG',
      svg: (
        <svg viewBox="0 0 106 28" className="h-6 w-auto" aria-label="QGIS">
          <circle cx="11" cy="14" r="8" fill="none" stroke="currentColor" strokeWidth="2.4" />
          <path d="M12 14L20 22" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          <text x="27" y="19.5" fill="currentColor" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="15.5" letterSpacing="0.04em">
            QGIS
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="flex flex-col items-start justify-center rounded-xl border border-[#DCE6E9] bg-[#F6F9FA] px-4 py-3.5 text-[#365058] transition-colors duration-200 hover:border-[#0F7A8E]/40 hover:text-[#0F7A8E]"
        >
          <div className="mb-1.5">{brand.svg}</div>
          <span className="text-[11px] font-medium text-[#5A727A]">{brand.category}</span>
        </div>
      ))}
    </div>
  );
};
