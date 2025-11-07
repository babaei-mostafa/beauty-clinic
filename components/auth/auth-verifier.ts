'use client'

import { useEffect } from 'react'

import { IAuthState, useAuthStore } from '@/stores/auth-store'
import { useHasSessionQuery, useVerifyQuery } from '@/hooks/react-query/auth/authHooks'

// ====================|| AUTH VERIFIER ||==================== //

export default function AuthVerifier() {
  const { setProfile, logout } = useAuthStore((state: IAuthState) => state)
  const { data: sessionData, isLoading: sessionLoading } = useHasSessionQuery()
  const {
    data: verifyData,
    isLoading: verifyLoading,
    isError: verifyError,
  } = useVerifyQuery({ enabled: !!sessionData?.hasSession })

  useEffect(() => {
    if (sessionLoading || verifyLoading) return

    if (!sessionData?.hasSession) {
      logout()
      return
    }

    if (verifyError || !verifyData?.valid) {
      logout()
    }
  }, [verifyError, verifyLoading, verifyData, setProfile, logout, sessionData, sessionLoading])
  return null
}
