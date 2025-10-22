'use client'

import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import DashboardHeader from './dash-header'
import DashboardSidebar from './dash-sidebar'
import SitemarkIcon from './site-mark-icon'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme()

  const [isDesktopNavigationExpanded, setIsDesktopNavigationExpanded] = React.useState(true)
  const [isMobileNavigationExpanded, setIsMobileNavigationExpanded] = React.useState(false)

  const isOverMdViewport = useMediaQuery(theme.breakpoints.up('md'))

  const isNavigationExpanded = isOverMdViewport
    ? isDesktopNavigationExpanded
    : isMobileNavigationExpanded

  const setIsNavigationExpanded = React.useCallback(
    (newExpanded: boolean) => {
      if (isOverMdViewport) {
        setIsDesktopNavigationExpanded(newExpanded)
      } else {
        setIsMobileNavigationExpanded(newExpanded)
      }
    },
    [isOverMdViewport, setIsDesktopNavigationExpanded, setIsMobileNavigationExpanded]
  )

  const handleToggleHeaderMenu = React.useCallback(
    (isExpanded: boolean) => {
      setIsNavigationExpanded(isExpanded)
    },
    [setIsNavigationExpanded]
  )

  const layoutRef = React.useRef<HTMLDivElement>(null)

  return (
    <Box
      ref={layoutRef}
      sx={{
        position: 'relative',
        display: 'flex',
        overflow: 'hidden',
        height: '100vh',
        width: '100%',
      }}
    >
      <DashboardHeader
        logo={<SitemarkIcon />}
        title=""
        menuOpen={isNavigationExpanded}
        onToggleMenu={handleToggleHeaderMenu}
      />
      <DashboardSidebar
        expanded={isNavigationExpanded}
        setExpanded={setIsNavigationExpanded}
        container={layoutRef?.current ?? undefined}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          minWidth: 0,
        }}
      >
        <Toolbar sx={{ displayPrint: 'none' }} />
        <Box
          component="main"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            overflow: 'auto',
          }}
        >
          {children}
          {/* <Outlet /> */}
        </Box>
      </Box>
    </Box>
  )
}
