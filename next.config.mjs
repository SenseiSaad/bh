/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [], // Add any external domains you're loading images from
    unoptimized: true, // This can help with deployment issues
  },
  // Other Next.js config options
}

export default nextConfig
