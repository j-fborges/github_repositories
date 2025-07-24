import CategoryFilterList from "./CategoryFilterList";
import FilterBar from "./FilterBar";
import LangFilterList from "./LangFilterList";

function RepositoryFilters() {
  return (
    <FilterBar
      children={
        <>
          <CategoryFilterList />
          <LangFilterList />
        </>
      }
    />
  );
}

export default RepositoryFilters;
