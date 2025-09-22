'use client'

import { ReactNode } from 'react'
import { Box, useTheme } from '@mui/material'

export default function PageWrapper({ children }: { children: ReactNode }) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {children}
    </Box>
  )
}
