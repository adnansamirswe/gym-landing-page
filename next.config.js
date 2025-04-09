/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['cdn.pixabay.com'],
  },
  // Add compatibility with older Node.js versions
  experimental: {
    esmExternals: 'loose',
  },
}

module.exports = nextConfig
