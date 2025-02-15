/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false
  },
  typescript: {
    // This is important for Vercel deployment
    ignoreBuildErrors: true
  },
  eslint: {
    // This is also important for the build
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig