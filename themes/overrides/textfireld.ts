import { Components, Theme } from '@mui/material'

import { ThemeMode } from '@/config'

export default function TextField(mode: ThemeMode): Components<Omit<Theme, 'Components'>> {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            paddingTop: '4px',
            paddingBottom: '4px',
          },
          '& .MuiOutlinedInput-root': {
            '& input': {
              paddingTop: '6px',
              paddingBottom: '6px',
            },
          },
        },
      },
    },
  }
}
