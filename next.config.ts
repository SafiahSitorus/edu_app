import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    // (fonts.gstatic.com issue)
    turbopackUseSystemTlsCerts: true,
  },

  webpack: (config) => {
    // agar bisa import seperti "@/features/user/userSlice"
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },

  images: {
    //  whitelist domain font & image
    domains: ["fonts.gstatic.com", "fonts.googleapis.com"],
  },
};

export default nextConfig;
