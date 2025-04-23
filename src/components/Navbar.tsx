'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = useLocale();

  const pathnameWithoutLocale = pathname.replace(/^\/(?:pt-BR|en)/, '') || '/';
  
  const languages = [
    { code: 'pt-BR', name: '🇧🇷 PT' },
    { code: 'en', name: '🇺🇸 EN' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              The Concierge
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              {t('home')}
            </Link>
            <Link href="/quem-somos" className="text-gray-600 hover:text-blue-600">
              {t('about')}
            </Link>
            <Link href="/experiencias" className="text-gray-600 hover:text-blue-600">
              {t('experiences')}
            </Link>
            <Link href="/roteiros" className="text-gray-600 hover:text-blue-600">
              {t('itineraries')}
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-blue-600">
              {t('contact')}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 ml-4 border-l pl-4">
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
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-2">
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

            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              href="/quem-somos"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link
              href="/experiencias"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('experiences')}
            </Link>
            <Link
              href="/roteiros"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('itineraries')}
            </Link>
            <Link
              href="/contato"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 