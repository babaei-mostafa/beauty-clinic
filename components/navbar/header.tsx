'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material'

import FancyButton from '@/components/UI/button/fancy-btn'
import FancyIconButton from '@/components/UI/button/fancy-icon-btn'
import LOGO from '@/public/assets/images/etoile-clinic-logo-small.png'
import MainDrawer from './main-drawer'

// ====================|| HEADER ||==================== //

export default function Header() {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer,
        borderBottom: '2px solid',
        borderColor: theme.palette.primary.main,
        bgcolor: theme.palette.background.default,
      }}
    >
      <Toolbar>
        <Box sx={{ position: 'fixed', top: 16, left: 18 }}>
          <FancyIconButton onClick={() => setOpen(true)}>
            <MenuIcon fontSize="small" />
          </FancyIconButton>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            translate: '-50% -50%',
          }}
        >
          <Link href="/">
            <Image src={LOGO} width={70} height={70} alt="etoile-clinic-logo" />
          </Link>
        </Box>
        <Box sx={{ position: 'fixed', top: 16, right: 18 }}>
          <FancyButton>Login</FancyButton>
        </Box>
      </Toolbar>
      <MainDrawer open={open} setOpen={setOpen} />
    </AppBar>
  )
}
