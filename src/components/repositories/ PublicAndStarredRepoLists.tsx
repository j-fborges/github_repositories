import PendingSpinner from "../../assets/PendingSpinner";
import type { Repository } from "../../types/Repository";
import RepoList from "./RepoList";
import useTabsStore from "./TabsStore";

type PublicAndStarredRepoListsProps = {
  publicRepos: Repository[];
  starredRepos: Repository[];
  isPending: boolean;
};

function PublicAndStarredRepoLists({
  publicRepos,
  starredRepos,
  isPending,
}: PublicAndStarredRepoListsProps) {
  const openTab = useTabsStore((state) => state.openTab);

  return (
    <>
      {isPending ? (
        <PendingSpinner/>
      ) : (
        <>
          {openTab == "repositories" && (
            <>
              <RepoList repositories={publicRepos || []} />
            </>
          )}
          {openTab == "starred" && (
            <>
              <RepoList repositories={starredRepos || []} isStarredList />
            </>
          )}
        </>
      )}
    </>
  );
}

export default PublicAndStarredRepoLists;
