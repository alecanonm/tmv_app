/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_DIRECTUS_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_DIRECTUS_DOMAIN,
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
}

module.exports = nextConfig
