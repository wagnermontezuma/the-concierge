import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  let messages;
  try {
    messages = (await import(`./messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}`, error);
    messages = (await import(`./messages/${defaultLocale}.json`)).default;
  }

  return {
    locale,
    messages,
    timeZone: 'America/Sao_Paulo'
  };
});

export { locales }; 