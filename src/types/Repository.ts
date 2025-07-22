export type Repository = {
    name: string,
    description: string,
    url: string,
    forkCount: number,
    stargazerCount:number,
    nameWithOwner:string,
    owner: {
        login: string
    }
    languages: {
        nodes: [{
            name: string
        }]
    }
    primaryLanguage?: {
        name?: string
    }
}