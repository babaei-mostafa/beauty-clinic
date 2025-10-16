"use client"

import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Image from 'next/image'

// ====================|| FANCY IMAGE ||==================== //

export default function FancyImg({
  src,
  alt,
  width = '100%',
  height = 320,
  ...props
}: {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  [key: string]: any
}) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: 'relative',
        width: { width },
        height: { height },
        mr: 8,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 6,
          right: -6,
          left: 6,
          bottom: -6,
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: '10px',
          transition: 'all 0.3s ease-in-out',
        },
        '&:hover::before': {
          top: -10,
          right: -10,
          left: -10,
          bottom: -10,
        },
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        {...props}
        className="object-cover rounded-lg shadow-md"
      />
    </Box>
  )
}
