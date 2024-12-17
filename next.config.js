/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV == "development" ? "" : "/lm",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
