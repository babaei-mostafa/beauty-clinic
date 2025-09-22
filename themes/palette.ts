import ThemeOption from './theme'
import { ThemeMode } from '@/config'
import { PaletteThemeProps } from '@/types/theme'
import { alpha, createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'

// ====================|| PALETTE ||==================== //

export default function Palette(mode: ThemeMode) {
  const paletteColor: PaletteThemeProps = ThemeOption(mode)

  return createTheme({
    palette: {
      mode: mode as PaletteMode,
      common: {
        black: '#000',
        white: '#fff',
      },
      ...paletteColor,

      // ---------- TEXT COLORS ----------
      text: {
        primary:
          mode === ThemeMode.DARK
            ? '#FFFFFF' // white text in dark mode
            : '#121212', // black text in light mode
        secondary:
          mode === ThemeMode.DARK
            ? alpha('#FFFFFF', 0.7) // softer white in dark
            : paletteColor.secondary.main, // dark gray in light
        disabled:
          mode === ThemeMode.DARK
            ? alpha('#FFFFFF', 0.3)
            : alpha('#121212', 0.3),
      },

      // ---------- ACTION COLORS ----------
      action: {
        active: mode === ThemeMode.DARK ? paletteColor.primary.main : '#121212',
        hover: alpha(paletteColor.primary.main, 0.08),
        selected: alpha(paletteColor.primary.main, 0.16),
        disabled: alpha('#121212', 0.3),
        disabledBackground: alpha(paletteColor.secondary.light!, 0.12),
        focus: alpha(paletteColor.primary.main, 0.12),
      },

      // ---------- DIVIDER ----------
      divider:
        mode === ThemeMode.DARK
          ? alpha('#FFFFFF', 0.12)
          : alpha('#121212', 0.12),

      // ---------- BACKGROUND ----------
      background: {
        default: mode === ThemeMode.DARK ? '#121212' : '#F8F9FA', // page background
        paper: mode === ThemeMode.DARK ? '#1E1E1E' : '#FFFFFF', // cards, surfaces
      },
    },
  })
}
