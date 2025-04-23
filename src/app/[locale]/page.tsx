'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen min-h-[600px]">
        <Image
          src="/images/banner.png"
          alt={t('banner.alt')}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto">
              {t('description')}
            </p>
            <Link
              href="/contato"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors text-lg"
            >
              {t('discover')}
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16">
            {t('services')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('service1.title')}
              </h3>
              <p className="text-gray-600">
                {t('service1.description')}
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('service2.title')}
              </h3>
              <p className="text-gray-600">
                {t('service2.description')}
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('service3.title')}
              </h3>
              <p className="text-gray-600">
                {t('service3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restante do conteúdo... */}
    </main>
  );
} 