/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true,
    },
    output: "export",
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
