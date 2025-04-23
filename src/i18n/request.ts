import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';
import type { GetRequestConfigParams } from 'next-intl/server';

interface TranslationMessages {
  [key: string]: {
    [key: string]: string | {
      [key: string]: string;
    };
  };
}

export default getRequestConfig(async ({ locale }: GetRequestConfigParams) => {
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    locale = defaultLocale;
  }

  const messages = (await import(`./messages/${locale}.json`)).default as TranslationMessages;

  return {
    locale,
    messages,
    timeZone: 'America/Sao_Paulo',
  };
});

export { locales }; 