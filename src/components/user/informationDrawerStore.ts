import { create } from "zustand";

export interface DrawerState {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const useInfoDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useInfoDrawerStore;
