/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["puppeteer-extra"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cache.screenshotone.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
