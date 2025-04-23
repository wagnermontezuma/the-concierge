import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
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
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 