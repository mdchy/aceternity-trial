import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        port: '',
        pathname: '/images/products/thumbnails/new/**',
        search: '',
      },
    ],
  },
}

export default nextConfig;
