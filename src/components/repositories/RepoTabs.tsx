import useTabsStore from "./TabsStore";
import repoIconOff from "../../assets/repoIcon.svg";
import starredIconOff from "../../assets/starredIcon.svg";
import repoIconOn from "../../assets/repoIconOn.svg";
import starredIconOn from "../../assets/starredIconOn.svg";
import RepoTabButton from "./RepoTabButton";
import RepoList from "./RepoList";
import type { Repository } from "../../types/Repository";

type RepoTabsProps = {
  reposCount: number;
  starredCount: number;
  publicRepositories: Repository[],
  starredRepositories: Repository[]
};

function RepoTabs({ reposCount, starredCount, publicRepositories, starredRepositories }: RepoTabsProps) {
  const { openRepositoriesTab, openStarredTab, openTab } = useTabsStore();

  const repoTabsActive = openTab == "repositories";

  return (
    <>
      <div className="repo-tabs">
        <div className="repo-tabs__header">
          <RepoTabButton
            reposCount={reposCount}
            activeButtonSrc={repoIconOn}
            inactiveButtonSrc={repoIconOff}
            isActive={repoTabsActive}
            tabTitle="Repositories"
            openTabFunction={openRepositoriesTab}
          />
          <RepoTabButton
            reposCount={starredCount}
            activeButtonSrc={starredIconOn}
            inactiveButtonSrc={starredIconOff}
            isActive={!repoTabsActive}
            tabTitle="Starred"
            openTabFunction={openStarredTab}
          />
        </div>
        {openTab == "repositories" && (
          <>
            <RepoList repositories={publicRepositories} />
          </>
        )}
        {openTab == "starred" && (
          <>
            <RepoList repositories={starredRepositories} isStarredList/>
          </>
        )}
      </div>
    </>
  );
}

export default RepoTabs;
