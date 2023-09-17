/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CMS_LINK: process.env.CMS_LINK,
  },
  images: {
    domains: ['localhost', 'cmspokemon.onrender.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.jp',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cmspokemon.onrender.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
