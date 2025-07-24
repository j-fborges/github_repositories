import type { ReactNode } from "react";
import searchIconBlue from "../../../assets/searchIconBlue.svg";
import searchIcon from "../../../assets/searchIcon.svg";
import useSearchStore from "../../../api/textSearchStore";

type FilterBarProps = {
  children: ReactNode;
};

function FilterBar({ children }: FilterBarProps) {
  const currentSearch = useSearchStore((state) => state.currentSearch);
  const setSearch = useSearchStore((state) => state.setSearch);

  return (
    <div className="filter__bar">
      <div className="filter__list">
        <div className="filter__list__inner">{children}</div>
        <div className="filter__search--mobile">
          <input
            value={currentSearch}
            onChange={(e) => setSearch(e.target.value)}
            className="filter__search-input--mobile"
          />
          <img
            src={searchIconBlue}
            alt="Ícone de pesquisa"
            className="filter__search-icon"
          />
        </div>
      </div>
      <div className="filter__search">
        <img
          src={searchIcon}
          alt="Ícone de pesquisa"
          className="filter__search-icon"
        />
        <input
          value={currentSearch}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here"
          className="filter__search-input"
        />
      </div>
    </div>
  );
}

export default FilterBar;
