import { IUserProfile } from '@/types/user'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IAuthState {
  profile: IUserProfile | null
  setProfile: (profile: IUserProfile) => void
  logout: () => void
}

export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile: IUserProfile) => set({ profile }),
      logout: () => set({ profile: null }),
    }),
    { name: 'auth-storage' }
  )
)
