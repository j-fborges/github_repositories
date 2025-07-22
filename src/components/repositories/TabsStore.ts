import { create } from "zustand";

interface TabsState {
  openTab: string;
  openRepositoriesTab: () => void;
  openStarredTab: () => void;
}

const useTabsStore = create<TabsState>((set) => ({
  openTab: 'repositories',
  openRepositoriesTab: () => set(() => ({ openTab: 'repositories' })),
  openStarredTab: () => set(() => ({ openTab: 'starred' })),
}));

export default useTabsStore;
