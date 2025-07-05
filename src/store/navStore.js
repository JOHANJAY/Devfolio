import { create } from "zustand";

export const useNavStore = create((set) => ({
  isOpen: false,
  toggleNav: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
  closeNav: () => set(() => ({ isOpen: false })),
  openNav: () => set(() => ({ isOpen: true })),
}));
