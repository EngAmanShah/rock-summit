/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  i18n: { defaultLocale: 'en', locales: ['en', 'ar'] },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

module.exports = nextConfig;
