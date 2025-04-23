import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    locale = 'pt';
  }
  return {
    locale,
    messages: (await import(`@/i18n/messages/${locale}.json`)).default
  };
});

export const defaultLocale = 'pt';
export { locales }; 