'use client'

import { ChangeEvent } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'

import usePagination from '@/hooks/usePagination'

// ====================|| PAGINATION COMPONENT ||==================== //

export default function PaginationComponent({
  count,
  limit,
}: {
  count: number | null
  limit: number
}) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const pageFromUrl = Number(searchParams.get('page')) || 1

  const { maxPage, jump } = usePagination(count, limit)

  const handleChange = (_: ChangeEvent<unknown>, page: number) => {
    jump(page)
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <Stack spacing={2} sx={{ mt: 4 }}>
      <Pagination
        count={maxPage}
        page={pageFromUrl}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  )
}
