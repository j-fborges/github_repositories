import type { ElementType, ReactNode } from "react";
import { useLangFilterDrawerStore } from "./filterDrawerStore";
import type { DrawerState } from "../../user/informationDrawerStore";
import type { StoreApi, UseBoundStore } from "zustand";
import chevronDown from "../../..//assets/chevronDownWhite.svg";
import { Sheet } from "react-modal-sheet";

type FilterDrawerProps = {
  useDrawerStore: UseBoundStore<StoreApi<DrawerState>>;
  title: string;
  children: ReactNode;
};

function FilterDrawer({ useDrawerStore, title, children }: FilterDrawerProps) {
  const { isOpen, toggleDrawer } = useDrawerStore();

  const toggleDrawerClass = isOpen
    ? "filter__options--is-open"
    : "filter__options";

  return (
    <>
      <div className="filter__drawer">
        <button className="filter__drawer__button" onClick={toggleDrawer}>
          <img
            src={chevronDown}
            alt="Abrir Seletores"
            className="filter__drawer__button-icon"
          />
          <span className="filter__drawer__button-text">{title}</span>
        </button>
        <div className={toggleDrawerClass}>{children}</div>
        <div className={toggleDrawerClass + "--mobile"}>
          <Sheet isOpen={isOpen} onClose={toggleDrawer} className={toggleDrawerClass + "--mobile"}>
            <Sheet.Container className={toggleDrawerClass + "--mobile"}>
              <Sheet.Header className={toggleDrawerClass + "--mobile"}/>
              <Sheet.Content className={toggleDrawerClass + "--mobile"}>
                <>
                <span className="text-2xl font-bold px-2 py-4">
                    {title}
                </span>
                {children}
                </>
                </Sheet.Content>
            </Sheet.Container >
            <Sheet.Backdrop className={toggleDrawerClass + "--mobile"} />
          </Sheet>
        </div>
      </div>
    </>
  );
}

export default FilterDrawer;
