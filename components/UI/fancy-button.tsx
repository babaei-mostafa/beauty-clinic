import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const FancyButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  overflow: 'visible',
  borderRadius: 0,
  fontSize: 11,
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(0.8),
  paddingRight: theme.spacing(0.8),
  boxShadow: 'none', // remove shadow if variant=contained
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 3,
    bottom: -3,
    left: 3,
    right: -3,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 0, // square outer border too
    transition: 'all 0.3s ease',
    zIndex: -1,
  },
  '&:hover::before': {
    top: -5,
    left: -5,
    right: -5,
    bottom: -5,
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main, // same as normal
    boxShadow: 'none', // remove shadow if variant=contained
  },
}))

export default FancyButton
