/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/lm",
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
