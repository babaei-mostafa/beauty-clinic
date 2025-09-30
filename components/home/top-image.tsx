'use client'

import Image from 'next/image'

import Box from '@mui/material/Box'

import BG from '@/public/assets/images/home/home-top-image.jpg'
import LOGO from '@/public/assets/images/etoile-clinic-logo-large.png'
import { usePathname } from 'next/navigation'

// ====================|| HOME TOP IMAGE ||==================== //

export default function HomeTopImage() {
  const pathname = usePathname()

  if (pathname !== '/') return null

  return (
    <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Box
        sx={{
          width: 150,
          height: 150,
          position: 'absolute',
          top: '50%',
          left: '50%',
          translate: '-50% -50%',
          opacity: "10%",
          zIndex: 1000,
        }}
      >
        <Image src={LOGO.src} alt="etoile clinic" fill />
      </Box>
      <div className="absolute inset-0 bg-black z-10 opacity-30"></div>
      <Image src={BG.src} alt="etoile clinic" fill className="object-cover" />
    </Box>
  )
}
