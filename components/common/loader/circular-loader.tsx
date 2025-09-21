import Stack from '@mui/material/Stack'

import CircularWithPath from './circular-with-path'

// ====================|| CIRCULAR LOADER ||==================== //

export default function CircularLoader() {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
      <CircularWithPath />
    </Stack>
  )
}
