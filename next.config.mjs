/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    loader: 'default',
    minimumCacheTTL: 60,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
 
  productionBrowserSourceMaps: false,
};

export default nextConfig;