'use client'

import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'

import Logout from '@mui/icons-material/Logout'
import { useLogoutMutation } from '@/hooks/react-query/auth/authHooks'
import { enqueueSnackbar } from 'notistack'
import { useRouter } from 'next/navigation'

interface Props {
  handleClose: () => void
}

// ====================|| LOGOUT BUTTON ||==================== //

export default function LogoutBtn({ handleClose }: Props) {
  const router = useRouter()
  const { mutate: logout, isPending } = useLogoutMutation({
    onSuccess: (data: any) => {
      enqueueSnackbar(data.message, { variant: 'success' })
      router.push('/')
    },
  })

  const handleLogout = () => {
    logout()
    handleClose()
  }
  return (
    <MenuItem onClick={handleLogout} disabled={isPending}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Logout
    </MenuItem>
  )
}
