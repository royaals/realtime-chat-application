/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove eslint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig