'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function ContatoPage() {
  const t = useTranslations('contact');

  const contactChannels = [
    {
      icon: FaWhatsapp,
      title: t('whatsappTitle'),
      description: t('whatsappText'),
      action: t('whatsappButton'),
      href: 'https://wa.me/5511999999999'
    },
    {
      icon: FaEnvelope,
      title: t('emailTitle'),
      description: t('emailText'),
      action: t('emailButton'),
      href: 'mailto:contato@theconcierge.com.br'
    },
    {
      icon: FaInstagram,
      title: t('instagramTitle'),
      description: t('instagramText'),
      action: t('instagramButton'),
      href: 'https://instagram.com/theconcierge'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src="/images/contato.png"
          alt={t('bannerAlt')}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('formTitle')}</h2>
              <ContactForm />
            </div>

            {/* Contact Channels */}
            <div className="space-y-8">
              {contactChannels.map((channel, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <channel.icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{channel.title}</h3>
                      <p className="text-gray-600 mb-4">{channel.description}</p>
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 font-semibold hover:text-blue-700 transition-colors"
                      >
                        {channel.action} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 