import CategoryFilterList from "./CategoryFilterList";
import LangFilterList from "./LangFilterList";

function RepositoryFilters() {

  return (
    <div className="filter__list">
      <CategoryFilterList/>
      <LangFilterList/>
    </div>
  );
}

export default RepositoryFilters;
