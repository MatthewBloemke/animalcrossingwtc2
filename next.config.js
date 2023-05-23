/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiKey: process.env.apiKey,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dodo.ac',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
