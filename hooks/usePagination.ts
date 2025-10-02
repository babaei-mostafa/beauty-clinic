import { useState } from 'react'

export default function usePagination(count: number | null, limit: number) {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const maxPage = count ? Math.ceil(count / limit) : 1

  function jump(page: number) {
    const pageNumber = Math.max(1, page)
    setCurrentPage(() => Math.min(pageNumber, maxPage))
  }

  return { currentPage, maxPage, jump }
}
