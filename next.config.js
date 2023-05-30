/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'media.licdn.com', 'eventsurabaya.net'],
  },
}

module.exports = nextConfig
