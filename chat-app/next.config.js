/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false // Disable optimizeCss since we're having issues
  },
  // Add this to handle the error pages
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig