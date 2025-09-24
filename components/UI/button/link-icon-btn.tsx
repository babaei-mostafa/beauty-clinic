import { ReactNode } from 'react'
import Link from 'next/link'

import IconButton from '@mui/material/IconButton'

// ====================|| LINK ICON BUTTON ||==================== //

export default function LinkIconButton({
  children,
  href,
}: {
  children: ReactNode
  href: string
}) {
  return (
    <IconButton
      href={href}
      component={Link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </IconButton>
  )
}
