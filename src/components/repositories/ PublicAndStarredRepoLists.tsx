import type { Repository } from "../../types/Repository"
import RepoList from "./RepoList"
import useTabsStore from "./TabsStore";

type PublicAndStarredRepoListsProps = {
    publicRepos: Repository[],
    starredRepos: Repository[],
}

function PublicAndStarredRepoLists({publicRepos, starredRepos}:PublicAndStarredRepoListsProps) {

    const openTab = useTabsStore((state)=> state.openTab);

    return (
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
    )
}

export default PublicAndStarredRepoLists