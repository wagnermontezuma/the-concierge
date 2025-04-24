import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contato | The Concierge',
};

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <section lang={params.locale}>
      {children}
    </section>
  );
} 