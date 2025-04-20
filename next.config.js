/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/Nextjs-Portfolio',
  basePath: '/Nextjs-Portfolio',
  output: 'export'
};

module.exports = nextConfig;
