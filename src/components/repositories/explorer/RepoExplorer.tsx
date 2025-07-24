import useRepoModalStore from "./repoModalStore";
import { getRepoInfo } from "../../../api/getRepositoryInfo";
import type { Repository, RepositoryIssue } from "../../../types/Repository";
import { useQuery } from "@tanstack/react-query";
import RepoStats from "./RepoStats";
import RepoSheetModal from "./RepoSheetModal";
import RepoIssuesList from "./RepoIssuesList";

function RepoExplorer() {
  const isOpen = useRepoModalStore((state) => state.isOpen);
  const closeModal = useRepoModalStore((state) => state.closeModal);
  const repoData = useRepoModalStore((state) => state.currentRepoData);

  const { isPending, data } = useQuery({
    queryKey: ["repositoryInfoData", repoData?.name, repoData?.owner],
    queryFn: () =>
      getRepoInfo({ owner: repoData?.owner || "", name: repoData?.name || "" }),
  });

  const repo: Repository | undefined = data?.repo;
  const repoIssues: RepositoryIssue[] | undefined = repo?.issues?.nodes;

  return (
    <>
      <RepoSheetModal
        isOpen={isOpen}
        isPending={isPending}
        closeModal={closeModal}
        children={
          <>
            <RepoStats
              avatarUrl={repo?.owner.avatarUrl || ""}
              forksCount={repo?.forkCount || 0}
              starsCount={repo?.stargazerCount || 0}
              issuesCount={repo?.issues.totalCount || 0}
              ownerName={repo?.owner.login || ""}
              repoTitle={repo?.name || ""}
              repoDescription={repo?.description || ""}
            />
            <RepoIssuesList
              issues={repoIssues || []}
              repoLink={repo?.url || ""}
            />
          </>
        }
      />
    </>
  );
}

export default RepoExplorer;
