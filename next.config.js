/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/ArtesFaelan/' : '',
  basePath: isProd ? '/ArtesFaelan' : '',
  output: 'export'
};

module.exports = nextConfig;
