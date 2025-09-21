import { Roboto } from 'next/font/google'

import { DefaultConfigProps } from '@/types/config'

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  AUTO = 'auto',
}

export enum ThemeDirection {
  LTR = 'ltr',
  RTL = 'rtl',
}

const roboto = Roboto({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  weight: ['300', '400', '500', '700'],
  adjustFontFallback: false,
})

export const HEADER_HEIGHT = 74

// ====================|| THEME CONFIG ||==================== //

const config: DefaultConfigProps = {
  fontFamily: roboto.style.fontFamily,
  mode: ThemeMode.LIGHT,
  themeDirection: ThemeDirection.LTR,
}

export default config
