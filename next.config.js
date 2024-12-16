/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/lm',
  assetPrefix: '/lm/',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig

