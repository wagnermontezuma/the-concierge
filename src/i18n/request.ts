import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';
import type { GetRequestConfigParams } from 'next-intl/server';

type Messages = Record<string, Record<string, string | Record<string, string>>>;

export default getRequestConfig(async ({ locale }: GetRequestConfigParams) => {
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    locale = defaultLocale;
  }

  const messages = (await import(`./messages/${locale}.json`)).default as Messages;

  return {
    locale,
    messages,
    timeZone: 'America/Sao_Paulo',
  };
});

export { locales }; 