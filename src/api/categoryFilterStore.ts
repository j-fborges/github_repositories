import { create } from "zustand";

interface CategoryFilterState {
  isAllCategoriesActive: boolean;
  toggleAllCategories: () => void;
  isSourceActive: boolean;
  toggleSourceCategory: () => void;
  isForkActive: boolean;
  toggleForkCategory: () => void;
  isArchivedActive: boolean;
  toggleArchivedCategory: () => void;
  isMirrorActive: boolean;
  toggleMirrorCategory: () => void;
  activeCategoriesFilters: CategoryFilterInterface;
  setActiveFilters: () => void;
  activeFiltersCount: number
}

export type CategoryFilterInterface = {
  isSource: boolean;
  isFork: boolean;
  isArchived: boolean;
  isMirror: boolean;
};

const useCategoryFilterStore = create<CategoryFilterState>((set) => ({
  isSourceActive: false,
  toggleSourceCategory: () =>
    set((state) => ({ isSourceActive: !state.isSourceActive })),

  isAllCategoriesActive: false,
  toggleAllCategories: () =>
    set((state) => ({ isAllCategoriesActive: !state.isAllCategoriesActive })),

  isForkActive: false,
  toggleForkCategory: () => {
    set((state) => {
      return { isForkActive: !state.isForkActive };
    });
  },

  isArchivedActive: false,
  toggleArchivedCategory: () =>
    set((state) => ({ isArchivedActive: !state.isArchivedActive })),

  isMirrorActive: false,
  toggleMirrorCategory: () =>
    set((state) => ({ isMirrorActive: !state.isMirrorActive })),

  activeCategoriesFilters: {
    isSource: false,
    isFork: false,
    isArchived: false,
    isMirror: false,
  },
  setActiveFilters: () => {
    set((state) => {
      if (state.isAllCategoriesActive)
        return {
          activeCategoriesFilters: {
            isSource: true,
            isFork: true,
            isArchived: true,
            isMirror: true,
          },
          activeFiltersCount: 5
        };
      let isSource = false;
      let isFork = false;
      let isArchived = false;
      let isMirror = false;
      let activeCount = 0;

      if (state.isSourceActive) {isSource = true; activeCount++}
      if (state.isForkActive) {isFork = true; activeCount++}
      if (state.isArchivedActive) {isArchived = true; activeCount++}
      if (state.isMirrorActive) {isMirror = true; activeCount++}

      return {
        activeCategoriesFilters: {
          isSource,
          isFork,
          isArchived,
          isMirror,
        },
        activeFiltersCount: activeCount
      };
    });
  },

  activeFiltersCount: 0,
}));

export default useCategoryFilterStore;
