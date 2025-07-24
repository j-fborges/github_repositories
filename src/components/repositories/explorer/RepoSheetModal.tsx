import type { ReactNode } from "react";
import closeIcon from "../../../assets/closeIcon.svg";

import { Sheet } from "react-modal-sheet";
import PendingSpinner from "../../../assets/PendingSpinner";

type RepoSheetModalProps = {
  closeModal: () => void;
  isOpen: boolean;
  isPending: boolean;
  children: ReactNode;
};

function RepoSheetModal({
  closeModal,
  isOpen,
  children,
  isPending,
}: RepoSheetModalProps) {
  return (
    <Sheet isOpen={isOpen} onClose={closeModal} className="repo-explorer">
      <Sheet.Container className="w-full">
        <Sheet.Header className="w-full" />
        <Sheet.Content className="w-full">
          <div className="repo-explorer__container">
            <button
              onClick={closeModal}
              className="repo-explorer__close-button"
            >
              <img
                src={closeIcon}
                alt="Fechar Modal"
                className="repo-explorer__close-icon"
              />
            </button>

            <div className="repo-explorer__content">
              {isPending ? (
                <PendingSpinner />
              ) : (
                <div className="repo-explorer__content__inner">{children}</div>
              )}
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}

export default RepoSheetModal;
