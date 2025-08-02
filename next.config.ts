import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://fakestoreapi.com/img/*"),]
  },
  env: {
    API_URL: process.env.API_URL,
  }
};

export default nextConfig;