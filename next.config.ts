import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ts$/,
      include: /aetos-sanity/,
      use: "ignore-loader",
    });
    return config;
  },
};

export default nextConfig;
