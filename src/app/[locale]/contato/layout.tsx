import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function Layout({ children }: Props) {
  return children;
} 