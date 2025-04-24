import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import '../globals.css';
import type { Locale } from '@/i18n/config';

const inter = Inter({ subsets: ['latin'] });

// Gera as rotas estáticas para cada locale
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Props esperadas pelo layout: children e params (Promise)
interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleLayout({ children, params }: RootLayoutProps) {
  // Aguarda resolução de params e tipa locale como Locale
  const { locale } = (await params) as { locale: Locale };

  // Se locale inválido, retorna 404
  if (!locales.includes(locale)) notFound();

  // Carrega as mensagens de tradução
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 