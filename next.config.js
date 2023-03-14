/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    outputStandalone: true,
  },
  images: {
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
