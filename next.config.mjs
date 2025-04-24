import createNextIntlPlugin from 'next-intl/plugin';

// Plugin do next-intl usando o arquivo de configurações request.ts
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // Opcional: port e pathname se necessário
      },
    ],
  },
};

// Exporta a configuração com next-intl
export default withNextIntl(nextConfig); 