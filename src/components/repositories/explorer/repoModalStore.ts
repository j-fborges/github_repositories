import { create } from "zustand";
import type { Repository } from "../../../types/Repository";
import type { GetRepoInfoProps } from "../../../api/getRepositoryInfo";


interface modalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  currentRepoData?: GetRepoInfoProps;
  selectRepoData: (repoData:GetRepoInfoProps)=>void
}

const useRepoModalStore = create<modalState>((set) => ({
  currentRepoData: undefined,
  isOpen: false,
  openModal: () => set(() => ({ isOpen: true })),
  closeModal: () => set(() => ({ isOpen: false })),
  selectRepoData: (repoData) => set (() => ({ currentRepoData: repoData}))
}));

export default useRepoModalStore;
