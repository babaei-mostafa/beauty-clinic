import { Components, Theme } from '@mui/material'

export default function TextField(): Components<Omit<Theme, 'Components'>> {
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
