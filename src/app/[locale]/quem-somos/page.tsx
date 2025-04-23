'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// --- Page Component --- 
export default function Page() { 
  const t = useTranslations('about');

  const values = [
    { key: 'value1', title: t('value1Title'), description: t('value1Text') },
    { key: 'value2', title: t('value2Title'), description: t('value2Text') },
    { key: 'value3', title: t('value3Title'), description: t('value3Text') },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Seção de Introdução */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute top-0 left-0 w-full h-64 overflow-hidden z-0">
          <Image
            src="/images/bannerexclusividade.png"
            alt={t('bannerAlt')}
            width={1920}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl text-center relative z-10 mt-40">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('intro')}
          </p>
        </div>
      </section>

      {/* 2. Seção de Storytelling */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl mb-12 md:mb-16 flex justify-center">
           <Image
              src="/images/logo.png"
              alt={t('institutionalImageAlt')}
              width={100}
              height={100}
              className="w-24 h-auto md:w-28"
            />
        </div>

        <div className="container mx-auto px-4 max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
            <Image
              src="/images/nossahistoria.png"
              alt={t('historyImageAlt')}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('storyTitle')}</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
               {t('storyText')}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Valores da Marca */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16">
            {t('valuesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value) => (
              <div key={value.key} className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Seção da Equipe (Placeholder) */}
      <section className="py-16 md:py-24">
         <div className="container mx-auto px-4 max-w-7xl text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('teamTitle')}</h2>
           <p className="text-lg text-gray-500 italic max-w-2xl mx-auto">
             {t('teamPlaceholderText')}
           </p>
         </div>
      </section>

      {/* 5. Chamada para Ação */}
      <section className="bg-blue-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('ctaTitle')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('ctaText')}
          </p>
          <Link
            href="/contato"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors text-lg"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
} 