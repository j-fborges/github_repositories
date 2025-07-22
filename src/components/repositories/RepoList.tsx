import type { Repository } from "../../types/Repository";
import RepoCard from "./RepoCard";

type RepoListProps = {
  repositories: Repository[];
  isStarredList?: boolean;
};

function RepoList({ repositories, isStarredList = false }: RepoListProps) {
  return (
    <>
      {repositories.map((repo) => {
        return <RepoCard repo={repo} isStarredList={isStarredList} />;
      })}
    </>
  );
}

export default RepoList;
