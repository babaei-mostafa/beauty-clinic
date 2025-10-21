import Button from '@mui/material/Button'
import DotsLoader from '../loader/three-dots'

interface Props {
  fullWidth?: boolean
  isLoading: boolean
  children: React.ReactNode
}

// ====================|| BUTTON WITH LOADER ||==================== //

export default function ButtonWithLoader({ children, isLoading, fullWidth }: Props) {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth={fullWidth}
      sx={{ pointerEvents: isLoading ? 'none' : 'auto' }}
    >
      {isLoading ? <DotsLoader /> : children}
    </Button>
  )
}
