import type { Repository } from "../../types/Repository";
import RepoCard from "./RepoCard";

type RepoListProps = {
  repositories: Repository[];
  isStarredList?: boolean;
};

function RepoList({ repositories, isStarredList = false }: RepoListProps) {
    
  return (
    <>
      {repositories.map((repo, key) => {
        return <RepoCard repo={repo} isStarredList={isStarredList} key={key} />;
      })}
    </>
  );
}

export default RepoList;
