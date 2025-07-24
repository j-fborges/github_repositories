import { create } from "zustand";

interface searchState {
  currentSearch: string;
  setSearch: () => void;
  currentString: string;
  setString: (term: string) => void;
}

const useSearchStore = create<searchState>((set) => ({
  currentSearch: "",
  setSearch: () => set((state) => ({ currentSearch: state.currentString })),
  currentString: "",
  setString: (term) => set(() => ({ currentString: term })),
}));

export default useSearchStore;
