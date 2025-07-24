type IssueCard = {
    issueTitle: string,
    issueUrl: string,
    issueAuthor: string
}

function IssueCard({issueAuthor, issueTitle, issueUrl}:IssueCard){
    return (
        <a className="issue-card" href={issueUrl}>
            <div className="issue-card__container">
              <span className="issue-card__title">{issueTitle}</span>
              <span className="issue-card__author">{issueAuthor}</span>
            </div>
            <span className="isse-card__arrow">{">"}</span>
          </a>
    )
}

export default IssueCard