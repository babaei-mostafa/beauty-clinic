'use client'

import { useState } from 'react'
import Image from 'next/image'

import Box from '@mui/material/Box'

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  borderRadius?: number | string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  fallbackSrc?: string
}

// ====================|| CUSTOM IMAGE ||==================== //

export default function CustomImage({
  src,
  alt,
  width = 80,
  height = 80,
  borderRadius = '8px',
  objectFit = 'cover',
  fallbackSrc = '/assets/images/fallback-image.png',
}: Props) {
  const [imageSrc, setImageSrc] = useState(src)
  return (
    <Box
      sx={{
        width,
        height,
        position: 'relative',
        borderRadius,
        overflow: 'hidden',
      }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        style={{ objectFit }}
        onError={() => setImageSrc(fallbackSrc)}
        sizes={`${width}px`}
      />
    </Box>
  )
}
