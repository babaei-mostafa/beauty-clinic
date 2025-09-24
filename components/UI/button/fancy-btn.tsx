import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { fancyStyle } from './fancy-btn-style'

// ====================|| FANCY BUTTON ||==================== //

const FancyButton = styled(Button)(({theme}) => ({...fancyStyle(theme)}))

export default FancyButton
