/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: { // added
    serverActions: true,
  }, // added
  swcMinify: true,
};

module.exports = nextConfig;
