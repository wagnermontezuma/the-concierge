'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Dados das experiências (idealmente viriam de uma API ou CMS)
const experiencesData = [
  {
    id: 'gourmet',
    imageSrc: '/images/gastronomia.png',
    titleKey: 'exp1Title',
    descriptionKey: 'exp1Description',
    altKey: 'gastronomia.alt'
  },
  {
    id: 'privateTours',
    imageSrc: '/images/passeiosprivados.png',
    titleKey: 'exp2Title',
    descriptionKey: 'exp2Description',
    altKey: 'passeios.alt'
  },
  {
    id: 'vipAccess',
    imageSrc: '/images/acessovip.png',
    titleKey: 'exp3Title',
    descriptionKey: 'exp3Description',
    altKey: 'acessoVip.alt'
  },
  {
    id: 'luxuryServices',
    imageSrc: '/images/servicosdeluxo.png',
    titleKey: 'exp4Title',
    descriptionKey: 'exp4Description',
    altKey: 'luxo.alt'
  },
  // Adicione mais experiências se necessário
];

export default function ExperienciasPage() {
  const t = useTranslations('experiences');

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen relative overflow-hidden">
      {/* Logomarca Sutil de Fundo (oculta em mobile) */}
      <div className="absolute inset-0 z-0 hidden sm:flex items-center justify-center pointer-events-none">
         <Image
            src="/images/logo.png"
            alt=""
            width={400}
            height={400}
            className="opacity-5 w-1/2 h-auto max-w-md"
            aria-hidden="true"
          />
      </div>

      {/* Container Principal com z-10 para ficar acima do logo */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>
        </section>

        {/* Experiences Grid/Slider */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Mobile Slider - horizontal scroll with snap */}
            <div className="md:hidden flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-hide">
              {experiencesData.map((exp) => (
                <div
                  key={exp.id}
                  className="flex-shrink-0 w-4/5 sm:w-2/3 snap-center bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <Image
                    src={exp.imageSrc}
                    alt={t(exp.altKey)}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{t(exp.titleKey)}</h3>
                    <p className="text-gray-600 text-sm">{t(exp.descriptionKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experiencesData.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={exp.imageSrc}
                    alt={t(exp.altKey)}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{t(exp.titleKey)}</h3>
                    <p className="text-gray-600">{t(exp.descriptionKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nota: O botão do WhatsApp deve ser gerenciado pelo Layout principal para estar sempre visível */}
      </div>
    </div>
  );
}

// Helper para esconder a barra de scroll (opcional, requer configuração no tailwind.config.js se não existir)
// Adicione ao seu tailwind.config.js (plugins): `require('tailwind-scrollbar-hide')` 