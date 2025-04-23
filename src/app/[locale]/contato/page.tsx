'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/logohorizontal.png"
                alt={t('logoAlt')}
                width={224}
                height={56}
                className="w-40 md:w-56 h-auto"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center lg:text-left">{t('formTitle')}</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('formNameLabel')}</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('formEmailLabel')}</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('formPhoneLabel')}</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('formMessageLabel')}</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
              </div>
              <div className="mb-6">
                <div className="flex items-start">
                  <input id="lgpdConsent" type="checkbox" name="lgpdConsent" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1" required/>
                  <div className="ml-3 text-sm">
                    <label htmlFor="lgpdConsent" className="font-medium text-gray-700">{t('formLgpdLabel')}</label>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">{t('submitButton')}</button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t('infoTitle')}</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>{t('infoEmail')}: contato@theconcierge.com</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>{t('infoPhone')}: +55 (11) 99999-9999</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>{t('infoAddress')}: São Paulo, SP, Brasil</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t('mapTitle')}</h2>
              <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center text-gray-500">
                {t('mapPlaceholder')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 