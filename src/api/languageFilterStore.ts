import { create } from "zustand";

interface LanguageFilterState {
  isAllLangsActive: boolean;
  toggleAllLangs: () => void;
  isJavaActive: boolean;
  toggleJavaLanguage: () => void;
  isTsActive: boolean;
  toggleTsLanguage: () => void;
  isHtmlActive: boolean;
  toggleHtmlLanguage: () => void;
  isCssActive: boolean;
  toggleCssLanguage: () => void;
  activeLangFilters: string[];
  setActiveFilters: () => void;
}

const useLanguageFilterStore = create<LanguageFilterState>((set) => ({
  isJavaActive: false,
  toggleJavaLanguage: () =>
    set((state) => ({ isJavaActive: !state.isJavaActive })),

  isAllLangsActive: false,
  toggleAllLangs: () =>
    set((state) => ({ isAllLangsActive: !state.isAllLangsActive })),

  isTsActive: false,
  toggleTsLanguage: () => {
    set((state) => {
      return { isTsActive: !state.isTsActive };
    });
  },

  isHtmlActive: false,
  toggleHtmlLanguage: () =>
    set((state) => ({ isHtmlActive: !state.isHtmlActive })),

  isCssActive: false,
  toggleCssLanguage: () =>
    set((state) => ({ isCssActive: !state.isCssActive })),

  activeLangFilters: [],
  setActiveFilters: () => {
    set((state) => {
      if (state.isAllLangsActive)
        return { activeLangFilters: ["Java", "TypeScript", "HTML", "CSS"] };
      const filters: string[] = [];

      if (state.isJavaActive) filters.push("Java");
      if (state.isTsActive) filters.push("TypeScript");
      if (state.isHtmlActive) filters.push("HTML");
      if (state.isCssActive) filters.push("Css");

      return { activeLangFilters: filters };
    });
  },
}));

export default useLanguageFilterStore;
