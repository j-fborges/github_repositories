type RepoStatsProps = {
  avatarUrl: string;
  ownerName: string;
  repoTitle: string;
  repoDescription: string;
  starsCount: number;
  forksCount: number;
  issuesCount: number;
};

function RepoStats({
  avatarUrl,
  ownerName,
  repoTitle,
  repoDescription,
  starsCount,
  forksCount,
  issuesCount,
}: RepoStatsProps) {
  return (
    <div className="repo-stats">
      <img
        src={avatarUrl}
        alt="Avatar do usuário"
        className="repo-stats__avatar"
      />
      <div className="repo-stats__container">
        <span className="repo-stats__title">
          {(ownerName || "") + "/" + repoTitle}
        </span>
        <p className="repo-stats__description">{repoDescription}</p>
        <div className="repo-stats__footer">
          <div className="repo-stats__benchmark">
            <span className="repo-stats__benchmark__counter">{starsCount}</span>
            <span className="repo-stats__benchmark__name">Stars</span>
          </div>
          <div className="repo-stats__benchmark">
            <span className="repo-stats__benchmark__counter">{forksCount}</span>
            <span className="repo-stats__benchmark__name">Forks</span>
          </div>
          <div className="repo-stats__benchmark">
            <span className="repo-stats__benchmark__counter">
              {issuesCount}
            </span>
            <span className="repo-stats__benchmark__name">Issues abertas</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoStats;
