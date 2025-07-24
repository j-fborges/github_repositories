import { useQuery } from "@tanstack/react-query";
import { getRepositories } from "../../api/getRepositories";
import RepoTabs from "./RepoTabs";
import PublicAndStarredRepoLists from "./ PublicAndStarredRepoLists";
import useLanguageFilterStore from "../../api/languageFilterStore";
import useCateforyFilterStore from "../../api/categoryFilterStore";
import RepositoryFilters from "./filters/RepositoryFilters";
import useSearchStore from "../../api/textSearchStore";

function UserRepositories() {
  const activeLangFilters = useLanguageFilterStore(
    (state) => state.activeLangFilters
  );
  const activeCategoriesFilters = useCateforyFilterStore((state)=> state.activeCategoriesFilters)
  const activeCatFiltersCount = useCateforyFilterStore((state)=> state.activeFiltersCount)
  const currentSearch = useSearchStore((state)=>state.currentSearch)

  const {isSource, isArchived, isFork, isMirror} = activeCategoriesFilters

  const { isPending, error, data } = useQuery({
    queryKey: ["repositoryData", activeLangFilters, isSource, isArchived, isFork, isMirror, currentSearch],
    queryFn: () =>
      getRepositories({
        languagesToFilter: activeLangFilters,
        categoriesToFilter: activeCategoriesFilters,
        categoryFilterOn: activeCatFiltersCount > 0,
        languageFilterOn: activeLangFilters.length > 0,
        currentSearch
      }),
  });

  if (error) return "An error has occurred: " + error.message;

  const publicRepos = data?.publicReposList?.repos;
  const publicReposCount = data?.publicReposList?.reposCount;

  const starredRepos = data?.starredReposList?.repos;
  const starredReposCount = data?.starredReposList?.reposCount;

  return (
    <div className="repo-tabs">
      <RepoTabs
        publicReposCount={publicReposCount || 0}
        starredReposCount={starredReposCount || 0}
      />
      <RepositoryFilters />
      <PublicAndStarredRepoLists
        publicRepos={publicRepos || []}
        starredRepos={starredRepos || []}
        isPending={isPending}
      />
    </div>
  );
}

export default UserRepositories;
