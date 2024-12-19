/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV == "development" ? "" : "/open-linktree",
    experimental: {
        reactCompiler: true,
    },
    output: "export",
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
