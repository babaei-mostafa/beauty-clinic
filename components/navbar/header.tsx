'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <FancyIconButton onClick={() => setOpen(true)}>
            <MenuIcon fontSize="small" />
          </FancyIconButton>
          <Link href="/">
            <Image src={LOGO} width={70} height={70} alt="etoile-clinic-logo" />
          </Link>
          <FancyButton>Login</FancyButton>
        </Stack>
      </Toolbar>
      <MainDrawer open={open} setOpen={setOpen} />
    </AppBar>
  )
}
