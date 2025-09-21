'use client'

import { useContext } from 'react'
import { ConfigContext } from '@/contexts/config-context'

// ====================|| HOOKS - CONFIG ||==================== //

export default function useConfig() {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider')
  }
  return context
}
