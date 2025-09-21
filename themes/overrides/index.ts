import { Theme } from '@mui/material/styles'
import { merge } from 'lodash'
import Button from './button'

// ====================|| OVERRIDES - MAIN ||==================== //

export default function ComponentsOverrides(theme: Theme) {
  return merge(Button(theme))
}
