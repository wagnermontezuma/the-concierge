// import { getTranslations } from 'next-intl/server'; // Comentado
import React from 'react';

/* // Comentado temporariamente
// Função para gerar metadados para a rota /quem-somos
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('metadataTitle'),
    description: t('metadataDescription'),
    // Você pode adicionar outros metadados específicos para esta página aqui
    // openGraph: { ... }
  };
}
*/

type Props = {
  children: React.ReactNode;
  // params não são usados aqui, mas definimos para possível inferência interna
  // params: { locale: string };
};

// Layout simples que apenas renderiza a página filha
export default function QuemSomosLayout({ children }: Props) {
  return <>{children}</>;
} 