import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface GlobalState {
  isSwitchOn: boolean
  toggleSwitch: () => void
}
export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      isSwitchOn: false,
      toggleSwitch: () =>
        set((state) => ({
          isSwitchOn: !state.isSwitchOn,
        })),
    }),
    {
      name: 'global-store',
    }
  )
)
