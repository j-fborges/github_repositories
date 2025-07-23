import useCategoryFilterStore from "../../../api/categoryFilterStore";
import FilterCheckbox from "./FilterCheckbox";
import FilterDrawer from "./FilterDrawer";
import { useCategoryFilterDrawerStore } from "./filterDrawerStore";

function CategoryFilterList() {
  const toggleForkCategory = useCategoryFilterStore(
    (state) => state.toggleForkCategory
  );
  const isForkActive = useCategoryFilterStore((state) => state.isForkActive);

  const toggleSourceCategory = useCategoryFilterStore(
    (state) => state.toggleSourceCategory
  );
  const isSourceActive = useCategoryFilterStore((state) => state.isSourceActive);

  const toggleMirrorCategory = useCategoryFilterStore(
    (state) => state.toggleMirrorCategory
  );
  const isMirrorActive = useCategoryFilterStore((state) => state.isMirrorActive);

  const toggleArchivedCategory = useCategoryFilterStore(
    (state) => state.toggleArchivedCategory
  );
  const isArchivedActive = useCategoryFilterStore((state) => state.isArchivedActive);

  const isAllCategoriesActive = useCategoryFilterStore(
    (state) => state.isAllCategoriesActive
  );
  const toggleAllCategories = useCategoryFilterStore(
    (state) => state.toggleAllCategories
  );

  return (
    <FilterDrawer
      useDrawerStore={useCategoryFilterDrawerStore}
      title="Type"
      children={
        <div className="filter__container">
          <FilterCheckbox
            isActive={isAllCategoriesActive}
            isAllActive={isAllCategoriesActive}
            toggleActive={toggleAllCategories}
            filterTitle="All"
          />
          <FilterCheckbox
            isActive={isSourceActive}
            isAllActive={isAllCategoriesActive}
            toggleActive={toggleSourceCategory}
            filterTitle="Source"
          />
          <FilterCheckbox
            isActive={isForkActive}
            isAllActive={isAllCategoriesActive}
            toggleActive={toggleForkCategory}
            filterTitle="Fork"
          />
          <FilterCheckbox
            isActive={isMirrorActive}
            isAllActive={isAllCategoriesActive}
            toggleActive={toggleMirrorCategory}
            filterTitle="Mirror"
          />
          <FilterCheckbox
            isActive={isArchivedActive}
            isAllActive={isAllCategoriesActive}
            toggleActive={toggleArchivedCategory}
            filterTitle="Archived"
          />
        </div>
      }
    />
  );
}

export default CategoryFilterList;
