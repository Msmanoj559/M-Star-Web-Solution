import { create } from 'zustand'

export interface AppStore {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  tenantId: string | null
  setTenantId: (id: string | null) => void
  userRole: string | null
  setUserRole: (role: string | null) => void
}

export const useAppStore = create<AppStore>()((set) => ({
  theme: 'light',
  setTheme: (theme: 'light' | 'dark') => set({ theme }),
  tenantId: null,
  setTenantId: (id: string | null) => set({ tenantId: id }),
  userRole: null,
  setUserRole: (role: string | null) => set({ userRole: role }),
}))