'use client'

import { useEffect } from 'react'

import { useTheme } from '@mui/material'
import NProgress from 'nprogress'
import { usePathname, useSearchParams } from 'next/navigation'

import '@/styles/nprogress-custom.css'

// ====================|| N Progress Bar ||==================== //

export default function ProgressBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const theme = useTheme()

  useEffect(() => {
    const primary = theme?.palette?.primary?.main ?? '#1976d2'
    document.documentElement.style.setProperty('--mui-primary', primary)
  }, [theme?.palette?.primary?.main])

  useEffect(() => {
    NProgress.start()
    NProgress.done()
  }, [pathname, searchParams])
  return null
}
