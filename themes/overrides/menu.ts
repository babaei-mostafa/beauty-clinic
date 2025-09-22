import { ThemeMode } from '@/config'
import { PaletteThemeProps } from '@/types/theme'
import { alpha } from '@mui/material/styles'
import ThemeOption from '../theme'

export default function Menu(mode: ThemeMode) {
  const paletteColor: PaletteThemeProps = ThemeOption(mode)
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor:
            mode === ThemeMode.DARK
              ? paletteColor.secondary[200]
              : paletteColor.secondary.lighter,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color:
            mode === ThemeMode.DARK
              ? paletteColor.secondary.lighter
              : paletteColor.secondary.dark,
          '&.Mui-selected': {
            backgroundColor:
              mode === ThemeMode.DARK
                ? paletteColor.secondary[300]
                : paletteColor.secondary[200],
            color:
              mode === ThemeMode.DARK
                ? paletteColor.primary.main
                : paletteColor.secondary[900],
          },
          '&:hover': {
            backgroundColor:
              mode === ThemeMode.DARK
                ? paletteColor.secondary[400]
                : paletteColor.secondary[100],
          },
          '&.Mui-disabled': {
            color: alpha(
              mode === ThemeMode.DARK
                ? paletteColor.secondary.lighter!
                : paletteColor.secondary.dark!,
              0.3
            ),
          },
        },
      },
    },
  }
}
