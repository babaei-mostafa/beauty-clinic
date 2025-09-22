import { SimplePaletteColorOptions } from '@mui/material/styles'

interface ExtendedPaletteColorOptions extends SimplePaletteColorOptions {
  lighter?: string
  100?: string
  200?: string
  300?: string
  400?: string
  500?: string
  700?: string
  800?: string
  900?: string
  darker?: string
}

export type PaletteThemeProps = {
  primary: ExtendedPaletteColorOptions
  secondary: ExtendedPaletteColorOptions
  error: ExtendedPaletteColorOptions
  warning: ExtendedPaletteColorOptions
  info: ExtendedPaletteColorOptions
  success: ExtendedPaletteColorOptions
}
