import { ThemeDirection, ThemeMode } from '@/config'

export type FontFamily = string

export type DefaultConfigProps = {
  mode: ThemeMode
  fontFamily: FontFamily
  themeDirection: ThemeDirection
}

export type CustomizationProps = {
  fontFamily: FontFamily
  mode: ThemeMode
  themeDirection: ThemeDirection
  onChangeMode: (mode: ThemeMode) => void
  onChangeDirection: (direction: ThemeDirection) => void
}
