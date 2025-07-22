type RepoTabButtonProps = {
  isActive: boolean;
  activeButtonSrc: string;
  inactiveButtonSrc: string;
  reposCount: number;
  tabTitle: string,
  openTabFunction: () => void;
};

function RepoTabButton({
  isActive,
  openTabFunction,
  activeButtonSrc,
  inactiveButtonSrc,
  reposCount,
  tabTitle,
}: RepoTabButtonProps) {
  const buttonIcon = isActive ? activeButtonSrc : inactiveButtonSrc;
  const buttonClass = isActive
    ? "repo-tabs__button--is-active"
    : "repo-tabs__button";

  return (
    <button onClick={openTabFunction} className={buttonClass}>
      <img
        src={buttonIcon}
        alt="ícone de repositórios"
        className="repo-tabs__button-icon"
      />
      <span className="repo-tabs__button-text">{tabTitle}</span>
      <span className="repo-tabs__button-counter">{reposCount}</span>
    </button>
  );
}

export default RepoTabButton;
