import { useQuery } from "@tanstack/react-query";
import { getRepositories } from "../../api/getRepositories";
import RepoTabs from "./RepoTabs";
import PublicAndStarredRepoLists from "./ PublicAndStarredRepoLists";
import RepositoryListFilters from "./filters/RepositoryFilters";
import useLanguageFilterStore from "../../api/languageFilterStore";

function UserRepositories() {
  const activeLangFilters = useLanguageFilterStore(
    (state) => state.activeLangFilters
  );

  const { isPending, error, data } = useQuery({
    queryKey: ["repositoryData", activeLangFilters],
    queryFn: () =>
      getRepositories({
        languagesToFilter: activeLangFilters,
        categoryFilterOn: false,
        languageFilterOn: activeLangFilters.length > 0,
      }),
  });

  if (isPending) return "Loading...";

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
      <RepositoryListFilters />
      <PublicAndStarredRepoLists
        publicRepos={publicRepos || []}
        starredRepos={starredRepos || []}
      />
    </div>
  );
}

export default UserRepositories;
