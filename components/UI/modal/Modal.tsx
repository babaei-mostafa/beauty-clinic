'use client'

import { ReactNode } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

import { PopupTransition } from '@/components/@extended/transitions'

// ==============================|| DIALOG - TRANSITIONS ||============================== //

interface Props {
  open: boolean
  setOpen?: (state: boolean) => void
  title?: string
  body: ReactNode | string
  handleConfirm?: () => void
  isButtonLoading?: boolean
  confirmButtonText?: string | ReactNode
  declineButtonText?: string
  noButtons?: boolean
  confirmButtonColor?:
    | 'info'
    | 'warning'
    | 'success'
    | 'inherit'
    | 'error'
    | 'primary'
    | 'secondary'
}

interface Props {
  open: boolean
  setOpen?: (state: boolean) => void
  title?: string
  body: ReactNode | string
  handleConfirm?: () => void
  isButtonLoading?: boolean
  confirmButtonText?: string | ReactNode
  declineButtonText?: string
  isForm?: boolean
  noButtons?: boolean
  isLarge?: boolean
  confirmButtonColor?:
    | 'info'
    | 'warning'
    | 'success'
    | 'inherit'
    | 'error'
    | 'primary'
    | 'secondary'
  disableBackdropClose?: boolean
}

export default function Modal({
  open,
  setOpen,
  title,
  body,
  handleConfirm,
  isButtonLoading,
  confirmButtonText,
  declineButtonText,
  noButtons,
  isLarge = false,
  confirmButtonColor = 'success',
  disableBackdropClose = false,
}: Props) {
  const handleClose = (event?: object, reason?: string) => {
    if (
      disableBackdropClose &&
      (reason === 'backdropClick' || reason === 'escapeKeyDown')
    ) {
      return
    }
    if (setOpen) setOpen(false)
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={PopupTransition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        '& .MuiPaper-root': {
          minWidth: isLarge ? [400, 600, 800, 1000] : [250, 350, 450],
        },
      }}
    >
      <Box sx={{ p: 1, py: 1.5 }}>
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {noButtons ? null : (
            <>
              <Button color="error" onClick={handleClose}>
                {declineButtonText}
              </Button>
              <Button
                variant="contained"
                disabled={isButtonLoading}
                color={confirmButtonColor}
                onClick={handleConfirm}
              >
                {confirmButtonText}
              </Button>
            </>
          )}
        </DialogActions>
      </Box>
    </Dialog>
  )
}
