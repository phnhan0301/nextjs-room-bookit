const withTM = require('next-transpile-modules')(['@material-tailwind/react']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
