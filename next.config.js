/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
};

module.exports = nextConfig;
