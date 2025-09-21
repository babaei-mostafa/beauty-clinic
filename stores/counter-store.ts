import { create } from 'zustand'

export interface counterState {
  count: number
  increment: () => void
  decrement: () => void
}

export const useCounterStore = create<counterState>((set, get) => ({
  count: 0,
  increment: () => set({ count: get().count + 1 }),
  decrement: () => set({ count: get().count - 1 }),
}))
