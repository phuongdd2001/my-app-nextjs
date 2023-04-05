/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.volio.vn',
        port: "",
        pathname: "/**"
      }
    ]
  },
}

module.exports = nextConfig
