import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default function Layout({ children }: Props) {
  return <section className="min-h-screen">{children}</section>;
} 