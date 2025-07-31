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
  // ✅ Enable SWC minification (very fast)
  swcMinify: true,

  // ✅ Transpile specific packages only if using monorepo or shared libs
  // transpilePackages: ['ui', 'shared'],

  // ✅ Experimental turbo mode (Next.js 13.4+)
  experimental: {
    turbo: true, // Great for large projects
    // optimizePackageImports: true // (if using many libraries like lodash)
  },

  // ✅ Disabling source maps in dev can boost speed
  productionBrowserSourceMaps: false,
};
export default nextConfig;
