import { create } from "zustand";

interface searchState {
  currentSearch: string;
  setSearch: (term: string) => void;
}

const useSearchStore = create<searchState>((set) => ({
  currentSearch: "",
  setSearch: (term) => set(() => ({ currentSearch: term })),
}));

export default useSearchStore;
