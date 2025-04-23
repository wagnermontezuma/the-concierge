import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
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