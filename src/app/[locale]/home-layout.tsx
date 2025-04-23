import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'The Concierge - Experiências Exclusivas',
    description: 'Criando jornadas exclusivas e memórias inesquecíveis com serviço personalizado.',
    openGraph: {
      title: 'The Concierge - Experiências Exclusivas',
      description: 'Criando jornadas exclusivas e memórias inesquecíveis com serviço personalizado.',
      images: ['/images/banner.png'],
    },
  };
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 