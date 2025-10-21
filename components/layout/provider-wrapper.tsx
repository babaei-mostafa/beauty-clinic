'use client'

import { ReactNode, useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ConfigProvider } from '@/contexts/config-context'
import ThemeCustomization from '@/themes'
import NotistackProvider from '@/components/common/snackbar/notistack'
import { useMounted } from '@/hooks/useMounted'

// ====================|| PROVIDER WRAPPER ||==================== //

export default function ProviderWrapper({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  const mounted = useMounted()

  if (!mounted) return null

  return (
    <ConfigProvider>
      <ThemeCustomization>
        <QueryClientProvider client={queryClient}>
          <NotistackProvider>{children}</NotistackProvider>
        </QueryClientProvider>
      </ThemeCustomization>
    </ConfigProvider>
  )
}
