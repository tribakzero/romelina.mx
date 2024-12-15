/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/lm',
  trailingSlash: true,
}

module.exports = nextConfig

