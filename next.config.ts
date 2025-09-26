import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'dkstatics-public.digikala.com' },
    ],
  },
}

export default nextConfig
