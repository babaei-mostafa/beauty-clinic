import { ThemeMode } from '@/config'
import { PaletteThemeProps } from '@/types/theme'
import { alpha } from '@mui/material/styles'
import ThemeOption from '../theme'

export default function Button(mode: ThemeMode) {
  const paletteColor: PaletteThemeProps = ThemeOption(mode)
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8,
          textTransform: 'none' as const,
        },
        containedPrimary: {
          // Gold button → black text
          backgroundColor: paletteColor.primary.main,
          color: '#121212',
          '&:hover': {
            backgroundColor: paletteColor.primary.dark,
          },
        },
        containedSecondary: {
          // Black button → gold text
          backgroundColor: paletteColor.secondary.darker,
          color: paletteColor.primary.main,
          '&:hover': {
            backgroundColor: '#000',
          },
        },
        outlinedPrimary: {
          // Outline gold → gold text
          borderColor: paletteColor.primary.main,
          color: paletteColor.primary.main,
          '&:hover': {
            backgroundColor: alpha(paletteColor.primary.main, 0.08),
          },
        },
        textPrimary: {
          // Text button (primary) → gold text
          color: paletteColor.primary.main,
        },
      },
    },
  }
}
