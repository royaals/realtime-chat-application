import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
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
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}
module.exports = nextConfig