import { merge } from 'lodash'
import Button from './button'
import { ThemeMode } from '@/config'
import Menu from './menu'
import { Components, Theme } from '@mui/material/styles'

// ====================|| OVERRIDES - MAIN ||==================== //

export default function ComponentsOverrides(
  mode: ThemeMode
): Components<Theme> {
  return merge(Button(mode), Menu(mode))
}
