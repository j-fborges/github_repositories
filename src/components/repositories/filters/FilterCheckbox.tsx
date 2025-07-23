import useCategoryFilterStore from "../../../api/categoryFilterStore";
import useLanguageFilterStore from "../../../api/languageFilterStore";

type FilterCheckboxProps = {
  isActive: boolean;
  isAllActive: boolean;
  toggleActive: () => void;
  filterTitle: string;
};

function FilterCheckbox({
  isActive,
  isAllActive,
  toggleActive,
  filterTitle,
}: FilterCheckboxProps) {
  const setActiveFilters = useLanguageFilterStore(
    (state) => state.setActiveFilters
  );
  const setActiveCategoryFilters = useCategoryFilterStore(
    (state) => state.setActiveFilters
  );

  return (
    <>
      <label className="filter__label">
        <input
          className="filter__checkbox"
          type="checkbox"
          checked={isActive || isAllActive}
          onChange={() => {
            toggleActive();
            setActiveFilters();
            setActiveCategoryFilters();
          }}
        />
        <span>{filterTitle}</span>
      </label>
    </>
  );
}

export default FilterCheckbox;
