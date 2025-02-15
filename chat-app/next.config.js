/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false
  },
  typescript: {
    ignoreBuildErrors: true
  },
  output: 'standalone',
  // Add this for better compatibility
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  }
}

module.exports = nextConfig