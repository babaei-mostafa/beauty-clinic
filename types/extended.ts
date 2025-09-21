import { Theme } from '@mui/material/styles'
import { ButtonProps } from '@mui/material/Button'
import { ChipProps } from '@mui/material/Chip'
import { IconButtonProps } from '@mui/material/IconButton'
import { SliderProps } from '@mui/material/Slider'
import { LoadingButtonProps } from '@mui/lab'

type TooltipColor =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'default'

export type ButtonVariantProps =
  | 'contained'
  | 'light'
  | 'outlined'
  | 'dashed'
  | 'text'
  | 'shadow'

export type ColorProps =
  | ChipProps['color']
  | ButtonProps['color']
  | LoadingButtonProps['color']
  | IconButtonProps['color']
  | SliderProps['color']
  | TooltipColor

export type ExtendedStyleProps = {
  color: ColorProps
  theme: Theme
}
