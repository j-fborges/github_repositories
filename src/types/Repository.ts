export type Repository = {
    name: string,
    description: string,
    url: string,
    forkCount: number,
    stargazerCount:number,
    nameWithOwner:string,
    owner: {
        login: string
        avatarUrl: string,
    }
    issues: RepositoryIssuesList,
    languages: {
        nodes: [{
            name: string
        }]
    }
    primaryLanguage?: {
        name?: string
    }
    isFork:boolean,
    isArchived:boolean,
    isMirror:boolean,
}

export type RepositoryList = {
    repos: Repository[],
    reposCount: number
}

export type RepositoryIssue = {
    url: string,
    title: string,
    author: {
        login: string
    },
}

type RepositoryIssuesList = {
    totalCount: number,
    nodes: RepositoryIssue[]
}