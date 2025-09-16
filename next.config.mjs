/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mikiyashailegebreal.tech",
        port: "",
        pathname: "/",
        search: "",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
