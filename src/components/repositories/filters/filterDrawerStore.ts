import { create } from "zustand";
import type { DrawerState } from "../../user/informationDrawerStore";

export const useLangFilterDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useCategoryFilterDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
}));
