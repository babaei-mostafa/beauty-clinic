'use client'

import { counterState, useCounterStore } from '@/stores/counter-store'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Counter() {
  const { count, increment, decrement } = useCounterStore(
    (state: counterState) => state
  )
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <Typography>{count}</Typography>
      <Button variant="contained" onClick={increment}>
        Increment
      </Button>
      <Button variant="contained" onClick={decrement}>
        Decrement
      </Button>
    </div>
  )
}
