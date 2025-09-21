import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserProfile {
  _id: string
  email: string
  username: string
  first_name: string
  last_name: string
}

interface UesrState {
  profile: UserProfile | null
  login: (profile: UserProfile) => void
  logout: () => void
}

export const useUserStore = () =>
  create<UesrState>()(
    persist(
      (set) => ({
        profile: null,
        login: (profile: UserProfile) => set({ profile }),
        logout: () => set({ profile: null }),
      }),
      { name: 'user-storage' }
    )
  )
