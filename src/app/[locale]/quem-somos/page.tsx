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
      <div className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src="/images/bannerexclusividade.png"
          alt={t('bannerAlt')}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              {t('intro')}
            </p>
          </div>
        </div>
      </div>

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
      <div className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src="/images/grandejornada.png"
          alt="Realize sua próxima grande jornada"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('ctaTitle')}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
              {t('ctaText')}
            </p>
            <Link
              href="/contato"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors text-lg"
            >
              {t('ctaButton')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 