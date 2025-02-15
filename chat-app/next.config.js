/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    optimizeCss: true
  },
  // Add this for Vercel deployment
  output: 'standalone',
}

module.exports = nextConfig