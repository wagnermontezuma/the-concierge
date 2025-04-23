'use client';

import Image from 'next/image';
import Link from 'next/link';

interface RoteiroCardProps {
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  whatsAppLink: string;
  buttonText: string;
}

export default function RoteiroCard({
  title,
  summary,
  imageSrc,
  imageAlt,
  whatsAppLink,
  buttonText,
}: RoteiroCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{summary}</p>
        <Link
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors text-center"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
} 