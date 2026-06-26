import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export if any next/image component is introduced later
  },
};

export default nextConfig;
