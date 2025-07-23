import useLanguageFilterStore from "../../../api/languageFilterStore";
import FilterCheckbox from "./FilterCheckbox";
import FilterDrawer from "./FilterDrawer";
import { useLangFilterDrawerStore } from "./filterDrawerStore";

function LangFilterList() {
  const toggleTsLanguage = useLanguageFilterStore(
    (state) => state.toggleTsLanguage
  );
  const isTsActive = useLanguageFilterStore((state) => state.isTsActive);

  const toggleJavaLanguage = useLanguageFilterStore(
    (state) => state.toggleJavaLanguage
  );
  const isJavaActive = useLanguageFilterStore((state) => state.isJavaActive);

  const toggleHtmlLanguage = useLanguageFilterStore(
    (state) => state.toggleHtmlLanguage
  );
  const isHtmlActive = useLanguageFilterStore((state) => state.isHtmlActive);

  const toggleCssLanguage = useLanguageFilterStore(
    (state) => state.toggleCssLanguage
  );
  const isCssActive = useLanguageFilterStore((state) => state.isCssActive);

  const isAllLangsActive = useLanguageFilterStore(
    (state) => state.isAllLangsActive
  );
  const toggleAllLangs = useLanguageFilterStore(
    (state) => state.toggleAllLangs
  );

  return (
    <FilterDrawer
      useDrawerStore={useLangFilterDrawerStore}
      title="Languages"
      children={
        <div className="filter__container">
          <FilterCheckbox
            isActive={isAllLangsActive}
            isAllActive={isAllLangsActive}
            toggleActive={toggleAllLangs}
            filterTitle="All"
          />
          <FilterCheckbox
            isActive={isJavaActive}
            isAllActive={isAllLangsActive}
            toggleActive={toggleJavaLanguage}
            filterTitle="Java"
          />
          <FilterCheckbox
            isActive={isTsActive}
            isAllActive={isAllLangsActive}
            toggleActive={toggleTsLanguage}
            filterTitle="TypeScript"
          />
          <FilterCheckbox
            isActive={isHtmlActive}
            isAllActive={isAllLangsActive}
            toggleActive={toggleHtmlLanguage}
            filterTitle="HTML"
          />
          <FilterCheckbox
            isActive={isCssActive}
            isAllActive={isAllLangsActive}
            toggleActive={toggleCssLanguage}
            filterTitle="CSS"
          />
        </div>
      }
    />
  );
}

export default LangFilterList;
