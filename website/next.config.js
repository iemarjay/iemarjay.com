/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: 'https',
        hostname: 'storage.startsmall.community',
      },
    ],
  },
};

module.exports = nextConfig;
