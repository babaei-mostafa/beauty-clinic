import { TypographyVariantsOptions } from '@mui/material/styles'

import { ThemeMode } from '@/config'
import { FontFamily } from '@/types/config'
import ThemeOption from './theme'
import { PaletteThemeProps } from '@/types/theme'

// ====================|| THEME - TYPOGRAPHY ||==================== //

export default function Typography(
  mode: ThemeMode,
  fontFamily: FontFamily
): TypographyVariantsOptions {
  const paletteColor: PaletteThemeProps = ThemeOption(mode)

  // base color depending on theme
  const headingColor = paletteColor.primary.main //gold
  const textColor = mode === ThemeMode.DARK ? '#FFFFFF' : '#121212'
  const secondaryTextColor =
    mode === ThemeMode.DARK ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
  return {
    htmlFontSize: 16,
    fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,

    // ---------- Headings (Gold) ----------
    h1: {
      fontWeight: 600,
      fontSize: '2.375rem',
      lineHeight: 1.21,
      color: headingColor,
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.27,
      color: headingColor,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.33,
      color: headingColor,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      color: headingColor,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
      color: headingColor,
    },
    h6: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      color: headingColor,
    },

    // ---------- Body text (white/black) ----------
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
      color: textColor,
    },
    body2: {
      fontSize: '0.75rem',
      lineHeight: 1.66,
      color: textColor,
    },

    // ---------- Subtitles (slightly softer) ----------
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.57,
      color: secondaryTextColor,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66,
      color: secondaryTextColor,
    },

    // ---------- Misc ----------
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      color: secondaryTextColor,
    },

    overline: {
      lineHeight: 1.66,
      color: secondaryTextColor,
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 600,
    },
  }
}
