import { Theme } from '@mui/material/styles'

export const fancyStyle = (theme: Theme) => ({
  position: 'relative' as const,
  zIndex: 1,
  overflow: 'visible' as const,
  borderRadius: 0,
  fontSize: 11,
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(0.8),
  paddingRight: theme.spacing(0.8),
  backgroundColor: theme.palette.primary.main,
  color: '#000',
  boxShadow: 'none' as const, // remove shadow if variant=contained
  '&::before': {
    content: '""',
    position: 'absolute' as const,
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
})
