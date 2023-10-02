/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [
      'localhost',
      'links.papareact.com',
      'cloud.appwrite.io',
      'cdn.sanity.io',
    ],
  },
};

module.exports = nextConfig;
