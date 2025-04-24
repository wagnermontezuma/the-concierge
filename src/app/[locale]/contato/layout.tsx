import type { Metadata } from 'next';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: 'Contato | The Concierge',
};

export default async function Layout({ children, params }: Props) {
  return (
    <section lang={params.locale}>
      {children}
    </section>
  );
} 