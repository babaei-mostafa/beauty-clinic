import { Components, Theme } from '@mui/material'

import { ThemeMode } from '@/config'

export default function Select(mode: ThemeMode): Components<Omit<Theme, 'Components'>> {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          paddingTop: '6px',
          paddingBottom: '6px',
        },
        outlined: {
          paddingTop: '6px',
          paddingBottom: '6px',
        },
        icon: {
          color: mode === 'dark' ? '#fff' : '#000',
        },
      },
    },
  }
}
