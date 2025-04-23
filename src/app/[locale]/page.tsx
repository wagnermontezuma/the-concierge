import { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'The Concierge - Experiências Exclusivas',
  description: 'Descubra experiências únicas e roteiros personalizados com The Concierge. Sua jornada começa aqui.',
  openGraph: {
    title: 'The Concierge - Experiências Exclusivas',
    description: 'Descubra experiências únicas e roteiros personalizados com The Concierge. Sua jornada começa aqui.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Concierge',
      },
    ],
  },
};

export default function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = useTranslations('Index');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage: "url('/images/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              {t('description')}
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg">
              {t('discover')}
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-0 opacity-10 pointer-events-none">
          <Image 
            src="/images/logo.png"
            alt="The Concierge - Logomarca Sutil"
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('services')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{t('service1.title')}</h3>
              <p className="text-gray-600">
                {t('service1.description')}
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{t('service2.title')}</h3>
              <p className="text-gray-600">
                {t('service2.description')}
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{t('service3.title')}</h3>
              <p className="text-gray-600">
                {t('service3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 