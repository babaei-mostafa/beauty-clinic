import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { fancyStyle } from './fancy-btn-style'

// ====================|| FANCY ICON BUTTON ||==================== //

const FancyIconButton = styled(IconButton)(({ theme }) => ({ ...fancyStyle(theme) }))

export default FancyIconButton
