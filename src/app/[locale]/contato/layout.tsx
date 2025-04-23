import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function Layout({ children, params }: Props) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
} 