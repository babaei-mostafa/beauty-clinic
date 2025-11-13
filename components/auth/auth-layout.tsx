import { ReactNode } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

import LOGO from '@/public/assets/images/etoile-clinic-logo-small.png'
import CustomImage from '@/components/UI/image/custom-image'
import Link from 'next/link'

// ====================|| AUTH LAYOUT ||==================== //

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        my: 2,
      }}
    >
      <Paper
        sx={{
          maxWidth: 600,
          p: 2,
        }}
      >
        <MuiLink
          component={Link}
          href="/"
          sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}
        >
          <CustomImage src={LOGO.src} alt="etoile-beauty-clinic-logo" objectFit="contain" />
        </MuiLink>
        {children}
      </Paper>
    </Box>
  )
}
