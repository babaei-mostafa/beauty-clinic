import { HEADER_HEIGHT, ThemeMode } from '@/config'
import getWindowScheme from '@/utils/getWindowScheme'
import { ReactNode, useMemo } from 'react'
import Palette from './palette'
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
  ThemeOptions,
  Theme,
} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import Typography from './typography'
import ComponentsOverrides from './overrides'
import useConfig from '@/hooks/useConfig'

export default function ThemeCustomization({
  children,
}: {
  children: ReactNode
}) {
  const { mode, themeDirection, fontFamily } = useConfig()
  let themeMode: ThemeMode = mode

  // Handle auto mode (system preference)
  if (themeMode === ThemeMode.AUTO) {
    const autoMode = getWindowScheme()
    themeMode = autoMode ? ThemeMode.DARK : ThemeMode.LIGHT
  }

  // Build theme with memoization
  const theme: Theme = useMemo(() => {
    const basePalette = Palette(themeMode)
    const baseTypography = Typography(themeMode, fontFamily)

    const themeOptions: ThemeOptions = {
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
      palette: basePalette.palette,
      shape: {
        borderRadius: 8,
      },
      typography: baseTypography,
      components: ComponentsOverrides(themeMode),
    }

    return createTheme(themeOptions)
  }, [themeMode, themeDirection, fontFamily])

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
