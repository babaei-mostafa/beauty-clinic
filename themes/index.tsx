import { HEADER_HEIGHT, ThemeMode } from '@/config'
import getWindowScheme from '@/utils/getWindowScheme'
import { ReactNode, useMemo } from 'react'
import Palette from './palette'
import {
  createTheme,
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from '@mui/material/styles'
import { TypographyVariantsOptions } from '@mui/material/styles'
import Typography from './typography'
import { ThemeOptions } from '@mui/material/styles'
import ComponentsOverrides from './overrides'
import useConfig from '@/hooks/useConfig'

export default function ThemeCustomization({
  children,
}: {
  children: ReactNode
}) {
  const { mode, themeDirection, fontFamily } = useConfig()
  let themeMode: ThemeMode = mode

  if (themeMode === ThemeMode.AUTO) {
    const autoMode = getWindowScheme()
    if (autoMode) {
      themeMode = ThemeMode.DARK
    } else {
      themeMode = ThemeMode.LIGHT
    }
  }

  const theme: Theme = useMemo<Theme>(() => Palette(themeMode), [themeMode])

  const themeTypography: TypographyVariantsOptions =
    useMemo<TypographyVariantsOptions>(
      () => Typography(themeMode, fontFamily),
      [themeMode, fontFamily]
    )

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1440,
        },
      },
      direction: themeDirection,
      mixins: {
        toolbar: {
          minHeight: HEADER_HEIGHT,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: theme.palette,
      shape: {
        borderRadius: 8,
      },
      typography: themeTypography,
    }),
    [themeDirection, theme, themeTypography]
  )

  const themes: Theme = createTheme(themeOptions)
  themes.components = ComponentsOverrides(themes)

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={themes}>{children}</ThemeProvider>
    </StyledEngineProvider>
  )
}
