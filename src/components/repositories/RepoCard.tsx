import type { Repository } from "../../types/Repository";
import starIcon from "../../assets/starIconFill.svg";
import branchIcon from "../../assets/branchIcon.svg";
import useRepoModalStore from "./explorer/repoModalStore";

type RepoCardProps = {
  repo: Repository;
  isStarredList?: boolean;
};

function RepoCard({ repo, isStarredList = false }: RepoCardProps) {
  const openModal = useRepoModalStore((state) => state.openModal);
  const selectRepo = useRepoModalStore((state) => state.selectRepoData);

  return (
    <>
      <div
        className="repo-card"
        onClick={() => {
          selectRepo({ owner: repo.owner.login, name: repo.name });
          openModal();
        }}
      >
        <div className="repo-card__header">
          <span className="repo-card__repo-owner">{repo.owner.login}</span>
          <span className="repo-card__divider">/</span>
          <span className="repo-card__repo-name">{repo.name}</span>
        </div>
        <p className="repo-card__description">{repo.description}</p>
        <div className="repo-card__footer">
          <div className="repo-card__stats-container">
            {!isStarredList ? (
              <>
                <img
                  src={starIcon}
                  alt="Número de favoritandos"
                  className="repo-card__stats-icon"
                />
                <span className="repo-card__stats-text">
                  {repo.stargazerCount}
                </span>
              </>
            ) : (
              <span className="repo-card__stats-text">
                {repo?.primaryLanguage?.name || ""}
              </span>
            )}
          </div>
          <div className="repo-card__stats-container">
            <img
              src={branchIcon}
              alt="Número de favoritandos"
              className="repo-card__stats-icon"
            />
            <span className="repo-card__stats-text">{repo.forkCount}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default RepoCard;
