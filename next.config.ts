import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'dkstatics-public.digikala.com' },
      { hostname: 'media.post.rvohealth.io' },
      { hostname: 'www.healthline.com' },
    ],
  },
}

export default nextConfig
