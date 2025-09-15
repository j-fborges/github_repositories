import type { RepositoryIssue } from "../../../types/Repository";
import IssueCard from "./IssueCard";

type RepoIssuesListProps = {
  issues: RepositoryIssue[];
  repoLink: string;
};

function RepoIssuesList({ issues, repoLink }: RepoIssuesListProps) {
  return (
    <div className="issues-list">
      {issues?.map((issue) => {
        return (
          <IssueCard
            issueAuthor={issue.author? issue.author.login : "-----"}
            issueTitle={issue.title}
            issueUrl={issue.url}
          />
        );
      })}
      <a className="github-link" href={repoLink}>
        Veja mais no GitHub
      </a>
    </div>
  );
}

export default RepoIssuesList;
