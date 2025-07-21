import { create } from "zustand";

interface DrawerState {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const useDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useDrawerStore;
