import { ThemeMode } from '@/config'
import { PaletteThemeProps } from '@/types/theme'

export default function Theme(mode: ThemeMode): PaletteThemeProps {
  const contrastText = '#fff'

  let primaryColors = [
    '#FFF8E1', // lighter gold tint
    '#FFECB3',
    '#FFE082',
    '#FFD54F',
    '#FFCA28',
    '#FFD700', // main gold (classic gold)
    '#D4AF37', // dark gold
    '#B8860B', // antique gold
    '#8B7500',
    '#5C4600', // deepest shade
  ]

  let secondaryColors = [
    '#F8F9FA', // near-white for light mode background
    '#EDEDED',
    '#D6D6D6',
    '#A1A1A1',
    '#707070',
    '#444444',
    '#2C2C2C',
    '#1A1A1A',
    '#121212',
    '#000000', // pure black
  ]

  let errorColors = ['#FFE7D3', '#FF805D', '#FF4528', '#DB271D', '#930C1A']
  let warningColors = ['#FFF6D0', '#FFCF4E', '#FFB814', '#DB970E', '#935B06']
  let infoColors = ['#DCF0FF', '#7EB9FF', '#549BFF', '#3D78DB', '#1A3D93']
  let successColors = ['#EAFCD4', '#8AE65B', '#58D62A', '#3DB81E', '#137C0D']

  if (mode === ThemeMode.DARK) {
    primaryColors = [
      '#2c2a20', // muted background gold
      '#4a3f1d',
      '#6a551b',
      '#8a6b17',
      '#b38e1a',
      '#D4AF37', // main antique gold (luxury)
      '#FFD700', // bright gold for accents
      '#FFE082',
      '#FFECB3',
      '#FFF8E1',
    ]
    secondaryColors = [
      '#000000',
      '#121212',
      '#1A1A1A',
      '#2C2C2C',
      '#444444',
      '#707070',
      '#A1A1A1',
      '#D6D6D6',
      '#EDEDED',
      '#F8F9FA',
    ]
    errorColors = ['#341d1b', '#b03725', '#dd3f27', '#e9664d', '#fbd6c9']
    warningColors = ['#342a1a', '#83631a', '#dda116', '#e9ba3a', '#fbefb5']
    infoColors = ['#202734', '#416fb0', '#4c88dd', '#74a8e9', '#ecf4fb']
    successColors = ['#1f2e1c', '#449626', '#4fba28', '#74cf4d', '#e3fbd2']
  }

  return {
    primary: {
      lighter: primaryColors[0],
      100: primaryColors[1],
      200: primaryColors[2],
      light: primaryColors[3],
      400: primaryColors[4],
      main: primaryColors[5],
      dark: primaryColors[6],
      700: primaryColors[7],
      darker: primaryColors[8],
      900: primaryColors[9],
      contrastText,
    },
    secondary: {
      lighter: secondaryColors[0],
      100: secondaryColors[1],
      200: secondaryColors[2],
      light: secondaryColors[3],
      400: secondaryColors[4],
      500: secondaryColors[5]!,
      main: secondaryColors[6],
      dark: secondaryColors[7],
      800: secondaryColors[8],
      darker: secondaryColors[9],
      contrastText,
    },
    error: {
      lighter: errorColors[0],
      light: errorColors[1],
      main: errorColors[2],
      dark: errorColors[3],
      darker: errorColors[4],
      contrastText,
    },
    warning: {
      lighter: warningColors[0],
      light: warningColors[1],
      main: warningColors[2],
      dark: warningColors[3],
      darker: warningColors[4],
      contrastText: secondaryColors[5],
    },
    info: {
      lighter: infoColors[0],
      light: infoColors[1],
      main: infoColors[2],
      dark: infoColors[3],
      darker: infoColors[4],
      contrastText,
    },
    success: {
      lighter: successColors[0],
      light: successColors[1],
      main: successColors[2],
      dark: successColors[3],
      darker: successColors[4],
      contrastText,
    },
  }
}
