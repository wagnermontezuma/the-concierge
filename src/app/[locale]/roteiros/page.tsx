'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import RoteiroCard from '@/components/RoteiroCard';

// Dados dos roteiros (idealmente viriam de uma API ou CMS)
// Substitua YOUR_PHONE_NUMBER pelo número de WhatsApp correto
const YOUR_PHONE_NUMBER = '5511999999999'; // Exemplo: 5511999999999 (Código do país + DDD + Número)

const routesData = [
  {
    id: 'italia-classica',
    imageSrc: '/images/italia.png',
    titleKey: 'route1Title',
    summaryKey: 'route1Summary',
    buttonKey: 'routeButtonText',
    altKey: 'italia.alt'
  },
  {
    id: 'franca-romantica',
    imageSrc: '/images/fanca.png',
    titleKey: 'route2Title',
    summaryKey: 'route2Summary',
    buttonKey: 'routeButtonText',
    altKey: 'franca.alt'
  },
  {
    id: 'grecia-historica',
    imageSrc: '/images/grecia.png',
    titleKey: 'route3Title',
    summaryKey: 'route3Summary',
    buttonKey: 'routeButtonText',
    altKey: 'grecia.alt'
  },
  {
    id: 'japao-moderno-tradicional',
    imageSrc: '/images/japao.png',
    titleKey: 'route4Title',
    summaryKey: 'route4Summary',
    buttonKey: 'routeButtonText',
    altKey: 'japao.alt'
  },
  // Adicione mais roteiros se necessário
];

export default function RoteirosPage() {
  const t = useTranslations('routes');

  // Função para gerar o link do WhatsApp
  const generateWhatsAppLink = (routeTitle: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de mais detalhes sobre o roteiro: ${routeTitle}`
    );
    return `https://wa.me/${YOUR_PHONE_NUMBER}?text=${message}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen relative overflow-hidden">
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
          <div className="relative w-full h-[60vh] min-h-[400px]">
            <Image
              src="/images/roteiros.png"
              alt="Banner da página de Roteiros"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  {t('title')}
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
                  {t('description')}
                </p>
              </div>
            </div>
          </div>

          {/* Routes Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {routesData.map((route) => {
                  const translatedTitle = t(route.titleKey);
                  return (
                    <RoteiroCard
                      key={route.id}
                      title={translatedTitle}
                      summary={t(route.summaryKey)}
                      imageSrc={route.imageSrc}
                      imageAlt={t(route.altKey)}
                      whatsAppLink={generateWhatsAppLink(translatedTitle)}
                      buttonText={t(route.buttonKey)}
                    />
                  );
                })}
              </div>
            </div>
          </section>
      </div>
    </div>
  );
} 