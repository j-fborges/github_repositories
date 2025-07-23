import type { Repository, RepositoryList } from "../types/Repository";
import { baseUrl, github_data, headers } from "./getUser";

export type GetRepositoriesFields = {
  publicReposList?: RepositoryList;
  starredReposList?: RepositoryList;
};

const body = {
  query: `
query {
  user(login: "${github_data["username"]}"){
    repositories(first: 100){
    totalCount
      nodes{
        name
        createdAt
        description
        url
        nameWithOwner
        owner{
          login
        }
        forkCount
        stargazerCount
        languages{
          nodes{
            name
          }
        }
        primaryLanguage{
          name
        }
      }
    }
    starredRepositories{
      totalCount
      nodes{
        name
        createdAt
        description
        url
        nameWithOwner
        owner{
          login
        }
        forkCount
        stargazerCount
        languages{
          nodes{
            name
          }
        }
          primaryLanguage{
          name
        }
      }
    }
  }
}
  `,
};

type GetRepositoriesFilters = {
  categoryFilterOn?: boolean,
  languageFilterOn?: boolean,
  languagesToFilter?: string[]
}


function containFilterString(stringToCheck:string, activeFilters:string[]) {
  return activeFilters.some(str => stringToCheck === str);
}


function handleLanguageFilter(repoArray:Repository[], isFilterActive:boolean, languagesToFilter: string[]):Repository[]{
  return !isFilterActive? repoArray :
  repoArray.filter((repo:Repository) => {
        return containFilterString(repo?.primaryLanguage?.name || '', languagesToFilter)
  })
}

export async function getRepositories({categoryFilterOn=false, languageFilterOn=false, languagesToFilter=[]}:GetRepositoriesFilters): Promise<GetRepositoriesFields> {
  return new Promise<GetRepositoriesFields>(async (resolve, reject) => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const publicReposList:RepositoryList = { repos: handleLanguageFilter(data.data.user.repositories.nodes, languageFilterOn, languagesToFilter), reposCount: data.data.user.repositories.totalCount }
      const starredReposList:RepositoryList = { repos: handleLanguageFilter(data.data.user.starredRepositories.nodes, languageFilterOn, languagesToFilter), reposCount: data.data.user.starredRepositories.totalCount }


      resolve({
        publicReposList,
        starredReposList
      });
    } catch (error) {
      reject(error);
    }
  });
}
