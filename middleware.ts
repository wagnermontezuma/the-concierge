import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale as configDefaultLocale } from './src/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale: configDefaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(pt-BR|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
}; 