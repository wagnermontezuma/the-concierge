'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/quem-somos', label: t('about') },
    { href: '/experiencias', label: t('experiences') },
    { href: '/roteiros', label: t('itineraries') },
    { href: '/contato', label: t('contact') },
  ];

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 md:py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 flex items-center p-2 -ml-2" onClick={handleLinkClick}>
            <Image
              src="/images/logohorizontal.png"
              alt="The Concierge - Logo horizontal"
              width={180}
              height={40}
              priority
            />
          </Link>

          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-600 hover:text-blue-700 transition-colors duration-200 ${
                  pathname.endsWith(item.href) || (pathname === '/' + (pathname.split('/')[1] || '') && item.href === '/') ? 'font-semibold text-blue-700' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-700 ${
                    pathname.endsWith(item.href) || (pathname === '/' + (pathname.split('/')[1] || '') && item.href === '/') ? 'bg-blue-50 text-blue-700 font-semibold' : ''
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 