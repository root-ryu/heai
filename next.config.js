/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      root: '.',
    },
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
