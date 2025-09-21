'use client'

import { ReactElement, useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ConfigProvider } from '@/contexts/config-context'
import ThemeCustomization from '@/themes'
import NotistackProvider from '@/components/common/snackbar/notistack'

// ====================|| PROVIDER WRAPPER ||==================== //

export default function ProviderWrapper({
  children,
}: {
  children: ReactElement
}) {
  const [queryClient] = useState(() => new QueryClient())
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
