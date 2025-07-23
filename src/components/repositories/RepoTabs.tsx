import useTabsStore from "./TabsStore";
import repoIconOff from "../../assets/repoIcon.svg";
import starredIconOff from "../../assets/starredIcon.svg";
import repoIconOn from "../../assets/repoIconOn.svg";
import starredIconOn from "../../assets/starredIconOn.svg";
import RepoTabButton from "./RepoTabButton";

type RepoTabsProps = {
    publicReposCount: number,
    starredReposCount: number
}


function RepoTabs({publicReposCount, starredReposCount}:RepoTabsProps) {

  const openRepositoriesTab = useTabsStore((state)=> state.openRepositoriesTab);
  const openStarredTab = useTabsStore((state)=> state.openStarredTab);
  const openTab = useTabsStore((state)=> state.openTab);

  const repoTabsActive = openTab == "repositories";

  return (
    <>
        <div className="repo-tabs__header">
          <RepoTabButton
            reposCount={publicReposCount || 0}
            activeButtonSrc={repoIconOn}
            inactiveButtonSrc={repoIconOff}
            isActive={repoTabsActive}
            tabTitle="Repositories"
            openTabFunction={openRepositoriesTab}
          />
          <RepoTabButton
            reposCount={starredReposCount || 0}
            activeButtonSrc={starredIconOn}
            inactiveButtonSrc={starredIconOff}
            isActive={!repoTabsActive}
            tabTitle="Starred"
            openTabFunction={openStarredTab}
          />
        </div>
    </>
  );
}

export default RepoTabs;
