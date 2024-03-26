/** @type {import('next').NextConfig} */

const basePath = '/';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    basePath: basePath,
  },
  basePath: basePath,
  assetPrefix: basePath,
  eslint: { dirs: ['.'] },
  output: 'standalone',
};

module.exports = nextConfig;
