import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  params: { locale: string };
}

// Função para gerar metadados para a rota /contato
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: t('metadataTitle'),
    description: t('metadataDescription'),
    openGraph: {
      title: t('metadataTitle'),
      description: t('metadataDescription'),
    },
  };
}

// Layout que renderiza a página filha com acesso ao parâmetro locale
export default function ContatoLayout({ children, params }: LayoutProps) {
  return <>{children}</>;
} 