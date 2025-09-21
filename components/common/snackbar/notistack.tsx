'use client'

import { ReactNode } from 'react'

import { SnackbarProvider } from 'notistack'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import WarningIcon from '@mui/icons-material/Warning'
import InfoIcon from '@mui/icons-material/Info'

export default function NotistackProvider({
  children,
}: {
  children: ReactNode
}) {
  const iconSX = { marginRight: 8, fontSize: '1.25rem' }

  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      iconVariant={{
        success: <CheckCircleIcon sx={iconSX} />,
        error: <ErrorIcon sx={iconSX} />,
        warning: <WarningIcon sx={iconSX} />,
        info: <InfoIcon sx={iconSX} />,
      }}
    >
      {children}
    </SnackbarProvider>
  )
}
