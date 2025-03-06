import { create } from 'zustand'

interface LoginState {
  modalOpen: boolean
  onModalOpen: () => void
  onModalClose: () => void
}

const useLoginStore = create<LoginState>()((set) => ({
  modalOpen: false,
  onModalOpen: () => set({ modalOpen: true }),
  onModalClose: () => set({ modalOpen: false }),
}))

export default useLoginStore
