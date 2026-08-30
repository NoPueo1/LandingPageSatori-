import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Disable automatic creation of AI markdown files
  // @ts-ignore
  agentRules: false,
};

export default nextConfig;
