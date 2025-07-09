/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // Allow all images from the public folder to be optimized
      domains: [], // Add external domains if images are hosted outside (e.g., ['example.com'])
      loader: 'default', // Use Next.js's default image optimization loader
      // Optionally, disable static image imports if you only want public folder images
      // disableStaticImages: true, // Uncomment if you want to enforce public folder only
      // Minimum cache TTL (Time To Live) in seconds for optimized images
      minimumCacheTTL: 60,
      // Optional: Configure formats for optimization (e.g., WebP, AVIF)
      formats: ['image/webp', 'image/avif'],
      // Optional: Set a maximum width for optimized images
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96],
    },
    // Enable React Strict Mode for better debugging (optional)
    reactStrictMode: true,
    // Optional: Add trailing slashes to URLs (if needed)
    trailingSlash: false,
  };
  
  export default nextConfig;