'use client'

import { useState } from 'react'

import Menu from '@mui/material/Menu'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import SettingsIcon from '@mui/icons-material/Settings'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import { ThemeMode } from '@/config'
import useConfig from '@/hooks/useConfig'

// ====================|| THEME MODE BTN ||==================== //

export default function ThemeModeBtn() {
  const { onChangeMode } = useConfig()
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChangeMode = (event: React.MouseEvent, key: ThemeMode) => {
    onChangeMode(key)
    handleClose()
  }

  return (
    <div className="fixed bottom-10 left-10">
      <Button id="theme-mode-menu" onClick={handleClick}>
        <LightModeIcon />
      </Button>
      <Menu
        id="theme-mode-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={(e) => handleChangeMode(e, ThemeMode.LIGHT)}>
          <Stack direction="row" spacing={1}>
            <Typography>
              <LightModeIcon />
            </Typography>
            <Typography>Light</Typography>
          </Stack>
        </MenuItem>
        <MenuItem onClick={(e) => handleChangeMode(e, ThemeMode.DARK)}>
          <Stack direction="row" spacing={1}>
            <Typography>
              <DarkModeIcon />
            </Typography>
            <Typography>Dark</Typography>
          </Stack>
        </MenuItem>
        <MenuItem onClick={(e) => handleChangeMode(e, ThemeMode.AUTO)}>
          <Stack direction="row" spacing={1}>
            <Typography>
              <SettingsIcon />
            </Typography>
            <Typography>Auto</Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </div>
  )
}
