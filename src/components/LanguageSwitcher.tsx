'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const pathnameWithoutLocale = pathname.replace(/^\/(?:pt-BR|en)/, '') || '/';
  
  const languages = [
    { code: 'pt-BR', name: '🇧🇷 PT' },
    { code: 'en', name: '🇺🇸 EN' }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full shadow-lg px-3 py-2 flex gap-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={`/${lang.code}${pathnameWithoutLocale}`}
          className={`text-sm font-medium transition-colors ${
            currentLocale === lang.code
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-blue-500'
          }`}
        >
          {lang.name}
        </Link>
      ))}
    </div>
  );
} 