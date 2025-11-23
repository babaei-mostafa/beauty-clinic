'use client'

import { useEffect } from 'react'
import { useTheme } from '@mui/material'
import NProgress from 'nprogress'
import { usePathname, useSearchParams } from 'next/navigation'

import '@/styles/nprogress-custom.css'

// Optional config
NProgress.configure({ showSpinner: false, trickleSpeed: 200 })

export default function NProgressBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const theme = useTheme()

  // Keep MUI primary color in the nprogress CSS via CSS variable
  useEffect(() => {
    const primary = theme?.palette?.primary?.main ?? '#1976d2'
    document.documentElement.style.setProperty('--mui-primary', primary)
  }, [theme?.palette?.primary?.main])

  // Finish progress when Next has completed navigation (pathname changes)
  useEffect(() => {
    // If you want to always show at least a small visible progress when route changes,
    // you can ensure start has been called earlier (see other effect).
    NProgress.done()
  }, [pathname, searchParams])

  // Start progress when user triggers navigation (click on link, enter key, popstate/back)
  useEffect(() => {
    function isInternalAnchor(target: Element | null) {
      if (!target) return false
      // climb up the tree to find nearest anchor
      let el: Element | null = target
      while (el && el !== document.body) {
        if (el instanceof HTMLAnchorElement && el.href) {
          try {
            const url = new URL(el.href)
            // internal = same origin and not an anchor-only link
            return url.origin === location.origin && url.pathname !== location.pathname
          } catch {
            return false
          }
        }
        el = el.parentElement
      }
      return false
    }

    const onClick = (e: MouseEvent) => {
      // left click without modifier keys
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      if (isInternalAnchor(e.target as Element)) {
        NProgress.start()
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      // support keyboard-triggered navigation (Enter) on focused anchors
      if (e.key === 'Enter' && isInternalAnchor(document.activeElement)) {
        NProgress.start()
      }
    }

    const onPopState = () => {
      // browser back/forward
      NProgress.start()
    }

    document.addEventListener('click', onClick, true)
    document.addEventListener('keydown', onKeyDown, true)
    window.addEventListener('popstate', onPopState)

    return () => {
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('keydown', onKeyDown, true)
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  return null
}
