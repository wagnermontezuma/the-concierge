import { getTranslations } from 'next-intl/server';
import React from 'react';

// Função para gerar metadados para a rota /contato
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: t('metadataTitle'), // Adicionar 'metadataTitle' às traduções
    description: t('metadataDescription'), // Adicionar 'metadataDescription' às traduções
    // openGraph: { ... } // Opcional
  };
}

// Layout simples que apenas renderiza a página filha
export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 