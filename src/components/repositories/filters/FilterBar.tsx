import type { ReactNode } from "react";
import searchIconBlue from "../../../assets/searchIconBlue.svg";
import searchIcon from "../../../assets/searchIcon.svg";
import useSearchStore from "../../../api/textSearchStore";

type FilterBarProps = {
  children: ReactNode;
};

function FilterBar({ children }: FilterBarProps) {
  const currentString = useSearchStore((state) => state.currentString);
  const setSearch = useSearchStore((state) => state.setSearch);
  const setString = useSearchStore((state) => state.setString);

  return (
    <div className="filter__bar">
      <div className="filter__list">
        <div className="filter__list__inner">{children}</div>
          <form
          className="filter__search--mobile"
            onSubmit={(e) => {
              e.preventDefault();
              setSearch();
            }}
          >
            <input
              value={currentString}
              onChange={(e) => setString(e.target.value)}
              className="filter__search-input--mobile"
            />
            <button type="submit" className="filter__search-icon">
            <img
              src={searchIconBlue}
              alt="Ícone de pesquisa"
              className="filter__search-icon"
            />
            </button>
          </form>
      </div>
      <form
          className="filter__search"
            onSubmit={(e) => {
              e.preventDefault();
              setSearch();
            }}
          >
        <button type="submit" className="filter__search-icon">
            <img
            src={searchIcon}
            alt="Ícone de pesquisa"
            className="filter__search-icon"
            />
        </button>
        <input
          value={currentString}
          onChange={(e) => setString(e.target.value)}
          onSubmit={() => setSearch()}
          placeholder="Search here"
          className="filter__search-input"
        />
      </form>
    </div>
  );
}

export default FilterBar;
