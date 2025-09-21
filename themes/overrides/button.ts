import { Theme } from '@mui/material/styles'

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          padding: theme.spacing(1.2, 2.5),
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        outlinedSecondary: {
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.main,
          '&:hover': {
            borderColor: theme.palette.secondary.dark,
            backgroundColor: theme.palette.secondary.light,
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  }
}
